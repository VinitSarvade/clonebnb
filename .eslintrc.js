module.exports = {
  root: true,
  extends: ['universe/native'],
  rules: {
    'import/order': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-native',
            importNames: ['Text'],
            message: 'Please use component from @/components instead.',
          },
        ],
      },
    ],
  },
};
