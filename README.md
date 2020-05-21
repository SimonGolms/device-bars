# Device Bars <!-- omit in toc -->

<p>
  <a href="https://stenciljs.com/" target="_blank">
    <img alt="Build with Stencil" src="https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d" />
  </a>
  <a href="https://www.npmjs.com/package/device-bars" target="_blank">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/device-bars.svg" />
  </a>
  <a href="https://github.com/simongolms/device-bars#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/simongolms/device-bars/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://conventionalcommits.org" target="_blank">
    <img alt="Conventional Commits" src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" />
  </a>
  <a href="https://github.com/simongolms/device-bars/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/simongolms/device-bars" />
  </a>
  <a href="#badge">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
</p>

> Add the appropriate device status and navigation bar to your web application and bring your mocks/prototypes/screenshots to the next level.

## Demo

[Live Demo](https://device-bars.stackblitz.io) | [Stackblitz](https://stackblitz.com/edit/device-bars?file=index.html)

![device-bars-showcase](https://github.com/SimonGolms/device-bars/raw/master/docs/showcase.png)

## Installation

### Option 1: Node Modules

```bash
npm install device-bars --save
```

```html
<!-- index.html -->
<html>
  <head>
    <script src='node_modules/device-bars/dist/device-bars.js'></script>
  </head>
  ...
</html>
```

### Option 2: Script Tag (via [`unpkg`](https://unpkg.com/))

```html
<!-- index.html -->
<html>
  <head>
    <script src='https://unpkg.com/device-bars/@1.1.1/dist/device-bars.js'></script>
  </head>
  ...
</html>
```

## Usage

Use the elements `<device-status-bar />` and `<device-navigation-bar />` anywhere in your template, JSX, html etc

```html
<!-- index.html -->
<html>
  <body>
    <device-status-bar device="iPhone 11" color="#000" background="transparent"></device-status-bar>
    <div id="root"></div>
    <device-navigation-bar device="iPhone 11"></device-navigation-bar>
  </body>
</html>
```

### device-status-bar

#### Properties

| Property     | Attribute    | Description                                                                                                                                                                                                                                                                          | Type      | Default     |
| ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ----------- |
| `background` | `background` | Sets the background color of the status bar                                                                                                                                                                                                                                          | `string`  | `undefined` |
| `color`      | `color`      | Set the color of the status bar text                                                                                                                                                                                                                                                 | `string`  | `undefined` |
| `date`       | `date`       | The date to be displayed                                                                                                                                                                                                                                                             | `string`  | `undefined` |
| `device`     | `device`     | Predefined device descriptor name, such as "iPhone X" or "Pixel 2". For a complete list please see: `DEVICES` at ./../utils/device.ts                                                                                                                                                | `string`  | `undefined` |
| `height`     | `height`     | Sets the height of the navigation bar. By default, the height is derived from the specified device safe-area, but it can also be adjusted manually.                                                                                                                                  | `string`  | `undefined` |
| `hide`       | `hide`       | Hides the Statusbar                                                                                                                                                                                                                                                                  | `boolean` | `false`     |
| `inline`     | `inline`     | Set the Statusbar inline                                                                                                                                                                                                                                                             | `boolean` | `false`     |
| `mode`       | `mode`       | The mode determines which platform styles to use.                                                                                                                                                                                                                                    | `string`  | `undefined` |
| `safeArea`   | `safe-area`  | Adds an additional safe-area for the status and navigation bar. The respective height is derived from the specified device. By default, the safe-area is implemented via padding on the body. If an <ion-app /> element is detected, the css variable --ion-safe-area-* will be set. | `boolean` | `true`      |
| `time`       | `time`       | The time to be displayed                                                                                                                                                                                                                                                             | `string`  | `undefined` |


#### CSS Custom Properties

| Name           | Description                         |
| -------------- | ----------------------------------- |
| `--background` | Background color of the status bar. |
| `--color`      | Color of the status bar.            |
| `--height`     | Height of the status bar.           |

### device-navigation-bar

#### Properties

| Property     | Attribute    | Description                                                                                                                                                                                                                                                                          | Type      | Default     |
| ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ----------- |
| `background` | `background` | Sets the background color of the navigation bar                                                                                                                                                                                                                                      | `string`  | `undefined` |
| `color`      | `color`      | Set the color of the navigation bar                                                                                                                                                                                                                                                  | `string`  | `undefined` |
| `device`     | `device`     | Predefined device descriptor name, such as "iPhone X" or "Pixel 2". For a complete list please see: `DEVICES` at ./../utils/device.ts                                                                                                                                                | `string`  | `undefined` |
| `fill`       | `fill`       | (Android only) Sets the color to fill the icons in the navigation bar.                                                                                                                                                                                                               | `string`  | `undefined` |
| `height`     | `height`     | Sets the height of the navigation bar. By default, the height is derived from the specified device safe-area, but it can also be adjusted manually.                                                                                                                                  | `string`  | `undefined` |
| `hide`       | `hide`       | Hides the Statusbar                                                                                                                                                                                                                                                                  | `boolean` | `false`     |
| `inline`     | `inline`     | Set the Statusbar inline.                                                                                                                                                                                                                                                            | `boolean` | `false`     |
| `safeArea`   | `safe-area`  | Adds an additional safe-area for the status and navigation bar. The respective height is derived from the specified device. By default, the safe-area is implemented via padding on the body. If an <ion-app /> element is detected, the css variable --ion-safe-area-* will be set. | `boolean` | `true`      |

#### CSS Custom Properties

| Name           | Description                         |
| -------------- | ----------------------------------- |
| `--background` | Background color of the status bar. |
| `--color`      | Color of the status bar.            |
| `--fill`       | Height of the status bar.           |
| `--height`     | Height of the status bar.           |

### Supported Devices

#### Android

- `Galaxy Note 3`, `Galaxy Note 3 landscape`
- `Galaxy Note II`, `Galaxy Note II landscape`
- `Galaxy S III`, `Galaxy S III landscape`
- `Galaxy S5`, `Galaxy S5 landscape`
- `Nexus 10`, `Nexus 10 landscape`
- `Nexus 4`, `Nexus 4 landscape`
- `Nexus 5`, `Nexus 5 landscape`, `Nexus 5X`, `Nexus 5X landscape`
- `Nexus 6`, `Nexus 6 landscape`, `Nexus 6P`, `Nexus 6P landscape`
- `Nexus 7`, `Nexus 7 landscape`
- `Pixel 2`, `Pixel 2 landscape`, `Pixel 2 XL`, `Pixel 2 XL landscape`

#### iOS

- `iPad (gen 6)`, `iPad (gen 6) landscape`
- `iPad (gen 7)`, `iPad (gen 7) landscape`
- `iPad Mini`, `iPad Mini landscape`
- `iPad Pro 11`, `iPad Pro 11 landscape`
- `iPad Pro 13`, `iPad Pro 13 landscape`
- `iPhone 6`, `iPhone 6 landscape`, `iPhone 6 Plus`, `iPhone 6 Plus landscape`
- `iPhone 7`, `iPhone 7 landscape`, `iPhone 7 Plus`, `iPhone 7 Plus landscape`
- `iPhone 8`, `iPhone 8 landscape`, `iPhone 8 Plus`, `iPhone 8 Plus landscape`
- `iPhone SE`, `iPhone SE landscape`
- `iPhone X`, `iPhone X landscape`
- `iPhone XR`, `iPhone XR landscape`
- `iPhone 11`, `iPhone 11 landscape`
- `iPhone 11 Pro`, `iPhone 11 Pro landscape`, `iPhone 11 Pro Max`, `iPhone 11 Pro Max landscape`

---

## Workspace

### Local Development

To start developing the `device-bars` web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/SimonGolms/device-bars.git device-bars
cd device-bars
git remote rm origin
```

```bash
npm install
npm start
```

### Build

To build `device-bars` for production, run:

```bash
npm run build
```

### Run Tests

```bash
npm test
```

### Release & Publishing

Run `npm run release` to create a new build & release with [`semantic-release`](https://github.com/semantic-release/semantic-release). This bumps the version of `package.json`, uses [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) to update CHANGELOG.md and references in the README.md, commits package.json, CHANGELOG.md and tags a new release.<br/>The new release gets published to GitHub and npm automatically.

### Further Help

Check out the Stencil docs [here](https://stenciljs.com/docs).

#### Committing

Run `npx git-cz` to generate a valid commit message. It’s easy to forget about the commit convention so to be consistent use [commitizen](https://github.com/commitizen/cz-cli) to generate our commits and husky to manage a Git commit-msg hook to validate the commit message.
Further information: [How to automate versioning and publication of an npm package](https://itnext.io/how-to-automate-versioning-and-publication-of-an-npm-package-233e8757a526)

---

## Author

**Simon Golms**

- Digital Card: `npx simongolms`
- Github: [@SimonGolms](https://github.com/SimonGolms)
- Website: [gol.ms](https://gol.ms)

## Roadmap

- [ ] Support Status (e.g. Call, GPS, Record)
- [ ] Angular Component
- [ ] React Component

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/simongolms/device-bars/issues).

## Show Your Support

Give a ⭐️ if this project helped you!

## License

Copyright © 2020 [Simon Golms](https://github.com/SimonGolms).<br />
This project is [MIT](https://github.com/simongolms/device-bars/blob/master/LICENSE) licensed.

## Resources

- [Android bars](https://material.io/design/platform-guidance/android-bars.html)
- [Apple | ios | Status Bars](https://developer.apple.com/design/human-interface-guidelines/ios/bars/status-bars/)
- [Capacitor | Status Bar](https://capacitor.ionicframework.com/docs/apis/status-bar/)
- [React Native | Status Bar](https://reactnative.dev/docs/statusbar)
