var modal1 = document.getElementById('simpleModal1');
var modal2 = document.getElementById('simpleModal2');
var modal3 = document.getElementById('simpleModal3');
var modal4 = document.getElementById('simpleModal4');
//var modalbtn = document.getElementsByClassName('modalbtn')[0];
//var closeBtn = document.getElementsByClassName('closeBtn')[0];
var socket = io.connect('http://localhost:3000');


//modalbtn.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal);
// window.addEventListener('click', clickOutside);


const modals = document.getElementsByClassName('modal');
const closeBtns = document.getElementsByClassName('closeBtn');
const page = document.getElementsByClassName('page')[0];

//window.addEventListener('click',clickOutside);


for (let key = 0; key < closeBtns.length; key++) {
	closeBtns[key].addEventListener('click', closeModal);
}


//button_continue.addEventListener('click', continue_);


function openModal(e) {
	var modal = modals[e.target.dataset.id];
	modal.style.display = "block";
}
 
function closeModal(e) {
	var modal = modals[e.target.dataset.id];
	modal.style.display = "none";
}

function clickOutside(e) {
	if (e.target == modals) {
		modals.style.display = "none";
	}
}

function continue_() {
	window.open('index2.html', '_self');
}

var but1 = document.getElementById("but1");
var but2 = document.getElementById("but2");
var but3 = document.getElementById("but3");
var but4 = document.getElementById("but4");

but1.addEventListener("click", function () {
	socket.emit("chosen character", 1);
});
but2.addEventListener("click", function () {
	socket.emit("chosen character", 2);
});
but3.addEventListener("click", function () {
	socket.emit("chosen character", 3);
});
but4.addEventListener("click", function () {
	socket.emit("chosen character", 4);

});
