<?php
//	ob_start();
//	require "conn.php";
//	if(!isset($_POST['submit']) || !isset($_POST['username']) || !isset($_POST['pwd'])){
//		exit('非法操作');
//	}else{
//		$username=@$_POST['username'];
//		$password=@$_POST['pwd'];
//	}
//	
//	$query="select * from login where username='$username' and password='$password'";
//	$result=mysql_query($query);
//	if(mysql_fetch_array($result)){
//	header('location:../index.html');//跳转
//	setcookie('usename',$username,time()+'3600*24*20','/');
//	}else{
//		exit('登录失败<a href="javascript:history.back(-1);">返回</a>');
//	}
require "conn.php";

if(isset($_POST['name'])){//前端ajax传输过来的额
	$username=$_POST['name'];
	$password=md5($_POST['pass']);
}else{
	exit('非法操作');
}

$query="select * from login where username='$username' and password='$password'";
$result=mysql_query($query);

if(mysql_fetch_array($result)){
	echo true;
}else{
	echo false;
}
?>