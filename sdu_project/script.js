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