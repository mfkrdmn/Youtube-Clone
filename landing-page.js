$(document).ready(function(){ 

    $(".sideBarBtn").click(function(){
        $(".lefSideBar").toggle()
        $(".secsidebar").toggle()
    })

    $(".morebtn").click(function(){
        $(".more").show()
        $(".morebtn").hide()
        $(".morebtnup").show()
        $(".morediv").hide()
        $(".moredivbottom").show()
    })

    $(".morebtnup").click(function(){
        $(".more").hide()
        $(".morebtn").show()
        $(".morebtnup").hide()
        $(".moredivbottom").hide()
        $(".morediv").show()
        $(".user").hide()
    })

    $(".faVideo").click(function(){
        $(".crtvideo").toggle()
        $(".crtdots").hide()
        $(".crtnotice").hide()
        $(".user").hide()

        $(document).mouseup(function(){
            if ($(document).closest(".crtvideo").length == 0) {
                $(".crtvideo").hide();
            }
        });
    })

    $(".faDots").click(function(){
        $(".crtdots").toggle()
        $(".crtvideo").hide()
        $(".crtnotice").hide()
        $(".user").hide()

        $(document).mouseup(function(){
            if ($(document).closest(".crtdots").length == 0) {
                $(".crtdots").hide();
            }
        });
    })

    $(".fabell").click(function(){
        $(".crtnotice").toggle()
        $(".crtvideo").hide()
        $(".crtdots").hide()
        $(".user").hide()

        $(document).mouseup(function(){
            if ($(document).closest(".crtnotice").length == 0) {
                $(".crtnotice").hide();
            }
        });

    })

    $(".userpictop").click(function(){
        $(".user").toggle()
        $(".crtvideo").hide()
        $(".crtdots").hide()
        $(".crtnotice").hide()

        $(document).mouseup(function(){
            if ($(document).closest(".user").length == 0) {
                $(".user").hide();
            }
        });

    })

    //Video Page

    $(".videoBarOut").click(function(){
        
        $(".lftisidebar").show(200)
        $("body").css("overflow","hidden")
        $(".kararti").show()

            $("#videoBarIn").click(function(){
                    $(".lftisidebar").hide(200)
                    $("body").css("overflow","auto")
                    $(".kararti").hide()
            })

            $(".kararti").click(function(){
                $(".lftisidebar").hide(200)
                $(".kararti").hide()
                $("body").css("overflow","auto")
            })
        
    })
    
})