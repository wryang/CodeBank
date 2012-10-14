//定义全局变量 
var timeout; 
$(document).ready(function(){ 
//找到所有的li标签 
$(".listli").each(function(index){ 

$(this).mouseover(function(){ 
//滑动门都要设置一个延迟时间，避免用户疯狂移动鼠标，导致服务器崩溃，这个很重要 
timeout =setTimeout(function(){ 
$("div.divarea").removeClass("divarea"); 
$("li.listli").removeClass("listli"); 
// $("div").eq(index).addClass("divarea"); //另一种写法是:$(div:eq(index)).addClass("divarea"); 
$("div:eq("+index+")").addClass("divarea"); 
$("li").eq(index).addClass("listli"); 
}, 
320); 
$(this).mouseout(function(){ 
clearTimeout(timeout); 
}); 
}); 
}); 
}); 