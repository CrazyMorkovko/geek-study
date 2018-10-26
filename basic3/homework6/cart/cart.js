"use strict";

/**
 * @property {object} settings Настройки корзины товаров.
 * @property {{price: number, name: string}[]} goods Список товаров, что купил пользователь.
 * @property {HTMLElement} cartCountEl Место для показа количества товаров.
 * @property {HTMLElement} cartPriceEl Место для показа цены всех товаров.
 */
const cart = {
  settings: {
    countSelector: '#count',
    priceSelector: '#price'
  },
  goods: [],
  countEl: null,
  priceEl: null,

  /**
   * Инициализирует переменные для корзины и показывает эти значения.
   */
  init(settings = {}) {
    Object.assign(this.settings, settings);

    this.countEl = document.querySelector(this.settings.countSelector);
    this.priceEl = document.querySelector(this.settings.priceSelector);
    this.goods = [];
    this.render();

    const buttons = document.querySelectorAll('.btn');
    for (const btn of buttons) {
      btn.addEventListener('click', (event) => {
        const node = event.target;
        this.add(node.dataset.name, node.dataset.price);
      })
    }

  },

  /**
   * Отображает количество всех товаров и их цену.
   */
  render() {
    this.priceEl.innerText = this.getGoodsPrice();
    this.countEl.innerText = this.goods.length;
  },

  /**
   * Считает и возвращает цену всех купленных товаров из массива this.goods.
   * @returns {number} Цена всех купленных товаров.
   */
  getGoodsPrice() {
    let goodsPrice = 0;
    for (const good of this.goods) {
      goodsPrice += +good.price;
    }

    return goodsPrice;
  },

  /**
   * Добавляет купленный товар в массив купленных товаров и отображает количество и цену всех товаров.
   *
   * @param goodName Название товара.
   * @param goodPrice Цена товара.
   */
  add(goodName, goodPrice) {
    this.goods.push({
      name: goodName,
      price: goodPrice
    });
    this.render();
  }
};

cart.init();
