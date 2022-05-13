$(function(){
    $('.menu-button').click(function(){
        $(this).toggleClass('active');
        $('.mobile-menu').toggleClass('open');
    });
    $('.mobile-menu-inner > ul > li > a').click(function(){
        $('.menu-button').removeClass('active');
        $('.mobile-menu').removeClass('open');
    });
    var panel=$('.top-menu-wrap'),
    pos=panel.offset().top;
    function fixedBar(){
        panel.removeClass('fixed');
        pos=panel.offset().top;
        if($(this).scrollTop() > pos && !panel.hasClass('fixed')){
            panel.addClass('fixed');
        }else if($(this).scrollTop() < pos && panel.hasClass('fixed')){
            panel.removeClass('fixed');
        }
    }
    fixedBar();
    window.addEventListener("resize", function() {
      fixedBar();
    }, false);
    window.addEventListener("orientationchange", function() {
        fixedBar();
    }, false);

    $(window).scroll(function(){
        fixedBar();
    });

    $('.mobile-menu ul > li').has('ul').addClass('down');
    $('.mobile-menu .down > ul').before('<span class="dropdown-button"></span>');
    $('.mobile-menu .dropdown-button').click(function(){
        $(this).toggleClass('active');
        $('.menu').toggleClass('menu-active');
        if($(this).siblings('ul').is(':visible')){
            $(this).siblings('ul').slideUp();
        }else{
            $(this).siblings('ul').slideDown();
        }
    });


    $('.top-menu ul > li').has('ul').addClass('down');
    $('.top-menu .down > ul').before('<span class="dropdown-button"></span>');

    /*$('.top-menu ul > li').click(function(){
        $(this).toggleClass('active');
    });
    */


	$(".header-slider").slick({
    	dots: false,
    	infinite: true,
    	speed: 300,
        arrows: false,
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	autoplay: true,
    	adaptiveHeight: true,
    	autoplaySpeed: 6000
      });

      $(".participant-slider").slick({
    	dots: true,
    	infinite: true,
    	speed: 300,
        arrows: false,
    	slidesToShow: 6,
    	slidesToScroll: 1,
    	autoplay: false,
    	swipeToSlide: true,
    	adaptiveHeight: true,
    	autoplaySpeed: 6000,
    	responsive: [
    		{
		       breakpoint: 2300,
		       settings: { slidesToShow: 5 }
		      },
    	 	  {
		       breakpoint: 1800,
		       settings: { slidesToShow: 4 }
		      },
    		  {
		       breakpoint: 1400,
		       settings: { slidesToShow: 3 }
		      },
		      {
		       breakpoint: 1000,
		       settings: { slidesToShow: 2 }
		     },
		     {
		       breakpoint: 700,
		       settings: { slidesToShow: 1 }
		     }
		  ]
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

      // validation

        // $('.form').each(function () {
        //     var item = $(this),
        //     button = item.find('.button');
        //
        //     function checkInput() {
        //         let errorCheck = true;
        //         item.find('input').each((index, el) => {
        //             if (el.hasAttribute('required')) {
        //                 if (el.value == '') {
        //                     $(el).addClass('error');
        //                     errorCheck = false;
        //                 }
        //                 else {
        //                     $(el).removeClass('error');
        //                 }
        //             }
        //             el.addEventListener('input', () => {
        //                 $(el).removeClass('error');
        //             });
        //         });
        //         return errorCheck;
        //     }
        //     button.click(function () {
        //         if (checkInput()) {
        //             item.submit();
        //             alert('Submit!');
        //         }
        //         else return false;
        //     });
        // });
      /*
      $(document).on('af_complete', function(event, response) {
        if(response.success){
            $.fancybox.open([{ href : '#responseMessage', padding : 0 }] );
            $('#responseMessage h2').text('Сообщение успешно отправлено!');
            $('#responseMessage .modal-body').html('<p>'+response.message+'</p>');
            $('.fancyClose').click(function(){
                $.fancybox.close('#responseMessage');
                return false;
            });
        }else{
            $.fancybox.open([{ href : '#responseMessage', padding : 0 }] );
            $('#responseMessage h2').text('Сообщение не отправлено!');
            $('#responseMessage .modal-body').html('<p>'+response.message+'</p>');
            $('.fancyClose').click(function(){
                $.fancybox.close('#responseMessage');
                return false;
            });
        }
    });
    */

}); // end document ready



