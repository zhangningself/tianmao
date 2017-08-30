/*function Cart(){
	this.contentgood = $('.contentgood');
	var sidarr=[];//存放商品编号
	var numarr=[];//存放商品数量
}

Cart.prototype.init = function(){
	kong();
	$.ajax({
		type:"post",
		url:"php/cart.php",
		async:false
	})
	.done(function(d){
		var data = JSON.parse(d);
		var html = '';
		for (var i = 0;i<data.length-1;i++) {
			html+='<ul  >'+
					'<li><a href="##"><img imgindex="'+(i+1)+'" src="'+data[i].imgsrc+'"/>'+
					'</a></li>'+
					'<li><a href="##" class = "cartprice">'+
						'<span>￥</span>'+
						'<span class="goodprice">'+data[i].price+'</span>'+
					'</a></li>'+
					'<li class = "txt">'+
						'<a href="#">'+
							data[i].txt+
						'</a>'+
					'</li>'+
					'<li><a href="#" class="xl">'+
						'<span>销量：</span>'+
						'<span class="xiaoliang">'+data[i].xiaolian+'</span>'+
					'</a></li>'+
					'<button class = "addcart">加入购物车</button>'+
				'</ul>';
		}
		if (i=data.length-1) {
			html+='<ul style = "margin:0;">'+
					'<li><a href="##"><img imgindex="'+(i+1)+'" src="'+data[i].imgsrc+'"/>'+
					'</a></li>'+
					'<li><a href="##" class = "cartprice">'+
						'<span>￥</span>'+
						'<span class="goodprice">'+data[i].price+'</span>'+
					'</a></li>'+
					'<li class = "txt">'+
						'<a href="#">'+
							data[i].txt+
						'</a>'+
					'</li>'+
					'<li><a href="#">'+
						'<span>销量：</span>'+
						'<span class="xiaoliang">'+data[i].xiaolian+'</span>'+
					'</a></li>'+
					'<button class = "addcart">加入购物车</button>'+
				'</ul>';
		}
		$('.contentgood').html(html);
	});
	this.addcard();
	creategood();
	this.cartprice();
	this.dellcart();
//	totalprice();
}
Cart.prototype.addcard = function(){
	var that = this;
	this.contentgood.children('ul').hover(function(){
		$(this).css({
			'border':'1px solid red'
		});
	},function(){
		$(this).css({
			'border':'1px solid #ccc'
		});
	});
	
	$('.addcart').each(function(index,domEle){
		var num = 0;
		$(domEle).on('click',function(){
			var $index=String($('.contentgood ul').eq(index).find('img').attr('imgindex')-1);
			alert($.inArray($index,sidarr))
			if ($.inArray($index,sidarr)!=-1) {
				if ($index == $('.contentgood ul').eq(index).find('img').attr('imgindex')-1) {
					var $num=$('.wrapfootr .six').eq(index).find('input').val();
					$num++;
					numarr[sidarr.indexOf($index)]=$num;
					
					addCookie('cartnum',numarr.toString(),7);
					$('.wrapfootr .six').eq(index).find('input').val($num);
					that.cartprice();
				}
				totalprice();
				
			}else{
				sidarr.push(String($index));
				addCookie('cartsid',sidarr.toString(),7);
				numarr.push(1);
				addCookie('cartnum',numarr.toString(),7);
				addgood($index);
				that.cartprice();
			}
		});
	});
	
}
Cart.prototype.cartprice = function(){
	//算每个商品的总价
	for (var i = 0;i<$('.wrapfootr').length;i++) {
		var num=parseInt($('.wrapfootr .six').eq(i).find('input').val()) ;
		var singleprice = ($('.wrapfootr .five').eq(i).find('.price').html()).substr(1);
		var total = 0;
		total = singleprice*num;
		$('.wrapfootr .four').eq(i).find('a').html(total);
	}
	//算总价
	$('.wrapfootr ul .one').on('click',function(){
		if ($(this).find('input:checked')) {
			totalprice();
		}
	});
}
Cart.prototype.dellcart = function(){
	$('.delcar').on('click',function(){
		alert()
		cookieToArray();
		$(this).parents('ul').parents('.togetherwrap').remove();
		delgoodslist(parseInt($(this).parents('ul').find('img').attr('imgindex')-1),sidarr);
//		totalprice();
	});
}
//判断Cookie是否为空
function kong(){
	if(getCookie('cartsid')){
		$('.cartempty').css('display','none');
		$('.cartmain').show();
		
		return false;
	}else{
		$('.cartempty').css('display','block');
		return true;
	}
}
function cookieToArray(){//取出cookie转换成数组
	if(getCookie('cartsid')){
		sidarr=getCookie('cartsid').split(',');
		
	}else{
		sidarr=[];
	}
	
	if(getCookie('cartnum')){
		numarr=getCookie('cartnum').split(',');
	}else{
		numarr=[];
		
	}
}
//追加商品
function addgood(index){
	kong();
	var src = $('.contentgood ul').eq(index).find('img').attr('src');
	var i = $('.contentgood ul').eq(index).find('img').attr('imgindex');
	var txt = $('.contentgood ul').eq(index).find('.txt a').html();
	var price = $('.goodprice').eq(index).html();
	var html = '';
	html ='<div class="togetherwrap">'+
			'<div class="peoplelgoods">'+
				'<div class="wrap">'+
					'<div class="wrapfootr">'+
						'<ul>'+
							'<li class="one"><input type="checkbox" name="checksingle" class="checksingle" value="" /></li>'+
							'<li class="tw">'+
								'<a href="#">'+
									'<img imgindex="'+(i)+'" src="'+src+'" />'+
									'<span>'+txt+'</span>'+
								'</a>'+
							'</li>'+
							'<li class="thir">'+
								'<a href="#"></a>'+
							'</li>'+
							'<li class="five">'+
								'<a href="#">'+
									'<div class="fourtop">'+
										'<span style="color:#9c9c9c;text-decoration: line-through;">￥50.00</span>'+
										'<span class="price" style="color:#3c3c3c;font-weight: 700;">￥'+price+'</span>'+
										'<div>卖家促销</div>'+
									'</div>'+
								'</a>'+
							'</li>'+
							'<li class="six">'+
								'<div>'+
									'<a href="#">-</a>'+
									'<input type="text" name="numshuru" class="numshuru" value="1" />'+
									'<a href="#">+</a>'+
								'</div>'+
							'</li>'+
							'<li class="four">'+
								'<a href="#"></a>'+
							'</li>'+
							'<li class="seven">'+
								'<a href="#">'+
									'移入收藏夹'+
								'</a>'+
								'<a href="##" class="delcar">删除</a>'+
							'</li>'+
						'</ul>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'</div>';
			$('.together').append(html);
}
//页面加载看有没有cookie
	function creategood(){
		cookieToArray();
		var html = '';
		for (var i = 0;i<sidarr.length;i++) {
			var src = $('.contentgood ul').eq(sidarr[i]).find('img').attr('src');
			var txt = $('.contentgood ul').eq(sidarr[i]).find('.txt a').html();
			var price = $('.goodprice').eq(sidarr[i]).html();
			html +='<div class="togetherwrap">'+
			'<div class="peoplelgoods">'+
				'<div class="wrap">'+
					'<div class="wrapfootr">'+
						'<ul>'+
							'<li class="one"><input type="checkbox" name="checksingle" class="checksingle" value="" /></li>'+
							'<li class="tw">'+
								'<a href="#">'+
									'<img imgindex="'+(i+1)+'"  src="'+src+'" />'+
									'<span>'+txt+'</span>'+
								'</a>'+
							'</li>'+
							'<li class="thir">'+
								'<a href="#"></a>'+
							'</li>'+
							'<li class="five">'+
								'<a href="#">'+
									'<div class="fourtop">'+
										'<span style="color:#9c9c9c;text-decoration: line-through;">￥50.00</span>'+
										'<span class="price" style="color:#3c3c3c;font-weight: 700;">￥'+price+'</span>'+
										'<div>卖家促销</div>'+
									'</div>'+
								'</a>'+
							'</li>'+
							'<li class="six">'+
								'<div>'+
									'<a href="#">-</a>'+
									'<input type="text" name="numshuru" class="numshuru" value="'+numarr[i]+'" />'+
									'<a href="#">+</a>'+
								'</div>'+
							'</li>'+
							'<li class="four">'+
								'<a href="#"></a>'+
							'</li>'+
							'<li class="seven">'+
								'<a href="#">'+
									'移入收藏夹'+
								'</a>'+
								'<a href="##" class="delcar">删除</a>'+
							'</li>'+
						'</ul>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'</div>';
		}
		$('.together').html(html);
	}
//计算购物车所有商品的总价格
function totalprice(){
	var total=0;
	var num = 0;
	$('.wrapfootr ul:visible').each(function(){
		if($(this).find('.one').find('input:checkbox').is(':checked')){
			total+=parseFloat($(this).find('.four').find('a').html());
			num+=parseFloat($(this).find('.six').find('input').val());
			$('.changefooter .three .right a').addClass('check');
		}else{
			$('.changefooter .three .right a').removeClass('check');
		}
		$('#zongjia').html(num);
	});
	
	$('.changefooter .middle em').html('￥'+total);
}
//删除商品列表
function delgoodslist(sid,sidarray){
	var arr=[];
	for(var i=0;i<sidarray.length;i++){
		if(sid!=sidarray[i]){
			arr.push(parseInt(sidarray[i]));
		}
	}
	numarr.splice(sidarray.indexOf(sid),1);//改变原数组
	sidarr=arr;
	addCookie('cartsid',sidarr.toString(),7);
	addCookie('cartnum',numarr.toString(),7);
}
new Cart().init();
//new Cart().dellcart();


*/

