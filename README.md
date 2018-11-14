# Polymer Toggle Element

This element is meant to be included in any other element where a toggle is required.  `icon-toggle.html` defines the icon toggle element.  `icon-toggle-demo` imports the icon toggle and sets some configurable parameters like which icon and what message. Both elements are registered in the `elements.html`

Finally, either element is printed out in `index.html`, or another page or element...

This could be integrated with Firebase Authentication and Firebase Database to keep track of the toggle state for a peice of content or a user.

## Install

You'll need to have node.js, polymer-cli and yarn installed to begin

Install bower dependancies

```bash
polymer install
```

Install gulp to deploy to gh-pages

```bash
yarn install
```

## Develop

```bash
polymer serve
```

## Build

to build the compiled app

```bash
polymer build
```

to serve the built app

```bash
polymer serve build/default
```

## Deploy to gh-pages

Set up your codebase on github and then run

```bash
gulp deploy
```


## Reference

- [Build your first Polymer element codelab](http://www.code-labs.io/codelabs/polymer-first-elements/)

- If you're wondering what `polymer serve` does, see [Testing elements with local bower dependencies](https://www.polymer-project.org/1.0/docs/start/reusableelements.html#local-dependencies)  in the Polymer docs. 
