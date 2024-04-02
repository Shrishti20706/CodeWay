let string = "";

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {

    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;

        } else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;

        } else if (e.target.innerHTML == 'C') {
            string = string.slice(0, -1); // Remove the last character
            document.querySelector('input').value = string;

        }
        else if (e.target.innerHTML == 'x²') {
            let inputValue = document.querySelector('input').value;
            if (inputValue !== '') {
                let squaredValue = Math.pow(parseFloat(inputValue), 2);
                document.querySelector('input').value = squaredValue;
                string = squaredValue.toString();
            }

        } else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;

        }

    })
})
