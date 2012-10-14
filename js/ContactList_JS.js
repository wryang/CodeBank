$(document).ready(function(){
	/* This code is executed after the DOM has been completely loaded */
        $('ul.telefilms').tree({default_expanded_paths_string : '0/0/0,0/0/2,0/2/4'});
	/* Changing thedefault easing effect - will affect the slideUp/slideDown methods: */
	$.easing.def = "easeOutBounce";

	$(".funtionOfContact").hide();
	
	/* Binding a click event handler to the links: */
	$('li.button a').click(function(e){
	
		/* Finding the drop down list that corresponds to the current section: */
		var dropDown = $(this).parent().next();
		
		/* Closing all other drop down sections, except the current one */
		$('.dropdown').not(dropDown).slideUp('slow');
		dropDown.slideToggle('slow');
		
		/* Preventing the default event (which would be to navigate the browser to the link's address) */
		e.preventDefault();
	})
	
	/*when mouse move on a contact of user , it will show a background;*/
	$(".OneContact").hover(function() {
		$(this).css({"background" : "url(../images/icons/BG_OneContact.jpg) no-repeat"});
		
		$(this).css({"border-color" : "#39C9D5"});
		$(this).css({"border-width" : "2px"});
	}
	,function(){
		$(this).css({"background" : "none"});
		});
		
	$(".OneContact").click(function(){
		$(this).find(".it").addClass('hover');
		$(".hover").css({"width" : "200px" , "height" : "300px" , "background-color" : "#000"});
		});
	$(".OneContact").hover(function(){
		$(this).find(".funtionOfContact").show();
	}
	,function(){
		$(this).find(".funtionOfContact").hide();
		});
		
	$(".contactHome").hover(function(){
		$(this).attr({"src":"url(../images/icons/home_hover.png)"});
	}
	,function(){
		$(this).attr({"src":"url(../images/icons/home1.png)"});
		});
	$(".charTo").hover(function(){
		$(this).attr({"src":"url(../images/icons/char_hover.png)"});
	}
	,function(){
		$(this).attr({"src":"url(../images/icons/char.png)"});
		});
	$(".contactHome").click(function(){
		$(window.parent.document).find("#iframe_change").attr("src" , "profile2.html");
		});
/*	$(".OneContact").hover(function(){
		//$(this).addClass('toContactHome');
	//	$(".toContactHome").css({"background" : "url(../images/icons/homeBlue.png) no-repeat"})
		var img = document.createElement('img');
		img.style.width="30px";
		img.className="funtionImg";
		img.style.height="30px";
		img.style.marginLeft="30px";
		img.style.cursor="pointer";
		img.src = "url(../images/icons/homeBlue.png)";
		this.appendChild(img);
	}
	,function(){
		document.removeChild(".funtionImg");
		});*/
		
});// JavaScript Document