export default class Download {
  constructor(triggers){
    this.btns = document.querySelectorAll(triggers);
    this.path = 'assets/img/mainbg.jpg'; /* путь для скачивания изображения */

  }

  downloadItem(path) {
    const element = document.createElement('a');

    element.setAttribute('href', path);
    element.setAttribute('download', 'nice__picture');

    element.style.display = 'none';
    element.body.appendChild(element);

    element.click(); /* вызов события */

    document.body.removeChild(); /* после того как все отработало - удаляемь его со страницы */
    
  }

  init() {
    this.btns.forEach(item, () => {
      item.addEventListener('click', () => {
        this.downloadItem(this.path);
      });
    });
  }


}