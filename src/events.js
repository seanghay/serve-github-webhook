import fs from "fs/promises";
import fg from "fast-glob";
import Handlebars from "handlebars";
import path from 'path'

export async function parseEvents() {
  const files = await fg("src/events/**/*.md");
  return Promise.all(
    files.map(async (file) => {
      const content = await fs.readFile(file, "utf-8");
      const filename = path.parse(file).name;
      const name = file
        .replace("src/events/", "")
        .replace("/", ".")
        .replace(".md", "");

      return {
        action: filename,
        name,
        file,
        render: Handlebars.compile(content),
      };
    })
  );
}