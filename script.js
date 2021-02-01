var buttons;
var math;
var userPin;
var randomPin;
var userPinNo;
var randomPinNo;



pin();
randomNumber();
matchedOrNot();




function randomNumber() {
    buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            var text = this.innerText;
            if (text == 'C') {
                document.getElementById('customerInput').value = '';
            } else if (text == '<') {
                var newnm = document.getElementById('customerInput').value;
                var newtext = newnm.substr(0, newnm.length - 1);
                document.getElementById('customerInput').value = newtext;
            } else {
                document.getElementById('customerInput').value = document.getElementById('customerInput').value + text;
            }

        })
    }
}

function pin() {
    var pinMake = document.getElementById('pin');
    pinMake.addEventListener('click', function() {
        var number = (Math.random() * 10000 + '').split('.');
        math = number[0];
        if (math.length == 4) {
            document.getElementById('customerPin').value = math;
        } else if (math.length == 3) {
            randomNumber();
        }
        document.getElementById('notMatched').style.display = 'none';
        document.getElementById('matched').style.display = 'none';
    })
}


function matchedOrNot() {
    var submit = document.getElementById('submit');
    submit.addEventListener('click', function() {
        userPin = document.getElementById('customerInput').value;
        userPinNo = parseInt(userPin);
        randomPin = document.getElementById('customerPin').value;
        randomPinNo = parseInt(randomPin);
        if (userPinNo >= 0) {
            if (userPinNo == randomPinNo) {
                var matched = document.getElementById('matched');
                matched.style.display = 'block';
                document.getElementById('customerInput').value = " ";
                document.getElementById('customerPin').value = "";
            } else {
                var notMatched = document.getElementById('notMatched');
                notMatched.style.display = 'block';
                document.getElementById('customerInput').value = " ";
                document.getElementById('customerPin').value = "";
            }
        }
    });
};