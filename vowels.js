const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const vowels = ["A", "E", "I", "O", "U"];
for (const letter of alphabets) {
    if (vowels.includes(letter)) {
        console.log(letter);
    }
}