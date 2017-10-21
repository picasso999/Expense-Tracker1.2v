const promise =  new Promise((resolve,reject) => {
    setTimeout(() => {
        reject('This is my resolved data');
    },3000)
    
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
});

promise.then((data) => {
    console.log('2', data);
}).catch((e) => {
    console.log('error: ',e);
});

console.log('after');