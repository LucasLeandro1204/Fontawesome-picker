import Box from './core/box';

export default class Picker {
  constructor ({ target, preview, prefix = false } = {}) {
    this.target = target;
    this.prefix = prefix;
    this.preview = preview;
    this.box = Box.init(target, this._onpick);
    this._setup();
  }

  _setup () {
    this.target.addEventListener('blur', this._onblur.bind(this));
    this.target.addEventListener('focus', this._onfocus.bind(this));
    this.target.addEventListener('input', this._oninput.bind(this));
  }

  _onfocus () {
    this.box.show();
  }

  _onblur () {
    this.box.hide();
  }

  _oninput (ev) {
    this.box.search = ev.target.value;
  }

  _onpick (icon) {
    console.log(icon);
  }

  static init (options) {
    if (! options.target) {
      throw new Error('We need a target');
    }

    return new this(options);
  }
}
