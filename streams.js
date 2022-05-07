const fs = require('fs');
const { encode } = require('punycode');

const readStream = fs.createReadStream('./doc/blog.txt',{encoding:'utf8'});
const writeStream = fs.createWriteStream('./doc/blog1.txt');

// readStream.on('data',(chunk) =>{
//     console.log('-------NEW CHUNK--------');
//     console.log(chunk);
//     writeStream.write('\nNew Line\n');
//     writeStream.write(chunk);
// });

//piping

readStream.pipe(writeStream);