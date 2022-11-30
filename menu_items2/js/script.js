window.onload = function(){

	var optsMove = {
		rotateOriantation: 1
	}


	window.onmousemove = function(e){
		var x = e.pageX;
		var y = e.pageY;
		var cx = x - window.innerWidth/2;
		var cy = y - window.innerHeight/2;

		TweenMax.to('.hamburger',0.5,{
			xPercent: cx / -15 * optsMove.rotateOriantation,
			yPercent: cy / -15 * optsMove.rotateOriantation,

			rotationX: cy /45,
			rotationY: cx / -45
		})
		TweenMax.to('.circle .menu_li', 0.5, {
			xPercent: cx / 40,
			yPercent: cy / 40,
			rotationX: cy /-90,
			rotationY: cx /55
		})
		TweenMax.to('.circle', 0.5, {
			xPercent: (cx / 70) - 50,
			yPercent: (cy / 70) - 50,
		})
		TweenMax.to('.circle2', 0.5, {
			xPercent: (cx / -200) - 50,
			yPercent: (cy / -200) - 50,
		})

	}


	var menu_li = $('.circle .menu_li');
	var menu_li_img = $('.circle .menu_li img');

	var distance = 700;

	for(var i=0; i < menu_li.length; i++){
		menu_li.eq(i).css({
			// 'left'            : (angleDistance( ((360 / menu_li.length) * i) )[0]) * 50 + 50 + '%',
			// 'top'             : (angleDistance( ((360 / menu_li.length) * i) )[1]) * 50 + 50 + '%',
		});

	}

	$('.hamburger').click(function(){
		if( $('.hamburger img').attr('src') ==  'img/icons/hamburger.svg'){
			openMenu(1);
			optsMove.rotateOriantation = -1
		}
		else{
			openMenu(0)
			optsMove.rotateOriantation = 1
		}
	});



	function openMenu(e){

		var e2 = 0;
		e2 = e == 0? e2 = 1: e2;

		if(e == 1) $('.hamburger img').attr('src', 'img/icons/exit_icon.svg');
		else       $('.hamburger img').attr('src', 'img/icons/hamburger.svg');
		
		var opts = {
			circleW:[0,400],
			circle2W:[0,450],
			circleH:[0,400],
			circle2H:[0,450],

			ct: [0.5, 0.75],


			menu_li_Scale:    [0.5   ,1 ],
			menu_li_Opacity:  [0     ,1],
			transition: [.6, .2] 
		}

		TweenMax.fromTo('.circle', opts.ct[e2], {
			width: opts.circleW[e2],
			height: opts.circleH[e2],
		},{
			width: opts.circleW[e],
			height: opts.circleH[e],
			ease: Power4.easeOut
		});

		TweenMax.fromTo('.circle2', opts.ct[e2], {
			width: opts.circle2W[e2],
			height: opts.circle2H[e2],
			opacity: opts.menu_li_Opacity[e2]
		},{
			width: opts.circle2W[e],
			height: opts.circle2H[e],
			opacity: opts.menu_li_Opacity[e],
			ease: Back.easeOut.config(1)
		})

		for(var i=0; i<menu_li.length; i++){
			var opts2 = {
				menu_li_Left:     [50+'%', (angleDistance( ((360 / menu_li.length) * i) )[0]) * 50 + 50 + '%' ],
				menu_li_Top:      [50+'%', (angleDistance( ((360 / menu_li.length) * i) )[1]) * 50 + 50 + '%' ],
			}
			TweenMax.fromTo(menu_li.eq(i), opts.transition[e2], {
				left: opts2.menu_li_Left[e2],
				top: opts2.menu_li_Top[e2],
				scale: opts.menu_li_Scale[e2],
				opacity: opts.menu_li_Opacity[e2],
			},{
				left: opts2.menu_li_Left[e],
				top: opts2.menu_li_Top[e],
				scale: opts.menu_li_Scale[e],
				opacity: opts.menu_li_Opacity[e],
				ease: Power2.easeOut
			});	
		}

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