 $(document).ready(function(){ 

       $("[name='my-checkbox']").bootstrapSwitch('size', 'mini');
         $('.greycube').hide();
        
        $('.bootstrap-switch-handle-on, .bootstrap-switch-handle-off, .bootstrap-switch-label').click(function(){
            
           if($('div.bootstrap-switch-mini').hasClass('bootstrap-switch-off')){
              $('.social-ul-list li img').hide()
               $('.greycube').css('display','inline-block'); 
               $('.item-text').css({'position': 'relative', 'bottom': '30px'});
              
           }else if ($('div.bootstrap-switch-mini').hasClass('bootstrap-switch-on')){
               $('.social-ul-list li img').css('display','inline-block'); 
                $('.greycube').hide();
                $('.item-text').css({'position': 'relative', 'bottom': '0'});
           }
        })


    });