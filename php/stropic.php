<?php
	require "conn.php";
	$query= 'SELECT * FROM storepic';
	$result = mysql_query($query);
	$j = 0;
	for ($i=0; $i < mysql_num_rows($result); $i++) { 
		$array[$j++] = mysql_fetch_array($result,MYSQL_ASSOC);
	}
	echo json_encode($array);
?>