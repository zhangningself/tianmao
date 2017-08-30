var zn = {};
zn.reg ={
	jy:function(){
		var $st1 = true;
		var $st2 = true;
		var $st3 = true;
		var $st4 = true;
		var $st5 = true;
		$('#phone').on('input',function(){
			var $phone = $('#phone').val();
			if (isNaN($phone)) {
				$('.mainwrap em').html('手机号必须是数字').css('color','red');
			}else if($phone.length!=11 ){
				if($phone.length == 0 ){
					$('.mainwrap em').html('手机号不能为空').css('color','red');
				}
				$('.mainwrap em').html('手机号只能是11位').css('color','red');
			}else{
				$('.mainwrap em').html('√').css('color','green');
				$st1 = false;
			}
			
		});
		$('#phone').on('blur',function(){
			console.log($st1);
		})
		
		$('#password').on('input',function(){
			var $pwd = $('#password').val();
			if ($pwd.length >= 6 && $pwd.length <= 20) {
				var $num = /\d+/g;
				var $charset = /[a-zA-Z]+/g;
				var $other = /[\W\_]+/g;
				var $count = 0;
					if($num.test($pwd)) {
						$count++;
					}
					if($charset.test($pwd)) {
						$count++;
					}
					if($other.test($pwd)) {
						$count++;
					}
					console.log($count);
					switch($count) {
						case 1:
							$('.password li:first')
							.css('background','red').html('低')
							.siblings('li').css('background','white')
							.html('');
							$('.password span').html('').css('color','green');
							break;
						case 2:
							$('.password li:odd')
							.css('background','orange').html('中')
							.siblings('li').css('background','white')
							.html('');
							$('.password span').html('√').css('color','green');
							$st2 = false;
							break;
						case 3:
							$('.password li:last')
							.css('background','green').html('高')
							.siblings('li').css('background','white')
							.html('');
							$('.password span').html('√').css('color','green');
							$st2 = false;
							break;
						default:
							break;
					}
				
			}else {
				$('.password span').html('密码长度不符').css('color','red') ;
			}
			if ($pwd =='') {
				$('.password span').html ('请输入密码').css('color','red');
			}
		});
	
	$('#password').on('blur',function(){
			console.log($st2);
		})
			$('#re_pwd').on('input',function(){
			var $pwd = $('#re_pwd').val();
			if ($pwd.length >= 6 && $pwd.length <= 20) {
				var $num = /\d+/g;
				var $charset = /[a-zA-Z]+/g;
				var $other = /[\W\_]+/g;
				var $count = 0;
					if($num.test($pwd)) {
						$count++;
						console.log('haha')
					}
					if($charset.test($pwd)) {
						$count++;
						console.log('haha1')
					}
					if($other.test($pwd)) {
						$count++;
						console.log('haha2')
					}
					console.log($count);
					switch($count) {
						case 1:
							$('.againpassword li:first')
							.css('background','red').html('低')
							.siblings('li').css('background','white')
							.html('');
							$('.againpassword span').html('').css('color','green');
							break;
						case 2:
							$('.againpassword li:odd')
							.css('background','orange').html('中')
							.siblings('li').css('background','white')
							.html('');
							$('.againpassword span').html('√').css('color','green');
							$st3 = false;
							break;
						case 3:
							$('.againpassword li:last')
							.css('background','green').html('高')
							.siblings('li').css('background','white')
							.html('');
							$('.againpassword span').html('√').css('color','green');
							$st3 = false;
							break;
						default:
							break;
					}
				
			}else {
				$('.againpassword span').html('密码长度不符').css('color','red') ;
			}
			if ($pwd =='') {
				$('.againpassword span').html ('请输入密码').css('color','red');
			}
		});
		$('#re_pwd').on('blur',function(){
			console.log($st3);
			if ($('#password').val() != $(this).val()) {
				$('.againpassword span').html('密码前后不一样').css('color','red');
			}else if ($('#password').val() == $(this).val()){
				$st4 = false;
			}
			console.log($st4);
		});
		var usereg=/^([\u4e00-\u9fa5]|[a-zA-Z0-9\_\-]){3,15}$/;
		$('#loginName').on('blur',function(){
			var username=$(this).val();
			if(username!=''){
				if(usereg.test(username)){
					$.ajax({
						type:'post',
						url:'php/reg.php',
						data:{
							name:username
						},
						success:function(data){
							if(!data){
								$('.loginName span').css('color','green').html('√');
								$st5 = false;
							}else{
								$('.loginName span').css('color','red').html('该用户名已经存在');
								$st5=true;
							}
						}
					});
				}else{
					$('.loginName span').css('color','red').html('格式不正确');
					$st5=true;
				}
			}else{
				$('.loginName span').css('color','red').html('用户名不能为空');
				$st5=true;
			}
		});
		
		$('form').on('submit',function(){
			console.log($st5);
			console.log($st1);
			console.log($st2);
			console.log($st3);
			console.log($st4);
			
			
			
			if($st5 || $st1 || $st2 || $st3 || $st4){
				return false;//阻止按钮跳转。
			}
		});
		
	}
	}
	
	

zn.reg.jy();

					