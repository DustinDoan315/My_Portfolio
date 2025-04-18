/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateNodeJsFiles } from "@/pages/api/generateNodeJsFiles";
import fs from "fs-extra";
import path from "path";

export default async function handler(req: any, res: any) {
  // Allow only POST method
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const { projectName, folderPath } = req.body;

    if (!projectName) {
      return res.status(400).json({ error: "Project name is required." });
    }

    if (!folderPath) {
      return res.status(400).json({ error: "Folder path is required." });
    }

    const projectRoot = path.join(folderPath, projectName);
    console.log(`Creating project at: ${projectRoot}`);

    const directories = [
      "config",
      "controllers",
      "models",
      "routes",
      "services",
      "utils",
    ];

    directories.forEach((dir) => {
      const dirPath = path.join(projectRoot, dir);
      console.log(`Creating directory: ${dirPath}`);
      fs.mkdirSync(dirPath, { recursive: true });
    });

    const envFilePath = path.join(projectRoot, ".env");
    console.log(`Creating .env file at: ${envFilePath}`);
    fs.writeFileSync(
      envFilePath,
      "DB_HOST=localhost\nDB_USER=root\nDB_PASS=password\nDB_NAME=crypto_tracker"
    );

    generateNodeJsFiles(projectRoot);

    res.status(200).json({
      message: `Project ${projectName} created successfully in the specified folder.`,
    });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}
