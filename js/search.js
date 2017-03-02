(function() {
    'use strict';

    function searchItem(collection, predicate) {
        var result;
        collection.every(function(value, key, collection) {
            if (predicate(value)) {
                result = value;
                return false;
            }

            return true;
        });
        return result;
    }


    var arr = [2,4,12,36,-110,8,1];
    var itemEven = searchItem(arr, function(value){
        if( value%2 == 0)
            return true;
        else
            return false;
    });

    console.log(itemEven);

    var itemOdd = searchItem(arr, function(value){
        if( value%2 != 0)
            return true;
        else
            return false;
    });
    console.log(itemOdd);


    var positive = searchItem(arr, function(value){
        if( value > 0)
            return true;
        else
            return false;
    });
    console.log(positive);

    var negative = searchItem(arr, function(value){
        if( value < 0)
            return true;
        else
            return false;
    });
    console.log(negative);


    var greater = searchItem(arr, function(value){
        if( value > 10)
            return true;
        else
            return false;
    });
    console.log(greater);


})();