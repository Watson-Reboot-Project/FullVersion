require.config({
  baseUrl: '.',
  paths: {
    angular:        '../lib/js/angular',
    bootstrap:      '../lib/js/bootstrap',
    jquery:         '../lib/js/jquery',
    'ui-bootstrap': '../lib/js/ui-bootstrap',
    relations:      '../common/relations',
    load:           'js/load',
    DatabaseApp:    'js/DatabaseApp',
    statements:     'js/statements'
  },
  shim: {
    angular: {exports: 'angular'},
    'ui-bootstrap': {deps: ['angular']},
    bootstrap: {deps: ['jquery']}
  }
});

window.name = 'NG_DEFER_BOOTSTRAP!';

require(['angular', 'DatabaseApp', 'load', 'bootstrap'],
  function(angular, app, load) {

    var divs = ['select1', 'project1', 'project2', 'join1'];
    var name = 'fragment.html';

    for (var i = 0; i < divs.length; i++) {
      load(name, divs[i]);
    }

    angular.element(document).ready(function() {
      angular.resumeBootstrap(['DatabaseApp']);
      console.log('simple_config resumed');
    });
    console.log('simple_config fired');
  }
);

console.log('simple_config loaded');
