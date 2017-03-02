(function() {
    'use strict';

    var sortBtn = document.querySelector('.btn-sort');

    function sortArray(arr) { // gnome sorting
        var rez = arr.slice();
        var i = 1;
        while(i < rez.length) {
            if(i == 0 || rez[i - 1] <= rez[i])
                i++;
            else {
                var temp = rez[i];
                rez[i] = rez[i - 1];
                rez[i - 1] = temp;
                i--;
            }
        }
        return rez;
    }

    sortBtn.addEventListener('click', function(e) {
        var arr, rezArr;
        var inputText = document.querySelector('.original-array');
        var rezText = document.querySelector('.rezult-array');
        var data = prompt('Введите неупорядоченый массив чисел через пробел', '1 4 6 3 2 8 1 9');

        inputText.innerHTML = data;

        arr = data.split(' ');

        for (var j=0; j < arr.length; j++) {
            if(isNaN(arr[j]))
                arr[j] = 0;
            else arr[j] =  +arr[j];
        }

        rezArr = sortArray(arr);
        rezText.innerHTML  ='[' + rezArr.join('] [') + ']';
    });

})();