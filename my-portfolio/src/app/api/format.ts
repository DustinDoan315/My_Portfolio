import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";
import path from "path";

// Allow API route to handle form-data
export const config = {
  api: {
    bodyParser: false,
  },
};

const formatFileContent = (data: string): string => {
  return data.replace(/([A-Z][a-z]*)(\d+)/g, "$1<sub>$2</sub>");
};

const handleFileUpload = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: "Error parsing file" });
      return;
    }

    const filePath = files.file[0].filepath; // Get the file path
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    // Process the file content
    const formattedContent = formatFileContent(fileContent);

    // Define output path
    const outputPath = path.join(
      process.cwd(),
      "public",
      "formatted_document.docx"
    );

    // Write the formatted content to a new file
    fs.writeFile(outputPath, formattedContent, (writeErr) => {
      if (writeErr) {
        res.status(500).json({ error: "Error writing formatted file" });
      } else {
        res.status(200).sendFile(outputPath);
      }
    });
  });
};

export default handleFileUpload;
