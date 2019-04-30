class Images {
  constructor() {
    this.itemClass = 'gallery__item';
    this.removeClass = 'gallery__remove';
    this.nameClass = 'gallery__name';
    this.imgClass = 'gallery__img';
  }

  add(id, name, url) {
    return new Promise((resolve, reject) => {
      const image = document.createElement('img');
      image.src = url;

      image.addEventListener('load', () => {
        resolve(this.createUi(id, name, url));
      });

      image.addEventListener('error', () => {
        reject('Неверный URL изображения');
      });
    });
  }

  createUi(id, name, url) {
    const li = document.createElement('li');
    const remove = document.createElement('button');
    const image = document.createElement('div');

    li.className = this.itemClass;
    remove.className = this.removeClass;
    remove.innerHTML = 'X';
    image.style.backgroundImage = `url(${url})`;
    image.className = this.imgClass;

    if (name.trim() !== '') {
      image.innerHTML = `<p class="${this.nameClass}">${name}</p>`;
    }

    remove.addEventListener('click', () => li.remove());

    li.appendChild(remove);
    li.appendChild(image);
    return li;
  }
}

export default Images;
