var x = {
	w: window.innerWidth,
	h: window.innerHeight,
	sc: 0
}
window.onload = function(e) {start()};
function start (e) {

	console.log("%cAbishev M.","color:#0f0; font-family:sans-serif,Helvetica, arial; font-weight:bold");

	menu(0);
	draw(); //canvas

	// EVENTS	
	mousemove();
	scroll( 1, 0 );
	c4(isMobile());
}

window.onresize = ( e ) => {
	x.w = window.innerWidth;
	x.h = window.innerHeight;
}

function mousemove () {
	window.onmousemove = function ( e ) {
		var x = e.pageX;
		var y = e.pageY;
		var cx = e.clientX;
		var cy = e.clientY;
		cursor(e, isMobile(), cx, cy);
		overlist(isMobile(), x, y);
	}
	document.querySelector('.overlist').ontouchmove = function(e){
		var x1 = e.touches[0].pageX;
		var y1 = e.touches[0].pageY;
		var x2 = e.touches[1].pageX || x1;
		var y2 = e.touches[1].pageY || y1;
		var x = ( (x1/2) + (x2/2) );
		var y = ( (y1/2) + (y2/2) );
		scrollHidden(1);
		overlist(e, x , y);
		console.log( e.touches.length )

	}
	document.querySelector('.overlist').ontouchend = function(e){
		overlist(0);
		scrollHidden(0);
	}
}

function scrollHidden ( e ) {
	var html = document.documentElement;
	var description = (e == 1) ? 'hidden' : 'visible';
	html.style.overflowY = description;
}

function scroll ( e, sc ) {
	if( e == false) return 0;
	window.onscroll = function ( e ) {
		var sc = x.sc = window.scrollY;
		scene3d(sc);


		// if (sc > ) {}
		// console.log(sc)
		if ( sc > 100 ) TweenMax.to('.intfc_scroll', 0.3, {opacity:0, yPercent: -sc/5, display:"none"})
			else  			TweenMax.to('.intfc_scroll', 0.3, {opacity:1, yPercent: -sc/5, display:"block"})
				
				var hr = document.getElementsByTagName('hr');
			var htop, bool;
			for (var i = 0; i < hr.length; i++ ) {
				htop = hr[i].offsetTop - window.innerHeight;
				bool = ( hr[i].offsetWidth > 0 ) ? 0 : 1;
				if ( (sc * bool)  >  htop + -50) {
					TweenMax.to(hr[i], (0.75), {opacity: 1, width: '40%', ease: Back.easeOut.config(1.7)}) 
				}
				else if ( sc  <  htop + -50 ) {
					TweenMax.to(hr[i], (0), {opacity: 0, width: '0%'}) 
				}
			}

			var header = document.getElementsByClassName('header');
			for(var i = 0; i < header.length; i++) {
				htop = getCoords(header[i]).top - x.h;
				bool = ( header[i].style.opacity > 0 ) ? 0 : 1 ;
				if ( (sc * bool) > htop + -50 ) {
					TweenMax.to(header[i], 1, {opacity: 1, yPercent: 0, ease: Power4.easeOut});
				}
				else if ( sc < (htop + -50)) {
					TweenMax.to(header[i], 0, {opacity: 0, yPercent: 100});
				}
			}

			

		}
	}
	function scene3d ( sc ) {
		var length   = (x.w >= x.h) ? x.w : x.h;
		var divition = (x.w <= x.h) ? x.w : x.h;
		var d        = (divition / length) * 40;
		if( ( (sc / d) + 75 ) > 105) return 0;
		
		TweenMax.to('.b2img, .b2img2', 0, {transform: 'translate(-50%, -50%) rotateX('+ (75 + (sc/(3.14*10))) +'deg)'})
	}

	function cursor ( e, active, x, y ) {
		if(active == false) {
			$('.cur, .cur1').remove();
			return 0;
		}
		TweenMax.to('.cur', 0.2, {x:x, y:y, xPercent: -50, yPercent: -50, zIndex: 9999});
		TweenMax.to('.cur1', 0.4, {x:x, y:y, xPercent: -50, yPercent: -50, zIndex: 9999});
	}
	function overlist (e, x, y) {
		var elem = $('.elem'), ex, ey, d;
		var ew = elem.width();
		var event;
		for(var i = 0; i < elem.length; i++) {
			ex = elem.eq(i).offset().left  + (ew / 2) ;
			ey = elem.eq(i).offset().top   + (ew / 2) ;
			d = distance(ex, ey, x, y);
			event = 1;

			if(d > 1500 || e == false) {
				event = 0;
			}
			TweenMax.to($('.elem').eq(i), 0.1, {
				xPercent: (((x) - ex) / (2 + d/2.5)) * event ,
				yPercent: (((y) - ey) / (2 + d/2.5)) * event
			});
			TweenMax.to($('.elem1').eq(i), 0.1, {
				xPercent: (((x) - ex) / (2 + d/10)) * event ,
				yPercent: (((y) - ey) / (2 + d/10)) * event
			});
			TweenMax.to($('.elem2').eq(i), 0.1, {
				xPercent: (((x) - ex) / (2 + d/5) * -1) * event,
				yPercent: (((y) - ey) / (2 + d/5) * -1) * event
			});

		}
	}

	function menu ( e ) {

		openClose( e || 0 );

		var linksli   = 0;
		var container = document.getElementsByClassName('container');

		$('#hamburger').click(function(){
			$(this).toggleClass('open');
			var active = $(this).toggleClass('')[0].getAttribute('class');
			(active == 'open') ? openClose(1) : openClose(0) 
		});

		$('.menu .items li').click(function() {
			openClose(0);
			var arr = [ '0', '0', 'index.html', 'test.html' ];
			( this.innerHTML == 'HOME'   ) ? clickScroll(0)   :  0;
			( this.innerHTML == 'SKILLS' ) ? clickScroll( container[1].offsetTop + (container[1].offsetHeight / 2) - (x.h/2) ) :  0;
			( this.innerHTML == 'ABOUT' ) ? clickScroll( container[2].offsetTop + (container[1].offsetHeight / 2) - (x.h/2) ) :  0;
		// ( this.innerHTML == 'ABOUT'  ) ? href(arr[2]) :  0;
		( this.innerHTML == 'DEMO'   ) ? href(arr[3]) :  0;
		function href (e) {
			setTimeout(()=>{
				location.href = e;
			}, 500);	
		}
		function clickScroll (e) {
			TweenMax.to(document.documentElement, 0.5, {scrollTop: e})
		}
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
			if (e == 0) {
				$('#hamburger').removeClass('open')
				scrollHidden(0)
			} 
			else {
				$('#hamburger').addClass('open');
				scrollHidden(1)
			};
			var arr = [ 0, -100 ];
			TweenMax.to('.menu', .5 , {xPercent: arr[e], ease: Power4.easeOut});
		}
	}

	function c4 (e) {
		if (e == false) return 0
			var block = document.querySelector('.container4');
		for(var i = 0; i < 40; i++) {
			var img = new Image();
			img.src = 'img/c4/1.svg';
			img.style.width = (40 * (i+1)) + 'px';
			block.appendChild(img)
			TweenMax.fromTo('.container4 img:nth-child('+(i+1)+')', 1.5, {y: 0, opacity: 0}, {y: 100, opacity: 1 - (i/30), yoyo: true, repeat: -1, ease: Power1.easeInOut, delay: ((i+1)/20)})
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
