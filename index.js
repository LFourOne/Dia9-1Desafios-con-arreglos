function alwaysHungry(arr) {
    var hallarComida = false;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "comida"){
            console.log("Delicioso!");
            hallarComida = true;
        }                                           // 1
    }
        if(hallarComida == false){
            console.log("Tengo hambre")
        }
}

alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
alwaysHungry([4, 1, 5, 7, 2]);  

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 5){                            // 2
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

function betterThanAverage(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
        sum = sum / arr.length;
    var count = 0
    for(var i = 0; i < arr.length; i++){            // 3
        if(arr[i] > sum){
            count = count + 1
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

function reverse(arr) {
    var vuelta = []
    for(var i = arr.length - 1; i >= 0; i--){
        vuelta.push(arr[i])                         // 4
    }
        arr = vuelta;
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i = 2; i <= 10-1; i++){
        var newfib = fibArr[i - 1] + fibArr[i - 2]      // 5
        fibArr.push(newfib);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
