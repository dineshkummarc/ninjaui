$.extend($.ninjaui, {
  foldersToggle: function(position, folders){
    var tabs = $('.nui-tabs', folders);
    $('.nui-tab', tabs).each(function(i, tab) {
      if(i == position) {
        $(tab).addClass('nui-active');
      }
      else {
        $(tab).removeClass('nui-active');
      }
    });
    $('.nui-folder', folders).each(function(i, folder) {
      if(i == position) {
        $(folder).show();
      }
      else {
        $(folder).hide();
      }
    });
  }
});

$.extend($.fn.ninjaui, {
  foldersCreate:function(customOptions) {
    var config = getConfig();
    var options = $.extend({direction:'horizontal'}, customOptions);
    return global.selected.each(function(i, folders) {
      $(folders).children('div').each(function(i, folder) {
        $(folder).addClass('nui-folder');
      });
      $(folders).addClass('nui nui-folders nui-' + options.direction).prepend('<div class="nui-tabs"></div>');
      var tabs = $('.nui-tabs', folders);
      var folderArray = $('.nui-folder', folders);
      $(folderArray).each(function(i, folder) {
        $(tabs).append('<span class="nui-tab">' + $(folder).attr('title') + '</span>');
      });
      $('.nui-tab:first-child', tabs).addClass('nui-first');
      $('.nui-tab:last-child', tabs).addClass('nui-last');
      $(folderArray).each(function(i, folder) {
        $(folder).css('min-height', $(tabs).height());
      });
      $('.nui-tab', tabs).each(function(i, tab) {
        $(tab).click(function() {
          $.ninjaui.foldersToggle(i, folders);
        });
      });
      $.ninjaui.foldersToggle(0, folders);
    });
  }
});
