/** {{{
 * DatabaseApp.js
 *
 * The logic behind the Watson Database Lab. Defines the DatabaseApp angularjs
 * module, and its primary controller DatabaseController, which provides the
 * interface for the webpage.
 *
 * @author Tommy Bozeman
 * @version (2014,03,28)
}}} */

define(['angular', 'relations', 'load', 'ui-bootstrap'],
    function (angular, relations, loader) {

  loader('fragment.html', 'magic-div');

  // make our app object
  var app = angular.module('DatabaseApp', ['ui.bootstrap']);

  // give our app a controller
  app.controller('DatabaseController', function ($scope) {

    // a list to hold the statement history
    $scope.history = [];

    // a generic "error" function
    $scope.error = function() {
      document.write('<h1>SOMETHING is WRONG.</h1>');
      throw new Error("something went wrong...");
    }

    // supply generic names for our created relations
    var getNextName = function () { // {{{
      var counter = 0;
      getNextName = function () {
        counter += 1;
        return 'Relation' + counter;
      };
      return getNextName();
    }; // }}}

    // supply the possible comparison conditions
    // needs to be removed
    $scope.getRelConditions = function () { // {{{
      return [
        '<',
        '<=',
        '>',
        '>=',
        '==',
        '!='
      ];
    }; // }}}

    // supply possible things to compare against
    $scope.getConditionValues = function (rel, attr) { // {{{
      if (!rel.head) {
        return;
      }
      var index = rel.head.indexOf(attr),
        t = typeof(rel.rows[0][index]),
        output = [];
        // if (t == 'string') {
        // we need to get that column
        for (var i = 0; i < rel.rows.length; i++) {
          var item = rel.rows[i][index];
          if (output.indexOf(item) == -1) {
            output.push(item);
          }
        }
        return output.sort();
      // } else if (t == 'number') {
      //   // need to pull up the ng-numpad thing
      //   // not even sure if we're still doing that.
      //   return [];
      // }
    }; // }}}

    // insert a statement into the history
    var hist_insert = function (rel) { // {{{
      var index = $scope.history.length;
      $scope.history.push({relation: rel, remove: function () {
        entry = $scope.history[index];

        for (var i = $scope.history.length - 1; i >= index; i--) {
          delete $scope.relations[$scope.history[i].relation.name];
          $scope.history.pop();
        }
        if ($scope.history.length === 0) {
          $scope.relation = null;
        } else {
          $scope.relation = $scope.history[$scope.history.length - 1].relation;
        }
      }});
    }; // }}}

    // return an object to handle a 'select' action
    $scope.Select = function () { // {{{
      return new function () { // {{{
        this.name = 'Select';
        this.page = 'partial/select.html';
        this.relation = {name: '[relation]'};

        this.setDefaults = function () {
          this.attribute = '[attribute]';
          this.condition = '[condition]';
          this.value = '[value]';
        };

        this.setRelation = function (rel) {
          this.setDefaults();
          this.relation = rel;
        };

        this.setAttribute = function (attr) {
          this.setDefaults();
          this.attribute = attr;
        };

        this.setCondition = function (comp) {
          this.condition = comp;
        };

        this.setValue = function (val) {
          this.value = val;
        }; // }}}

        this.accept = function () { // {{{
          // declare some stuff
          var rows = this.relation.rows,
              r_name = getNextName(),
              index = this.relation.head.indexOf(this.attribute),
              r_out = {
                name: r_name,
                statement: r_name + ' <- SELECT FROM ' + this.relation.name +
                    ' WHERE ' + this.attribute + ' ' + this.condition + ' ' +
                    this.value + ';',
                head: this.relation.head.slice(),
                rows: []
              };

          // pull out our comparison operator
          var filter;
          if (this.condition == '<') {
            filter = function (val1, val2) { return (val1 < val2); };
          } else if (this.condition == '<=') {
            filter = function (val1, val2) { return (val1 <= val2); };
          } else if (this.condition == '>') {
            filter = function (val1, val2) { return (val1 > val2); };
          } else if (this.condition == '>=') {
            filter = function (val1, val2) { return (val1 >= val2); };
          } else if (this.condition == '==') {
            filter = function (val1, val2) { return (val1 == val2); };
          } else if (this.condition == '!=') {
            filter = function (val1, val2) { return (val1 != val2); };
          }

          // and filter it across our relation
          for (var i = 0; i < rows.length; i++) {
            if (filter(rows[i][index], this.value)) {
              r_out.rows.push(rows[i]);
            }
          }

          // add this nice relation we've made to our list of relations
          $scope.relations[r_out.name] = r_out;
          // display it
          $scope.relation = r_out;
          // add this statement to the history
          hist_insert(r_out);
          // and reset the action
          $scope.action = $scope.Default();
        }; // }}}

        this.setDefaults();
      }();
    }; // }}}

    // return an object to handle a 'project' action
    $scope.Project = function () { // {{{
      return new function () { // {{{
        this.name = 'Project';
        this.page = 'partial/project.html';
        this.relation = {name: '[relation]'};
        this.dropdown = '[attribute]';

        this.setDefaults = function () {
          this.attributes = [];
          this.available = [];
        };

        this.setRelation = function (rel) {
          this.setDefaults();
          this.relation = rel;
          this.available = rel.head.slice();      // makes a copy
        };

        this.addAttribute = function (attr) {
          this.attributes.push(attr);
          var index = this.available.indexOf(attr);
          if (index != -1) {
            this.available.splice(index, 1);
          } else {
            $scope.error();
          }
        };

        this.removeAttribute = function (attr) {
          var index = this.attributes.indexOf(attr);
          if (index != -1) {
            this.attributes.splice(index, 1);
          } else {
            $scope.error();
          }
          this.available.push(attr);
        }; // }}}

        this.accept = function () { // {{{

          // declare some stuff
          var head = this.relation.head,
              rows = this.relation.rows,
              r_name = getNextName(),
              indices = [],
              r_out = {
                name: r_name,
                statement: r_name + ' <- PROJECT ' + this.attributes.join(', ') +
                    ' FROM ' + this.relation.name + ';',
                head: this.attributes,
                rows: []
              };

          // grab the indices of the attributes we're projecting
          for (var i = 0; i < this.attributes.length; i++) {
            indices.push(head.indexOf(this.attributes[i]));
          }

          for (var i = 0; i < rows.length; i++) {
            var row = [];
            for (var j = 0; j < indices.length; j++) {
              row.push(rows[i][indices[j]]);
            }
            r_out.rows.push(row);
          }

          $scope.relations[r_out.name] = r_out;
          $scope.relation = r_out;
          hist_insert(r_out);
          $scope.action = $scope.Default();
        }; // }}}

        this.setDefaults();
      }();
    }; // }}}

    // return an object to handle a 'join' action
    $scope.Join = function () { // {{{
      return new function () { // {{{
        this.name = 'Join';
        this.page = 'partial/join.html';
        this.relation1 = {name: '[relation]'};
        this.relation2 = {name: '[relation]'};
        this.attribute = '[attribute]';
        this.available = [];

        this.getAvailable = function () {
          if (!this.relation1.head || !this.relation2.head) {
            return;
          }

          var list1 = this.relation1.head.slice(),
              list2 = this.relation2.head.slice(),
              listOut = [];

          list1.sort();
          list2.sort();

          while (list1.length !== 0 && list2.length !== 0) {
            if (list1[0] < list2[0]) {
              list1.splice(0, 1);
            } else if (list1[0] > list2[0]) {
              list2.splice(0, 1);
            } else {
              listOut.push(list1[0]);
              list1.splice(0, 1);
              list2.splice(0, 1);
            }
          }

          this.available = listOut;
        };

        this.getShared = function () {
          return this.available;
        };

        this.setRelation1 = function (rel) {
          this.attribute = '[attribute]';
          this.relation1 = rel;
          this.getAvailable();
        };

        this.setRelation2 = function (rel) {
          this.attribute = '[attribute]';
          this.relation2 = rel;
          this.getAvailable();
        };

        this.setAttribute = function (attr) {
          this.attribute = attr;
        }; // }}}

        // Fired when Join is active and accept is pressed
        // joins two tables, and puts the result in $scope.relations
        this.accept = function () { // {{{
          // the attributes from both input tables
          var both = this.relation1.head.concat(this.relation2.head),
              // a name for our resulting relation
              r_name = getNextName(),
              // our input relations
              relA = this.relation1,
              relB = this.relation2,
              // the indices of the attribute we're joining over
              indexA = relA.head.indexOf(this.attribute),
              indexB = relB.head.indexOf(this.attribute),
              // a list of duplicated attributes to ignore when merging tuples
              ignore = [],
              // the relation itself
              r_out = {
                name: r_name,
                statement: r_name + ' <- JOIN ' + this.relation1.name + ' AND ' +
                    this.relation2.name + ' OVER ' + this.attribute + ';',
                head: [],
                rows: []
              };

          // for each attr in 'both', if not in the resultant head, add it
          for (var i = 0; i < both.length; i++) {
            if (r_out.head.indexOf(both[i]) == -1) {
              r_out.head.push(both[i]);
            } else {
              ignore.push(i);
            }
          }

          // for each combination of tuples:
          for (var i = 0; i < relA.rows.length; i++) {
            for (var j = 0; j < relB.rows.length; j++) {
              // if the entries for our attribute-in-question are the same:
              if (relA.rows[i][indexA] == relB.rows[j][indexB]) {
                // join the tuples!
                // 'k' keeps track through the individual tuples, 'p' keeps track
                // of them together (keeps us in sync w/ 'both')
                var p = 0,
                    row = [];
                for (var k = 0; k < relA.rows[i].length; k++, p++) {
                  if (ignore.indexOf(p) == -1) {
                    row.push(relA.rows[i][k]);
                  }
                }
                for (var k = 0; k < relB.rows[j].length; k++, p++) {
                  if (ignore.indexOf(p) == -1) {
                    row.push(relB.rows[j][k]);
                  }
                }
                r_out.rows.push(row);
              }
            }
          }

          $scope.relation = r_out;
          $scope.relations[r_out.name] = r_out;
          hist_insert(r_out);
          $scope.action = $scope.Default();
        }; // }}}
      }();
    }; // }}}

    // return an object to placehold for an action
    $scope.Default = function () { // {{{
      return new function () {
        this.name = 'Action';
        this.page = 'partial/default.html';
      }();
    }; // }}}

    // set the first action to be 'default'
    $scope.action = $scope.Default();

    // pulled in from database/js/relations.js
    $scope.relations = relations;
  });
});

/* vim: set et sw=2 sts=2 fdm=marker : */
