const { exit, exec } = require('../tools/meta');

exports.run = function () {
  exec('npm run npm run z:change:npm:registry:npm');
  exec(`npm run z:publish:npm-all`);
  exec('npm run npm run z:change:npm:registry:local');

  exit();
};
