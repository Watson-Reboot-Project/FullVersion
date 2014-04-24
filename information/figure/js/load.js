define(['jquery'], function(jquery) {
  console.log('load called');
  return function(name, div_id) {
    console.log('loading');
    jquery.ajax({ url: name, async: false, success: function (data) {
      console.log('loaded');
      data = $(data).attr('ng-init', 'init(\'' + div_id + '\')');
      document.getElementById(div_id).innerHTML = data[0].outerHTML;
    }});
  };
});

console.log('load loaded');
