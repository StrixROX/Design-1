$(document).scroll(function(){
    
    navBg();

    function navBg(){
        x = window.pageYOffset / window.innerHeight;
        $('.navbar').css('background-color', 'rgba(255,255,255,' + x*3 + ')');
        if(x < 0.7){
            $('.nav-item').css('filter', 'invert(' + x*100 + '%)');
        }else{
            $('.nav-item').css('filter', 'invert(' + 70 + '%)');
        }
    }
    
});