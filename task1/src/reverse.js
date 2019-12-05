class StringReverse {
    constructor(){}
    greeting() {
        const welcom = 'Hi wanderer, enter a word to get a reverse!'
        process.stdout.write(`${welcom}`);
        process.stdout.write(" > ");
    }

    init() {
        process.stdin.on('data', (string) => {
            const reverseOfString = string.reverse();
            process.stdout.write(`\n > ${reverseOfString.toString().trim()} \n\n`);
        });
    }
};

module.exports = StringReverse;