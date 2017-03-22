(function() {
    'use strict';

//sorting array
    // gnome sorting
    function sortArray(arr) {
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

    // quick sorting
    function swap(items, firstIndex, secondIndex){
        var temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    }

    function partition(items, left, right) {
        var pivot   = items[Math.floor((right + left) / 2)], //find elem with middle index
            i       = left,
            j       = right;

        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(items, i, j);
                i++;
                j--;
            }
        }

        return i;
    }

    function quickSort(array, left, right) {
        var index;

        if (array.length > 1) {
            index = partition(array, left, right);

            if (left < index - 1) {
                quickSort(array, left, index - 1);
            }

            if (index < right) {
                quickSort(array, index, right);
            }
        }

        return array;
    }

//search elem according to condition
    function searchItem(array, condition) {
        var result;
        array.every(function(value, key, array) {
            if (condition(value)) {
                result = value;
                return false;
            }

            return true;
        });
        return result===undefined ? 'not found' : result;
    }

//filter elems
    function filterArray(array, callback) {
        var result = [];
        array.forEach(function(value, key, array) {
            if (callback(value)) {
                result.push(value);
            }
        });
        return result;
    }

//map
    function mapArray(array, callback) {
        var result = [];
        array.forEach(function(value, key, array) {
            result.push(callback(value));

        });
        return result;
    }

//find average of even
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

    var getDataBtn = document.querySelector('.btn-get-arr');
    getDataBtn.addEventListener('click', function(e) {
        var arr, resArrGnomeSort, resArrQuickSort, foundEl, resArrFilter, resArrMap, average;
        var inputArr = document.querySelector('.original-array');
        var resGnomeSortText = document.querySelector('.gnome-sorted-array');
        var resQuickSortText = document.querySelector('.quick-sorted-array');
        var resSearch = document.querySelector('.search-result');
        var resFilter = document.querySelector('.filtered-array');
        var resMap = document.querySelector('.mapped-array');
        var resAverage = document.querySelector('.average-result');

        var data = prompt('Введите неупорядоченый массив чисел через пробел', '1 4 -6 3 2 0 8 -1 9');
        inputArr.innerHTML = data;

        arr = data.split(' ');
        for (var j=0; j < arr.length; j++) {
            if(isNaN(arr[j]))
                arr[j] = 0;
            else arr[j] =  +arr[j];
        }
        //sorting
        resArrGnomeSort = sortArray(arr);
        resArrQuickSort = quickSort(arr, 0, arr.length - 1);
        resGnomeSortText.innerHTML  ='[' + resArrGnomeSort.join('] [') + ']';
        resQuickSortText.innerHTML = '[' + resArrQuickSort.join('] [') + ']';

        //search
        foundEl = searchItem(arr, function(value){
            return (value < 0);

        });
        resSearch.innerHTML  = foundEl;
        //filter
        resArrFilter =  filterArray(arr, function(value){
            return (value >= 0);
        });
        resFilter.innerHTML  ='[' + resArrFilter.join('] [') + ']';
        //map
        resArrMap = mapArray(arr, function(value){
            return value * 2;
        });
        resMap.innerHTML  ='[' + resArrMap.join('] [') + ']';
        //average of even
        average = averageOfEven(arr);
        resAverage.innerHTML = average;
    });

})();