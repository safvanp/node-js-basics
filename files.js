const fs = require('fs');

// reading files
// fs.readFile('./doc/note.txt', (err,data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// writing files
// fs.writeFile('./doc/test.txt','test is created', () =>{
//     console.log('file created and writed');
// });

// directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created.');
//     })
// } else {
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted.');
//     })
// }

// delete files
if(fs.existsSync('./doc/temp.txt')){
    fs.unlink('./doc/temp.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted.');
    });
}