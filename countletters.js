const letters = ["a", " b", "a", "c", "b"];
const count = {};
for (const letter of letters) {
    count[letter] = (count[letter] || 0) + 1;
}
console.log(count);