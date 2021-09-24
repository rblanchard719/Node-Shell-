const exportsFromPwd = require('./pwd') // note the relative file path
console.log(exportsFromPwd)

process.stdout.write('promt >' );
process.stdin.on('data', (data) => {
    const { cwd } = require('process');
    console.log (`Current directory : ${cwd()}`);
    const cmd = data.toString().trim();
    process.stdout.write('You typed: '+cmd);
    process.stdout.write('\npromt> '); 
} ); 

pwd();

