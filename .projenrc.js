const { typescript } = require('projen');
const {
  NodePackageManager,
  NpmAccess,
} = require('projen/lib/javascript');

const tsconfig = {
  compilerOptions: {
    lib: [
      'es2019',
      'dom',
    ],
  },
};

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: '@tobiklee/open-search-sdk',
  authorName: 'Tobias Kleemann',
  license: 'Apache-2.0',
  licensed: true,
  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,
  packageManager: NodePackageManager.NPM,
  majorVersion: 0,
  repository: 'https://github.com/Tobiklee/open-search-sdk.git',
  tsconfig: tsconfig,
  tsconfigDev: tsconfig,
  jest: false,
  keywords: [
    'opensearch',
  ],
  deps: [
    '@elastic/elasticsearch@^8',
    'axios',
    'aws-amplify',
  ],
});

// gitignore
project.addGitIgnore('.idea');

project.synth();
