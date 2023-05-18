module.exports = api => {
  api.cache(false);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: [
            './src/dev',
            './src/core',
          ],
          alias: {},
        },
      ],
    ],
  };
};
