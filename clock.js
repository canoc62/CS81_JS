var timeField;
var totalSeconds;
var count;
var counting = false;

function setTimer(timerId, timeInput){
	timeField = document.getElementById(timerId);
	totalSeconds = timeInput;

	updateTime();
}
	
function countDown(){
	if(totalSeconds <=0 || count === false){
	
	}
	else{
		totalSeconds -= 1;
		updateTime();
		setTimeout("countDown()",1000);
	}
}

function stopCount(){
	count = false;
}

function updateTime(){
	var second = totalSeconds;

	var minute = Math.floor(second/60);
	second -= minute*60;

	var showTime = lessThanTen(minute)+ ":" + lessThanTen(second);
		
	timeField.innerHTML = showTime;
}

function lessThanTen(time){
	if(time < 10){
		return "0" + time;
	}
	else{
		return time;
	}
}

document.getElementById("timeBtn").onclick = function(){
	setTimer("timer", document.getElementById("inputTime").value);
}

document.getElementById("clock").onclick = function() {

	var btn = document.getElementById("clock");
	if(counting === false){

		if(btn.value === "START"){
			btn.value = "STOP";
			
			count = true;
			countDown();
			counting = true;
		}
	}
	else if(counting === true){

		if(btn.value === "STOP"){
			btn.value = "START";
			stopCount();
			counting = false;
		}
	}
}
