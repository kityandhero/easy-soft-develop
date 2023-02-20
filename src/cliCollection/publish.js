const {
  exit,
  exec,
  promptInfo,
  promptSuccess,
  promptError,
} = require('../tools/meta');

exports.run = function () {
  promptInfo(
    'change npm registry to npm by script "z:change:npm:registry:npm"',
  );

  exec('npm run z:change:npm:registry:npm');

  try {
    exec(`npm run z:publish:npm-all`);
  } catch (error) {
    promptError(error);
  }

  promptInfo(
    'change npm registry to local by script "z:change:npm:registry:local"',
  );

  exec('npm run z:change:npm:registry:local');

  promptSuccess('publish complete');

  exit();
};
