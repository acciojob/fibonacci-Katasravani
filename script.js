function fibonacci(num) {
// your code here
	if (num === 0) return 0;
    if (num === 1) return 1;

    let a = 0, b = 1, result;

    for (let i = 2; i <= num; i++) {
        result = a + b;
        a = b;
        b = result;
    }

     return result;
}
let num=prompt("enter number");
module.exports = fibonacci;
