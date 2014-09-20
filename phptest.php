
 <?php echo '<p>Hello World</p>';
 
?>


<?php
// Make a MySQL Connection
$con=mysqli_connect("confUser2014.db.11260558.hostedresource.com","confUser2014","coffeeNbutter01!");

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

//UP NEXT INSERT INTO DB
//mysqli_query($con,"INSERT INTO users (name, score) VALUES ('Peter',35)");

//Fetching from your database table.

if(mysql_query("DESCRIBE `users`")) {
    echo "table exists";
}



?>
            






