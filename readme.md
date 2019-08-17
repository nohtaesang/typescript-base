react
typescript
react-router-dom
styled-component
lodash


* [https://dev-yakuza.github.io/ko/react/start/](https://dev-yakuza.github.io/ko/react/start/)

npm install
```
npm install --save react react-dom
npm install --save-dev webpack webpack-cli html-webpack-plugin webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react rimraf
```

package.json
```
{
  "name": "react_start",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "start": "webpack-dev-server --mode development",
    "prebuild": "rimraf dist",
    "build": "webpack --progress --mode production"
  },
  "author": "dev.yakuza@gmail.com",
  "dependencies": {
    "react": "16.8.6",
    "react-dom": "16.8.6"
  },
  "devDependencies": {
    "@babel/core": "7.4.5",
    "@babel/preset-env": "7.4.5",
    "@babel/preset-react": "7.0.0",
    "babel-loader": "8.0.6",
    "cross-env": "5.2.0",
    "html-webpack-plugin": "3.2.0",
    "rimraf": "2.6.3",
    "webpack": "4.33.0",
    "webpack-cli": "3.3.4",
    "webpack-dev-server": "3.7.1"
  }
}
```


.babelrc
```
{
  "presets": [
    [
      "@babel/preset-env",
      { "targets": { "browsers": ["last 2 versions", ">= 5% in KR"] } }
    ],
    "@babel/react"
  ]
}
```

./src/index.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```


./src/App.jsx
```
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <h1>Hello World!</h1>;
};
ReactDOM.render(<App />, document.getElementById('app'));
```

실행 방법
npm start

빌드 방법
npm run build


[https://dev-yakuza.github.io/ko/react/typescript/](https://dev-yakuza.github.io/ko/react/typescript/)

npm install
```
npm install --save-dev typescript @babel/preset-typescript ts-loader fork-ts-checker-webpack-plugin tslint tslint-react
```

webpack.config.js
```
// react_start/webpack.config.js
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// For Typescript
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
	entry: {
		'js/app': ['./src/App.tsx']
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/'
	},
	module: {
		rules: [
			// For Typescript
			{
				test: /\.(ts|tsx)$/,
				use: [
					'babel-loader',
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true
						}
					}
				],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		}),
		// For typescript
		new ForkTsCheckerWebpackPlugin({ silent: true })
	]
};
```

tsconfig.json
```
{
  "compilerOptions": {
    "target": "es6",
    "module": "esnext",
    "moduleResolution": "node",
    "noResolve": false,
    "noImplicitAny": false,
    "removeComments": false,
    "sourceMap": true,
    "allowJs": true,
    "jsx": "react",
    "allowSyntheticDefaultImports": true,
    "keyofStringsOnly": true
  },
  "typeRoots": ["node_modules/@types", "src/@type"],
  "exclude": [
    "node_modules",
    "build",
    "scripts",
    "acceptance-tests",
    "webpack",
    "jest",
    "src/setupTests.ts",
    "./node_modules/**/*"
  ],
  "include": ["./src/**/*", "@type"]
```
[https://www.typescriptlang.org/docs/handbook/tsconfig-json.html](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
[https://www.typescriptlang.org/docs/handbook/compiler-options.html](https://www.typescriptlang.org/docs/handbook/compiler-options.html)


tslint.json
```
{
  "extends": ["tslint", "tslint-react"],
  "rules": {
    "align": [true, "parameters", "statements"],
    "jsx-alignment": false,
    "ban": false,
    "class-name": true,
    "comment-format": [true, "check-space"],
    "curly": true,
    "eofline": false,
    "forin": true,
    "indent": [true, "spaces"],
    "interface-name": [false],
    "jsdoc-format": true,
    "jsx-no-lambda": false,
    "jsx-no-multiline-js": false,
    "label-position": true,
    "max-line-length": [true, 120],
    "member-ordering": [
      true,
      {
        "order": [
          "public-before-private",
          "static-before-instance",
          "variables-before-functions"
        ]
      }
    ],
    "no-any": false,
    "no-arg": true,
    "no-bitwise": true,
    "no-console": [
      true,
      "log",
      "error",
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-consecutive-blank-lines": true,
    "no-construct": true,
    "no-debugger": true,
    "no-duplicate-variable": true,
    "no-empty": false,
    "no-eval": true,
    "no-shadowed-variable": true,
    "no-string-literal": true,
    "no-switch-case-fall-through": true,
    "no-trailing-whitespace": false,
    "no-unused-expression": true,
    "no-use-before-declare": true,
    "one-line": [
      true,
      "check-catch",
      "check-else",
      "check-open-brace",
      "check-whitespace"
    ],
    "quotemark": [true, "single", "jsx-double"],
    "radix": true,
    "semicolon": [false],
    "switch-default": true,

    "trailing-comma": [false],

    "triple-equals": [true, "allow-null-check"],
    "typedef": [true, "parameter", "property-declaration"],
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      }
    ],
    "variable-name": [
      true,
      "ban-keywords",
      "check-format",
      "allow-leading-underscore",
      "allow-pascal-case"
    ],
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-module",
      "check-operator",
      "check-separator",
      "check-type",
      "check-typecast"
    ]
  }
}
```


.babelrc
```
{
    "presets": [
        [
            "@babel/preset-env",
            { "targets": { "browsers": ["last 2 versions", ">= 5% in KR"] } }
        ],
        "@babel/react",
        "@babel/typescript"
    ]
}
```

* styled-components
[https://dev-yakuza.github.io/ko/react/styled-components/](https://dev-yakuza.github.io/ko/react/styled-components/)

npm install
```
npm install --save-dev styled-components @types/styled-components babel-plugin-styled-components cross-env
```

package.json
```
"scripts": {
  "start": "cross-env NODE_ENV=development webpack-dev-server --open",
  "prebuild": "rimraf dist",
  "build": "cross-env NODE_ENV=production webpack --progress"
},
```

webpack.config.js
```
module.exports = {
  mode: process.env.NODE_ENV,
  ...
};
```

.babelrc
```
{
  "presets": [
    ...
  ],
  "env": {
    "development": {
      "plugins": ["babel-plugin-styled-components"]
    }
  }
}
```

tsconfig
```
{
  "compilerOptions": {
    ...
    "skipLibCheck": true
  },
  ...
}
```

* babel-plugin-module-resolver
[https://github.com/tleunen/babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)

npm install
```
 npm install --save-dev babel-plugin-module-resolver
