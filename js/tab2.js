// JavaScript Document
var index=0;
$(document).ready(function(){
	$("#fresh").addClass("back");
	$("#fresh").click(function(){
		$("#iframe").attr("src","contactProfile.html");	
		$("#info").removeClass("back");	
		$("#schedule").removeClass("back");	
		index=0;
		});
	$("#info").click(function(){
		$("#iframe").attr("src","contactInfo.html");	
		index=1;
		$("#fresh").removeClass("back");	
		$("#schedule").removeClass("back");	
		});
	$("#schedule").click(function(){
		$("#iframe").attr("src","contactSchedule.html");
		index=2;	
		$("#fresh").removeClass("back");	
		$("#info").removeClass("back");	
		});
		
	$("#fresh").hover(
		function(){
			$("#fresh").addClass("back");	
		},
		function(){
			if(index!=0)
				$("#fresh").removeClass("back");	
			
		});
		$("#info").hover(
		function(){
			$("#info").addClass("back");	
		},
		function(){
			if(index!=1)
				$("#info").removeClass("back");	
			
		});
		$("#schedule").hover(
		function(){
			$("#schedule").addClass("back");	
		},
		function(){
			if(index!=2)
			$("#schedule").removeClass("back");	
			
		});
	});