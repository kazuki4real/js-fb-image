class FBGrid {
  constructor(selector, option) {
    const ele = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;
    this.ele = ele;
    this.run();
  }

    run() {
    [].forEach.call(this.ele, (ele) => {
      const count = ele.childElementCount;
      ele.classList.add(`pattern${count}_a`);
      const imgs = ele.querySelectorAll('img');
      const imgArry = [].map.call(imgs, img => img.src);
      ele.innerHTML = `${imgArry.map((img) => {
        return `<div class="item"><img src=${img} /></div>`
      }).join('')}`;
    });
  }
}