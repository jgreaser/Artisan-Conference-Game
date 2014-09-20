<?php
//NEED TO ADD LOGIC TO THIS ___ WHEN NUMBER COMES IN, YOU HAVE TO FIND THE OTHER NUMBER AND SWAP IT OUT

 
$username = $_GET['name'];
$newPath = $_GET['newPath'];

//$username = "Fresh Prince";
//$newSecretCode = "545787";

echo "updated username is ".$username;
echo "updated newPath is ".$newPath;

addToHandoffPath($username, $newPath);

function addToHandoffPath($name, $path){
	
// Make a MySQL Connection
mysql_connect("confUser2014.db.11260558.hostedresource.com", "confUser2014", "coffeeNbutter01!") or die(mysql_error());
mysql_select_db("confUser2014") or die(mysql_error());


//$newSecretCode = mysql_real_escape_string($newSecretCode);
mysql_query("UPDATE users SET handoffPath='$path' WHERE name='$name' LIMIT 1;") or die(mysql_error());



}


?>


