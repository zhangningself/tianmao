<?php
	require "conn.php";
//	if(!isset($_POST['submit'])){
//		exit('非法操作');
//	}
	$query="select * from fdj";
	$result=mysql_query($query);
	$j = 0;
	for($i =0;$i<mysql_num_rows($result);$i++){
		$array[$j++] = mysql_fetch_array($result,MYSQL_ASSOC);
	}
	echo json_encode($array);
?>