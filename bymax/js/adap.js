$(window).ready(function(  ) {
	var w = x.w = $(this).width()
	var s = 0;
	if( w <= 600 ) {
		TweenMax.to('.menu',s, {background: 'var(--b-09)', backdropFilter: 'none'} );
		TweenMax.to('.c1b1', s, { height: '40vh' });
		TweenMax.to('.c1b1 p', s, { justifyContent: 'center', textAlign: 'center', width: 'calc(100% - 50px)', margin:'0 25px' });
		TweenMax.to('.c1b1 p:nth-child(2)', s, { fontSize: '10px' });
		TweenMax.to('.c1b2', s, { height: '60vh' });
		TweenMax.to('.c1b2 #canvas3D', s, { width: 'calc( 50vh * 0.7 )', height:  'calc( 50vh * 0.7 )', top: '40%', left: '50%'});
		TweenMax.to('.c1b2 img', s, { width: 'calc( 50vh * 0.7 )', height:  'calc( 50vh * 0.7 )',});
		TweenMax.to('.container2 .overlist li', s, { margin: '10px' });
	}
});	