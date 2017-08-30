/*function loginYz(){
	this.bstop=true;//不通过
}
loginYz.prototype.init = function(){
		var that = this;
		var $reg = /^[\w]{3,15}$/;
		$('#username').on('blur',function(){
			if($('#username').val()==''){
				$('.txt span').html('用户名不能为空');
				$('.txt span').css('color','red');
				this.bstop=true;
			}
		})
		$('#username').on('focus',function(){
			$('.txt span').html('');
		});
		$('#username').on('input',function(){
			var $name = $('#username').val();
			var $pwd = $('#password').val();
			
			if ($reg.test($('#username').val())) {
					$('.txt span').html('√').css('color','green');
					that.bstop=false;
			}else{
				that.bstop=true;
				$('.txt span').html('用户名格式不正确').css('color','red');
			}
		})
		
		$('form').on('submit',function(){
			if(that.bstop){
				return false;//阻止按钮跳转。
			}
		});
	
}
new loginYz().init();*/

function addCookie(key, value, day) {
	var date = new Date(); //创建日期对象
	date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
	document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
}
$('#sub').on('click', function() {
	var $username = $('#username').val();
	var $password = $('#pwd').val();
	$.ajax({
		type: 'post',
		url: 'php/login.php',
		data: { //将用户名和密码传输给后端
			name: $username,
			pass: $password
		},
		success: function(data) { //请求成功，接收后端返回的值
			if(!data) { //用户名或者密码错误
				$('.pwd').find('span').html('密码错误！');
				return $('.pwd').find('input').val('');
			} else { //成功
				addCookie('usename', $username, 7);
				window.open(' index.html');
			}
		}

	})
});

qiehuan();

function qiehuan(){
	$('.loginSwitch').on('click',function(){
		$('i').toggleClass('show');
		$('.loginmain form').toggleClass('show');
		$('.erweima').toggleClass('erweimhide');
	});
}
