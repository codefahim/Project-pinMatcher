const display = document.getElementById('displayRandomNumber');
const input = document.getElementById('userPin');
const submit = document.getElementById('submit');
const open = document.getElementById('open');
const closed = document.getElementById('closed');
const count = document.getElementById('count');
const generateBtn = document.getElementById('generateBtn');
const button = document.getElementById('event');

function displayNone(openDoor) {
    if (openDoor == true) {
        open.style.display = 'none';
        closed.style.display = 'none';
    } else if (openDoor == false) {
        closed.style.display = 'none';
    } else {
        open.style.display = 'none';
    }
}

let pinGenerator = () => {
    const random = Math.random() * 10000;
    const intNumber = Math.ceil(random);
    const number = '' + intNumber;
    displayNone(true);
    if (number.length < 4) {
        pinGenerator();
    } else {
        display.value = number;
    }

};


const numberPlate = () => {
    button.addEventListener('click', function(e) {
        const text = e.target.innerText;

        if (text == 'C') {
            input.value = '';
        } else if (text == '<' || text === ' ') {
            let newNumber = input.value;
            let newtext = newNumber.substr(0, newNumber.length - 1);
            input.value = newtext;
        } else {
            input.value += text;
        }

    });
    submitButton(false);
}

function submitButton(check) {
    if (display.value == '' && check == true) {
        display.value = 'Generate a Pin First';
        displayNone(true);
    } else if (display.value === input.value && check == true) {
        open.style.display = 'block';
        display.value = '';
        input.value = '';
    } else if (display.value !== input.value && input.value !== '' && input.value.length > 3 && input.value.length < 5) {
        closed.style.display = 'block';
        const closeValue = count.innerText;
        const newNumber = parseInt(closeValue);
        input.value = '';
        if (newNumber) {
            let x = newNumber - 1;
            count.innerText = x;
            if (x < 1) {
                displayNone(true);
                submit.disabled = true;
                generateBtn.disabled = true;
                closed.innerText = "Please contact with Customer service center."
                display.value = "Please contact with our Customer care on 888.";
                input.value = ''
                button.addEventListener('click', function() {
                    input.value = "Please contact with our Customer care on 888.";
                })
            }
        }


    }
}
numberPlate();