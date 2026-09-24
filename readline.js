const { resolve } = require("dns");
const readline  = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

// rl.question("Whats is your name?",(res) => { //traditional old method
//     console.log(`Hello ${res}`);
//     rl.close();
// })  


function askQ(query){
    return new Promise((resolve) => {
        rl.question(query,(res) => {
            resolve(res);
        });
    });
}

async function main() {
    const name = await askQ("whats your name? ");
    const age = await askQ("whats your name? ");
    console.log(`hello! ${name}. your age is : ${age}`);
    rl.close();
}
main();