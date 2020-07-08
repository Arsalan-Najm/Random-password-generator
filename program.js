$(document).ready(function(){
$("#low").on("click",function(){
	$("#btn").on("click",function(){
		var char = "abcdefghijklmnopqrstuvwxyz";
		var length = 8;
		var password = "";
		for(var i=0;i<length;i++) {
			var random = Math.floor(Math.random() * char.length);
			password += char.substring(random,random+1);
			$("#password").val(password);
		}
	});
});
$("#medium").on("click",function(){
	$("#btn").on("click",function(){
		var char = "abcdefghijklmnopqrstuvwxyz1234567890";
		var length = 16;
		var password = "";
		for(var i=0;i<length;i++) {
			var random = Math.floor(Math.random() * char.length);
			password += char.substring(random,random+1);
			$("#password").val(password);
		}
	});
});
$("#high").on("click",function(){
	$("#btn").on("click",function(){
		var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@./()";
		var length = 22;
		var password = "";
		for(var i=0;i<length;i++) {
			var random = Math.floor(Math.random() * char.length);
			password += char.substring(random,random+1);
			$("#password").val(password);
		}
	});
});
$("#btn").on("click",function(){
	if($("#password").val() === "") {
		$("#password").toggleClass("active");
	}
});
});