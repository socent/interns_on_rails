$(document).ready(function() {
	 $('#headernav li a').hover(
	 	function() { $(this).animate( { opacity: 1.0, paddingTop: '35px' }, "fast" ); },
	 	function() { $(this).animate( { opacity: 1.0, paddingTop: '30px' }, "fast" ); }
	 );
	 $('#headerimg img').hover(
	 	function() { $(this).animate( { opacity: 1.0, marginTop: '5px' }, "fast" ); },
	 	function() { $(this).animate( { opacity: 0.7, marginTop: '0px' }, "fast" ); }
	 );

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
		toggle = false;        
	};

	$("#welcomebox").click(function() {
  		$("#welcomebox").fadeToggle();
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