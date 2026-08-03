#!/usr/bin/env node

import { existsSync } from "node:fs";
import { basename } from "node:path";
import { spawnSync } from "node:child_process";

const requiredFiles = [
  "README.md",
  "AGENTS.md",
  ".gitignore",
  ".nvmrc",
  "package.json",
  "docs/SETUP.md",
  "docs/USAGE.md",
  "docs/SECURITY.md",
  "docs/TROUBLESHOOTING.md",
  "scripts/doctor.mjs",
];

const checks = [];

function check(name, ok, detail = "") {
  checks.push({ name, ok, detail });
}

function run(command, args) {
  return spawnSync(command, args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function commandExists(command) {
  const result = spawnSync("sh", ["-c", `command -v ${command}`], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  return result.status === 0;
}

function parseMajor(version) {
  const match = version.match(/^v?(\d+)\./);
  return match ? Number(match[1]) : NaN;
}

const nodeVersion = process.version;
const nodeMajor = parseMajor(nodeVersion);
check("Node.js >= 24", nodeMajor >= 24, nodeVersion);

check("npm available", commandExists("npm"));
check("npx available", commandExists("npx"));

const gitRepo = run("git", ["rev-parse", "--is-inside-work-tree"]);
check(
  "Git repository available",
  gitRepo.status === 0 && gitRepo.stdout.trim() === "true",
  gitRepo.status === 0 ? "inside work tree" : "not a Git work tree",
);

for (const file of requiredFiles) {
  check(`Required file: ${file}`, existsSync(file));
}

let trackedFiles = [];
const gitFiles = run("git", ["ls-files", "-z"]);
if (gitFiles.status === 0 && gitFiles.stdout.length > 0) {
  trackedFiles = gitFiles.stdout.split("\0").filter(Boolean);
}

const forbiddenTracked = trackedFiles.filter((file) => {
  const lower = file.toLowerCase();
  const base = basename(lower);

  if (file === ".env" || file.startsWith(".env.")) {
    return file !== ".env.example";
  }

  if (lower === ".local" || lower.startsWith(".local/")) return true;
  if (base.includes("token")) return true;
  if (base.includes("secret")) return true;
  if (base.includes("credential")) return true;
  if (base.includes("auth")) return true;
  if (base.includes("framer-project")) return true;
  if (base.includes("connection-report")) return true;
  if (base.includes("private-report")) return true;

  return false;
});

check(
  "No tracked local secrets by filename",
  forbiddenTracked.length === 0,
  forbiddenTracked.length === 0
    ? "no suspicious tracked filenames"
    : forbiddenTracked.join(", "),
);

console.log("Framer Connector Workspace Doctor\n");

for (const item of checks) {
  const prefix = item.ok ? "OK" : "ERROR";
  const suffix = item.detail ? ` - ${item.detail}` : "";
  console.log(`${prefix} ${item.name}${suffix}`);
}

const failed = checks.filter((item) => !item.ok);

if (failed.length > 0) {
  console.error(`\nDoctor failed with ${failed.length} critical issue(s).`);
  process.exit(1);
}

console.log("\nDoctor passed.");
