window.onload = function(){

	var bggr = {
		a2: 'linear-gradient(45deg, rgba(259,45,56,1), rgba(255,107,18,1))',
		a1: 'linear-gradient(45deg, rgba(255,45,56,1), rgba(248,190,18,1))',
		a3: 'linear-gradient(45deg, rgba(40,7,135,1), rgba(81,160,207,1))',
		a4: 'linear-gradient(45deg, rgba(40,70,15,1), rgba(81,160,207,1))',
	}

	var bgarr = [bggr.a1, bggr.a2, bggr.a3, bggr.a4];


		// TweenMax.fromTo(".bg-gradient", 6, {
		// 	background: 'linear-gradient(0deg, rgba(40,70,135,1), rgba(81,160,207,1))', ease: "none"
		// }, {
		// 	background: 'linear-gradient(360deg, rgba(40,70,135,1), rgba(81,160,207,1))', ease: "none", repeat:-1})
	

	var sliderarrow = 1;

	var optsl = {
		count: 1,
		count2: 1
	}


	var w = $('.sliderp .item').width() + 
			(parseFloat($('.sliderp .item').css('margin'))*2) + 
			(parseFloat($('.sliderp .item').css('padding'))*2)


	$('.btnr').click(function(){
		if(optsl.count <= 0) {
			optsl.count = 5;
			sliderarrow = w * -4;
			// alert(optsl.count)
		}
		
		$('.slider .item').removeClass('licheck');
		sliderarrow += w;
		TweenMax.to('.slider', 0.3, {left: sliderarrow +"px"});
		optsl.count--;
		$('.itls'+(optsl.count)).addClass('licheck');
	});

	$('.btnl').click(function(){
			console.log('asd');
		if(optsl.count >= 4) {
			optsl.count = -1;
			sliderarrow = w * 2;
		}

		$('.slider .item').removeClass('licheck');
		sliderarrow -= w;
		TweenMax.to('.slider', 0.3, {left: sliderarrow +"px"});
		optsl.count++;
		$('.itls'+(optsl.count)).addClass('licheck');
	});

}





// ====================SNOW=====================





function random_MinPlus(){
	return (Math.random() > 0.5) ? a = -1 : a = 1
}
