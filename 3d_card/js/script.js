window.onload = function(){
	$('.menubar div').hover
	(function(){
		var index = $('.menubar div').index(this);
		TweenMax.to(  $('.menubar2 div').eq(index) , 0.25, {
			scale: 0.5
		});
	}, 
	function(){
		var index = $('.menubar div').index(this);
		TweenMax.to(  $('.menubar2 div').eq(index) , 0.5, {
			scale: 1
		});
	});

	var objSize = $('.menubar div').width();

	window.onmousemove = function(e){
		var x = e.pageX;
		var y = e.pageY;
		var cx = x - window.innerWidth/2;
		var cy = y - window.innerHeight/2;

		for(var i=0; i<$('.menubar div').length; i++){

			var objX    = $('.menubar div').eq(i).offset().left + objSize/2;
			var objY    = $('.menubar div').eq(i).offset().top;

			var d = distance( objX, objY, x, y );

			if(d < 1500){
				TweenMax.to(  $('.menubar div').eq(i) , 0.25, {
					xPercent : (x - objX) / (-2 - (d / 50)),
					yPercent : (y - objY) / (-2 - (d / 50)),
				});
				TweenMax.to(  $('.menubar2 div').eq(i) , 0.25, {
					xPercent : (x - objX) / (-1 - (d / 90)),
					yPercent : (y - objY) / (-1 - (d / 90)),
				});
			}
		}
	}
	

// ----------------------------



function distance(x1, y1, x2, y2){
	var a = Math.pow( (x2-x1) , 2);
	var b = Math.pow( (y2-y1) , 2);
	var d = Math.sqrt( a + b );
	return d;
}

function angleDistance(angle, distance){

	var an = (Math.random()*360).toFixed(0);

	var e = angle * (Math.PI / 180);

	var x = Math.cos(e);
	var y = Math.sin(e);
	var arr = [x, y];
	return arr;
}

}