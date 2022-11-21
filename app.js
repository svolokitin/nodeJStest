/*
import module fs: file system, he is working with file of system
*/
const fs = require('fs');

fs.mkdir('./dir_file', () => {
    console.log('+dir_file created')
});
fs.writeFile('./dir_file/file1.txt', 'idi nahui', (error) => {
    error ? console.log(error) : null;
});

//reading files
fs.readFile('./dir_file/file1.txt', 'utf-8', (error, data) => {
    console.log(data);
    //make directory
    fs.mkdir('./files', () => {});
    //writing files
    fs.writeFile('./files/file2.txt', `${data} New text`, (error) => {
        error ? console.log(error) : null;
    });
});

//adding timer delete file
setTimeout(() => {
    //check file exist
    if (fs.existsSync('./dir_file/file1.txt')) {
        //delete file
        fs.unlink('./dir_file/file1.txt', (error) => {
            error ? console.log(error) : null;
        });
    }
    
    console.log('Delete file...');
}, 4000);

//delete directory
setTimeout(() => {
    //check directory exist
    if (fs.existsSync('./dir_file')) {
        //delete directory
        fs.rmdir('./dir_file', (error) => {
            //argument error show problem
            error ? console.log(error) : null;
        });
    }

    console.log('Delete directory...');
}, 6000);


/*
CHECK IN EXISTS FILE
setTimeout(() => {
    if (fs.existsSync('./files/file2.txt')) {
        console.log('File exist...');
    }
    fs.unlink('./files/file2.txt', () => {});
}, 2000);

setTimeout(() => {
    if (!fs.existsSync('./files/file2.txt')) {
        console.log('File not exist...');
    }
}, 4000);
*/

//test asynchron
console.log('Test...');