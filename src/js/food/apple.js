import Food from './food';

export default class Apple extends Food{
    constructor(matrix, coords) {
        super(matrix, coords);
        this.type = 'apple'
        this.score = 1;
    }
}