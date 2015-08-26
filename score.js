var teamScore1 = 0;
var teamScore2 = 0;
var temp;

function add_score1(){
	teamScore1++;
	document.getElementById('teamScore1').innerHTML = teamScore1;
}

function add_score2(){
	teamScore2++;
	document.getElementById('teamScore2').innerHTML = teamScore2;
}

function remove_score1(){
	teamScore1--;
	document.getElementById('teamScore1').innerHTML = teamScore1;
}

function remove_score2(){
	teamScore2--;
	document.getElementById('teamScore2').innerHTML = teamScore2;
}

function switchPic1(x){
	$("header").find("#headPic1").attr('src',"CS81kershaw.png");
	
}

function switchBack1(x){
	$("header").find("#headPic1").attr('src',"CS81dodgers.jpg");
}

function switchPic2(x){
	$("header").find("#headPic2").attr('src',"CS81kobe.jpg");
	
}

function switchBack2(x){
	$("header").find("#headPic2").attr('src',"CS81lakers.jpg");
}

function switchPic3(x){
	$("header").find("#headPic3").attr('src',"CS81woods.jpg");
	
}

function switchBack3(x){
	$("header").find("#headPic3").attr('src',"CS81usc.jpg");
}

function switchPic4(x){
	$("header").find("#headPic4").attr('src',"CS81beastmode.jpg");
	
}

function switchBack4(x){
	$("header").find("#headPic4").attr('src',"CS81seahawks.jpg");
}

function switchPic5(x){
	$("header").find("#headPic5").attr('src',"CS81blake.jpg");
	
}

function switchBack5(x){
	$("header").find("#headPic5").attr('src',"CS81clippers.svg");
}

