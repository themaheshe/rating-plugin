// ===================================================================
// Author: Mahesh Bhandari <themaheshe1@gmail.com>
// WWW: 
//
// NOTICE: You may use this code for any purpose, commercial or
// private, without any further permission from the author. You may
// remove this notice from your final code if you wish.


/* SOURCE FILE: rating.js */

/*
rating.js
Author: Mahesh Bhandari
Last modified: 14/05/17

DESCRIPTION: This is a simple rating jquery plugin which uses font-awesome.
Any text box can have the rating feature if you the class or ID and initialize the plugin.

For example:

$('#ratingme').rating();
      	 
*/



(function($){

	     
	    $.fn.rating = function(options) {
        var self = this;
      
		var settings = $.extend({
		// These are the defaults.
		color: "#556b2f",
		max_stars : 5 ,
		clearSelected : function()
		{
           $('.plugin-rating i').each(function(){
        		$(this).addClass('fa-star-o').removeClass('fa-star');
        	});
		},
		setRating : function()
	     {
            if(self.val())
            {
                var position = parseInt(self.val())-1;
                //alert(position);
	            for(var i=0;i<=position;i++)
	        	{
	        		$(`.plugin-rating i:eq(${i})`).addClass('fa-star').removeClass('fa-star-o');
	        	}
        	}   
	     }

		}, options );

		

	     var ratingHtml =`<div class="plugin-rating rating">
   <i class="fa fa-star-o" aria-hidden="true"></i>
   <i class="fa fa-star-o" aria-hidden="true"></i>
<i class="fa fa-star-o" aria-hidden="true"></i>
<i class="fa fa-star-o" aria-hidden="true"></i>
<i class="fa fa-star-o" aria-hidden="true"></i>

</div>`;
        
        

        self.filter('input').each(function(){
            $(self).after(ratingHtml);
            $(self).hide();
        });
        
        settings.setRating(); 

        $(document).on('click','.plugin-rating i',function(){
        	var position = $(".plugin-rating i").index(this);
        	//set rating       	
        	          
        	self.val(position+1); 
        	settings.setRating();    	
        	
        });

        $(document).on('mouseenter','.plugin-rating i',function(){
        	var position = $(".plugin-rating i").index(this);
        	//first clear all selected stars
        	settings.clearSelected();


        	for(var i=0;i<=position;i++)
        	{
        		$(`.plugin-rating i:eq(${i})`).addClass('fa-star').removeClass('fa-star-o');
        	}        	
        	
        });

        $(document).on('mouseout','.plugin-rating i',function(){
        	settings.clearSelected();
        	settings.setRating();
        });
        //this.append('asdf');
        return self;
    };
}(jQuery));

(function( $ ) {
 
    $.fn.showLinkLocation = function() {
 
        this.filter( "a" ).each(function() {
            var link = $( this );
            link.append( " (" + link.attr( "href" ) + ")" );
        });
 
        return this;
 
    };
 
}( jQuery ));
 
// Usage example:
