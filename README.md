# My custom Gatsby starter

## with Bootstrap 4 in my favored SCSS setup <sup>\*)</sup>

<sup>\*)</sup> for small to medium projects

## First things first

This repository is a custom starter for [Gatsby](https://www.gatsbyjs.org/) with a specific setup and structure for my Bootstrap 4 and SCSS. This Bootstrap setup is my currently favored for small to medium projects. If you want to know more about this setup, you can read here: [My favored SCSS setup with Bootstrap 4](https://medium.com/@programmiri/my-favored-scss-setup-with-bootstrap-4-547e9ea290f8)

The starter contains:

- [Gatsby](https://www.gatsbyjs.org/)
- [Jest](https://jestjs.io/)
- [Enzyme](http://airbnb.io/enzyme/)
- [Prettier](https://prettier.io/)
- [Bootstrap 4](https://getbootstrap.com/)

## Installation

### Getting started

Note: installation is based on OS X, for other systems please see the respective documentations.

- Install (if you don't have them):
  - [Node.js](http://nodejs.org): `brew install node`
  - [Yarn](https://yarnpkg.com/lang/en/): `brew install yarn`
- Clone or download this repo
- Run `yarn intall` to add all dependencies

### Custom scripts

    -   `yarn develop` — Gatsby will start a hot-reloading development environment accessible at localhost:8000
    - `yarn build` — Gatsby will perform an optimized production build for your site generating static HTML and per-route JavaScript code bundles
    - `yarn test` - runs all jest tests
    - `yarn test:watch` - starts the watch mode that runs all tests related to changed files based on hg/git (uncommitted files)
    - `gatbsy serve` — Gatsby starts a local HTML server for testing your built site.

### SCSS Setup

```
│├── scss/
│    ├── bootstrap/
│        ├── _config.scss
│        ├── _pre_defaults.scss
│    ├── bootstrap_ext/
│        ├── _button.scss
│    ├── _variables.scss
│    ├── main.scss
```

### js

Bootstrap 4 comes with custom jQuery plugins which comes in handy. They're impoted in index.js.

#### SCSS

The only files in this directory should be `_variables.scss` and `_main.scss`. I prefer to use the variables which are provided by Bootstrap. _Only_ in cases there’s nothing to be used from the Bootstrap core, I declare a custom variable in `_variables.scss`. In `_main.scss` all scss components come together via import. I don't declare any styles here normally.

**Directory bootstrap**

`config.scss`
Bootstrap can be used very modular. I don’t import the complete Bootstrap CSS. Instead I use import in the `_config.scss`to only get the components I want to use.

`pre_default.scss`
Bootstrap uses `!default` on each variable, which makes customizing very easy. It's the oposite of the notorious `!import`: While `!important` is like "Oh, there's a rule for this? I don't care, use this!", a variable with `!default` will only get defined by sass if it isn't already set. So if I want to change a Bootstrap variable, I do so in the `_pre_default.scss` file.

You can find an example in this repo.

**Directory bootstrap_ext**
I customize and extend styles in Bootstrap in separate files, which are stored in a special folder. The file is named like the Bootstrap component I’m changing or extending.

You can find an example this repo: the file `_button.scss`

##### Further structure

From here it’s up to you how to create your structure :)

### Unit Tests

This repo only contains a basic setup for Jest and Enzym. As you can see in the examples, I don't seperate tests in a own subfolder in a small project. Of course you can create your own structure. Just keep in mind to change the path for the jest configs in `package.json` if need be.
