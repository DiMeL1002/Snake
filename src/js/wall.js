import Elem from './elem';

export default class Wall extends Elem{
    constructor(matrix, coords) {
        super(matrix, coords);
        this.value = 'wall';
    }
}