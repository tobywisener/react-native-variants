# React Native Flavours Demo

Demo project to demonstrate flavours/variants in a React Native app.

This project was created with the following command:

`npx react-native init tvos68sample --template react-native-tvos@0.68.2-7`

To test, run in one window:

`yarn start --reset-cache`

And in another window:

`react-native run-android --variant=devDebug --appIdSuffix=dev`

`src/core/Notice.js` should be overriden by `src/dev/Notice.js` 
