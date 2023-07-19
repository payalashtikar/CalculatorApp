
let inputString = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            inputString = eval(inputString);
            document.querySelector('input').value = inputString;
        }
        else if (e.target.innerHTML == 'C') {
            inputString = ""
            document.querySelector('input').value = inputString;
        }
        else {
            // console.log(e.target)
            inputString = inputString + e.target.innerHTML;
            document.querySelector('input').value = inputString;
        }
    })
})