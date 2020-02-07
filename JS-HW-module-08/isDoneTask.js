import gallery from "./gallery-items.js";

console.log(gallery);

class ImageGallery {
  constructor() {
    this.list = gallery;
  }

  renderList() {
    return `<ul class="gallery">
    ${this.list.reduce((acc, el) => this.renderListItem(el) + acc, "")}
    </ul>`;
  }

  renderListItem(obj) {
    // console.log(obj.preview);
    return `<li class="gallery__item">
<a
   class="gallery__link"
   href=${obj.original}
>
  <img
    class="gallery__image"
    src=${obj.preview}
    data-source=${obj.original}
    alt=${obj.description}
  />
</a>
</li>`;
  }

  addToScreen(container, position, element) {
    container.insertAdjacentHTML(position, element);
  }

  clickLinks(e) {
    e.preventDefault();
    const link = e.target.dataset.source;
    const alt = e.target.alt;
    console.log(link, alt);
    const light = document.querySelector(".lightbox");
    const imgBig = document.querySelector(".lightbox__image");
    light.classList.add("is-open");
    imgBig.setAttribute("src", link);
    imgBig.setAttribute("alt", alt);
  }

  actToClick() {
    const areaForClick = document.querySelector(".js-gallery");
    areaForClick.addEventListener("click", this.clickLinks);
  }

  closeModule() {
    const close = document.querySelector(".lightbox");
    close.classList.remove("is-open");
  }

  cleanLink() {
    const imgBig = document.querySelector(".lightbox__image");
    imgBig.setAttribute('src', '')
  }

  actToClose() {
    const button = document.querySelector(".lightbox__button");
    button.addEventListener("click", this.closeModule);
    button.addEventListener("click", this.cleanLink);
  }

  start(container) {
    this.addToScreen(container, "beforeend", this.renderList());
    this.actToClick();
    this.actToClose();
  }
}

const app = new ImageGallery();
const main = document.querySelector(".gallery");
app.start(main);
