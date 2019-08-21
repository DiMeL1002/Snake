export default class Matrix {
    constructor(selector, rows = 20, cols = 20) {
        this.elem = document.querySelector(selector);
        this.rows = rows;
        this.cols = cols;
        this.cells = [];
        this.cntCells = this.rows * this.cols;
    }

    create() {
        for (let i = 0; i < this.cntCells; i++) {
            let cell = document.createElement('div');

            if(i % this.cols === 0) {
                cell.classList.add('row-start');
            }

            cell.classList.add('mapCell');
            this.elem.appendChild(cell);

            this.cells.push('');
        }
    }

    getCell(x, y) {
        let cellNumber = this.getCellNumber(x, y);
        return this.cells[cellNumber];
    }

    setCell(x, y, val) {
        let cellNumber = this.getCellNumber(x, y);
        this.cells[cellNumber] = val;
        this.elem.children[cellNumber].setAttribute('data-game', val);
    }

    setAttr(x, y, attr, val) {
        let cellNumber = this.getCellNumber(x, y);
        this.elem.children[cellNumber].setAttribute(attr, val);
    }

    getAttr(x, y, attr) {
        let cellNumber = this.getCellNumber(x, y);
        return this.elem.children[cellNumber].getAttribute(attr);
    }

    getCellNumber(x, y) {
        return (y - 1) * this.cols + x - 1;
    }
}