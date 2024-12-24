#!/usr/bin/env node
import { program } from 'commander';
import { createUtils } from './createUtils.js';

program
  .name('ultra-typescript-utils')
  .description('Add TypeScript utilities to your project')
  .action(createUtils);

program.parse();
