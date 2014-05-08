require.config({
  baseUrl: '.',
  paths: {
    angular:        '../lib/js/angular',
    bootstrap:      '../lib/js/bootstrap',
    jquery:         '../lib/js/jquery',
    'ui-bootstrap': '../lib/js/ui-bootstrap',
    relations:      '../common/relations',
    DatabaseApp:    'js/DatabaseApp'
  },
  shim: {
    angular: {exports: 'angular'},
    'ui-bootstrap': {deps: ['angular']},
    bootstrap: {deps: ['jquery']}
  }
});

// if (typeof window == 'undefined') { window = {};}

window.name = 'NG_DEFER_BOOTSTRAP!';

require(['angular', 'DatabaseApp', 'bootstrap'], function(angular, app) {
  angular.element(document).ready(function() {
    angular.resumeBootstrap(['DatabaseApp']);
  });
});
