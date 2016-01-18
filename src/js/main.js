/* ==========================================================================

    Project: Project1
    Author: Francisco Pena

   ========================================================================== */

$(document).ready(function() {
  /* Strict mode */
  'use strict';

  var Project = {
    /* Init function */
    init: function() {
      $('.news-content').find('a[rel=slideshow]').colorbox({
        rel: 'gal', 
        open: true,
        loop: false
      });
    },
    /* end close function */
    end: function() {
      $.colorbox.close();
    }
  };
 /* Init starts function */
  Project.init();

  /* Selecting Images Elements creating slideshow of .5 sec per pic */
  var timeout = function() {
    setTimeout($('.news-content').find('a[rel=slideshow]').colorbox.next, 2000);
  };

   /* Calculating the length of the element */
  var numberOfElements = $('.cboxElement').length;


  /* triggers transition and the new content */
  $(document).bind('cbox_complete', function() {
    if (numberOfElements === 1) {
      setTimeout(function() {
        Project.end();
      }, 500);
    } else {
      --numberOfElements;
    }
    timeout();
  });


    /* Close everything after done */
  $(document).bind('cbox_closed', function(timeout) {
    Project.end();
    clearTimeout(timeout);
  });


});




