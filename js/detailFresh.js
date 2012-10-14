// JavaScript Document
var action="展开回复";
function replyAdjust(){
	  if(action==="展开回复")
	  	action="收起回复";
	  else action="展开回复";
	  $(".adjustReply").html(action);
 	  $(".replyBlock").slideToggle("slow");
  
}

function closeThisWin(){
 	window.opener.sonWinCall();
}

function submit(){
	
	var val=$(".textarea").val();
//	var myReply=$("#myReply").val();
//	$("#myReply").append(myReply);
	$("#mySubmit").html(val);
	$("#myReply").slideToggle("slow");
	$(".textarea").val(""); 
	if(action==="展开回复")
		replyAdjust();
}


