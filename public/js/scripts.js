$(document).ready(function(){

  $("#sketch-gallery").unitegallery({
      gallery_theme:"tiles",
      tiles_space_between_cols: 8,
      tiles_space_between_cols_mobile: 5,
      tiles_col_width: 175
      // tile_enable_border:true,
			// tile_border_width:1,
			// tile_border_color:"#24262d"
  });

  $("#mocks-gallery").unitegallery({
      gallery_theme:"tiles",
      tiles_space_between_cols: 8,
      tiles_space_between_cols_mobile: 5,
      //tiles_col_width: 175
      // tile_enable_border:true,
			// tile_border_width:1,
			// tile_border_color:"#24262d"
  });

  // Removes hash from url on nav scroll
    $('.nav-item').on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top}, 5);
    });
  // Modal
    $("#open-illustrations").animatedModal({
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
    $("#open-tax").animatedModal({
        modalTarget:'tax-modal',
        color:'#f0f0f0',
    });

});
