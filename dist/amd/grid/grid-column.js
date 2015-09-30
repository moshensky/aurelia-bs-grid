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
});
//# sourceMappingURL=data:application/json;base64,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O2FBRWEsMEJBQUc7QUFDZixZQUFJLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxJQUFJLEVBQUU7QUFDdEMsY0FBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDOUMsbUJBQVUsSUFBSSxDQUFDLEtBQUssYUFBUSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxHQUFDLElBQUksU0FBSSxJQUFJLENBQUMsS0FBSyxXQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEdBQUMsSUFBSSxDQUFHO1dBQ2xILE1BQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO0FBQy9CLG1CQUFVLElBQUksQ0FBQyxLQUFLLGFBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsR0FBQyxJQUFJLENBQUc7V0FDaEUsTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDN0IsbUJBQVUsSUFBSSxDQUFDLEtBQUssV0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxHQUFDLElBQUksQ0FBRztXQUM1RCxNQUFNO0FBQ0wsbUJBQU8sU0FBUyxDQUFDO1dBQ2xCO1NBQ0YsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUM7QUFDMUIsaUJBQVUsSUFBSSxDQUFDLEtBQUssU0FBSSxJQUFJLENBQUMsV0FBVyxDQUFHO1NBQzVDLE1BQU07QUFDTCxpQkFBTyxTQUFTLENBQUM7U0FDbEI7T0FDRjs7O1dBcEpVLFVBQVUiLCJmaWxlIjoiZ3JpZC9ncmlkLWNvbHVtbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHcmlkQ29sdW1uIHtcblxuICBzcGVjaWFsQ29sdW1ucyA9IFsnaGVhZGluZycsICdub3NvcnQnXTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcsIHRlbXBsYXRlLCBwYXJlbnQpIHtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5maWVsZCA9IGNvbmZpZy5maWVsZDtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgIGlmICghdGhpcy5maWVsZClcbiAgICAgIHRocm93IG5ldyBFcnJvcignZmllbGQgaXMgcmVxdWlyZWQnKTtcblxuICAgIHRoaXMuaGVhZGluZyA9IGNvbmZpZy5oZWFkaW5nIHx8IGNvbmZpZy5maWVsZDtcbiAgICB0aGlzLm5vc29ydCA9IGNvbmZpZy5ub3NvcnQgIT09IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLmZpbHRlclZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZmlsdGVyVmFsdWVGcm9tID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZmlsdGVyVmFsdWVUbyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNob3dJbnB1dEZpbHRlciA9IGNvbmZpZ1snaW5wdXQtZmlsdGVyJ10gPT09ICd0cnVlJztcbiAgICB0aGlzLnNob3dEYXRlRmlsdGVyID0gY29uZmlnWydkYXRlLWZpbHRlciddID09PSAndHJ1ZSc7XG4gICAgdGhpcy5zaG93RGF0ZUZyb21Ub0ZpbHRlciA9IGNvbmZpZ1snZGF0ZS1maWx0ZXItZnJvbS10byddID09PSAndHJ1ZSc7XG4gICAgdGhpcy5zaG93Qm9vbGVhbkZpbHRlciA9IGNvbmZpZ1snYm9vbGVhbi1maWx0ZXInXSA9PT0gJ3RydWUnO1xuICAgIHRoaXMuc2hvd1NlbGVjdDJGaWx0ZXIgPSBjb25maWdbJ3NlbGVjdDItZmlsdGVyJ10gPT09ICd0cnVlJztcbiAgICB0aGlzLnNlbGVjdDJJdGVtcyA9IGNvbmZpZ1snc2VsZWN0Mi1pdGVtcyddO1xuXG4gICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICBmb3IgKHZhciBwcm9wIGluIGNvbmZpZykge1xuICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiB0aGlzLnNwZWNpYWxDb2x1bW5zLmluZGV4T2YocHJvcCkgPCAwKSB7XG4gICAgICAgIHRoaXNbcHJvcF0gPSBjb25maWdbcHJvcF07XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBjaGFuZ2VEaXJlY3Rpb25Tb3J0KCkge1xuICAgIHN3aXRjaCAodGhpcy5zb3J0RGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdhc2MnOlxuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSAnZGVzYyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGVzYyc6XG4gICAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSAnYXNjJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJlbnQuY2hhbmdlU29ydCh7XG4gICAgICBuYW1lOiB0aGlzLmZpZWxkLFxuICAgICAgdmFsdWU6IHRoaXMuc29ydERpcmVjdGlvblxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlRmlsdGVycygpIHtcbiAgICB0aGlzLnBhcmVudC51cGRhdGVGaWx0ZXJzKCk7XG4gIH1cblxuICBoYXNGaWx0ZXJWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5zaG93RGF0ZUZyb21Ub0ZpbHRlciA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyVmFsdWVGcm9tICE9PSB1bmRlZmluZWQgfHwgdGhpcy5maWx0ZXJWYWx1ZVRvICE9PSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlclZhbHVlICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQm9vbGVhbkZpbHRlcigpIHtcbiAgICBpZiAodGhpcy5maWx0ZXJWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmZpbHRlclZhbHVlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9ICF0aGlzLmZpbHRlclZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlRmlsdGVycygpO1xuICB9XG5cbiAgY2xlYXJCb29sZWFuRmlsdGVyKCkge1xuICAgIHRoaXMuZmlsdGVyVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy51cGRhdGVGaWx0ZXJzKCk7XG4gIH1cblxuICBnZXRGaWx0ZXJWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5zaG93RGF0ZUZyb21Ub0ZpbHRlciA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKHRoaXMuZmlsdGVyVmFsdWVGcm9tICYmIHRoaXMuZmlsdGVyVmFsdWVUbykge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICBuYW1lOiBgJHt0aGlzLmZpZWxkfUZyb21gLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmZpbHRlclZhbHVlRnJvbS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgICAgICB0eXBlOiAnPicsXG4gICAgICAgICAgdmFsdWVUeXBlOiAnZGF0ZSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6IGAke3RoaXMuZmllbGR9VG9gLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmZpbHRlclZhbHVlVG8uZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICAgICAgdHlwZTogJzwnLFxuICAgICAgICAgIHZhbHVlVHlwZTogJ2RhdGUnXG4gICAgICAgIH1dO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlclZhbHVlRnJvbSkge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICBuYW1lOiBgJHt0aGlzLmZpZWxkfUZyb21gLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmZpbHRlclZhbHVlRnJvbS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgICAgICB0eXBlOiAnPicsXG4gICAgICAgICAgdmFsdWVUeXBlOiAnZGF0ZSdcbiAgICAgICAgfV07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyVmFsdWVUbykge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICBuYW1lOiBgJHt0aGlzLmZpZWxkfVRvYCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5maWx0ZXJWYWx1ZVRvLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgICAgIHR5cGU6ICc8JyxcbiAgICAgICAgICB2YWx1ZVR5cGU6ICdkYXRlJ1xuICAgICAgICB9XTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHJlc3VsdCA9IFt7XG4gICAgICAgIG5hbWU6IHRoaXMuZmllbGQsXG4gICAgICAgIHZhbHVlOiB0aGlzLmZpbHRlclZhbHVlXG4gICAgICB9XTtcbiAgICAgIGlmICh0aGlzLnNob3dCb29sZWFuRmlsdGVyKSB7XG4gICAgICAgIHJlc3VsdFswXS50eXBlID0gJz0nO1xuICAgICAgICByZXN1bHRbMF0udmFsdWVUeXBlID0gJ2Jvb2xlYW4nO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dTZWxlY3QyRmlsdGVyKSB7XG4gICAgICAgIHJlc3VsdFswXS50eXBlID0gJz0nO1xuICAgICAgICByZXN1bHRbMF0udmFsdWVUeXBlID0gJ2ludCc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2hvd0lucHV0RmlsdGVyKSB7XG4gICAgICAgIHJlc3VsdFswXS50eXBlID0gJ2xpa2UnO1xuICAgICAgICByZXN1bHRbMF0udmFsdWVUeXBlID0gJ3N0cmluZyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0UXVlcnlTdHJpbmcoKSB7XG4gICAgaWYgKHRoaXMuc2hvd0RhdGVGcm9tVG9GaWx0ZXIgPT09IHRydWUpIHtcbiAgICAgIGlmICh0aGlzLmZpbHRlclZhbHVlRnJvbSAmJiB0aGlzLmZpbHRlclZhbHVlVG8pIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZmllbGR9RnJvbT0ke3RoaXMuZmlsdGVyVmFsdWVGcm9tLnVuaXgoKSoxMDAwfSYke3RoaXMuZmllbGR9VG89JHt0aGlzLmZpbHRlclZhbHVlVG8udW5peCgpKjEwMDB9YDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJWYWx1ZUZyb20pIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZmllbGR9RnJvbT0ke3RoaXMuZmlsdGVyVmFsdWVGcm9tLnVuaXgoKSoxMDAwfWA7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyVmFsdWVUbykge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5maWVsZH1Ubz0ke3RoaXMuZmlsdGVyVmFsdWVUby51bml4KCkqMTAwMH1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyVmFsdWUpe1xuICAgICAgcmV0dXJuIGAke3RoaXMuZmllbGR9PSR7dGhpcy5maWx0ZXJWYWx1ZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9