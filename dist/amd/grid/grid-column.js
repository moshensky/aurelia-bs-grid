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
//# sourceMappingURL=data:application/json;base64,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O2FBRWEsMEJBQUc7QUFDZixZQUFJLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxJQUFJLEVBQUU7QUFDdEMsY0FBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDOUMsbUJBQVUsSUFBSSxDQUFDLEtBQUssYUFBUSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxHQUFDLElBQUksU0FBSSxJQUFJLENBQUMsS0FBSyxXQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEdBQUMsSUFBSSxDQUFHO1dBQ2xILE1BQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO0FBQy9CLG1CQUFVLElBQUksQ0FBQyxLQUFLLGFBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsR0FBQyxJQUFJLENBQUc7V0FDaEUsTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDN0IsbUJBQVUsSUFBSSxDQUFDLEtBQUssV0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxHQUFDLElBQUksQ0FBRztXQUM1RCxNQUFNO0FBQ0wsbUJBQU8sU0FBUyxDQUFDO1dBQ2xCO1NBQ0YsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUM7QUFDMUIsaUJBQVUsSUFBSSxDQUFDLEtBQUssU0FBSSxJQUFJLENBQUMsV0FBVyxDQUFHO1NBQzVDLE1BQU07QUFDTCxpQkFBTyxTQUFTLENBQUM7U0FDbEI7T0FDRjs7O1dBcEpVLFVBQVU7OztVQUFWLFVBQVUsR0FBVixVQUFVIiwiZmlsZSI6ImdyaWQvZ3JpZC1jb2x1bW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgR3JpZENvbHVtbiB7XG5cbiAgc3BlY2lhbENvbHVtbnMgPSBbJ2hlYWRpbmcnLCAnbm9zb3J0J107XG5cbiAgY29uc3RydWN0b3IoY29uZmlnLCB0ZW1wbGF0ZSwgcGFyZW50KSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMuZmllbGQgPSBjb25maWcuZmllbGQ7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICBpZiAoIXRoaXMuZmllbGQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpZWxkIGlzIHJlcXVpcmVkJyk7XG5cbiAgICB0aGlzLmhlYWRpbmcgPSBjb25maWcuaGVhZGluZyB8fCBjb25maWcuZmllbGQ7XG4gICAgdGhpcy5ub3NvcnQgPSBjb25maWcubm9zb3J0ICE9PSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5maWx0ZXJWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbHRlclZhbHVlRnJvbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbHRlclZhbHVlVG8gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaG93SW5wdXRGaWx0ZXIgPSBjb25maWdbJ2lucHV0LWZpbHRlciddID09PSAndHJ1ZSc7XG4gICAgdGhpcy5zaG93RGF0ZUZpbHRlciA9IGNvbmZpZ1snZGF0ZS1maWx0ZXInXSA9PT0gJ3RydWUnO1xuICAgIHRoaXMuc2hvd0RhdGVGcm9tVG9GaWx0ZXIgPSBjb25maWdbJ2RhdGUtZmlsdGVyLWZyb20tdG8nXSA9PT0gJ3RydWUnO1xuICAgIHRoaXMuc2hvd0Jvb2xlYW5GaWx0ZXIgPSBjb25maWdbJ2Jvb2xlYW4tZmlsdGVyJ10gPT09ICd0cnVlJztcbiAgICB0aGlzLnNob3dTZWxlY3QyRmlsdGVyID0gY29uZmlnWydzZWxlY3QyLWZpbHRlciddID09PSAndHJ1ZSc7XG4gICAgdGhpcy5zZWxlY3QySXRlbXMgPSBjb25maWdbJ3NlbGVjdDItaXRlbXMnXTtcblxuICAgIC8vIFNldCBhdHRyaWJ1dGVzXG4gICAgZm9yICh2YXIgcHJvcCBpbiBjb25maWcpIHtcbiAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgdGhpcy5zcGVjaWFsQ29sdW1ucy5pbmRleE9mKHByb3ApIDwgMCkge1xuICAgICAgICB0aGlzW3Byb3BdID0gY29uZmlnW3Byb3BdO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgY2hhbmdlRGlyZWN0aW9uU29ydCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc29ydERpcmVjdGlvbikge1xuICAgICAgY2FzZSAnYXNjJzpcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gJ2Rlc2MnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rlc2MnOlxuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gJ2FzYyc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMucGFyZW50LmNoYW5nZVNvcnQoe1xuICAgICAgbmFtZTogdGhpcy5maWVsZCxcbiAgICAgIHZhbHVlOiB0aGlzLnNvcnREaXJlY3Rpb25cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUZpbHRlcnMoKSB7XG4gICAgdGhpcy5wYXJlbnQudXBkYXRlRmlsdGVycygpO1xuICB9XG5cbiAgaGFzRmlsdGVyVmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuc2hvd0RhdGVGcm9tVG9GaWx0ZXIgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlclZhbHVlRnJvbSAhPT0gdW5kZWZpbmVkIHx8IHRoaXMuZmlsdGVyVmFsdWVUbyAhPT0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJWYWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUJvb2xlYW5GaWx0ZXIoKSB7XG4gICAgaWYgKHRoaXMuZmlsdGVyVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSAhdGhpcy5maWx0ZXJWYWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUZpbHRlcnMoKTtcbiAgfVxuXG4gIGNsZWFyQm9vbGVhbkZpbHRlcigpIHtcbiAgICB0aGlzLmZpbHRlclZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudXBkYXRlRmlsdGVycygpO1xuICB9XG5cbiAgZ2V0RmlsdGVyVmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuc2hvd0RhdGVGcm9tVG9GaWx0ZXIgPT09IHRydWUpIHtcbiAgICAgIGlmICh0aGlzLmZpbHRlclZhbHVlRnJvbSAmJiB0aGlzLmZpbHRlclZhbHVlVG8pIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5maWVsZH1Gcm9tYCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5maWx0ZXJWYWx1ZUZyb20uZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICAgICAgdHlwZTogJz4nLFxuICAgICAgICAgIHZhbHVlVHlwZTogJ2RhdGUnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiBgJHt0aGlzLmZpZWxkfVRvYCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5maWx0ZXJWYWx1ZVRvLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgICAgIHR5cGU6ICc8JyxcbiAgICAgICAgICB2YWx1ZVR5cGU6ICdkYXRlJ1xuICAgICAgICB9XTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJWYWx1ZUZyb20pIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5maWVsZH1Gcm9tYCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5maWx0ZXJWYWx1ZUZyb20uZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICAgICAgdHlwZTogJz4nLFxuICAgICAgICAgIHZhbHVlVHlwZTogJ2RhdGUnXG4gICAgICAgIH1dO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlclZhbHVlVG8pIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5maWVsZH1Ub2AsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyVmFsdWVUby5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgICAgICB0eXBlOiAnPCcsXG4gICAgICAgICAgdmFsdWVUeXBlOiAnZGF0ZSdcbiAgICAgICAgfV07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlclZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCByZXN1bHQgPSBbe1xuICAgICAgICBuYW1lOiB0aGlzLmZpZWxkLFxuICAgICAgICB2YWx1ZTogdGhpcy5maWx0ZXJWYWx1ZVxuICAgICAgfV07XG4gICAgICBpZiAodGhpcy5zaG93Qm9vbGVhbkZpbHRlcikge1xuICAgICAgICByZXN1bHRbMF0udHlwZSA9ICc9JztcbiAgICAgICAgcmVzdWx0WzBdLnZhbHVlVHlwZSA9ICdib29sZWFuJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93U2VsZWN0MkZpbHRlcikge1xuICAgICAgICByZXN1bHRbMF0udHlwZSA9ICc9JztcbiAgICAgICAgcmVzdWx0WzBdLnZhbHVlVHlwZSA9ICdpbnQnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dJbnB1dEZpbHRlcikge1xuICAgICAgICByZXN1bHRbMF0udHlwZSA9ICdsaWtlJztcbiAgICAgICAgcmVzdWx0WzBdLnZhbHVlVHlwZSA9ICdzdHJpbmcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldFF1ZXJ5U3RyaW5nKCkge1xuICAgIGlmICh0aGlzLnNob3dEYXRlRnJvbVRvRmlsdGVyID09PSB0cnVlKSB7XG4gICAgICBpZiAodGhpcy5maWx0ZXJWYWx1ZUZyb20gJiYgdGhpcy5maWx0ZXJWYWx1ZVRvKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmZpZWxkfUZyb209JHt0aGlzLmZpbHRlclZhbHVlRnJvbS51bml4KCkqMTAwMH0mJHt0aGlzLmZpZWxkfVRvPSR7dGhpcy5maWx0ZXJWYWx1ZVRvLnVuaXgoKSoxMDAwfWA7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyVmFsdWVGcm9tKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmZpZWxkfUZyb209JHt0aGlzLmZpbHRlclZhbHVlRnJvbS51bml4KCkqMTAwMH1gO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlclZhbHVlVG8pIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZmllbGR9VG89JHt0aGlzLmZpbHRlclZhbHVlVG8udW5peCgpKjEwMDB9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlclZhbHVlKXtcbiAgICAgIHJldHVybiBgJHt0aGlzLmZpZWxkfT0ke3RoaXMuZmlsdGVyVmFsdWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==