System.register([], function (_export) {
  'use strict';

  var GridColumn;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      GridColumn = (function () {
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

      _export('GridColumn', GridColumn);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUFNO0FBQ0wscUJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN6QjtXQUNGOzs7ZUFsRVUsVUFBVTs7OzRCQUFWLFVBQVUiLCJmaWxlIjoiZ3JpZC9ncmlkLWNvbHVtbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHcmlkQ29sdW1uIHtcblxuICBzcGVjaWFsQ29sdW1ucyA9IFsnaGVhZGluZycsICdub3NvcnQnXTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcsIHRlbXBsYXRlLCBwYXJlbnQpIHtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5maWVsZCA9IGNvbmZpZy5maWVsZDtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgIGlmICghdGhpcy5maWVsZClcbiAgICAgIHRocm93IG5ldyBFcnJvcignZmllbGQgaXMgcmVxdWlyZWQnKTtcblxuICAgIHRoaXMuaGVhZGluZyA9IGNvbmZpZy5oZWFkaW5nIHx8IGNvbmZpZy5maWVsZDtcbiAgICB0aGlzLm5vc29ydCA9IGNvbmZpZy5ub3NvcnQgfHwgZmFsc2U7XG4gICAgdGhpcy5maWx0ZXJWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbHRlclZhbHVlRnJvbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbHRlclZhbHVlVG8gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaG93SW5wdXRGaWx0ZXIgPSBjb25maWdbJ2lucHV0LWZpbHRlciddID09PSAndHJ1ZSc7XG4gICAgdGhpcy5zaG93RGF0ZUZpbHRlciA9IGNvbmZpZ1snZGF0ZS1maWx0ZXInXSA9PT0gJ3RydWUnO1xuICAgIHRoaXMuc2hvd0RhdGVGcm9tVG9GaWx0ZXIgPSBjb25maWdbJ2RhdGUtZmlsdGVyLWZyb20tdG8nXSA9PT0gJ3RydWUnO1xuICAgIHRoaXMuc2hvd0Jvb2xlYW5GaWx0ZXIgPSBjb25maWdbJ2Jvb2xlYW4tZmlsdGVyJ10gPT09ICd0cnVlJztcblxuICAgIC8vIFNldCBhdHRyaWJ1dGVzXG4gICAgZm9yICh2YXIgcHJvcCBpbiBjb25maWcpIHtcbiAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgdGhpcy5zcGVjaWFsQ29sdW1ucy5pbmRleE9mKHByb3ApIDwgMCkge1xuICAgICAgICB0aGlzW3Byb3BdID0gY29uZmlnW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUZpbHRlcnMoKSB7XG4gICAgdGhpcy5wYXJlbnQudXBkYXRlRmlsdGVycygpO1xuICB9XG5cbiAgaGFzRmlsdGVyVmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuc2hvd0RhdGVGcm9tVG9GaWx0ZXIgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlclZhbHVlRnJvbSAhPT0gdW5kZWZpbmVkIHx8IHRoaXMuZmlsdGVyVmFsdWVUbyAhPT0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJWYWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUJvb2xlYW5GaWx0ZXIoKSB7XG4gICAgaWYgKHRoaXMuZmlsdGVyVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSAhdGhpcy5maWx0ZXJWYWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUZpbHRlcnMoKTtcbiAgfVxuXG4gIGNsZWFyQm9vbGVhbkZpbHRlcigpIHtcbiAgICB0aGlzLmZpbHRlclZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudXBkYXRlRmlsdGVycygpO1xuICB9XG5cbiAgZ2V0RmlsdGVyVmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuc2hvd0RhdGVGcm9tVG9GaWx0ZXIgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZyb206IHRoaXMuZmlsdGVyVmFsdWVGcm9tLFxuICAgICAgICB0bzogdGhpcy5maWx0ZXJWYWx1ZVRvXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJWYWx1ZTtcbiAgICB9XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9