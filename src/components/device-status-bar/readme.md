# device-status-bar



<!-- Auto Generated Below -->


## Properties

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


## CSS Custom Properties

| Name           | Description                         |
| -------------- | ----------------------------------- |
| `--background` | Background color of the status bar. |
| `--color`      | Color of the status bar.            |
| `--height`     | Height of the status bar.           |


----------------------------------------------

*Built with love!*
