import icons from './resources/fontawesome-icons.json';

export class Picker {
  constructor ({ target = {}, preview = {}, prefix = false } = {}) {
    this.target = target;
    this.prefix = prefix;
    this.preview = preview;
  }

  static init (options) {
    if (! options.target) {
      throw new Error('We need a target');
    }

    return new this(options);
  }
}
