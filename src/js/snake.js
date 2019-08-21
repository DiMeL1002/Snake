import Elem from './elem';

export default class Snake extends Elem{
    constructor(matrix, coords, direction) {
        super(matrix, coords);
        this.value = 'snake';
        this.direction = direction;
        this.newDirection = direction;
        this.eaten = false;
        this.typeOfFood = '';
        this.scoreForFood = 0;
        this.alive = true;
    }

    move() {
        if(!this.alive) {
            return;
        }

        this.eaten = false;
        this.typeOfFood = '';
        this.scoreForFood = 0;
       
        let head = this.coords[0].slice();

        // Мб сократить код?????
        switch(this.newDirection) {
            case 'left':
                if (this.direction !== 'right') {
                    head[0]--;
                    this.direction = this.newDirection;
                }
                else {
                    head[0]++;
                    this.newDirection = 'right';
                }
                break;
            case 'top':
                if (this.direction !== 'bottom') {
                    head[1]--;
                    this.direction = this.newDirection;
                }
                else {
                    head[1]++;
                    this.newDirection = 'bottom';
                }
                break;
            case 'right':
                if (this.direction !== 'left') {
                    head[0]++;
                    this.direction = this.newDirection;
                }
                else {
                    head[0]--;
                    this.newDirection = 'left';
                }
                break;
            case 'bottom':
                if (this.direction !== 'top') {
                    head[1]++;
                    this.direction = this.newDirection;
                }
                else {
                    head[1]--;
                    this.newDirection = 'top';
                }
                break;
        }

        if(!this._checkAlive(head)) {
            this.alive = false;
            return;
        }

        let newHead = this.matrix.getCell(head[0], head[1]);
        if (newHead === 'wall' || newHead === 'snake') {
            this.alive = false;
            return;
        }

        if (newHead === 'food') {
            this.eaten = true;

            this.typeOfFood = this.matrix.getAttr(head[0], head[1], 'data-type');
            this.scoreForFood = parseInt(this.matrix.getAttr(head[0], head[1], 'data-score'));

            this.matrix.setAttr(head[0], head[1], 'data-type' ,'');
            this.matrix.setAttr(head[0], head[1], 'data-score' ,'');
        } else {
            let tail = this.coords.pop();
            this.matrix.setCell(tail[0], tail[1], '');
        }
        
        this.coords.unshift(head);
        this.matrix.setCell(head[0], head[1], 'snake');
    }

    _checkAlive(head) {
        return head[0] >= 1 && head[0] <= this.matrix.cols &&
                head[1] >= 1 && head[1] <= this.matrix.rows;
    }
}