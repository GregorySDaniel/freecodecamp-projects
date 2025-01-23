const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');


const cleanInput = () => {
    let entry = input.value;
    return entry.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

const isPalindrome = (str) => {
    let left_pointer = 0;
    let right_pointer = str.length-1;
    
    while(left_pointer<right_pointer){
        if(str[left_pointer]!==str[right_pointer]){
            return false;
        }
        left_pointer++;
        right_pointer--;
    }
    
    return true;
}

const check = () => {
    if (input.value === ''){
      alert("Please input a value.");
      return;
    }

    const str = cleanInput();
    if(isPalindrome(str)){
        result.classList.remove('hidden');
        result.innerText = `${input.value} is a palindrome.`
        input.value = '';
    } else {
        result.classList.remove('hidden');
        result.innerText = `${input.value} is not a palindrome.`
        input.value = '';
    }
}
button.addEventListener('click', check);