//获取数据
$.ajax({
		type:"post",
		url:"php/cart.php",
		async:false,
		success:function(d){
			var data = JSON.parse(d);
			var html = '';
			for (var i = 0;i<data.length-2;i++) {
				html+='<ul  >'+
						'<li><a href="##"><img imgindex="'+(i+1)+'" src="'+data[i].imgsrc+'"/>'+
						'</a></li>'+
						'<li><a href="##" class = "cartprice">'+
							'<span>￥</span>'+
							'<span class="goodprice">'+data[i].price+'</span>'+
						'</a></li>'+
						'<li class = "txt">'+
							'<a href="#">'+
								data[i].txt+
							'</a>'+
						'</li>'+
						'<li><a href="#" class="xl">'+
							'<span>销量：</span>'+
							'<span class="xiaoliang">'+data[i].xiaolian+'</span>'+
						'</a></li>'+
						'<button class = "addcart">加入购物车</button>'+
					'</ul>';
			}
			if (i=data.length-2) {
				html+='<ul style = "margin:0;">'+
						'<li><a href="##"><img imgindex="'+(i+1)+'" src="'+data[i].imgsrc+'"/>'+
						'</a></li>'+
						'<li><a href="##" class = "cartprice">'+
							'<span>￥</span>'+
							'<span class="goodprice">'+data[i].price+'</span>'+
						'</a></li>'+
						'<li class = "txt">'+
							'<a href="#">'+
								data[i].txt+
							'</a>'+
						'</li>'+
						'<li><a href="#">'+
							'<span>销量：</span>'+
							'<span class="xiaoliang">'+data[i].xiaolian+'</span>'+
						'</a></li>'+
						'<button class = "addcart">加入购物车</button>'+
					'</ul>';
			}
			$('.contentgood').html(html);
			
		//存储cookie的数据
		if(getCookie('cartsid')){
			var s=getCookie('cartsid').split(',');
			var n=getCookie('cartnum').split(',');
			for(var i=0;i<s.length;i++){
				createcart(s[i],n[i]);
			}
		}
	}
});
//购物车
//如果商品存在于购物车数量累加，否则创建商品信息进购物车
var sidarr=[];//存放商品编号
var numarr=[];//存放商品数量

