let data = "Hello Purwadhika"
let dataUpper = data.toUpperCase().replace("O", "A")
let dataLower = data.toLowerCase().repeat(2)

console.log(data);
console.log(dataUpper);
console.log(dataLower);
console.log(data.charAt(8));
console.log(data.search("r"));
console.log(data.replace("a", "i"));

const message = `hello world ${data}`
const message2 = "hello world " + data
const message3 = "hello world ".concat(data)

console.log(message); //backtik bisa multiline
console.log(message2);
console.log(message3);
