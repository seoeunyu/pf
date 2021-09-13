
// wheel 이벤트
$(function(){
    window.addEventListener("wheel",function(event){
        event.preventDefault();
    },{passive:false});

    var $html = $("html");
    var page = 1;

    var lastPageNo = $("#content").length;

    $html.animate({scrollTop:0});

    $(window).on("wheel",function(event){
        if($html.is(":animated")) return;
        var deltaY = event.originalEvent.deltaY;

        if(deltaY > 0) {
            if(page == lastPageNo) return;
            page ++;
        }else { 
            if(page == 1) return;
            page --;
        }

        var dist= $(window).height() * (page-1);
        $html.animate({scrollTop:dist});
    });
});

//프로필 스킬
$(document).ready(function () {
    $('.p_box2 >.skill > .progress >.gauge').each(function () {
        var $this = $(this);
        var per = $this.attr('per');
        $this.animate({
            width: per + "%"
        });
    });
});