function cookieToArray(){//取出cookie转换成数组
	if(getCookie('cartsid')){
		sidarr=getCookie('cartsid').split(',');
	}else{
		sidarr=[];
	}
	
	if(getCookie('cartnum')){
		numarr=getCookie('cartnum').split(',');
	}else{
		numarr=[];
	}
}




$('.addcart').on('click',function(){
	var $sid=$(this).parent('ul').find('li img').attr('imgindex');//取到和按钮对应的图片下面的sid
//	alert($sid)
	cookieToArray();//获取cookie，转换成数组
	if($.inArray($sid,sidarr)!=-1){//商品列表存在:数量累加
		$('.wrapfootr:visible').each(function(){
//			alert($(this).find('.tw img').attr('sid'))
			if($sid==$(this).find('.tw img').attr('sid')){
				var $num=$(this).find('.six').find('input').val();
				$num++;
				$(this).find('.six').find('input').val($num);
				var $dj=parseFloat($(this).find('.five').find('.price').html().substr(1));
				$(this).find('.four').find('a').html(($dj*$num).toFixed(2));
				numarr[sidarr.indexOf($sid)]=$num;
				addCookie('cartnum',numarr.toString(),7);
			}
		});
		totalprice();
	}else{//不存在，创建
		sidarr.push($sid);
		addCookie('cartsid',sidarr.toString(),7);
		numarr.push(1);
		addCookie('cartnum',numarr.toString(),7);
		createcart($sid,1);//创建购物车商品列表，传入对应的参数(当前的商品编号，商品的数量)
		totalprice();
	}
});

