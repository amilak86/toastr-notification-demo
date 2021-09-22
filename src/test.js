$(function () {
    
    toastr.options.timeOut = 0;
    toastr.options.extendedTimeOut = 0;   
    toastr.options.tapToDismiss = false;
    toastr.options.positionClass = 'toast-bottom-left';
    toastr.options.closeButton = true;

    var messages = [
        '<!--<h5>James Nortan</h5>--><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><p>"Dummy Notification 1"<br><a href="#">read more</a></p>',
        '<!--<h5>Rayman Hammond</h5>--><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><p>"Dummy Notification 2"<br><a href="#">read more</a></p>',
        '<!--<h5>Nicolas Cassie</h5>--><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><p>"Dummy Notification 3"<br><a href="#">read more</a></p>'
    ];           

    setInterval(function(){

      var previousNum, num;

      num = Math.floor((Math.random() * messages.length) + 0);

      while(true){
        if(previousNum == num){
          num = Math.floor((Math.random() * messages.length) + 0);
        }else{
          break;
        }
      }        

      if($('#toast-container > div.toast > div.toast-message').length){

        if($('#toast-container > div.toast').hasClass('toast-info')){
          $('#toast-container > div.toast').removeClass('toast-info');
        }

        $('#toast-container > div.toast').addClass('toast-success');

        //$('#toast-container > div.toast > div.toast-title').html('Title '+num)
        $('#toast-container > div.toast > div.toast-message').html(messages[num]);

      } else {
        toastr.info(messages[num], 'Title');
      }

    }, 3000);

})