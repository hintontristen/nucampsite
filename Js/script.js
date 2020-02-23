src="node_modules/jquery/dist/jquery.slim.min.js"
src="node_modules/popper.js/dist/umd/popper.min.js"
src="node_modules/bootstrap/dist/js/bootstrap.min.js"
    
    
        $('#reserveModal').modal('focus')
    
   
   
    $(function() {
        $(".carousel").carousel( { interval: 2000 } );
        $("#carouselButton").click(function(){
            if ($("#carouselButton").children("i").hasClass("fa-pause")) {
                $(".carousel").carousel("pause");
                $("#carouselButton").children("i").removeClass("fa-pause");
                $("#carouselButton").children("i").addClass("fa-play");
            } else {
                $(".carousel").carousel("cycle");
                $("#carouselButton").children("i").removeClass("fa-play");
                $("#carouselButton").children("i").addClass("fa-pause"); 
            }
        });
    });
