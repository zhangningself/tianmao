<?php
//	//取函数的名称
//	$fname=isset($_GET['cb'])?$_GET['cb']:'fn';
//	//获取数据(不存在跨域)
//	$data=file_get_contents("http://suggest.taobao.com/sug?code=utf-8&q=a&_ksTS=1495356949060_2762&callback=cb");
//	//将数据放到函数名称里面返回给前端  tel($data)
//	echo $fname.'('.$data.')';
	
	$fname=isset($_GET['callback'])? $_GET['callback']:'fn';//判断括号里面的值是否存在,返回boolean
	$value=isset($_GET['value'])? $_GET['value']:'fn';//判断括号里面的值是否存在,返回boolean
	$date=file_get_contents("http://suggest.taobao.com/sug?code=utf-8&q=b&_ksTS=1495456339576_4775&callback=cb");
	echo $fname."(".$date.")";
?>