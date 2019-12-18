var c = {
	particleCount: 10,
	p: {
		color : "rgba(255,255,255,0.01)",
		size: 0.1,
		addSize: 0.5,
		speed : 0.1,
		addSpeed: 0.5,
	}
}

function draw ( ) {
	var w = x.w;
	var h = x.h;

	$('#canvasBg').attr({"width":w, "height":h});

	var canvas = document.getElementById('canvasBg');

	if ( canvas.getContext ) {
		// -----------------------context------------------------------
		var ctx = canvas.getContext('2d');

		var particles = [];

		setup();

		function particle ( ) {
			this.x = w * Math.random();
			this.y = h * Math.random();
			this.i = 0;
			this.diractionAngle = Math.floor(Math.random()*360);
			this.speed = c.p.speed + Math.random() * c.p.addSpeed;
			this.size  = c.p.size  + Math.random() * c.p.addSize;

			var img = new Image;
			img.src = 'img/c1/c' + Math.floor(1 + Math.random() * 4) + '.png';

			this.draw = function() {
				ctx.save()
				ctx.translate( this.x , this.y );
				ctx.rotate(this.i * Math.PI/180);
				ctx.drawImage(img, img.width/-2 * this.size , img.height/-2 * this.size , img.width * this.size , img.height * this.size  );
				ctx.restore();

			}
			this.d = {
				x: Math.cos(this.diractionAngle) * this.speed,
				y: Math.sin(this.diractionAngle) * this.speed
			}
			this.update = function() {
				this.border()
				this.x += this.d.x;
				this.y += this.d.y;
				this.i += this.speed
			}

			this.border = function() {
				if     ( this.x >= w + ( img.width ) )    { this.x = -img.width      }
					else if( this.x <=     (-img.width ) )    { this.x = w + img.width   }
						else if( this.y >= h + ( img.height) )    { this.y = -img.height     }
							else if( this.y <=     (-img.height) )    { this.y = h + img.height  }
						}
				}

				function setup( ) {
					for(var i = 0; i < c.particleCount; i++ )  { 
						particles.push( new particle() ); 
					};
					loop();
				}
				function loop ( ) {

					w = x.w;
					h = x.h;

					ctx.clearRect(0,0,w, h);

					$('#canvasBg').attr({"width":w, "height":h});

					for(var i = 0; i < particles.length; i++ ) {
						particles[i].update();
						particles[i].draw();
					}

					window.requestAnimationFrame(loop);
				}
		// -----------------------context------------------------------
	}
	else {
		console.log(false)
	}
}




// ---------------------------------- THREE JS ------------------------------------
