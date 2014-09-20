<?php
//conection: 

// Make a MySQL Connection
mysql_connect("confUser2014.db.11260558.hostedresource.com", "confUser2014", "coffeeNbutter01!") or die(mysql_error());
mysql_select_db("confUser2014") or die(mysql_error());

//get jazzy feff from DB
$result = mysql_query("SELECT * FROM users WHERE name='Stanley McFancypants'") or die(mysql_error());

//get the first and hopefully only results
$row = mysql_fetch_array($result);

///ptinr results
	echo $row['name']. " - ". $row['score'];


?>


