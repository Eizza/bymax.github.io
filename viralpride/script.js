// rgba(1,209,255,1)
window.onload = function(){
	// draw(); //rain
	
	var ds = {
		d: 25,
		h: 20,
		m: 59,
		s: 59,
	}
	// ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	var countDownDate = new Date("Nov 26, 2023 23:59:59").getTime();

	timerF();

	function timerF(){
		var timer = setInterval(function(){
			var date = new Date();

			var distance = countDownDate - date;

			var d = {
				d: Math.floor(distance / (1000 * 60 * 60 * 24)),
				h: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
				m: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
				s: Math.floor((distance % (1000 * 60)) / 1000)
			}


			if(d.d < 1){
				if(String(d.d).length == 1) { d.h = "0"+d.h }
			}
			else {
				d.h = (d.d*24) + d.h
			}
			if(d.m < 10) { d.m = "0"+d.m }
			if(d.s < 10) { d.s = "0"+d.s }

			$(".sale_timer").html( d.h +":"+ d.m +":"+ d.s );
			
			console.log(d.h)
			// $(".sale_timer").html( d.d + " дня " + d.h+ ":" +d.m+ ":" +d.s);

			if (distance < 0) {
	    		clearInterval(timer);
				$(".sale_timer").html("00:00:00");
				$(".sale").remove();
	  		}

			
		}, 1000);
	
	}


	var sliderarrow = 1;

	var optsl = {
		count: 1
	}

	$('.btnr').click(function(){
		if(optsl.count <= 1) {
			optsl.count = 5;
			sliderarrow = -400;
		}
		sliderarrow += 100;
		TweenMax.to('.slider', 0.3, {left: sliderarrow +"vw"});
		optsl.count--;
	});

	$('.btnl').click(function(){
		if(optsl.count >= 4) {
			optsl.count = 0;
			sliderarrow = 100;
		}
		sliderarrow -= 100;
		TweenMax.to('.slider', 0.3, {left: sliderarrow +"vw"});
		optsl.count++;
	});



}



var opts   = {
	particleAmount: 100,
	backgroundColor: "rgba(0,0,0,0)",

	defaultSpeed   : 0.2,
	addedSpeed     : 0.4,

	defaultRadius  : 25,
	addedRadius    : 25,

	w: window.innerWidth,
	h: window.innerHeight * 1,

}


function draw(){
	var canvas = document.getElementById('canvas');

	var ctx = canvas.getContext('2d');
	var w = opts.w;
	var h = opts.h;

	canvas.setAttribute("width", w);
	canvas.setAttribute("height", h);

	var particles = [];

	function particle(){

		this.flower = (Math.floor(Math.random() * 5) + 1);

		this.x = Math.random() * w;
		this.y = Math.random() * h;

		this.w = 1;
		this.h = 50;

		this.radius = opts.defaultRadius + (opts.addedRadius * Math.random());
		this.speed  = opts.defaultSpeed  + (opts.addedSpeed  * Math.random());

		this.angle = Math.floor(Math.random() * 360);


		this.d = {
			x: Math.cos(this.angle) * this.speed ,
			y: Math.sin(this.angle) * this.speed 
		}

		this.update = function(){
			this.y += 15 * this.speed;
		}	

		var borderSize = opts.addedRadius + opts.defaultRadius + 10;

		this.border = function(){
			if(this.y >= opts.h + borderSize){
				this.y = -this.h;
			}
		}

		

		this.draw   = function(){
			ctx.beginPath();
			var img = document.createElement("IMG");
			img.setAttribute("src", "img/part.svg");
			ctx.drawImage(img, this.x, this.y, this.w, this.h);
		}
	}

	setup();
	loop();

	function setup(){



		for(var i=0; i< opts.particleAmount; i++){
			particles.push( new particle() );
		}
	}

	function loop(){

		ctx.clearRect(0, 0, opts.w, opts.h);

		for(var i = 0; i < particles.length; i++){
			particles[i].update();
			particles[i].draw();
			particles[i].border();
		}
		window.requestAnimationFrame(loop);
	}
}

window.onresize = function(){
	opts.w = window.innerWidth;
	opts.h = window.innerHeight * 1.2;

	canvas.setAttribute("width", opts.w);
	canvas.setAttribute("height", opts.h);
}

function random_MinPlus(){
	return (Math.random() > 0.5) ? a = -1 : a = 1
}
