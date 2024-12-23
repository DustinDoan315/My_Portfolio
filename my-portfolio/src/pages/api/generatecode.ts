/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateNodeJsFiles } from "@/pages/api/generateNodeJsFiles";
import fs from "fs-extra";
import path from "path";
import os from "os";

export default async function handler(req: any, res: any) {
  const { projectName } = req.body;

  if (!projectName) {
    return res.status(400).json({ error: "Project name is required." });
  }

  const homeDir = os.homedir();
  const projectRoot = path.join(homeDir, "Desktop", "Nodejs", projectName);

  const directories = [
    "config",
    "controllers",
    "models",
    "routes",
    "services",
    "utils",
  ];

  directories.forEach((dir) => {
    fs.mkdirSync(path.join(projectRoot, dir), { recursive: true });
  });

  fs.writeFileSync(
    path.join(projectRoot, ".env"),
    "DB_HOST=localhost\nDB_USER=root\nDB_PASS=password\nDB_NAME=crypto_tracker"
  );

  generateNodeJsFiles(projectRoot);

  res.status(200).json({
    message: `Project ${projectName} created successfully in Desktop/Nodejs.`,
  });
}
