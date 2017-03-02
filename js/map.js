(function() {
    'use strict';

    function mapArray(collection, predicate) {
        var result = [];
        collection.forEach(function(value, key, collection) {
                result.push(predicate(value));

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