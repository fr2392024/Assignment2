function countVowelsAndConsonants() {
    const input = document.getElementById('stringInput').value;
    let vowelsCount = 0;
    let consonantsCount = 0;
    for (let char of input.toLowerCase()) {
        if ('aeiou'.includes(char)) {
            vowelsCount++;
        } else if (char >= 'a' && char <= 'z') {
            consonantsCount++;
        }
    }
    document.getElementById('stringCountResult').textContent = `Vowels: ${vowelsCount}, Consonants: ${consonantsCount}`;
}

function checkPalindrome() {
    const input = document.getElementById('numberInput').value;
    const reversedInput = input.split('').reverse().join('');
    const isPalindrome = input === reversedInput;
    document.getElementById('palindromeResult').textContent = isPalindrome ? "It's a palindrome." : "It's not a palindrome.";
}

function calculateTotal() {
    const subtotal = parseFloat(document.getElementById('subtotalInput').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentageInput').value);
    const total = subtotal + (subtotal * (tipPercentage / 100));
    document.getElementById('totalResult').textContent = `Total: $${total}`;
}

