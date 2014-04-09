require.config({
  baseUrl: 'js/',
  paths: {
    angular:        '../lib/js/angular',
    bootstrap:      '../lib/js/bootstrap-3',
    jquery:         '../lib/js/jquery',
    less:           '../lib/js/less',
    'ui-bootstrap': '../lib/js/ui-bootstrap'
  },
  shim: {
    angular: {exports: 'angular'},
    'ui-bootstrap': {deps: ['angular']},
    bootstrap: {deps: ['jquery']}
  }
});

window.name = 'NG_DEFER_BOOTSTRAP!';

require(['angular', 'assemblyui', 'bootstrap'], function(angular, app) {
  angular.element(document).ready(function() {
    console.log('entering require block');
    angular.resumeBootstrap(['assemblyui']);
    console.log('require block, standing by');
  });
});

console.log('main.js, standing by');
