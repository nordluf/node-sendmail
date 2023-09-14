'use strict';
// Do not forget to run `npm config set access public` before first local publish
// Allow read-and-write permissions for GitHub Actions: repo->settings->actions->general
const { readFileSync, writeFileSync } = require('node:fs');
const packageFile = JSON.parse(readFileSync('./package.json', 'ascii'));
packageFile.name = '@umpacken/' + (packageFile.name.includes('@') ? packageFile.name.split('/')[1] : packageFile.name);
if (packageFile.repository?.type === 'git') {
  packageFile.repository.url = 'git://github.com/' + process.env['GITHUB_REPOSITORY'] + '.git';
}

writeFileSync('./package.json', JSON.stringify(packageFile, null, 2));
