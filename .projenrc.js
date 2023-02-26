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
  name: 'open-search-sdk',
  authorName: 'Tobias Kleemann',
  license: 'Apache-2.0',
  licensed: true,
  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,
  packageManager: NodePackageManager.PNPM,
  majorVersion: 0,
  repository: 'https://github.com/Tobiklee/open-search-sdk.git',
  tsconfig: tsconfig,
  tsconfigDev: tsconfig,
  keywords: [
    'opensearch',
  ],
  deps: [
    '@elastic/elasticsearch@^8',
    '@types/jest@^27.0.0',
  ],
});

// gitignore
project.addGitIgnore('.idea');

project.synth();
