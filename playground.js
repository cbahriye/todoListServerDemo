console.log("hello wolrd!");

var a = 10;
console.log(a);

function doSomething() {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            a = 100;
            resolve(a);
        }, 100);
    }))

}

doSomething().then(console.log);
