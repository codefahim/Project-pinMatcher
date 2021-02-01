var buttons;
var math;
var userPin;
var customPin;
var userPinNo;
var randomPinNo;
var customInput;




pin();
// randomNumber();
matchedOrNot();

// collect custom pin system1
var eventSystem = document.getElementById('event');
eventSystem.addEventListener('click', function(event) {
    var text = event.target.innerText;
    customInput = document.getElementById('customerInput');
    if (text == 'C') {
        customInput.value = '';
    } else if (text == '<') {
        var newNumber = customInput.value;
        var newtext = newNumber.substr(0, newNumber.length - 1);
        customInput.value = newtext;
    } else {
        customInput.value = customInput.value + text;
    }
})

// Create custom pin Number by user || // collect custom pin system2

// function randomNumber() {
//     buttons = document.querySelectorAll('.button');
//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].addEventListener('click', function() {
//             var text = this.innerText;
//             customInput = document.getElementById('customerInput');
//             if (text == 'C') {
//                 customInput.value = '';
//             } else if (text == '<') {
//                 var newNumber = customInput.value;
//                 var newtext = newNumber.substr(0, newNumber.length - 1);
//                 customInput.value = newtext;
//             } else {
//                 customInput.value = customInput.value + text;
//             }

//         })
//     }
// }
// Create custom pin Number by user  function Close;


// Create random pin number 

function pin() {
    var pinMake = document.getElementById('pin');
    pinMake.addEventListener('click', function() {
        var number = (Math.random() * 10000 + '').split('.');
        math = number[0];
        customPin = document.getElementById('customerPin');
        if (math.length == 4) {
            return customPin.value = math;
        } else
        if (math.length <= 3) {

            return randomNumber();
        }
        document.getElementById('notMatched').style.display = 'none';
        document.getElementById('matched').style.display = 'none';
    })
}
// Create random pin number  close here.

// Pin matched check from here 

function matchedOrNot() {
    var submit = document.getElementById('submit');
    submit.addEventListener('click', function() {
        userPin = customInput.value;
        userPinNo = parseInt(userPin);
        randomPin = customPin.value;
        randomPinNo = parseInt(randomPin);
        if (userPinNo >= 0) {
            if (userPinNo == randomPinNo) {
                var matched = document.getElementById('matched');
                matched.style.display = 'block';
                customInput.value = " ";
                customPin.value = "";
            } else {
                var notMatched = document.getElementById('notMatched');
                notMatched.style.display = 'block';
                customInput.value = " ";
                customPin.value = "";
            }
        }
    });
};
// Pin matched close from here