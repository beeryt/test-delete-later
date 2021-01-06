module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/tests/setup/jest-preprocess.js'
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/setup/__mocks__/file-mock.js'
  },
  roots: ['<rootDir>', '<rootDir>/tests'],
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: ''
  },
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/tests/setup/loadershim.js'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup/setup-test-env.js'],
  collectCoverage: true
}
