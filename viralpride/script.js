// rgba(1,209,255,1)
window.onload = function(){draw()}



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
