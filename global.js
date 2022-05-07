// global object
console.log(global);

global.setTimeout(() => {
    console.log('this is time out');
}, 30000);

const int = setInterval(()=>{
    console.log('this interval');
});

console.log(__dirname);
console.log(__filename);
