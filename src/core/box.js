import icons from '../resources/fontawesome-icons.json';

export default class Box {
  constructor (target) {
    this.target = target;
    this.box = {};
    this._search = '';
    this._setup();
  }

  set search (search) {
    this._search = search;
    this._render();
  }

  get search () {
    return this._search;
  }

  show () {
    this._render();
    this.box.classList.add('box-active');
  }

  hide () {
    this.box.classList.remove('box-active');
  }

  _render () {
    return Object.keys(icons).map((key) => (
      icons[key].map((icon) => (
        `<i class="${icon} box-icon"></i>`
      )).join('')
    )).join('');
  }

  _create () {
    let el = document.createElement('div');
    el.classList.add('box-modal');
    this.target.appendChild(el);

    return el;
  }

  _setup () {
    this.box = this._create();
    this.box.innerHTML = this._render();
  }

  static init (target) {
    return new this(target);
  }
}
