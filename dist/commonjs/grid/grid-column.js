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
    this.nosort = config.nosort !== undefined;
    this.sortDirection = undefined;

    this.filterValue = undefined;
    this.filterValueFrom = undefined;
    this.filterValueTo = undefined;
    this.showInputFilter = config['input-filter'] === 'true';
    this.showDateFilter = config['date-filter'] === 'true';
    this.showDateFromToFilter = config['date-filter-from-to'] === 'true';
    this.showBooleanFilter = config['boolean-filter'] === 'true';
    this.showSelect2Filter = config['select2-filter'] === 'true';
    this.select2Items = config['select2-items'];

    for (var prop in config) {
      if (config.hasOwnProperty(prop) && this.specialColumns.indexOf(prop) < 0) {
        this[prop] = config[prop];
      }
    }
  }

  _createClass(GridColumn, [{
    key: 'changeDirectionSort',
    value: function changeDirectionSort() {
      switch (this.sortDirection) {
        case 'asc':
          this.sortDirection = 'desc';
          break;
        case 'desc':
          this.sortDirection = undefined;
          break;
        default:
          this.sortDirection = 'asc';
          break;
      }

      this.parent.changeSort({
        name: this.field,
        value: this.sortDirection
      });
    }
  }, {
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
    key: 'toggleBooleanFilter',
    value: function toggleBooleanFilter() {
      if (this.filterValue === undefined) {
        this.filterValue = true;
      } else {
        this.filterValue = !this.filterValue;
      }

      this.updateFilters();
    }
  }, {
    key: 'clearBooleanFilter',
    value: function clearBooleanFilter() {
      this.filterValue = undefined;
      this.updateFilters();
    }
  }, {
    key: 'getFilterValue',
    value: function getFilterValue() {
      if (this.showDateFromToFilter === true) {
        if (this.filterValueFrom && this.filterValueTo) {
          return [{
            name: this.field + 'From',
            value: this.filterValueFrom.format('YYYY-MM-DD'),
            type: '>',
            valueType: 'date'
          }, {
            name: this.field + 'To',
            value: this.filterValueTo.format('YYYY-MM-DD'),
            type: '<',
            valueType: 'date'
          }];
        } else if (this.filterValueFrom) {
          return [{
            name: this.field + 'From',
            value: this.filterValueFrom.format('YYYY-MM-DD'),
            type: '>',
            valueType: 'date'
          }];
        } else if (this.filterValueTo) {
          return [{
            name: this.field + 'To',
            value: this.filterValueTo.format('YYYY-MM-DD'),
            type: '<',
            valueType: 'date'
          }];
        }
      } else if (this.filterValue !== undefined) {
        var result = [{
          name: this.field,
          value: this.filterValue
        }];
        if (this.showBooleanFilter) {
          result[0].type = '=';
          result[0].valueType = 'boolean';
        } else if (this.showSelect2Filter) {
          result[0].type = '=';
          result[0].valueType = 'int';
        } else if (this.showInputFilter) {
          result[0].type = 'like';
          result[0].valueType = 'string';
        }

        return result;
      }

      return [];
    }
  }, {
    key: 'getQueryString',
    value: function getQueryString() {
      if (this.showDateFromToFilter === true) {
        if (this.filterValueFrom && this.filterValueTo) {
          return this.field + 'From=' + this.filterValueFrom.unix() * 1000 + '&' + this.field + 'To=' + this.filterValueTo.unix() * 1000;
        } else if (this.filterValueFrom) {
          return this.field + 'From=' + this.filterValueFrom.unix() * 1000;
        } else if (this.filterValueTo) {
          return this.field + 'To=' + this.filterValueTo.unix() * 1000;
        } else {
          return undefined;
        }
      } else if (this.filterValue) {
        return this.field + '=' + this.filterValue;
      } else {
        return undefined;
      }
    }
  }]);

  return GridColumn;
})();

exports.GridColumn = GridColumn;