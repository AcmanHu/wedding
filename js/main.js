(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */

  $('nav#dropdown').meanmenu({
    siteLogo: "<a href='index.html'><img src='img/logo_main5.png' /></a>"
  })

      equalHeight();
    $(window).load(equalHeight);
    $(window).resize(equalHeight);

    function equalHeight(){
        var windowWidth = $( window ).width();
        //console.log(windowWidth);
        if( windowWidth >= 768 ){
            var $h = 0;
            $(".single-core-feature").height('auto');
            $(".single-core-feature").each(function(){
                var thisHeight = $(this).outerHeight();
                if(thisHeight > $h){
                    $h = thisHeight;
                }
            });

            $(".single-core-feature").height($h+'px');
        }else{
            $(".single-core-feature").height('auto');
        }
    }	
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 owl active
------------------------------ */  
  $(".services-area").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 3,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [980,2],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });

/*----------------------------
 price-slider active
------------------------------ */  
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 40,
	   max: 600,
	   values: [ 60, 570 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "�" + ui.values[ 0 ] + " - �" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "�" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - �" + $( "#slider-range" ).slider( "values", 1 ) );  
	   
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
	/*-------------------------------------
	jQuery Search Box customization
	-------------------------------------*/ 
	    $(".search-icons i").on('click',function(){
	        $(".search-text").slideToggle();
	    })	
	/*-------------------------------------
	jQuery portfolio activation code
	-------------------------------------*/ 
	$('#dg-container').gallery({
		autoplay	:	true
	});
	/*----------------------------
	 Groom active
	------------------------------ */  
	  $(".groom-area").owlCarousel({
	      autoPlay: true, 
		  slideSpeed:2000,
		  pagination:false,
		  navigation:true,	  
	      items : 3,
		  /* transitionStyle : "fade", */    /* [This code for animation ] */
		  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	      itemsDesktop : [1199,3],
		  itemsDesktopSmall : [980,2],
		  itemsTablet: [768,1],
		  itemsMobile : [479,1],
	  });
	  /*----------------------------
	   Bride active
	  ------------------------------ */  
	    $(".bride-area").owlCarousel({
	        autoPlay: true, 
	  	  slideSpeed:2000,
	  	  pagination:false,
	  	  navigation:true,	  
	        items : 3,
	  	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	        itemsDesktop : [1199,3],
	  	  itemsDesktopSmall : [980,2],
	  	  itemsTablet: [768,1],
	  	  itemsMobile : [479,1],
	    });
	  /*----------------------------
	   Home Testimonial active
	  ------------------------------ */  
	    $(".home-testimonial").owlCarousel({
	        autoPlay: true, 
	  	  slideSpeed:2000,
	  	  pagination:false,
	  	  navigation:false,	  
	        items : 3,
	  	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	        itemsDesktop : [1199,3],
	  	  itemsDesktopSmall : [980,2],
	  	  itemsTablet: [768,1],
	  	  itemsMobile : [479,1],
	    });
	    /*--------------------------
	    Value  Increament and decrement jquery
	    ----------------------------*/
	    function subtractQty(){
		    if(document.getElementById("qty").value -1 < 0)
		    return;
		    else
		    document.getElementById("qty").value--;
	    }
	    /*-------------------------------------
	       Related Product jQuery activation code
	       -------------------------------------*/
	      $(".related-product-area > .single-product-store").owlCarousel({

	          // Most important owl features
	          items : 3,
	          itemsDesktop : [1199,3],
	          itemsDesktopSmall : [980,2],
	          itemsTablet: [768,1],
	          itemsTabletSmall: false,
	          itemsMobile : [479,1],
	          singleItem : false,
	          itemsScaleUp : false,
	          // Navigation
	          navigation : true,
	          navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	          // Responsive
	          responsive: true,
	          pagination:false,

	      });
	/*---------------------------------
	Google Map jquery
	-----------------------------------*/
//	if($("#googleMap").length){
//	    var initialize = function() {
//	        var mapOptions = {
//	            zoom: 15,
//	            scrollwheel: false,
//	            center: new google.maps.LatLng(-37.81618, 144.95692)
//	        };
//
//	        var map = new google.maps.Map(document.getElementById('googleMap'),
//	            mapOptions);
//
//
//	        var marker = new google.maps.Marker({
//	            position: map.getCenter(),
//	            animation:google.maps.Animation.BOUNCE,
//	            icon: 'img/map-marker.png',
//	            map: map
//	        });
//
//	    }
//
//	    google.maps.event.addDomListener(window, 'load', initialize);
//	}
 
})(jQuery); 