import { Component, Prop, getAssetPath, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
  assetsDirs: ['assets']
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    const imageSrc = getAssetPath(`./assets/logo.png`);
    return <div>Hello, World! I'm {this.getText()}
      <img src={imageSrc}/>
    </div>;
  }
}
