<?php 


// Make a MySQL Connection
mysql_connect("confUser2014.db.11260558.hostedresource.com", "confUser2014", "coffeeNbutter01!") or die(mysql_error());
mysql_select_db("confUser2014") or die(mysql_error());


$query = "SELECT * FROM users"; 
	 
$result = mysql_query($query) or die(mysql_error());


while($row = mysql_fetch_array($result)){
	echo $row['name']. " - ". $row['score'];
	echo "<br />";
}

echo "<hr />";


?>