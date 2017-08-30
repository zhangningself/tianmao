define(['jquery'], function() {
	return {
		//放大镜的图片加载，以及效果
		fdjpic:function(){
			$.ajax({
				type:"get",
				url:"php/fdj.php",
				async:false,
				success:function(data){
					var data = JSON.parse(data);
					var bigimg = '';
					var smallimg = '<ul>';
					var middleimg = '';
					for (var i = 0;i<data.length;i++) {
						smallimg+='<li ><a index='+i+' href="javascript:;">'+
								'<img src="'+data[i].minpic+'"/>'+
							'</a></li>';
					}
					smallimg +='</ul>';
					for (var i = 0;i<data.length;i++) {
						middleimg+='<img  src="'+data[i].middlepic+'"/>';
					}
					middleimg+='<div class="mask" display = "none"></div>';
					for (var i = 0;i<data.length;i++) {
						bigimg+='<img src="'+data[i].maxpic+'"/>';
					}
					$('.left_top').html(middleimg);
					$('.left_bott').html(smallimg);
					$('.fdjdetail').html(bigimg);
				}
			});
			$('.left_top').hover(function(){
				var that = $(this);
				$('.fdjdetail').show();
				$width =$('.fdjdetail').width()* $('.left_top img').width()/$('.fdjdetail img').width();
				$height =$('.fdjdetail').height()* $('.left_top img').height()/$('.fdjdetail img').height();
				$scale = $('.fdjdetail img').width()/$('.left_top img').width();
				$('.mask').width($width);
				$('.mask').height($height);
				$('.mask').show();
				$(document).on('mousemove',function(ev){
					$l = ev.pageX - that.offset().left-$('.mask').width()/2;
					$t = ev.pageY - that.offset().top-$('.mask').height()/2;
					if ($l<0) {
						$l =0;
					}else if ($l>$('.left_top img').width()-$('.mask').width()) {
						$l = $('.left_top img').width()-$('.mask').width();
					}
					if ($t<0) {
						$t =0;
					}else if ($t>$('.left_top img').height()-$('.mask').height()) {
						$t = $('.left_top img').height()-$('.mask').height();
					}
					$('.mask').css({
						left:$l,
						top:$t
					});
					$('.fdjdetail img').css({
						left:-$scale*$l,
						top:-$scale*$t
					})
				});
				
			},function(){
				$('.fdjdetail').hide();
				console.log($('.mask'));
				$('.mask').hide();
			});
	},
	//初始
		init:function(){
			$('.left_top img').eq(0).css({
				'opacity':1
			});
			$('.left_bott a').eq(0).css({
				'border': '2px solid #404040'
			});
			$('.fdjdetail img').eq(0).css({
				'opacity':1
			});
			$('.left_bott a').hover(function(){
				$(this).css({
					'border': '2px solid #404040'
				});
				$(".left_bott a").not( $(this)).css({
					'border':'none'
				});
				$('.left_top img').eq($(this).attr("index")).css({
					'opacity':1
				}).siblings().not('div').css({
					'opacity':0
				});
				$('.fdjdetail img').eq($(this).attr("index")).css({
					'opacity':1
				}).siblings().css({
					'opacity':0
				});
			},function(){
				
			})
			var top=0;
			var timer=setInterval(function(){
				top-=600;
				$('.detail_right').find('div').css({
					top:top
				})
				if (top == -1200) {
					top = 0;
				}
				
			},3000)
			$('.detail_right').hover(function(){
				clearInterval(timer);
			},function(){
				var timer=setInterval(function(){
				top-=600;
				$('.detail_right').find('div').css({
					top:top
				})
				if (top == -1200) {
					top = 0;
				}
				
			},3000)
			})
		},
		addcart:function(){
			var sidarr=[];//存放商品编号
			var numarr=[];
			
			
			$('#addgwc').on('click',function(){
				if (getCookie('cartsid')) {
					var arr=cookieToArray();
					if ($.inArray('6',arr)!=-1) {
						var index = parseInt(arr.indexOf('6'));
						var num = ToArray();
						num[index]=(++num[index]);
						addCookie('cartnum',num.toString(),7);
						$('.detailcart a span').html(num[index]);
					}else{
						var arr=cookieToArray();
						arr.push(6);
						addCookie('cartsid',arr.toString(),7);
						var index = parseInt(arr.indexOf('6'));
						var num = ToArray();
						num.push(1);
						addCookie('cartnum',num.toString(),7);
						$('.detailcart a span').html(1);
					}
				}else{
					addCookie('cartsid',6,7);
					addCookie('cartnum',1,7);
					$('.detailcart a span').html(1);
				}
			});
			var arr=cookieToArray();
			if ($.inArray('6',arr)!=-1) {
				var index = parseInt(arr.indexOf('6'));
				var num = ToArray();
				$('.detailcart a span').html(num[index]);
			}
		}
	}
})

function cookieToArray(){//取出cookie转换成数组
	if(getCookie('cartsid')){
		sidarr=getCookie('cartsid').split(',');
		return sidarr;
	}else{
		sidarr=[];
	}
}
function ToArray(){
	if(getCookie('cartnum')){
		numarr=getCookie('cartnum').split(',');
		return numarr;
	}else{
		numarr=[];
	}
}
