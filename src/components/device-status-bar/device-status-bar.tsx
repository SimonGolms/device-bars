import { Component, Prop, h, Host, Element, ComponentInterface } from '@stencil/core';

import { detectDevice, getDeviceInfo, DeviceDescriptor } from '../../utils/device';
import { getIosCellular, getIosBattery, getIosWifi, getAndroidWifi, getAndroidCellular, getAndroidBattery } from '../../utils/icons';

@Component({
  tag: 'device-status-bar',
  styleUrl: 'device-status-bar.scss',
  shadow: true,
})
export class DeviceStatusBar implements ComponentInterface {
  @Element() el: HTMLElement;

  /**
   * The model to be used
   */
  @Prop() device: string;

  /**
   * The mode determines which platform styles to use.
   *
   * @default 'md'
   * @type {string}
   * @memberof DeviceStatusBar
   */
  @Prop({ mutable: true }) mode: string;

  /**
   * The time to be displayed
   *
   * @default '12:30' // md
   * @default '9:41' // ios
   * @type {string}
   * @memberof DeviceStatusBar
   */
  @Prop({ mutable: true }) time: string;

  /**
   * The date to be displayed
   *
   * @default 'Mon Apr 2' // md
   * @default 'Mon Jun 3' // ios
   * @type {string}
   * @memberof DeviceStatusBar
   */
  @Prop({ mutable: true }) date: string;

  /**
   * Set the color of the status bar text
   *
   * @default '#000'
   * @type {string}
   * @memberof DeviceStatusBar
   */
  @Prop() color: string;

  /**
   * Sets the background color of the status bar
   *
   * @defaultvalue 'transparent'
   * @type {string}
   * @memberof DeviceStatusBar
   */
  @Prop() background: string;

  /**
   * Sets the background color of the status bar
   *
   * @default 'device.safeArea.top'
   * @type {string}
   * @memberof DeviceStatusBar
   */
  @Prop() height: string;

  /**
   * Hides the Statusbar
   *
   * @default false
   * @type {string}
   * @memberof DeviceStatusBar
   */
  @Prop() hide: boolean = false;

  /**
   * Set the Statusbar inline
   *
   * @default false
   * @type {string}
   * @memberof DeviceStatusBar
   */
  @Prop() inline: boolean = false;

  deviceInfo: DeviceDescriptor;

  constructor() {
    if (this.device) {
      this.deviceInfo = getDeviceInfo(this.device);
    } else {
      this.deviceInfo = detectDevice();
    }
    if (!this.mode) {
      this.mode = this.deviceInfo ? this.deviceInfo.mode : 'md';
    }
    if (!this.time) {
      this.time = this.mode === 'md' ? '12:30' : '9:41';
    }
    if (!this.date) {
      this.date = this.mode === 'md' ? 'Mon Apr 2' : 'Mon Jun 3';
    }
    if (this.background) {
      this.el.style.setProperty('--background', this.background);
    }
    if (this.color) {
      this.el.style.setProperty('--color', this.color);
    }
    if (this.height) {
      this.el.style.setProperty('--height', this.height);
    } else {
      this.el.style.setProperty('--height', this.deviceInfo ? this.deviceInfo.safeArea.top : '0px');
    }
  }

  render() {
    if (this.hide) {
      return null;
    }

    if (!this.deviceInfo || !this.deviceInfo.cssClass) {
      return null;
    }

    if (this.deviceInfo.cssClass === 'iphone-6-7-8') {
      return (
        <Host class={{ ['inline']: this.inline, [this.mode]: true, [this.deviceInfo.cssClass]: true }}>
          <div class='status-bar'>
            <div class='status-bar-start'>
              <div class='icon-wrapper icon-cellular'>
                <div class='icon-inner'>{getIosCellular()}</div>
              </div>
              <div class='icon-wrapper icon-wifi'>
                <div class='icon-inner'>{getIosWifi()}</div>
              </div>
            </div>

            <div class='status-bar-center'>
              <div class='icon-time'>{this.time}</div>
            </div>

            <div class='status-bar-end'>
              <div class='icon-battery-percent'>100%</div>
              <div class='icon-wrapper icon-battery'>
                <div class='icon-inner'>{getIosBattery()}</div>
              </div>
            </div>
          </div>
        </Host>
      );
    }

    if (this.deviceInfo.cssClass === 'iphone-x-xr-11') {
      return (
        <Host class={{ ['inline']: this.inline, [this.mode]: true, [this.deviceInfo.cssClass]: true }}>
          <div class='status-bar'>
            <div class='status-bar-start'>
              <div class='icon-time'>{this.time}</div>
            </div>

            <div class='status-bar-end'>
              <div class='icon-wrapper icon-cellular'>
                <div class='icon-inner'>{getIosCellular()}</div>
              </div>
              <div class='icon-wrapper icon-wifi'>
                <div class='icon-inner'>{getIosWifi()}</div>
              </div>
              <div class='icon-wrapper icon-battery'>
                <div class='icon-inner'>{getIosBattery()}</div>
              </div>
            </div>
          </div>
        </Host>
      );
    }

    if (this.deviceInfo.cssClass === 'ipad' || this.deviceInfo.cssClass === 'ipad-pro') {
      return (
        <Host class={{ ['inline']: this.inline, [this.mode]: true, [this.deviceInfo.cssClass]: true }}>
          <div class='status-bar'>
            <div class='status-bar-start'>
              <span class='icon-time'>{this.time}</span>
              <span class='icon-date'>{this.date}</span>
            </div>

            <div class='status-bar-end'>
              <div class='icon-wrapper icon-wifi'>
                <div class='icon-inner'>{getIosWifi()}</div>
              </div>
              <div class='icon-battery-percent'>100%</div>
              <div class='icon-wrapper icon-battery'>
                <div class='icon-inner'>{getIosBattery()}</div>
              </div>
            </div>
          </div>
        </Host>
      );
    }

    if (this.mode === 'md') {
      return (
        <Host class={{ ['inline']: this.inline, [this.mode]: true, [this.deviceInfo.cssClass]: true }}>
          <div class='status-bar'>
            <div class='status-bar-start'>
              <div class='icon-time'>{this.time}</div>
            </div>

            <div class='status-bar-end'>
              <div class='icon-wrapper icon-wifi'>
                <div class='icon-inner'>{getAndroidWifi()}</div>
              </div>
              <div class='icon-wrapper icon-cellular'>
                <div class='icon-inner'>{getAndroidCellular()}</div>
              </div>
              <div class='icon-wrapper icon-battery'>
                <div class='icon-inner'>{getAndroidBattery()}</div>
              </div>
            </div>
          </div>
        </Host>
      );
    }

    return null;
  }
}
