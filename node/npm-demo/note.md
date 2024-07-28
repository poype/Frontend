npm init
npm install/i underscore
npm install/i mongoose@2.4.2
npm install -g npm  --  upgrade the npm to the latest version
npm list / npm list -a
npm -g list
npm outdated
npm -g outdated
npm update
npm i jshint --save-dev
npm un/uninstall mongoose
npm publish
npm version major/minor/patch


$ npm outdated
Package   Current  Wanted  Latest  Location               Depended by
mongoose    7.5.1   7.8.0   8.5.1  node_modules/mongoose  npm-demo

semantic version:
8.5.1 -> Major.Minor.Patch
Patch for recording bug fix
Minor version means that adding some new features but don't break the existing api.
Major version means that adding some new features and potentially break the existing api.

^ tells npm that you only interest with major version.
~ tells npm that you care with both major version and minor version.
No ^ or ~: exact same version

