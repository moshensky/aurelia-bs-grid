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
          this.showSelect2Filter = config['select2-filter'] === 'true';
          this.select2Items = config['select2-items'];

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
//# sourceMappingURL=data:application/json;base64,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QyxvQkFBb0IsS0FBSyxJQUFJLEVBQUU7QUFDdEMscUJBQU87QUFDTCxvQkFBSSxFQUFFLElBQUksQ0FBQyxlQUFlO0FBQzFCLGtCQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWE7ZUFDdkIsQ0FBQzthQUNILE1BQU07QUFDTCxxQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3pCO1dBQ0Y7OztlQXBFVSxVQUFVOzs7NEJBQVYsVUFBVSIsImZpbGUiOiJncmlkL2dyaWQtY29sdW1uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEdyaWRDb2x1bW4ge1xuXG4gIHNwZWNpYWxDb2x1bW5zID0gWydoZWFkaW5nJywgJ25vc29ydCddO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgdGVtcGxhdGUsIHBhcmVudCkge1xuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB0aGlzLmZpZWxkID0gY29uZmlnLmZpZWxkO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgaWYgKCF0aGlzLmZpZWxkKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaWVsZCBpcyByZXF1aXJlZCcpO1xuXG4gICAgdGhpcy5oZWFkaW5nID0gY29uZmlnLmhlYWRpbmcgfHwgY29uZmlnLmZpZWxkO1xuICAgIHRoaXMubm9zb3J0ID0gY29uZmlnLm5vc29ydCB8fCBmYWxzZTtcbiAgICB0aGlzLmZpbHRlclZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZmlsdGVyVmFsdWVGcm9tID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZmlsdGVyVmFsdWVUbyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNob3dJbnB1dEZpbHRlciA9IGNvbmZpZ1snaW5wdXQtZmlsdGVyJ10gPT09ICd0cnVlJztcbiAgICB0aGlzLnNob3dEYXRlRmlsdGVyID0gY29uZmlnWydkYXRlLWZpbHRlciddID09PSAndHJ1ZSc7XG4gICAgdGhpcy5zaG93RGF0ZUZyb21Ub0ZpbHRlciA9IGNvbmZpZ1snZGF0ZS1maWx0ZXItZnJvbS10byddID09PSAndHJ1ZSc7XG4gICAgdGhpcy5zaG93Qm9vbGVhbkZpbHRlciA9IGNvbmZpZ1snYm9vbGVhbi1maWx0ZXInXSA9PT0gJ3RydWUnO1xuICAgIHRoaXMuc2hvd1NlbGVjdDJGaWx0ZXIgPSBjb25maWdbJ3NlbGVjdDItZmlsdGVyJ10gPT09ICd0cnVlJztcbiAgICB0aGlzLnNlbGVjdDJJdGVtcyA9IGNvbmZpZ1snc2VsZWN0Mi1pdGVtcyddO1xuXG4gICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICBmb3IgKHZhciBwcm9wIGluIGNvbmZpZykge1xuICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiB0aGlzLnNwZWNpYWxDb2x1bW5zLmluZGV4T2YocHJvcCkgPCAwKSB7XG4gICAgICAgIHRoaXNbcHJvcF0gPSBjb25maWdbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRmlsdGVycygpIHtcbiAgICB0aGlzLnBhcmVudC51cGRhdGVGaWx0ZXJzKCk7XG4gIH1cblxuICBoYXNGaWx0ZXJWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5zaG93RGF0ZUZyb21Ub0ZpbHRlciA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyVmFsdWVGcm9tICE9PSB1bmRlZmluZWQgfHwgdGhpcy5maWx0ZXJWYWx1ZVRvICE9PSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlclZhbHVlICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQm9vbGVhbkZpbHRlcigpIHtcbiAgICBpZiAodGhpcy5maWx0ZXJWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmZpbHRlclZhbHVlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9ICF0aGlzLmZpbHRlclZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlRmlsdGVycygpO1xuICB9XG5cbiAgY2xlYXJCb29sZWFuRmlsdGVyKCkge1xuICAgIHRoaXMuZmlsdGVyVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy51cGRhdGVGaWx0ZXJzKCk7XG4gIH1cblxuICBnZXRGaWx0ZXJWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5zaG93RGF0ZUZyb21Ub0ZpbHRlciA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZnJvbTogdGhpcy5maWx0ZXJWYWx1ZUZyb20sXG4gICAgICAgIHRvOiB0aGlzLmZpbHRlclZhbHVlVG9cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlclZhbHVlO1xuICAgIH1cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=