import Matrix from './js/matrix';
import Snake from './js/snake';
import Apple from './js/food/apple';
import Strawberry from './js/food/strawberry';
import Wall from './js/wall';
import Helpers from './js/helpers';

import './css/main.scss'

document.querySelector('.menu__button').addEventListener('click', function() {
    document.querySelector('.menu').classList.add('menu-hide');
    document.querySelector('.snakeGame').classList.add('snakeGame-start');

    gameStart();
});


function gameStart() {
    let map = new Matrix('.snakeGame__field');
    map.create();

    let snake = new Snake(map, [[1, 3], [1, 2], [1, 1]], 'bottom');
    snake.create();

    (new Wall(map, [[8, 8], [8, 9], [8, 10]])).create();

    createFood(Apple);

    document.addEventListener('keydown', function(e) {
        switch(e.keyCode) {
            case 37:
                snake.newDirection = 'left';
                break;
            case 38:
                snake.newDirection = 'top';
                break;
            case 39:
                snake.newDirection = 'right';
                break;
            case 40:
                snake.newDirection = 'bottom';
                break;
        }
    })

    let result = document.querySelector('.snakeGame .score');
    let score = 0;
    let eatenFood = '';

    result.innerHTML = score;

    let timer = setInterval(() => {
        snake.move()

            if (!snake.alive) {
                clearInterval(timer);
                alert('gameover');
            }

            if (snake.eaten) {
                eatenFood = snake.typeOfFood;

                score += snake.scoreForFood;
                result.innerHTML = score;

                if (eatenFood === 'apple') {
                    createFood(Apple);
                }
            }
    }, 250);

    function createFood(foodClass) {
        let randomX = Helpers.random(1, map.cols);
        let randomY = Helpers.random(1, map.rows);
        
        while (map.getCell(randomX, randomY) !== '') {
            randomX = Helpers.random(1, map.cols);
            randomY = Helpers.random(1, map.rows);
        }

        let food = new foodClass(map, [randomX, randomY]);
        food.create();

        return food;
    }

    let seconds = 0;
    setInterval(function() {
        seconds++;

        if (seconds % 5 == 0) {
            let strawberry = createFood(Strawberry);
            
            setTimeout(function() {
                strawberry.delete();
            }, 5000)
        }
    }, 1000);
}
