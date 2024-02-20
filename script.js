function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

const checkBtn = document.getElementById('check-btn');
checkBtn.addEventListener('click', function() {
  const textInput = document.getElementById('text-input');
  const inputValue = textInput.value.trim();
  if (inputValue === '') {
      alert('Please input a value');
  } else {
      const resultElement = document.getElementById('result');
      if (isPalindrome(inputValue)) {
          resultElement.textContent = inputValue + ' is a palindrome';
      } else {
          resultElement.textContent = inputValue + ' is not a palindrome';
      }
  }
});
