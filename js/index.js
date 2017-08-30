//require.config({//配置模块
//	paths:{
//		//'jquery':'jquery-1.11.3'
//		'jquery':['http://ajax.sdafdsadfadsfsadfdsaf.com/ajax/jQuery/jquery-3.2.1','https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min']
//	}
//});

//
define(['jquery'], function() {
	return {
		header: function() {
			$('.navlist li').has('div').hover(function() {
				var that = $(this);
				$(this).css({
					'height': 34,
					'background': 'white',
				});
				$(this).children('div').show();
				$(this).children('a').css('border-bottom', '1px solid #c40000');
				$(this).children('div').hover(function() {
					that.children('a').css('border-bottom', 'none');
				}, function() {

				})
				$(this).children('b').removeClass('shang').addClass('xia');
			}, function() {
				$(this).css({
					'height': 33,
					'background': '#f2f2f2',
					border: 'none'
				});
				$(this).children('a').css('border-bottom', 'none');
				$(this).children('div').hide();
				$(this).children('b').removeClass('xia').addClass('shang');
			});
			
		},
		nav: function() {
			$('.fl ul li').hover(function() {
				$(this).css('background', 'white').siblings('li').css('background', '#eee');
				$('.wraplist').show().hover(function() {
					$(this).show();
				}, function() {
					$(this).hide();
				});
			}, function() {
				$('.wraplist').hide();
				$(this).css('background', '#eee');
			});
		},
		tab: function() {
			var num = 0;
			var timer = null;
			clearInterval(timer);

			function tab() {
				num++;
				if(num >= $('.banner li').length) {
					num = 0;
				}
				$('.banner li').eq(num).stop(true, true).animate({
					'opacity': 1
				}).siblings().stop(true, true).animate({
					'opacity': 0
				});
				$('.bannerwrap ol li').eq(num).addClass('active').siblings().removeClass('active');
			}
			timer = setInterval(function() {
				tab();
			}, 3000);

			$('.banner li').hover(function() {
				clearInterval(timer);
			}, function() {
				timer = setInterval(function() {
					tab();

				}, 3000);
			});
			$('.bannerwrap ol').on('mousemove', function() {
				clearInterval(timer);
			});
			$('.bannerwrap ol li').on('mousemove', function() {
				$(this).addClass('active').siblings().removeClass('active');
				num = $(this).index();
				clearInterval(timer);
				$('.banner li').eq($(this).index()).stop(true, true).animate({
					'opacity': 1
				}).siblings().stop(true, true).animate({
					'opacity': 0
				});
			})

		},
		scrollTop: function() {
			$(window).scroll(function() {
				if($(window).scrollTop() >= $('.mainheader').offset().top) {
					$('.hideheader').slideDown("normal");
				} else if($(window).scrollTop() < $('.mainheader').offset().top) {
					$('.hideheader').slideUp("normal");
				}
			});

		},
		storepic: function() {
			$.ajax({
					type: "get",
					url: "php/stropic.php",
					async: true
				})
				.done(function(data) {
					var data = JSON.parse(data);
					var html = '';
					for(var i = 0; i < 23; i++) {
						html += '<li><a href="#"><img class="lazy" data-original="' + data[i].stroesrc + '" src="styleimg/loading.gif"/></a></li>';

					}
					if(i == 23) {
						html += '<li><a href="#"><span>换一换</span></a></li>'
					}
					$('.midheadRight ul').html(html);
				});
		},
		rightshu: function() {
			$('.rightshu').css({
				height: document.documentElement.clientHeight,
			});
			$(window).scroll(function() {
				$('.rightshu').stop(true,false).animate({
					width: 35,
					height: document.documentElement.clientHeight,
				}, 600);
				$('.rightshu').css({
					
				})
			});

		},
		lognnameshow: function() {

			$(function() {
				if(getCookie('usename')) {
					$('.header .show').hide();
					$('.header .hide').show().find('em').html('Hi，' + getCookie('usename'));
				} else {

				}
				$('#back').on('click', function() {
					delCookie('usename', '', -1);
					$('.header .hide').hide();
					$('.header .show').show();
					location.reload()
				});
			});

		},
		louti: function() {
			$(window).scroll(function() {
				if($(window).scrollTop() >= 600) {
					$('.louti ul').show(600);
					$('.louti li:first').css({
						'background': '#ff0036'
					});
				} else if($(window).scrollTop() < 600) {
					$('.louti ul').hide(600);
				}
				if($(window).scrollTop() >= $('.midbottom').offset().top - 100) {
					$('.louti .betalist').css({
						'background': '#EA5F8D'
					}).siblings('li').not('#backtop,.dhlist').css({
						'background': '#666'
					});
				} else {
					$('.louti .betalist').css({
						'background': '#666'
					})
				}
				$('.louti .betalist').hover(function() {
					$(this).css({
						'background': '#EA5F8D'
					})
				}, function() {
					$(this).css({
						'background': '#666'
					})
				});
				$('.louti .betalist').on('click', function() {
					$(this).css({
						'background': '#EA5F8D'
					})
					$(window).scrollTop($('.midbottom').offset().top - 100);
				})
				if($(window).scrollTop() >= $('.ele').offset().top - 200) {
					$('.louti .playlist').css({
						'background': '#0AA6E8'
					}).siblings().not('#backtop,.dhlist').css({
						'background': '#666'
					});
				}
				$('.louti .playlist').hover(function() {
					$(this).css({
						'background': '#0AA6E8'
					});
				}, function() {
					$(this).css({
						'background': '#666'
					});
				});
				$('.louti .playlist').on('click', function() {
					$(this).css({
						'background': '#0AA6E8'
					});
					$(window).scrollTop($('.ele').offset().top - 200);
				});
				if($(window).scrollTop() >= $('.homething').offset().top - 200) {
					$('.louti .homelist').css({
						'background': '#64C333'
					}).siblings().not('#backtop,.dhlist').css({
						'background': '#666'
					});
				}
				$('.louti .homelist').hover(function() {
					$(this).css({
						'background': '#64C333'
					});
				}, function() {
					$(this).css({
						'background': '#666'
					});
				});
				$('.louti .homelist').on('click', function() {
					$(this).css({
						'background': '#64C333'
					});
					$(window).scrollTop($('.homething').offset().top - 200);
				})
				if($(window).scrollTop() >= $('.love').offset().top - 200) {
					$('.louti .lovelist').css({
						'background': '#F15453'
					}).siblings().not('#backtop,.dhlist').css({
						'background': '#666'
					});
				}
				$('.louti .lovelist').hover(function() {
					$(this).css({
						'background': '#F15453'
					});
				}, function() {
					$(this).css({
						'background': '#666'
					});
				});
				$('.louti .lovelist').on('click', function() {
					$(this).css({
						'background': '#F15453'
					});
					$(window).scrollTop($('.love').offset().top - 200);
				})
				if($(window).scrollTop() >= $('.goout').offset().top - 200) {
					$('.louti .outlist').css({
						'background': '#19C8A9'
					}).siblings().not('#backtop,.dhlist').css({
						'background': '#666'
					});
				}
				$('.louti .outlist').hover(function() {
					$(this).css({
						'background': '#19C8A9'
					})
				}, function() {
					$(this).css({
						'background': '#666'
					})
				});
				$('.louti .outlist').on('click', function() {
					$(this).css({
						'background': '#19C8A9'
					})
					$(window).scrollTop($('.goout').offset().top - 200);
				})
				if($(window).scrollTop() >= $('.child').offset().top - 200) {
					$('.louti .childlist').css({
						'background': '#F7A945'
					}).siblings().not('#backtop,.dhlist').css({
						'background': '#666'
					});
				}
				$('.louti .childlist').hover(function() {
					$(this).css({
						'background': '#F7A945'
					})
				}, function() {
					$(this).css({
						'background': '#666'
					})
				});
				$('.louti .childlist').on('click', function() {
					$(this).css({
						'background': '#F7A945'
					})
					$(window).scrollTop($('.child').offset().top - 200);
				});
				if($(window).scrollTop() >= $('.goodInfor').offset().top - 200) {
					$('.louti .guess').css({
						'background': '#ff0036'
					}).siblings().not('#backtop,.dhlist').css({
						'background': '#666'
					});
				}
				$('.louti .guess').hover(function() {
					$(this).css({
						'background': '#ff0036'
					})
				}, function() {
					
				});
				$('.louti .guess').on('click', function() {
					$(this).css({
						'background': '#ff0036'
					})
					$(window).scrollTop($('.goodInfor').offset().top - 200);
				})
				if($(window).scrollTop() >= $('.footerbottom').offset().top - 500) {
					$('.louti li').not('li:first,li:last').css({
						'background': '#666'
					});
				}
				if($(window).scrollTop() >= $('.ele').offset().top - 200) {
					$('.louti .playlist').css({
						'background': '#0AA6E8'
					}).siblings().not('#backtop,.dhlist').css({
						'background': '#666'
					});
				}
				$('.louti .playlist').hover(function() {
					$(this).css({
						'background': '#0AA6E8'
					});
				}, function() {
//					$(this).css({
//						'background': '#666'
//					});
				});
				$('.louti .playlist').on('click', function() {
					$(this).css({
						'background': '#0AA6E8'
					});
					$(window).scrollTop($('.ele').offset().top - 200);
				});
				if($(window).scrollTop() >= $('.homething').offset().top - 200) {
					$('.louti .homelist').css({
						'background': '#64C333'
					}).siblings().not('#backtop,.dhlist').css({
						'background': '#666'
					});
				}
				$('.louti .homelist').hover(function() {
					$(this).css({
						'background': '#64C333'
					})
				}, function() {
//					$(this).css({
//						'background': '#666'
//					})
				});
				$('.louti .homelist').on('click', function() {
					$(this).css({
						'background': '#64C333'
					})
					$(window).scrollTop($('.homething').offset().top - 200);
				})
				if($(window).scrollTop() >= $('.love').offset().top - 200) {
					$('.louti .lovelist').css({
						'background': '#F15453'
					}).siblings().not('#backtop,.dhlist').css({
						'background': '#666'
					});
				}
				$('.louti .lovelist').hover(function() {
					$(this).css({
						'background': '#F15453'
					})
				}, function() {
//					$(this).css({
//						'background': '#666'
//					})
				});
				$('.louti .lovelist').on('click', function() {
					$(this).css({
						'background': '#F15453'
					})
					$(window).scrollTop($('.love').offset().top - 200);
				})
				if($(window).scrollTop() >= $('.goout').offset().top - 200) {
					$('.louti .outlist').css({
						'background': '#19C8A9'
					}).siblings().not('#backtop,.dhlist').css({
						'background': '#666'
					});
				}
				$('.louti .outlist').hover(function() {
					$(this).css({
						'background': '#19C8A9'
					})
				}, function() {
//					$(this).css({
//						'background': '#666'
//					})
				});
				$('.louti .outlist').on('click', function() {
					$(this).css({
						'background': '#19C8A9'
					})
					$(window).scrollTop($('.goout').offset().top - 200);
				})
				if($(window).scrollTop() >= $('.child').offset().top - 200) {
					$('.louti .childlist').css({
						'background': '#F7A945'
					}).siblings().not('#backtop,.dhlist').css({
						'background': '#666'
					});
				}
				$('.louti .childlist').hover(function() {
					$(this).css({
						'background': '#F7A945'
					})
				}, function() {
//					$(this).css({
//						'background': '#666'
//					})
				});
				$('.louti .childlist').on('click', function() {
					$(this).css({
						'background': '#F7A945'
					})
					$(window).scrollTop($('.child').offset().top - 200);
				});
				if($(window).scrollTop() >= $('.goodInfor').offset().top - 200) {
					$('.louti .guess').css({
						'background': '#ff0036'
					}).siblings().not('#backtop,.dhlist').css({
						'background': '#666'
					});

				}
				$('.louti .guess').hover(function() {
					$(this).css({
						'background': '#ff0036'
					})
				}, function() {
//					$(this).css({
//						'background': '#666'
//					})
				});
				$('.louti .guess').on('click', function() {
					$(this).css({
						'background': '#ff0036'
					})
					$(window).scrollTop($('.goodInfor').offset().top - 200);
				})
				if($(window).scrollTop() >= $('.footerbottom').offset().top - 500) {
					$('.louti li').not('li:first,li:last').css({
						'background': '#666'
					});
				}
				$('#backtop').on('click', function() {
					$('body', 'html').stop(true,false).animate({
						'scrollTop': '0'
					}, 600)
				});
			});
		},
		midhead: function() {
			$.ajax({
					type: "post",
					url: "php/midhead.php",
					async: true
				})
				.done(function(d) {
					var data = JSON.parse(d);
					var html = '';
					for(var i = 0; i < data.length - 1; i++) {
						html += '<ul>' +
							'<li class="mindhead_head">' +
							'<i class="fp-iconfont">' + data[i].font + '</i> ' + data[i].title +
							'</li>' +
							'<li class="mindhead_midd">' +
							'<a href="#">' +
							'<div class="mindhead_title">' + data[i].setitle + '</div>' +
							'<div class="mindhead_info">' + data[i].thirdtitle + '</div>' +
							'<div class="minhead_img">' +
							'<img class="lazy" src="styleimg/loading.gif" data-original="' + data[i].picsrc + '" />' +
							'</div>' +
							'</a>' +
							'<a href="#">' +
							'<div class="mindhead_title">' + data[i].setitle2 + '</div>' +
							'<div class="mindhead_info">' + data[i].thirdtitle2 + '</div>' +
							'<div class="minhead_img">' +
							'<img class="lazy" src="styleimg/loading.gif" data-original="' + data[i].picsrc2 + '" />' +
							'</div>' +
							'</a>' +
							'</li>' +
							'</ul>';
					}
					html += '<ul style = "margin:0px;">' +
						'<li class="mindhead_head">' +
						'<i class="fp-iconfont">' + data[i].font + '</i> ' + data[i].title +
						'</li>' +
						'<li class="mindhead_midd">' +
						'<a href="#">' +
						'<div class="mindhead_title">' + data[i].setitle + '</div>' +
						'<div class="mindhead_info">' + data[i].thirdtitle + '</div>' +
						'<div class="minhead_img">' +
						'<img class="lazy" src="styleimg/loading.gif" data-original="' + data[i].picsrc + '" />' +
						'</div>' +
						'</a>' +
						'<a href="#">' +
						'<div class="mindhead_title">' + data[i].setitle2 + '</div>' +
						'<div class="mindhead_info">' + data[i].thirdtitle2 + '</div>' +
						'<div class="minhead_img">' +
						'<img class="lazy" src="styleimg/loading.gif" data-original="' + data[i].picsrc2 + '" />' +
						'</div>' +
						'</a>' +
						'</li>' +
						'</ul>';
					$('.midhead').html(html);
				});

		},
		contentload: function() {
			$.ajax({
					type: "post",
					url: "php/contentload.php",
					async: true
				})
				.done(function(d) {
					var data = JSON.parse(d);
					var html = '';
					for(var i = 0; i < data.length - 3; i++) {
						html += '<a>' +
							'<div class="title">' + data[i].txt1 + '</div>' +
							'<div class="sub">' + data[i].txt2 + '</div>' +
							'<img class="lazy" data-original="' + data[i].imgsrc + '" src="styleimg/loading.gif " alt="" />' +
							'</a>';
					}
					$('.beta').html(html);
					var htmlright = '';
					for(var i = data.length - 3; i < data.length; i++) {
						htmlright += '<a>' +
							'<div class="title">' + data[i].txt1 + '</div>' +
							'<div class="sub">' + data[i].txt2 + '</div>' +
							'<img class="lazy" data-original="' + data[i].imgsrc + '" src="styleimg/loading.gif " alt="" />' +
							'</a>';
					}
					$('.betaright').html(htmlright);
				});
		},
		pubu: function() {
			$.ajax({
					type: "post",
					url: "php/pubu.php",
					async: true
				})
				.done(function(d) {
					var data = JSON.parse(d);
					var html = '';
					for(var i = 0; i < data.length; i++) {
						html += '<ul>' +
							'<li>' +
							'<a href="#">' +
							'<img class="lazy" data-original="' + data[i].pubuimg + '" src="styleimg/loading.gif " />' +
							'</a>' +
							'</li>' +
							'<li class="goodinfo_con">' +
							'<a class="goodtxt" href="#">' + data[i].txt + '</a>' +
							'<a class="price" href="#"><span>¥</span><em>' + data[i].price + '</em><span>.0</span></a>' +
							'</li>' +
							'</ul>';

					}
					$('.goodInfor').append(html);
				});
			$('.goodInfor ul').hover(function() {
				$(this).find('img').stop(true, true).animate({
					'opacity': 0.6
				});
			}, function() {
				$(this).find('img').stop(true, true).animate({
					'opacity': 1
				});
			})
			$('.ad').show();
			var timer=setInterval(function(){
				var num=$('.ad i').html();
				num--;
				$('.ad i').html(num)
				if (num==0) {
					$('.ad p').hide(300);
					clearInterval(timer);
					$('.ad').hide(600);
					
				}
			},1000);
			$('.ad span').on('click',function(){
				$('.ad').slideUp(600);
				$('.ad p').hide(300);
				clearInterval(timer);
			});
		}
	}
});