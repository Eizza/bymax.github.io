$(window).ready(function(  ) {
	var w = settings.w = $(this).width()
	var s = 0;
	if( w <= 900 ) {
		TweenMax.to('.c1b1', s, { height: '60%' });
		TweenMax.to('.c1b1 p', s, { justifyContent: 'center', textAlign: 'center', width: 'calc(100% - 50px)', margin:'25px' });
		TweenMax.to('.c1b2 #canvas3D', s, { width: 'calc( 50vh * 0.6 )', height:  'calc( 50vh * 0.6 )', top: '40%'});
		TweenMax.to('.c1b2 .b2img', s, { width: 'calc( 50vh * 0.6 )', height:  'calc( 50vh * 0.6 )',});
	}
});	