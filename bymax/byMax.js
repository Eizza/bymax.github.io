var bm = {
	w: window.innerWidth,
	h: window.innerHeight,
}

function isMobile() {
	try {
		if(/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)) {
			return false;
		};
		return true;
	} catch(e){ console.log("Error in isMobile"); return false; }
}

function cl ( e ) { console.log( e ) }
function cw ( e ) { document.write( e ) }

function distance(x1, y1, x2, y2){
	var a = Math.pow( (x2-x1) , 2);
	var b = Math.pow( (y2-y1) , 2);
	var d = Math.sqrt( a + b );
	return d;
}

function getCoords(elem) {
	let box = elem.getBoundingClientRect();

	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset
	};
}



