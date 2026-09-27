# Web Development Tutorials

This repositories contains the code I hand-written from following web development 
tutorials. I decided to learn web-dev in 2023 after 3 years of only doing Python. 
Additionally, the repo includes HTML/CSS lessons from winter 2023, basic 
JavaScript, and later Firebase setup experiments with Webpack from spring 2024.

## Contents

- [HTML and CSS](html-css/) — 23 lessons with source comments and assets.
- [JavaScript](javascript/) — Two introductory lessons from BroCode.
- [Firebase](firebase/) — Firebase setup and authentication-state experiments.

## HTML and CSS

The lessons follow Bro Code's introductory HTML and CSS tutorial.
Each numbered folder keeps its page files and related assets together.

## JavaScript

These examples follow the start of Bro Code's JavaScript tutorial.

## Firebase

The code initialises a Firebase app and obtains its authentication service.
An `onAuthStateChanged()` callback reports the user's state to the console.
Webpack converts the source imports into a browser bundle.
This is an initial setup exercise, with no complete sign-in interface.

## Repository structure

```text
.
├── html-css/          # Numbered lessons from 01 to 23
├── javascript/
│   ├── 01-introduction/
│   └── 02-variables/
├── firebase/
│   ├── src/           # Firebase source and an earlier experiment
│   ├── dist/          # HTML page and retained browser bundles
│   ├── package.json
│   └── webpack.config.js
├── LICENSE
└── README.md
```

## Licence

See [LICENSE](LICENSE) for the Apache License 2.0.
The imported folders retain their original licence files.
