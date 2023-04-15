<?php
// Enter your Host, username, password, database below.
// I left password empty because i do not set password on localhost.
$con = mysqli_connect("u7g.h.filess.io","qfsledger_represent","0897e61b2410a5872b00e9340350e485857b05de","qfsledger_represent");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
?>
