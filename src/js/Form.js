class Form {
  constructor(input) {
    this.input = input;
    this.ui = {};

    this.formClass = 'gallery__form';
    this.labelClass = 'gallery__form-label';
    this.errorClass = 'gallery__form-error';

    this.createUi();
  }

  errorUi(el, message) {
    const error = document.createElement('p');

    error.className = this.errorClass;
    error.innerHTML = message;

    el.parentNode.prepend(error);
  }

  createUi() {
    const form = document.createElement('form');

    form.className = this.formClass;
    form.setAttribute('action', '/');

    this.input.forEach((item) => {
      const label = document.createElement('label');
      const input = document.createElement('input');

      label.className = this.labelClass;
      input.type = item.type || 'name';

      if (item.name !== undefined && item.name.trim() !== '') {
        input.name = item.name;
      }

      if (item.placeholder !== undefined && item.placeholder.trim() !== '') {
        input.placeholder = item.placeholder;
      }

      if (item.class !== undefined && item.class.trim() !== '') {
        input.className = item.class;
      }

      if (item.value !== undefined && item.value.trim() !== '') {
        input.value = item.value;
      }


      label.appendChild(input);
      form.appendChild(label);
    });

    this.ui = form;
  }
}

export default Form;
