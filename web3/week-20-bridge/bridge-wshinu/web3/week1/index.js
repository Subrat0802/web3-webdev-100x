const crypto = require('crypto');

// // Function to find an input string that produces a hash starting with '00000'
// function findHashWithPrefix(prefix) {
//     let input = 0;
//     while (true) {
//         let inputStr = input.toString();
//         let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
//         if (hash.startsWith(prefix)) {
//             return { input: inputStr, hash: hash };
//         }
//         input++;
//     }
// }

// // Find and print the input string and hash
// const result = findHashWithPrefix('00000');
// console.log(`Input: ${result.input}`);
// console.log(`Hash: ${result.hash}`);


//--------------------------------------------------------

// Function to find an input string that produces a hash starting with '00000'
// function findHashWithPrefix(prefix) {
//     let input = 0;
//     while (true) {
//         let inputStr = "100xdevs" + input.toString();
//         let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
//         if (hash.startsWith(prefix)) {
//             return { input: inputStr, hash: hash };
//         }
//         input++;
//     }
// }

// // Find and print the input string and hash
// const result = findHashWithPrefix('00000');
// console.log(`Input: ${result.input}`);
// console.log(`Hash: ${result.hash}`);


//---------------------------------------------



// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = `
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10
` + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}

// Find and print the input string and hash
const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);


let bytes = new Uint8Array([0, 255, 127, 128]);
console.log(bytes)

// const bs58 = require('bs58');

// function base58ToUint8Array(base58String) {
//   return bs58.decode(base58String);
// }

// // Example usage:
// const base58 = base58String; // Use the previously encoded Base58 string
// const byteArrayFromBase58 = base58ToUint8Array(base58);
// console.log(byteArrayFromBase58); // Output: Uint8Array(5) [72, 101, 108, 108, 111]