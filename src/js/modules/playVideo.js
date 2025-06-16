export default class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelectorAll(overlay); /* модальное окно */
    this.close = this.overlay.querySelector('.close');
  }

  play () { /* метод */
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        console.log('Hello');
      });
    });
  }

  init(){
      const tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

}