export default {
  singleQuote: true,
  proseWrap: 'always',
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
