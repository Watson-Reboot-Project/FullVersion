require.config({
    // baseUrl: './',
    paths: {
        angular:        '../lib/angular',
        bootstrap:      '../lib/bootstrap-3',
        jquery:         '../lib/jquery',
        less:           '../lib/less',
        'ui-bootstrap': '../lib/ui-bootstrap'
    },
    shim: {
        angular: {exports: 'angular'},
        'ui-bootstrap': {deps: ['angular']},
        bootstrap: {deps: ['jquery']}
    }
});

window.name = 'NG_DEFER_BOOTSTRAP!';

require(['angular', 'bootstrap', 'contents'], function() {
    angular.element(document).ready(function() {
        angular.resumeBootstrap(['ContentsModule']);
    });
});

