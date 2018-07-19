"use strict";

/**
 * @property {HTMLElement} gameContainerEl Контейнер игры (DOM элемент).
 */
const chess = {
  gameContainerEl: document.getElementById('game'),
  figures: [
    {name: 'p', color: 'w', pos: 'a2'},
    {name: 'p', color: 'w', pos: 'b2'},
    {name: 'p', color: 'w', pos: 'c2'},
    {name: 'p', color: 'w', pos: 'd2'},
    {name: 'p', color: 'w', pos: 'e2'},
    {name: 'p', color: 'w', pos: 'f2'},
    {name: 'p', color: 'w', pos: 'g2'},
    {name: 'p', color: 'w', pos: 'h2'},
    {name: 'R', color: 'w', pos: 'a1'},
    {name: 'R', color: 'w', pos: 'h1'},
    {name: 'N', color: 'w', pos: 'b1'},
    {name: 'N', color: 'w', pos: 'g1'},
    {name: 'B', color: 'w', pos: 'c1'},
    {name: 'B', color: 'w', pos: 'f1'},
    {name: 'Q', color: 'w', pos: 'd1'},
    {name: 'K', color: 'w', pos: 'e1'},

    {name: 'p', color: 'b', pos: 'a7'},
    {name: 'p', color: 'b', pos: 'b7'},
    {name: 'p', color: 'b', pos: 'c7'},
    {name: 'p', color: 'b', pos: 'd7'},
    {name: 'p', color: 'b', pos: 'e7'},
    {name: 'p', color: 'b', pos: 'f7'},
    {name: 'p', color: 'b', pos: 'g7'},
    {name: 'p', color: 'b', pos: 'h7'},
    {name: 'R', color: 'b', pos: 'a8'},
    {name: 'R', color: 'b', pos: 'h8'},
    {name: 'N', color: 'b', pos: 'b8'},
    {name: 'N', color: 'b', pos: 'g8'},
    {name: 'B', color: 'b', pos: 'c8'},
    {name: 'B', color: 'b', pos: 'f8'},
    {name: 'Q', color: 'b', pos: 'd8'},
    {name: 'K', color: 'b', pos: 'e8'},
  ],
  figureHTML: {
    pw: '&#9817;',
    Nw: '&#9816;',
    Bw: '&#9815;',
    Rw: '&#9814;',
    Qw: '&#9813;',
    Kw: '&#9812;',

    pb: '&#9823;',
    Nb: '&#9822;',
    Bb: '&#9821;',
    Rb: '&#9820;',
    Qb: '&#9819;',
    Kb: '&#9818;',
  },

  /**
   * Метод отображения карты (игрового поля).
   */
  renderMap() {
    const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];
    const rows = [0, '1', '2', '3', '4', '5', '6', '7', '8', 0];

    for (let row = 0; row < 10; row++) {
      const tr = document.createElement('tr');
      this.gameContainerEl.appendChild(tr);

      for (let col = 0; col < 10; col++) {
        const td = document.createElement('td');
        tr.appendChild(td);

        td.dataset.row = rows[row];
        td.dataset.col = cols[col];

        if ((row === 0 || row === 9) && cols[col] !== 0) {
          td.innerHTML = cols[col];
        }

        if ((col === 0 || col === 9) && rows[row] !== 0) {
          td.innerHTML = rows[row];
        }

        if (row !== 0 && row !== 9 && col !== 0 && col !== 9) {
          if (this.isCellsBlack(row, col)) {
            td.style.backgroundColor = 'grey';
          }
        }
      }
    }
  },

  /**
   * Определяет является ли ячейка чёрной.
   *
   * @param {int} rowNum Номер в строке.
   * @param {int} colNum Номер в колонке.
   * @returns {boolean} true, если ячейка должна быть чёрной, иначе false.
   */
  isCellsBlack(rowNum, colNum) {
    return (colNum + rowNum) % 2 === 1;
  },

  /**
   * Отображает фигуры.
   */
  renderFigures() {
    for (const figure of this.figures) {
      const col = figure.pos.charAt(0);
      const row = figure.pos.charAt(1);

      document.querySelector(`[data-col='${col}'][data-row='${row}']`).innerHTML =
        this.figureHTML[figure.name + figure.color];
    }
  }
};

// Запускаем метод отображения карты.
chess.renderMap();
chess.renderFigures();