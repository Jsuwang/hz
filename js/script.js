/*nav*/
var liDtNode=$(".nav li,.nav dt");
//console.log(lisNode);
liDtNode.hover(//导航及导航下拉菜单
	function(){
		$(this).children(".navDetails").show();//显示子导航
		if($(this).children(".navDetails").hasClass("navDetails")){//给当前选中的导航样式
			if(this.nodeName.toLocaleLowerCase()=="dt"){
				$(this).children("a").addClass("curNav");
			}
		}
	},
	function(){
		$(this).children(".navDetails").hide();//隐藏子导航
		if($(this).children(".navDetails").hasClass("navDetails")){//移开时消除样式
			if(this.nodeName.toLocaleLowerCase()=="dt"){
				$(this).children("a").removeClass("curNav");
			}
		}
	}
);
/*flash*/
var flashObj={
	flashNode:$("#flash"),
	flashLisNode:$("#flash li"),
	spansNode:$("#flash .flashBtn span"),
	leftNode:$(".leftBtn"),
	rightNode:$(".rightBtn"),
	spanCurName:"flashCur",
	spanCurNode:"#flash .flashBtn .flashCur",
	fadeInOut:function(oldPos,curPos){
		flashObj.spansNode.eq(oldPos).removeClass();
		flashObj.spansNode.eq(curPos).addClass(flashObj.spanCurName);
		flashObj.flashLisNode.eq(oldPos).stop(false,true).fadeOut();
		flashObj.flashLisNode.eq(curPos).stop(false,true).fadeIn();
	},
	aboutMoveFun:function(){
		var firstDt=$('.textDet dt:first');
		$('.textDet').append(firstDt);
	},
	toTop:function(){
		var num=document.documentElement.scrollTop+document.body.scrollTop;
		num-=30;
		if(num>0){
			document.documentElement.scrollTop=num;
			document.body.scrollTop=num;
			window.setTimeout(flashObj.toTop,5);
		}
	},
	scrollMove:$(window).scroll(function(){
		var winHeight=parseInt($(window).height());
		var scrollHeight=$(this).scrollTop();
		if(scrollHeight>=winHeight){
			$("#toTop").fadeIn();
		}else{
			$("#toTop").fadeOut();
		}
	}),
	mainLeft:$('.main-left'),
	mainLeftul:$('.main-left .mainNav'),
	lisNode:$('.main-left .mainNav li')
};

flashObj.flashNode.hover(//鼠标移入移出幻灯片范围，按钮出现消失
	function(){
		$(".leftBtn,.rightBtn").fadeIn();
	},
	function(){
		$(".leftBtn,.rightBtn").fadeOut();
	}
);

flashObj.spansNode.mouseenter(function(){//鼠标移入flash下方按钮实现淡入淡出
	if($(this).is("."+flashObj.spanCurName))
	{
		return;
	}
	var oldPos=$(flashObj.spanCurNode).index();
	var curPos=$(this).index();
	flashObj.fadeInOut(oldPos,curPos);
});

flashObj.rightNode.click(function(){//点击右边按钮实现淡入淡出
	var oldPos=$(flashObj.spanCurNode).index();
	var lastPos=flashObj.spansNode.length-1;
	var curPos=oldPos==lastPos?0:oldPos+1;
	flashObj.fadeInOut(oldPos,curPos);
});

flashObj.leftNode.click(function(){//点击左边按钮实现淡入淡出
		var oldPos=$(flashObj.spanCurNode).index();
		var lastPos=flashObj.spansNode.length-1;
		var curPos=oldPos==0?lastPos:oldPos-1;
		flashObj.fadeInOut(oldPos,curPos);
	});
if($(flashObj.rightNode).length!=0){
	flashObj.fadeDo=window.setInterval(function(){//设置自动淡入淡出
			flashObj.rightNode.click();
	},3000);
}
/*ball*/
var ballLis=$(".ballAn").children("li");//找到四个球
//console.log(ballLis);
ballLis.mouseenter(function(){//移入时触发
	if($(this).hasClass("ballPublic")){//已经有这个类了就不执行
		return;
	}
	var oldPos=$(".ballAn .ballPublic").index();//得到上一个球的位置
	var nowPos=$(this).index();//得到现在球的位置
	ballLis.eq(oldPos).removeClass("ballPublic");//移除上一个球的属性
	ballLis.eq(oldPos).removeClass("ballAn"+(oldPos+1)+"Cur");//移除上一个球的高亮属性
	ballLis.eq(nowPos).addClass("ballPublic");//给现在位置的球添加属性
	ballLis.eq(nowPos).addClass("ballAn"+(nowPos+1)+"Cur");//给现在位置的球添加高亮属性
	ballLis.eq(oldPos).stop(true).animate({width:"0px"},300);
	$(this).stop(true).animate({width:"334px"},300);
});
/*abort*/
$(".abortTextLeft").hover(//文字出现和消失
	function(){
		$(this).find("span").animate({top:"129px"},500);
		
		$(this).find("img").animate({width:"540px",height:"265px",marginTop:"-25px",marginLeft:"-12px"},500);
	},
	function(){
		$(this).find("span").animate({top:"241px"},500);

		$(this).find("img").animate({width:"491",height:"241px",marginTop:"0px",marginLeft:"0"},500);
	}
);

var aboutMove=setInterval(flashObj.aboutMoveFun,3000);//设置文字自动轮播
$('.textDet').mouseleave(function(){
	aboutMove=setInterval(flashObj.aboutMoveFun,3000);
});
$('.abortLinkLeft,.abortLinkRight').mouseleave(function(){
	aboutMove=setInterval(flashObj.aboutMoveFun,3000);
});
$('.abortLinkLeft').click(function(){//点击事件
	var firstDt=$('.textDet dt:first');
	$('.textDet').append(firstDt);
});
$('.abortLinkRight').click(function(){
	var lastDt=$('.textDet dt:last');
	$('.textDet').prepend(lastDt);
});
$('.textDet').mouseenter(function(){
	clearInterval(aboutMove);
});
$('.abortLinkLeft,.abortLinkRight').mouseenter(function(){
	clearInterval(aboutMove);
});
/*team*/

/*navRight*/
$(".btn4").click(function(){//点击按钮回到顶部
	flashObj.toTop();
});
/*toTop*/
$("#toTop").click(function(){//点击按钮回到顶部
	flashObj.toTop();
});
flashObj.scrollMove;
/*Product*/
/*productList*/
/*About*/
flashObj.lisNode.click(function(){
	$(this).parent().find(".current").removeClass();
	$(this).addClass("current");
});