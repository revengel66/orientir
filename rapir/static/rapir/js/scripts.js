$(function(){
    $('.menu-button').click(function(){
        $(this).toggleClass('active');
        $('.mobile-menu').toggleClass('open');
    });
    $('.mobile-menu-inner > ul > li > a').click(function(){
        $('.menu-button').removeClass('active');
        $('.mobile-menu').removeClass('open');
    });

    $('.mobile-menu ul > li').has('ul').addClass('down');
    $('.mobile-menu .down > ul').before('<span class="dropdown-button"></span>');    
    $('.mobile-menu .dropdown-button').click(function(){
        $(this).toggleClass('active');
        if($(this).siblings('ul').is(':visible')){
            $(this).siblings('ul').slideUp();
        }else{
            $(this).siblings('ul').slideDown();
        }
        
    });
    $('.top-menu  ul > li').has('ul').addClass('down');
    $('.top-menu  .down > ul').before('<span class="dropdown-button"></span>');    


	$(".header-img-wrap").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveHeight: true,
        autoplaySpeed: 2000
      });

	// fancybox
	    $('.fancybox').fancybox({
	        padding: 0,
	        openEffect  : 'none',
	        closeEffect : 'none',
	        nextEffect  : 'none',
	        prevEffect  : 'none',
	        helpers: {
	            overlay: {
	              locked: false
	            }
	        }
	    });
	 //----------------------------ЦИФРЫ!!!!!!!!-----------------------------------------------------
	     $('.num1').viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            offset: 100,
            callbackFunction: function(){
                $('#num1').animateNumber({ number: 205 },2500); //КОЛЛИЧЕСТВО ПРОЕКТОВ
            }
        });
        
        $('.num2').viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            offset: 100,
            callbackFunction: function(){
                $('#num2').animateNumber({ number: 105 },2500);  //КОЛЛИЧЕСТВО ЧЕЛОВЕК
            }
        });
        
        $('.num3').viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            offset: 100,
            callbackFunction: function(){
                $('#num3').animateNumber({ number: 3 },1200);//СКОЛЬКО ЛЕТ
            }
        });

}); // end document ready



