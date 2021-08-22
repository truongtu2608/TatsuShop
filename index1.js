window.onscroll = function() {scrollFunction()};
	function scrollFunction() {

		if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
					document.getElementById("top").style.display = "block";} 
		else {
			document.getElementById("top").style.display = "none";}
		}

			document.getElementById('top').addEventListener("click", function(){
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		});
	