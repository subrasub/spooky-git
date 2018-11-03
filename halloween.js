// DARKEST #196127 -> #03001c
// DARK 	#239a3b -> #fe9600
// MEDIUM	#7bc96f -> #ffc501
// LIGHT 	#c6e48b -> #ffee4a	
// NONE 	#ebedf0 -> #eeeeee

document.querySelectorAll('rect.day[fill="#196127"]')
.forEach((el) => {
	el.setAttribute("fill", "#03001c")
});

document.querySelectorAll('rect.day[fill="#239a3b"]')
.forEach((el) => {
	el.setAttribute("fill", "#fe9600")
});

document.querySelectorAll('rect.day[fill="#7bc96f"]')
.forEach((el) => {
	el.setAttribute("fill", "#ffc501")
});

document.querySelectorAll('rect.day[fill="#c6e48b"]')
.forEach((el) => {
	el.setAttribute("fill", "#ffee4a")
});

document.querySelectorAll('rect.day[fill="#ebedf0"]')
.forEach((el) => {
	el.setAttribute("fill", "#eeeeee")
});	

document.querySelectorAll('.js-highlight-blob[fill="#7bc96f"]')
.forEach((el) => {
	el.setAttribute("fill", "#ffc501")
	el.setAttribute("stroke", "#ffc501")
});

// document.querySelectorAll('.legend li["style"="background-color: #196127"]')
// .forEach((el) => {
// 	el.setAttribute("fill", "#03001c")
// });	

