$(document).ready(function(){
  // Removes hash from url on nav scroll
    $('.nav-item').on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top}, 5);
    });

  // Modals
    $("#open-illustrations").animatedModal({
      modalTarget:'illustrations-modal',
      color:'#f0f0f0'
    });
    $("#open-layouts").animatedModal({
        modalTarget:'layouts-modal',
        color:'#f0f0f0',
    });
    $("#open-mt").animatedModal({
        modalTarget:'mt-modal',
        color:'#f0f0f0',
    });
    // $("#open-tax").animatedModal({
    //     modalTarget:'tax-modal',
    //     color:'#f0f0f0',
    // });
});
