(function() {
    'use strict';

    function Robot() {
        var x = 0;
        var y = 0;
        var direction = 0;

        function getDirection() {
            if(direction == 0)
                return 'North';
            else if(direction==90 || direction==-270)
                return 'East';
            else if(direction==180 || direction==-180)
                return 'South';
            else if(direction==-90 || direction==270)
                return 'West'
        }

        this.move = function() {
            var worldSide = getDirection();
            switch(worldSide) {
                case 'North':
                    y++;
                break;
                case 'East':
                    x++;
                    break;
                case 'South':
                    // y--;
                    y = (y > 0) ? --y : 0;
                    break;
                case 'West':
                    // x--;
                    x = (x > 0) ? --x : 0;
                    break;
            }
        };

        this.left = function () {
            direction = (direction-90) == -360 ? 0 : direction-90;
            // direction+=90;
        };

        this.right = function () {
            direction = (direction+90) == 360 ? 0 : direction+90;

        };

        this.report = function () {
            return 'X: ' + x + ' Y: ' + y + ' Direction: ' + getDirection();
        };
    }


    var Willy = new Robot();


    var moveBtn = document.querySelector('.move-btn');
    var moveLeftBtn = document.querySelector('.left-btn');
    var moveRightBtn = document.querySelector('.right-btn');
    var reportArea = document.querySelector('.robot-ctrl-panel__report');

    moveBtn.addEventListener('click', function(e) {
        Willy.move();
        reportArea.innerHTML = reportArea.innerHTML + Willy.report() + '<br>';
    });
    moveLeftBtn.addEventListener('click', function(e) {
        Willy.left();
        reportArea.innerHTML = reportArea.innerHTML + Willy.report() + '<br>';
    });
    moveRightBtn.addEventListener('click', function(e) {
        Willy.right();
        reportArea.innerHTML = reportArea.innerHTML + Willy.report() + '<br>';
    });
})();