### how to create a react app from scratch pre-tools like create-react-app or vite

This will guide you step by step what tools like CRA or vite cli tools do under the hood to get a better grip on what's going on..

We can start with:

`npm init -y`

this'll create you a new node project

now we'll install webpack, webpack-cli, react and react-dom:

`npm install react react-dom serve`

if we're using npm 5 , we don't need to send the --save flag when installing.  Next, we'll create the following dir structure to house the components:

`recipes-app (folder)
    > node-modules (comes with npm install)
    > package.json (comes with npm init)
    > package-lock.json (already added with npm init command)
    > index.html
    > /src (folder)
        > /data (folder)
            > recipes.json
        > /components (folder) 
            > Recipe.js
            > Instructions.js
            > Ingredient.js
            > IngredientList.js
            > Menu.js
            ...
`

After we compose our project and separate it into chunks and more maintanable code which will make it easier to work with other team members, manage and test it, we'll now put it all back together into one piece...

For that, we require webpack

let's install it by running:

`npm install --save-dev webpack webpack-cli`


As of webpack v4.0.0 we don't need to include a config file, but we will just to see what magic is happening..

`touch webpack.config.js` in the root of the `npm-react` directory

The webpack.config.js is just another module that exports a JavaScript literal object that describes the actions webpack should take.  The configuration file should be saved to the root folder of the project, right next to the index.js file...

As we see in the already created webpack.config.js file that we first tell it the entry file is "./src/index.js".  It will automatically build the dependency graph based on import statements starting in that file.  Next, we specify that we want to output a bundled JavaScript file to ./dist/bundle.js.  This is where webpack will place the final packaged JavaScript.

Next, let's install the necessary Babel dependencies.  We'll need `babel-loader` and `@babel/core`:

`npm install babel-loader @babel/core --save-dev`

The next set of instructions for webpack consists of a list of loaders to run on specified modules.  This will be added to the config file under the module field

`
    module: {
            rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}]
    }
`

The `rules` field is an array because there are many types of loaders you can incorporate with webpack.  In this example we're only incorporating the `babel-loader`.  Each loader is a JavaScript object.  The `test` field is a regular expression that matches the file path of each module that the loader should operate on.  In this case, we're running the `babel-loader` on all imported JavaScript files except those found in the `node_modules` folder.

At this point, we need to specify presets for running Babel.  When we set a preset, we tell Babel which transforms to perform.  In other words, we can say, "Hey Babel, if you see some ESNext syntax here, go ahead and transform that code into syntax we're sure the browser understands.  If you see some JSX, transform that too."  Start by installing the presets..

`npm install @babel/preset-env @babel/preset-react --save-dev`

then we'll create one more file in the root of the project called `.babelrc`

and add 

`
    {
        "presets": ["@babel/preset-env", "@babel/preset-react"]
    }
`

Before we do that, with latest webpack versions we can now add presets directly into our webpack config instead, so we can delete .babelrc
and do this:

`
    module: {
            rules: [{ test: /\.js$/, exclude: /node_modules/, use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }}]
    }
`

now we can run:

`npx webpack --mode development`

and that should either succeed and create us the bundle (in the dist folder we mentioned earlier) or fail and it'll display broken import references...

you can also add the npm script in your `package.json` file to create a shortcut like so,

`
    "scripts": {
        "build": "webpack --mode production"
    }
`

then run `npm run build`

ok now we have a bundle... now what, we'll need this bundle to be used somewhere... to run on a web server.  The dist folder is where the `index.html` file should be placed.  This file needs to include the target div element where the React Menu component will be mounted.  It also requires a single script tag that will load our bundled JavaScript.

`
// ./dist/index.html

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>React Recipes App</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="./bundle.js"></script>
    </body>
</html>
`

this is the home page to your app.  It will load everything it needs from one file, one HTTP request: bundle.js.  You'll need to deploy these files to your web server or build a web server application that will serve these files with something like Node.js or Ruby on Rails...