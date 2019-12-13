var settings = {
	menu: {
		open : false,
	},
	w: window.innerWidth,
	h: window.innerHeight,
	sc: 0
}


window.onload = function(e) {start()};
function start (e) {
	menu(0);
	draw(); //canvas

	// EVENTS	
	mousemove();
	scroll( true, 0 );
}
window.onresize = ( e ) => {
	settings.w = window.innerWidth;
	settings.h = window.innerHeight;
}

function mousemove () {
	window.onmousemove = function ( e ) {
		// cursor(e, false);
		cursor(e, isMobile());
	}
}

	
	
function scroll ( e, sc ) {
		if( e  == false) return 0;
	window.onscroll = function ( e ) {
		var sc = settings.sc = window.scrollY;;
		scene3d(sc);
	}
}
function scene3d ( sc ) {
	var length   = (settings.w >= settings.h) ? settings.w : settings.h;
	var divition = (settings.w <= settings.h) ? settings.w : settings.h;
	var x        = (divition / length) * 40;
	if( ( (sc / x) + 75 ) > 105) return 0;
	TweenMax.to('.b2img', 0.1, {
		rotationX: (sc / x) + 75,
		zIndex: () => {
			var a = (sc / x) + 75;
			cc(a)
			if(a > 100) return 5
			else return -1
		}
	});

}

function cursor ( e, active ) {
	if(active == false) {
		$('.cur, .cur1').remove();
		return 0;
	}
	var x = e.clientX;
	var y = e.clientY;
	TweenMax.to('.cur', 0.2, {x:x, y:y, xPercent: -50, yPercent: -50, zIndex: 999999});
	TweenMax.to('.cur1', 0.4, {x:x, y:y, xPercent: -50, yPercent: -50, zIndex: 999999});
}



function menu ( e ) {

	openClose( e || 0 );
	// var hamburger = document.querySelector('.hamburger');
	var linksli   = 0;

	// hamburger.onclick = () => {
	// 	if( hamburger.checked == true ) { openClose( 1 ); }
	// 	if( hamburger.checked == false ){ openClose( 0 ); }
	// }

	$('#hamburger').click(function(){
		$(this).toggleClass('open');
		var active = $(this).toggleClass('')[0].getAttribute('class');
		cl( (active == 'open') ? openClose(1) : openClose(0) )
	});

	$('.links li').hover( function () { 
		var index = $('.links li').index(this);
		var posX  = $('.links li').eq(index).position().left;
		var arr = ['@bymax.design', '/maks.abishev', '+7(775) 783 10-81', 'abishev.sdc@gmail.com']
		$('.linkName p').text(arr[index])
		TweenMax.to('.linkName img', 0.2, { left: posX});
		TweenMax.to('.linkName', 0.5, { opacity: 1});
	}, function () {
		var index = $('.links li').index(this);
		TweenMax.to('.linkName', 0.5, { opacity: 0});
	});

	function openClose ( e ){
		var arr = [ 0, -100 ];
		TweenMax.to('.menu', .5 , {xPercent: arr[e], ease: Power4.easeOut});
	}
}

function preloader (e) {
	setTimeout(function(){
		var pr = document.querySelector('.preloader');
		if ( pr.classList.contains('done') ) {
			console.log('asd');
		}
		pr.classList.add('done');
		setTimeout(function(){ pr.remove() }, 1000)
	}, 1000);
}