function createcart(sid,num){
	$.ajax({
		type:"post",
		url:"php/cart.php",
		async:true,
		success:function(data){
			var data = JSON.parse(data);
			for(var i=0;i<data.length;i++){
				if(sid==data[i].id){
					var $clone=$('.wrap:hidden').clone(true);
					$clone.find('.wrapfootr').find('.tw img').attr('src',data[i].imgsrc);
					$clone.find('.wrapfootr').find('.tw img').attr('sid',data[i].id);
					$clone.find('.wrapfootr').find('.tw span').html(data[i].txt);
					$clone.find('.wrapfootr').find('.five .price').html('￥'+data[i].price);
					$clone.find('.wrapfootr').find('.six .numshuru').val(num);
					var $dprice=parseFloat(data[i].price);
					$clone.find('.wrapfootr').find('.four a').html(($dprice*num).toFixed(2));
					$clone.css('display','block');//让克隆的盒子显示出来；
					$('.peoplelgoods').append($clone);
					kong();
				}
			}
		}
	});
}
kong();
function kong(){
	if(getCookie('cartsid')){
		$('.cartempty').css('display','none');
		$('.cartmain').css('display','block');
	}else{
		$('.cartempty').css('display','block');
		$('.cartmain').css('display','none');
		
	}
}

//删除商品列表
function delgoodslist(sid,sidarray){
	var arr=[];
	for(var i=0;i<sidarray.length;i++){
		if(sid!=sidarray[i]){
			arr.push(sidarray[i]);
		}
	}
	numarr.splice(sidarray.indexOf(sid),1);//改变原数组
	sidarr=arr;
	addCookie('cartsid',sidarr.toString(),7);
	addCookie('cartnum',numarr.toString(),7);
}
//删除当个商品
$('.delcar').on('click',function(){
	cookieToArray();
	$(this).parents('.wrap').remove();
	delgoodslist($(this).parents('.wrap').find('img').attr('sid'),sidarr);
	totalprice();
});
//
//
//删除全部
$('.changefooter .tw a:first').on('click',function(){
	$('.wrapfootr:visible').each(function(){
		if($(this).find('input:checkbox').is(':checked')){
			$(this).remove();
			delgoodslist($(this).find('img').attr('sid'),sidarr);
		}
	});
	totalprice();
});
////计算购物车所有商品的总价格
//totalprice();
	//算总价
	$('.wrapfootr ul .one').on('click',function(){
		if ($(this).find('input:checked')) {
			totalprice();
		}else{
		}
	});
