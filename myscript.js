$(function(){
	function newOne(){
		var len = $('#num').val();
		if (len.length == 0) {
			len = 8;
			$('#num').val(len);
		}

		if (len > 18) {
			len = 18;
			$('#num').val(len);
		}

		$('#code').text(randPassword(len));
	}

	function randPassword(len) { 
		var text=['abcdefghijklmnopqrstuvwxyz','ABCDEFGHIJKLMNOPQRSTUVWXYZ','1234567890','~!@#$%^&*_']; 

		len = len || 8;
		len = len > 18 ? 18 : len;

		var pw = ''; 

		for(i = 0; i < len; ++i) {
			var strpos = rand(0, 3); 
			pw += text[strpos].charAt(rand(0, text[strpos].length - 1)); 
		} 

		return pw; 
	}

	function rand(min, max) {
		return Math.floor(Math.max(min, Math.random() * (max+1)));
	}

	$('#newOne').click(function(){
		newOne();
	});
});