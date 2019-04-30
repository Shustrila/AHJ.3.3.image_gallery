import Gallery from './Gallery';
import Form from './Form';
import Images from './Images';

const inputs = [
  {
    name: 'name',
    class: 'gallery__form-input gallery__form-name',
    placeholder: 'Название',
  },
  {
    name: 'url',
    class: 'gallery__form-input gallery__form-url',
    placeholder: 'Ссылка на изображение',
  },
  {
    type: 'submit',
    name: 'submit',
    class: 'gallery__form-submit',
    value: 'Добавить',
  },
];

const form = new Form(inputs);
const images = new Images();
const gallery = new Gallery(form, images);

gallery.init();