```

.babelrc
```
"plugins": [
        [
            "module-resolver", {
                "root": ["./"],
                "alias": {
                    "~": "./src",
                    "underscore": "lodash"
                }
            }
        ]
    ],
```

tsconfig.json
```
{
  "compilerOptions": {
     "baseUrl": ".", // all paths are relative to the baseUrl
        "paths": {
            "~/*": [".src/*"],
            "underscore": ["lodash"]  
        }
  }
}
```

webpack.config.js
```
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
```





* react-router-dom
[https://dev-yakuza.github.io/ko/react/react-router/](https://dev-yakuza.github.io/ko/react/react-router/)

npm install
```
npm install --save react-router-dom
npm install --save-dev @types/react-router-dom
```

webpack.config.js
```
...
module.exports = {
  ...
  devServer: {
    contentBase: './dist',
    port: 3000,
    historyApiFallback: true,
  },
};
```


* file-loader, url-loader
[https://dev-yakuza.github.io/ko/react/image-and-font/](https://dev-yakuza.github.io/ko/react/image-and-font/)

npm install
```
npm install --save-dev file-loader, url-loader
```

webpack.config.js
```
...
module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    ...
  },
  output: {
    ...
  },
  module: {
    rules: [
      ...
      {
        // write image files under 10k to inline or copy image files over 10k
        test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        // write files under 10k to inline or copy files over 10k
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    ...
  },
  plugins: [
    ...
  ],
  devServer: {
    ...
  },
};
```
