function func() {
    var arr = [];
    arr.push(1);
    arr.push(10);
    arr.push(200)
    arr.pop();
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
}