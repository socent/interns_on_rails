$(document).ready(function() {

	 return $(window).resize(function() {
	 	var boxHeight = $("#welcomebox").css;
	 	({
	 		"height": function() {
	 	 return $(window).height() * 0.3;
	 	}
	 });

	if (toggle=true) {
		$("#next").fadeToggle();
		$("#next").fadeToggle();
		$("#next").fadeToggle();
		$("#next").fadeToggle();
		$("#next").fadeToggle();
		$("#next").fadeIn();
		var toggle = false;        
	};

	$("#welcomebox").click(function() {
  		$("#welcomebox").fadeOut();
	});
	
	$("#aboutbox").click(function() {
		$alert("fuck me")
  		$("#aboutbox").fadeToggle();
	});
  		// click signin and display welcomebox but hide all others
	$("#signin").click(function() {
		$("#aboutbox").fadeOut();
  		$("#welcomebox").fadeIn();
	});
	$("#register").click(function() {
		$("#aboutbox").fadeOut();
  		$("#welcomebox").fadeIn(); 
	});
		
	$("#about").click(function() {
  		$("#welcomebox").fadeOut();
  		$("#aboutbox").fadeIn();

	});
});
});	