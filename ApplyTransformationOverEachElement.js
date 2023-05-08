arr =[1,2,3,4,5];
function fun(n){
    return n+1;
}

var map = function(arr,fun ) {
    for(let i=0;i<arr.length;i++){
        arr[i]=fun(i);
    }
};

map();
console.log(arr);