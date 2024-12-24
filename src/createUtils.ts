import chalk from 'chalk';
import { exec } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dependencies = {
  'date-fns': '^2.30.0',
  'lodash': '^4.17.21',
  'zod': '^3.22.0'
};

async function installDependencies(packageManager: 'npm' | 'pnpm' | 'yarn') {
  const deps = Object.entries(dependencies)
    .map(([name, version]) => `${name}@${version}`)
    .join(' ');

  const installCmd = {
    npm: `npm install ${deps}`,
    pnpm: `pnpm add ${deps}`,
    yarn: `yarn add ${deps}`
  }[packageManager];

  try {
    await execAsync(installCmd);
    console.log(chalk.green('✔ Dependencies installed'));
  } catch (error) {
    console.error(chalk.red('Error installing dependencies:'), error);
    process.exit(1);
  }
}

async function detectPackageManager(): Promise<'npm' | 'pnpm' | 'yarn'> {
  if (await fs.pathExists('pnpm-lock.yaml')) return 'pnpm';
  if (await fs.pathExists('yarn.lock')) return 'yarn';
  return 'npm';
}

export async function createUtils() {
  const libDir = path.join(process.cwd(), 'lib');
  const templatePath = path.join(__dirname, '../templates/ultraUtils.ts');
  const targetPath = path.join(libDir, 'ultraUtils.ts');

  try {
    // Create lib directory and copy utils
    await fs.ensureDir(libDir);
    await fs.copy(templatePath, targetPath);

    // Install dependencies
    const packageManager = await detectPackageManager();
    await installDependencies(packageManager);

    console.log(chalk.green('✔ Successfully created TypeScript utilities'));
  } catch (error) {
    console.error(chalk.red('Error creating utilities:'), error);
    process.exit(1);
  }
}
