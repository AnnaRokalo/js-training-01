(function() {
    'use strict';

    function filterArray(array, callback) {
        var result = [];
        array.forEach(function(value, key, array) {
            if (callback(value)) {
                result.push(value);
            }
        });
        return result;
    }


    var arr = [2,4,12,36,-110,8,1];
    var evenElems = filterArray(arr, function(value){
        if( value%2 == 0)
            return true;
        else
            return false;
    });
    console.log('***********************************************************************');
    console.log('Filter array');
    console.log(evenElems);

    var positiveElems = filterArray(arr, function(value){
        if( value > 0)
            return true;
        else
            return false;
    });
    console.log(positiveElems);

    var negativeElems = filterArray(arr, function(value){
        if( value < 0)
            return true;
        else
            return false;
    });
    console.log(negativeElems);


})();