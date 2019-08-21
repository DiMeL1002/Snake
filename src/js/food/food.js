import Elem from '../elem';

export default class Food extends Elem{
    constructor(matrix, coords) {
        super(matrix, coords);
        this.value = 'food';
        this.type = '';
        this.score = 0;
    }

    create() {
        this.matrix.setCell(this.coords[0], this.coords[1], this.value);
        this.matrix.setAttr(this.coords[0], this.coords[1], 'data-type' ,this.type);
        this.matrix.setAttr(this.coords[0], this.coords[1], 'data-score' ,this.score);
    }

    delete() {
        if (this.matrix.getCell(this.coords[0], this.coords[1]) === this.value) {
            this.matrix.setCell(this.coords[0], this.coords[1], '');
            this.matrix.setAttr(this.coords[0], this.coords[1], 'data-type' ,'');
            this.matrix.setAttr(this.coords[0], this.coords[1], 'data-score' ,'');
        }
    }
}