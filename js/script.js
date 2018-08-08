$(document).scroll(function(){
    
    navBg();

    function navBg(){
        x = window.pageYOffset / window.innerHeight;
        $('.navbar').css('background-color', 'rgba(255,255,255,' + x*6 + ')');
        if(x < 0.35){
            $('.nav-item').css('filter', 'invert(' + x*200 + '%)');
        }else{
            $('.nav-item').css('filter', 'invert(' + 70 + '%)');
        }
    }
    
});