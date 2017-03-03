(function() {
    'use strict';

    function averageOfEven(array) {
        var sum = 0, count = 0;
        array.forEach(function(value, key, array) {
            if (value%2== 0) {
                count++;
                sum+=value;
            }
        });
        return sum/count;
    }


    var arr = [2,4,3,7,5,1];
    var average = averageOfEven(arr);
    console.log('***********************************************************************');
    console.log(' Average of even numbers');
    console.log(average);


})();