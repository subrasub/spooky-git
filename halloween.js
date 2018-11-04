// DARKEST #196127 -> #03001c
// DARK 	#239a3b -> #fe9600
// MEDIUM	#7bc96f -> #ffc501
// LIGHT 	#c6e48b -> #ffee4a	
// NONE 	#ebedf0 -> #eeeeee

//Colored rect tags
var col = document.querySelectorAll('rect.day')
for(let i=0; i<col.length; i++){
	if(col[i].getAttribute('fill') == "#196127")
		col[i].setAttribute("fill", "#03001c")
	else
	if(col[i].getAttribute('fill') == "#239a3b")
		col[i].setAttribute("fill", "#fe9600")
	else
	if(col[i].getAttribute('fill') == "#7bc96f")
		col[i].setAttribute("fill", "#ffc501")
	else
	if(col[i].getAttribute('fill') == "#c6e48b")
		col[i].setAttribute("fill", "#ffee4a")
	else
	if(col[i].getAttribute('fill') == "#ebedf0")
		col[i].setAttribute("fill", "#eeeeee")
}

//get the li tags under the .legend class
var legend = document.querySelectorAll('ul.legend > li');
legend[0].style.backgroundColor = '#eeeeee';
legend[1].style.backgroundColor = '#ffee4a';
legend[2].style.backgroundColor = '#ffc501';
legend[3].style.backgroundColor = '#fe9600';
legend[4].style.backgroundColor = '#03001c';


//Contribution Graph 
document.querySelectorAll('.js-highlight-blob')[0].setAttribute("fill", "#ffc501")
document.querySelectorAll('.js-highlight-blob')[0].setAttribute("stroke", "#ffc501")

//Axis of the graph
var axis = document.querySelectorAll('.activity-overview-axis')
for(let i=0; i<axis.length; i++){
	axis[i].style.stroke = "fe9600"
}

//Points of the graph
var point = document.querySelectorAll('.activity-overview-point')
for(let i=0; i<point.length; i++){
	point[i].style.stroke = "fe9600"
}

//Progress bar 
var progress = document.querySelectorAll('.progress-bar')
for(let i=0; i<progress.length; i++){
	if(progress[i].style.backgroundColor = "#196127")
		progress[i].style.backgroundColor = "#03001c"
	else
	if(progress[i].style.backgroundColor = "#239a3b")
		progress[i].style.backgroundColor = "#fe9600"
	else
	if(progress[i].style.backgroundColor = "#7bc96f")
		progress[i].style.backgroundColor = "#ffc501"
	else
	if(progress[i].style.backgroundColor = "#c6e48b")
		progress[i].style.backgroundColor = "#ffee4a"
	else
	if(progress[i].style.backgroundColor = "#ebedf0")
		progress[i].style.backgroundColor = "#eeeeee"
}
