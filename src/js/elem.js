export default class Elem {
    constructor(matrix, coords) {
        this.matrix = matrix;
        this.coords = coords;
        this.value = '';
    }

    create() {
        for (let coord of this.coords) {
            this.matrix.setCell(coord[0], coord[1], this.value);
        }
    }
}