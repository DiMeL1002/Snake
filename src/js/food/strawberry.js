import Food from './food';

export default class Strawberry extends Food{
    constructor(matrix, coords) {
        super(matrix, coords);
        this.type = 'strawberry'
        this.score = 3;
    }
}