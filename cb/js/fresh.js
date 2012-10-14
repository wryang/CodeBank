// JavaScript Document


//$(document).ready(function(){	
	//		$("#x").append('<span id="y">点击查看<\/span>');

		//	$("#x").hover(
			//	function(){
				//	$("#x").css("cursor","point");
//					$("#y").show();	
					
//				},
//				function(){
//					$("#y").hide();;
	//		});	
//});

var isOpen=false;

function detailWin(){
	if(!isOpen){
		isOpen=true;
		window.open('detailFresh.html', "","height=800, resizable=no, scrollbars=yes,width=560,left=350, top=10" );
	}
}

<!-- when the detailWin close ,how to set the isOpen false??-->
function sonWinCall(){
	isopen=false;
}