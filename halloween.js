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

//get the li tags under the .legend class
var legend = document.querySelectorAll('ul.legend > li');

for (var i = 0; i < lis.length; i++) {
    if (i==0) {
      lis[i].style.backgroundColor = '#eeeeee';
    } 
    else if (i==1){
      lis[i].style.backgroundColor = '#ffee4a';
    }
    else if (i==2) {
      lis[i].style.backgroundColor = '#ffc501';
    }
    else if (i==3) {
      lis[i].style.backgroundColor = '#fe9600';
    }
    else if (i==4) {
      lis[i].style.backgroundColor = '#03001c';
    }
}
