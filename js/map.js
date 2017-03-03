(function() {
    'use strict';

    function mapArray(array, callback) {
        var result = [];
        array.forEach(function(value, key, array) {
                result.push(callback(value));

        });
        return result;
    }


    var arr = [2,4,12,36,-110,8,1];

    console.log('***********************************************************************');
    console.log('Map');

    var addMap = mapArray(arr, function(value){
        return value + 1;
    });
    console.log(addMap);
    var multipleMap = mapArray(arr, function(value){
        return value * 2;
    });
    console.log(multipleMap);

})();