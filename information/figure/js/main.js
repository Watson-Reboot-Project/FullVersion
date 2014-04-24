require.config({
  baseUrl: 'database/',
  paths: {
    angular:        'lib/js/angular',
    bootstrap:      'lib/js/bootstrap',
    jquery:         'lib/js/jquery',
    'ui-bootstrap': 'lib/js/ui-bootstrap',
    relations:      'common/relations',
    load:           'common/load',
    DatabaseApp:    'DatabaseApp',
    statements:     'statements'
  },
  shim: {
    angular: {exports: 'angular'},
    'ui-bootstrap': {deps: ['angular']},
    bootstrap: {deps: ['jquery']}
  }
});

window.name = 'NG_DEFER_BOOTSTRAP!';

console.log('main got');

require(['angular', 'DatabaseApp', 'bootstrap'], function(angular, app) {
  angular.element(document).ready(function() {
    angular.resumeBootstrap(['DatabaseApp']);
    console.log('main resumed');
  });
  console.log('main fired');
});

console.log('main loaded');
