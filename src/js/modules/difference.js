export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
       try{
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        this.oldItems = this.oldOfficer.querySelectorAll(items);
        this.newItems = this.newOfficer.querySelectorAll(items);
        this.oldCounter = 0;
        this.newCounter = 0;
       } catch(e){}
    }

    bindTriggers(container, items, counter) {
        container.querySelector('.plus').addEventListener('click', () => {
            if (counter !== items.length - 2) {
                items[counter].style.cssText = `
                  display: flex;
                  opacity: 0;
                  transition: opacity 1s ease-in;
                `;
                setTimeout(() => {
                  items[counter].style.opacity = "1";
                  counter++;
                }, 10);  
            } else {
              items[counter].style.cssText = `
                  display: flex;
                  opacity: 0;
                  transition: opacity 0.5s ease-in;
                `;
                setTimeout(() => {
                  items[counter].style.opacity = "1";
                  items[items.length - 1].remove();
                }, 10);  
                // items[counter].style.display = 'flex';
                
            }
        });
    }

    hideItems(items) {
        items.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }

    init() {
        try{
        this.hideItems(this.oldItems);
        this.hideItems(this.newItems);

        this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
        this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
        } catch(e){}

    }
}