// JavaScript Document


function getUserScore(){
	
	//CHECK SERVER FOR USERNAME, GET SCORE
	
	var user = getCookie("username");

	
	var	userScoreFromServer = $.post("users_findUser.php", user);
	
return userScoreFromServer[0]['score'];	
}