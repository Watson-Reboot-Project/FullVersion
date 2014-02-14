console.log('contents sourced');
define(['angular', 'jquery'], function () {
    var app = angular.module('ContentsModule', []);

    app.controller('Controller', function($scope) {
        console.log('Controller Called');

        $scope.items = [];

        $scope.find = function (name) {
            items = $scope.items
            for (var i = 0; i < $scope.items.length; i++) {
                if (items[i].name === name) {
                    return items[i];
                }
            }
            return {name: 'NOT FOUND', fullname: 'NOT FOUND', path: '#'};
        }

        // should set this up to take in `contents.xml` from somewhere else, so
        // we don't have to symlink it in each directory. also: not sure what
        // else we're going to need.
        $.get('contents.xml', {}, function (xml) {
            var items = [],
                item,
                i = 0;

            $('chapter', xml).each(function () {
                i += 1;
                item = {}
                item.name = $(this).find('name').text();
                item.fullname = 'Chapter ' + i + ': ' + item.name;
                item.chapterNum = 'Chapter' + i;
                function Ctrl($scope) {
                 $scope.name = 'Chapter ' + i;}
                item.path = $(this).find('path').text();

                if (items.length != 0) {
                    prev = items[items.length - 1];
                    item.prev = {name: prev.name, path: prev.path, fullname: prev.fullname};
                    prev.next = {name: item.name, path: item.path, fullname: item.fullname};
                } else {
                    item.prev = {fullname: 'Home', path: 'index.html'};
                }

                items.push(item);
            });

            items[items.length - 1].next = {fullname: 'Home', path: 'index.html'};

            console.log(items);
            $scope.items = items;
            $scope.$apply();
        });
    });
});

