$(document).ready(function(){
    
    var expanded = false
    $('.top-bar-title').on('click',function(){
        
        if (!expanded){
            $('.categories').addClass('show');
            $(this).addClass('clicked');
            $('.arrow').removeClass('fa-angle-right');
            $('.arrow').addClass('fa-angle-left');
            expanded = true;
        }else{
            $('.categories').removeClass('show');
            $(this).removeClass('clicked');
            $('.arrow').removeClass('fa-angle-left');
            $('.arrow').addClass('fa-angle-right');
            expanded = false;
        }
        
    })
})