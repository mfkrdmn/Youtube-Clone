$(".sideBarBtn").click(function(){
    $(".lefSideBar").toggle()
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
})

$(".faDots").click(function(){
    $(".crtdots").toggle()
    $(".crtvideo").hide()
    $(".crtnotice").hide()
    $(".user").hide()
})

$(".fabell").click(function(){
    $(".crtnotice").toggle()
    $(".crtvideo").hide()
    $(".crtdots").hide()
    $(".user").hide()
})

$(".userpictop").click(function(){
    $(".user").toggle()
    $(".crtvideo").hide()
    $(".crtdots").hide()
    $(".crtnotice").hide()
})


