define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var GridColumn = (function () {
    function GridColumn(config, template, parent) {
      _classCallCheck(this, GridColumn);

      this.specialColumns = ['heading', 'nosort'];

      this.template = template;
      this.field = config.field;
      this.parent = parent;

      if (!this.field) throw new Error('field is required');

      this.heading = config.heading || config.field;
      this.nosort = config.nosort || false;
      this.filterValue = undefined;
      this.filterValueFrom = undefined;
      this.filterValueTo = undefined;
      this.showInputFilter = config['input-filter'] === 'true';
      this.showDateFilter = config['date-filter'] === 'true';
      this.showDateFromToFilter = config['date-filter-from-to'] === 'true';
      this.showBooleanFilter = config['boolean-filter'] === 'true';

      for (var prop in config) {
        if (config.hasOwnProperty(prop) && this.specialColumns.indexOf(prop) < 0) {
          this[prop] = config[prop];
        }
      }
    }

    _createClass(GridColumn, [{
      key: 'updateFilters',
      value: function updateFilters() {
        this.parent.updateFilters();
      }
    }, {
      key: 'hasFilterValue',
      value: function hasFilterValue() {
        if (this.showDateFromToFilter === true) {
          return this.filterValueFrom !== undefined || this.filterValueTo !== undefined;
        } else {
          return this.filterValue !== undefined;
        }
      }
    }, {
      key: 'getFilterValue',
      value: function getFilterValue() {
        if (this.showDateFromToFilter === true) {
          return {
            from: this.filterValueFrom,
            to: this.filterValueTo
          };
        } else {
          return this.filterValue;
        }
      }
    }]);

    return GridColumn;
  })();

  exports.GridColumn = GridColumn;
});