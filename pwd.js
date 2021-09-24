const { cwd } = require("process");

module.exports.func = () => {
   if ( cmd === "pwd") {
    process.stdout.write(`You typed ${cmd} cwd: ${cwd()}`);
   }
}


