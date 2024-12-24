import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function createUtils() {
  const libDir = path.join(process.cwd(), 'lib');
  const templatePath = path.join(__dirname, '../templates/ultraUtils.ts');
  const targetPath = path.join(libDir, 'ultraUtils.ts');

  try {
    await fs.ensureDir(libDir);
    await fs.copy(templatePath, targetPath);
    console.log(chalk.green('✔ Successfully created TypeScript utilities'));
  } catch (error) {
    console.error(chalk.red('Error creating utilities:'), error);
    process.exit(1);
  }
}
