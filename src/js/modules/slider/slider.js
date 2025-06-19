export default class Slider {
    constructor({
        container = null,
        btns = null,
        next = null,
        prev = null,
        activeClass = '',
        animate,
        autoplay } = {}){ /* большой обьект в дефолтном положении  - если первая часть не будет передана, то передаеться вторая часть*/
        this.container = document.querySelector(container);
        try{this.slides = [...this.container.children];}catch(e){}
        this.btns = document.querySelectorAll(btns);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }
}