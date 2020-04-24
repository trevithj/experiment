Following the steps as advised on `https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658`

I'm using yarn rather than npm, so...

```
yarn add -D @babel/core@7.1.0 @babel/cli@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react@7.0.0
```

Nice and quick. I now have a `yarn.lock` file. And now to configure babel by creating `.babelrc` to add the presets we just added.

Okay - now we need webpack:

```
yarn add -D webpack@4.19.1 webpack-cli@3.1.1 webpack-dev-server@3.1.8 style-loader@0.23.0 css-loader@1.0.0 babel-loader@8.0.2
```

And again, nice and quick. Less than 15 secs. And again I add the `webpack.config.js` file now to set things up. I added a minor tweak: port `3000` is already in use, so I serve on port `3001`.


Now for the main act:

```
yarn add react@16.5.2 react-dom@16.5.2
```

Early-ish versions, but let's go for now. And wow, very quick install.

Okay, I've added `index.js`, `App.js` and `App.css` to the `/src/` folder. And I have updated `package.json` to use the start script.

Let's try `yarn start`... and success. We have Hello World in the browser at `localhost:3001`.
But no hotloading...? Oh. One more thing:

```
yarn add react-hot-loader@4.3.11
```

And a tweak to the `App.js` file to add this. Now restart, and what do we get??
Bingo!


