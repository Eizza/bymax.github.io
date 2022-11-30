window.onload = function(e){
	var w = window.innerWidth;
	var h = window.innerHeight;

	function cursor ( e ) {	

		var x = e.clientX;
		var y = e.clientY;
		TweenMax.to('.cur', 0.2, {x:x, y:y, xPercent: -50, yPercent: -50, zIndex: 999999});
		TweenMax.to('.cur1', 0.4, {x:x, y:y, xPercent: -50, yPercent: -50, zIndex: 999999});
	}


	window.onmousemove = function(e){

		cursor(e)

		var x = e.pageX;
		var y = e.pageY;
		var cx = x - w/2;
		var cy = y - h/2;
		var x = {
			a: 75,
			b: 10,
			c: 20
		}
		TweenMax.to('.box', 0.1, {
			x: cx/x.a,
			xPercent: -50,
			y: cy/x.a,
			yPercent: -50,
			rotationX: -cy/(x.a / 2.5),
			rotationY: cx/(x.a / 2.5)
		});
		TweenMax.to('.c', 0.1, {
			x: -cx/x.b,
			xPercent: -50,
			y: -cy/x.b,
			yPercent: -50,
		});
		TweenMax.to('.img', 0.1, {
			x: -cx/x.c,
			xPercent: -50,
			y: -cy/x.c,
			yPercent: -50,
		});
	}
}