function totalprice(){
	var total=0;
	$('.wrapfootr:visible').each(function(){
		if($(this).find('.one').find('input:checkbox').is(':checked')){
			total+=parseFloat($(this).find('.four').find('a').html());
		}
	});
	$('.changefooter .three .middle').find('em').html('￥'+total.toFixed(2));
	$('.changefooter .three .left').find('em').html($('.wrap:visible').find('.one input:checked').length);
}
//

$("input:checkbox").on('change',function(){
	if($(this).prop('checked')){
		$('.changefooter .right a').addClass('check');
	}else{
		$('.changefooter .right a').removeClass('check');
	}
});
//全选
$('.checkall').on('change',function(){
	if($(this).prop('checked')){
		$('.wrapfootr:visible').find('.one').find('input:checkbox').prop('checked',true);
	}else{
		$('.wrapfootr:visible').find('.one').find('input:checkbox').prop('checked',false);
		
	}
	$('.checkall').prop('checked',$(this).prop('checked'));
	totalprice();
});
//
var $input=$('.wrapfootr:visible').find('.one').find('input:checkbox');
$('.wrapfootr:visible').find('.one').find('input:checkbox').on('change',function(){
	if($('.wrapfootr:visible').find('.one').find('input:checked').length==$input.size()){
		$('.checkall').prop('checked',true);
	}else{
		$('.checkall').prop('checked',false);
	}
	totalprice();
});

//改变数量++
$('.jiajia').on('click',function(){
	var $count=$(this).parents('.wrapfootr').find('.numshuru').val();
	$count++;
	if($count>=99){
		$count=99;
	}
	$(this).parents('.wrapfootr').find('.numshuru').val($count);
	$(this).parents('.wrapfootr').find('.four a').html(singlegoodsprice($(this)));
	totalprice();
	setcookie($(this));
	
});
//
//
//改变数量--
$('.jianjian').on('click',function(){
	var $count=$(this).parents('.wrapfootr').find('.numshuru').val();
	$count--;
	if($count<=1){
		$count=1;
	}
	$(this).parents('.wrapfootr').find('.numshuru').val($count);
	$(this).parents('.wrapfootr').find('.four a').html(singlegoodsprice($(this)));
	totalprice();
	setcookie($(this));
});
$('.wrapfootr .six input').on('input',function(){
	var $reg=/^\d+$/g;//只能输入数字
	var $value=$(this).val();
	if($reg.test($value)){
		if($value>=99){
			$(this).val(99);
		}else if($value<=1){
			$(this).val(1);
		}else{
			$(this).val($value);
		}
	}else{
		$(this).val(1);
	}
	$(this).parents('.wrapfootr').find('.four a').html(singlegoodsprice($(this)));
	totalprice();
	setcookie($(this));
});
//计算单个商品的价格
function singlegoodsprice(row){
	var $dj=parseFloat(row.parents('.wrapfootr').find('.five .price').html().substr(1));
var $cnum=parseInt(row.parents('.wrapfootr').find('.six input').val());
	return ($dj*$cnum).toFixed(2);
}
//
//
//将改变后的数量的值存放到cookie
function setcookie(obj){
	cookieToArray();
	var $index=obj.parents('.wrapfootr').find('.tw img').attr('sid');
	numarr[sidarr.indexOf($index)]=obj.parents('.wrapfootr').find('.numshuru').val();
	addCookie('cartnum',numarr.toString(),7);
	addCookie('cartnum',numarr.toString(),7);
}
