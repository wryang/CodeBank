$(document).ready(function(){

	
	/*功能菜单开始*/
		$('#backMenu').sweetMenu({
					iconSize: 150,
					easing: 'easeOutBounce',
					duration: 500,
					icons: [
						'../images/icons/notice_board.png'
					]
				});
				
				$('#exampleMenu').sweetMenu({
					iconSize: 48,
					easing: 'easeOutBounce',
					duration: 500,
					icons: [
						'../images/icons/home.png',
						'../images/icons/contacts.png',
					]
				});
		

	/*功能菜单结束*/
	
	/*SEARCH*/

	$('.search-label').click(function() {
			
						var thisFor	= $(this).attr('for');
						$('.'+thisFor).focus();
				});
			
				$('.search').focus(function() {
				
					$('.search-label').animate({ marginLeft: "150px" }, "fast");
				$('.search-label').animate({ opacity: "0.4" });
						if($(this).val() == "username")
							$(this).val() == "";
		
					}).blur(function() {
						if($(this).val() == "") {
							
							$(this).val() == "username";
							$('.search-label').animate({ marginLeft: "30px" }, "fast");
							$('.search-label').animate({ opacity: "1" });
						}
					});
		/*THE ENDS OF SEARCH*/
		
		/*STATE*/
		
		$('.stateTextarea-label').animate({ opacity: "0.4" })
					.click(function() {
						var thisFor	= $(this).attr('for');
						$('.'+thisFor).focus();
				});
			
				$('.stateTextarea').focus(function() {
				
					$('.stateTextarea-label').animate({ opacity: "0" }, "fast");
				
						if($(this).val() == "username")
							$(this).val() == "";
		
					}).blur(function() {
				
						if($(this).val() == "") {
							$(this).val() == "username";
							$('.stateTextarea-label').animate({ opacity: "0.4" }, "fast");
						}
					});
		/*THE ENDS OF STATE*/
		
		/*PROCALMATION START*/

		/*PROCALMATION ENDS*/
		$("#Tocontact").click(function(){
			$("#change_src").css({"src" :　"demo.html"})
			});
		
		$('#state_img').click(function(){
			$("#state_img").hide();
			$("#iframe_change").css({"z-index" : "0"});
			$("#stateModuel").show().animate({left : 10}, 700);
//			$("#stateModuel").animate({width:300} , "slow");
			});
			
		$("#closeState_img").hover(function(){
			$("#closeState_img").attr("src" , "../images/icons/CloseStateRed.png");
			}
			,function(){
			$("#closeState_img").attr("src" , "../images/icons/CloseStateBlue.png");	
		});
		
		$("#closeState_img").click(function(){
			$("#stateModuel").show().animate({left : -300}, 700 , function(){$("#iframe_change").css({"z-index" : "20"});$('#state_img').show();});
			//$("#stateModuel").css({"z-index" : "1"});
			
			});
			
		$("#closeWinBtn").hover(function(){
			$("#closeWinBtn").attr("src" , "../images/icons/closeRed.png");
			}
			,function(){
			$("#closeWinBtn").attr("src" , "../images/icons/closeBlue.png");	
		});	
		$("#minWinBtn").hover(function(){
			$("#minWinBtn").attr("src" , "../images/icons/minRed.png");
			}
			,function(){
			$("#minWinBtn").attr("src" , "../images/icons/minBlue.png");	
		});	
		$("#Fresh").click(function(){
			$("#iframe_change").attr("src" , "fresh.html");
			});
		$("#contacts").click(function(){
			$("#iframe_change").attr("src" , "ContactList.html");
			});	
		$("#userImg").click(function(){
			$("#iframe_change").attr("src" , "profile2.html");
			});	
		$("#personalInfo").click(function(){
			$("#iframe_change").attr("src" , "contactInfo.html");
			});	
		$("#iframe_change").find("#newid").click(function(){
			alert("d");
			$("#iframe_change").attr("src" , "contactProfile.html");
			});	
		
});// JavaScript Document