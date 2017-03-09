(function() {
    'use strict';

    function getDiv(countOfDiv) {
        var triN = 1,
            s = 1, //вспомогательная переменная для формирования треугольного числа
            numOfDiv = 0; // счетчик делителей у текущего треугольного числа

        while(numOfDiv < countOfDiv){
            numOfDiv = 0;
            ++s;
            triN += s;

            if(triN % 2 == 0){
                for(var i = 0; i < Math.sqrt(triN); i++){
                    if(triN % i == 0)
                        numOfDiv += 2;
                }
            }

        }
        return {triN: triN, numOfDiv: numOfDiv};
    }


    var obj = getDiv(500);
    console.log('number: ' + obj.triN + ', devisions: ' + obj.numOfDiv);

    var resCountOfDiv = document.querySelector('.count-of-dev');
    resCountOfDiv.innerHTML = "Треугольное число <b>" + obj.triN + "</b> имеет <b>" + obj.numOfDiv + "</b> делителей.";
})();