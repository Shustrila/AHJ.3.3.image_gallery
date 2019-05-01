class Gallery {
  constructor(form, images) {
    this.el = '[data-widget=gallery]';
    this.countId = 0;
    this.form = form;
    this.images = images;
    this.root = {};
    this.list = {};
  }

  init() {
    this.root = document.querySelector(this.el);
    this.list = document.createElement('ul');


    this.list.className = 'gallery__list';

    this.root.innerHTML = '';


    this.root.appendChild(this.form.ui);
    this.root.appendChild(this.list);

    // events
    this.form.ui.addEventListener('submit', this._onFormSubmi.bind(this));
  }


  _onFormSubmi(e) {
    e.preventDefault();

    const { name, url } = e.target.elements;
    const error = url.parentNode.querySelector(`.${this.form.errorClass}`);

    if (error !== null) error.remove();

    if (url.value.trim() !== '') {
      this.images.add(this.countId++, name.value, url.value).then((data) => {
        url.value = '';
        name.value = '';
        this.list.prepend(data);
      }).catch((e) => {
        this.form.errorUi(url, e);
        throw new TypeError(e);
      });
    } else {
      this.form.errorUi(url, 'Ведите URL картини');
    }
  }
}

export default Gallery;
