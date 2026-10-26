function reverseLetters(letters) {
    console.log("Original letters:", letters);
    const reversed = [];
    for (let i = letters.length -1; i >= 0; i--) {
        reversed.push(letters[i]);
    }
    console.log("Reversed letters:", reversed);
    return reversed;
}
const alphabet = ["a", "b", "c", "d", "e"];
reverseLetters(alphabet);
