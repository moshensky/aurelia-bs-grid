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
          this.nosort = config.nosort !== undefined;
          this.sortDirection = undefined;

          this.filterValue = undefined;
          this.filterValueFrom = undefined;
          this.filterValueTo = undefined;
          this.showInputFilter = config['input-filter'] === 'true';
          this.showDateFilter = config['date-filter'] === 'true';
          this.showDateFromToFilter = config['date-filter-from-to'] === 'true';
          this.showBooleanFilter = config['boolean-filter'] === 'true';
          if (this.showBooleanFilter) {
            switch (config['filter-value']) {
              case 'true':
                this.filterValue = true;
                break;
              case 'false':
                this.filterValue = false;
                break;
              default:
                this.filterValue = undefined;
            }
          }

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

      _export('GridColumn', GridColumn);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUFHO2FBQzVDLE1BQU07QUFDTCxxQkFBTyxTQUFTLENBQUM7YUFDbEI7V0FDRjs7O2VBaktVLFVBQVU7Ozs0QkFBVixVQUFVIiwiZmlsZSI6ImdyaWQvZ3JpZC1jb2x1bW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgR3JpZENvbHVtbiB7XG5cbiAgc3BlY2lhbENvbHVtbnMgPSBbJ2hlYWRpbmcnLCAnbm9zb3J0J107XG5cbiAgY29uc3RydWN0b3IoY29uZmlnLCB0ZW1wbGF0ZSwgcGFyZW50KSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMuZmllbGQgPSBjb25maWcuZmllbGQ7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICBpZiAoIXRoaXMuZmllbGQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpZWxkIGlzIHJlcXVpcmVkJyk7XG5cbiAgICB0aGlzLmhlYWRpbmcgPSBjb25maWcuaGVhZGluZyB8fCBjb25maWcuZmllbGQ7XG4gICAgdGhpcy5ub3NvcnQgPSBjb25maWcubm9zb3J0ICE9PSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5maWx0ZXJWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbHRlclZhbHVlRnJvbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbHRlclZhbHVlVG8gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaG93SW5wdXRGaWx0ZXIgPSBjb25maWdbJ2lucHV0LWZpbHRlciddID09PSAndHJ1ZSc7XG4gICAgdGhpcy5zaG93RGF0ZUZpbHRlciA9IGNvbmZpZ1snZGF0ZS1maWx0ZXInXSA9PT0gJ3RydWUnO1xuICAgIHRoaXMuc2hvd0RhdGVGcm9tVG9GaWx0ZXIgPSBjb25maWdbJ2RhdGUtZmlsdGVyLWZyb20tdG8nXSA9PT0gJ3RydWUnO1xuICAgIHRoaXMuc2hvd0Jvb2xlYW5GaWx0ZXIgPSBjb25maWdbJ2Jvb2xlYW4tZmlsdGVyJ10gPT09ICd0cnVlJztcbiAgICBpZiAodGhpcy5zaG93Qm9vbGVhbkZpbHRlcikge1xuICAgICAgc3dpdGNoIChjb25maWdbJ2ZpbHRlci12YWx1ZSddKSB7XG4gICAgICAgIGNhc2UgJ3RydWUnOlxuICAgICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmYWxzZSc6XG4gICAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNob3dTZWxlY3QyRmlsdGVyID0gY29uZmlnWydzZWxlY3QyLWZpbHRlciddID09PSAndHJ1ZSc7XG4gICAgdGhpcy5zZWxlY3QySXRlbXMgPSBjb25maWdbJ3NlbGVjdDItaXRlbXMnXTtcblxuICAgIC8vIFNldCBhdHRyaWJ1dGVzXG4gICAgZm9yICh2YXIgcHJvcCBpbiBjb25maWcpIHtcbiAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgdGhpcy5zcGVjaWFsQ29sdW1ucy5pbmRleE9mKHByb3ApIDwgMCkge1xuICAgICAgICB0aGlzW3Byb3BdID0gY29uZmlnW3Byb3BdO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgY2hhbmdlRGlyZWN0aW9uU29ydCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc29ydERpcmVjdGlvbikge1xuICAgICAgY2FzZSAnYXNjJzpcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gJ2Rlc2MnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rlc2MnOlxuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gJ2FzYyc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMucGFyZW50LmNoYW5nZVNvcnQoe1xuICAgICAgbmFtZTogdGhpcy5maWVsZCxcbiAgICAgIHZhbHVlOiB0aGlzLnNvcnREaXJlY3Rpb25cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUZpbHRlcnMoKSB7XG4gICAgdGhpcy5wYXJlbnQudXBkYXRlRmlsdGVycygpO1xuICB9XG5cbiAgaGFzRmlsdGVyVmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuc2hvd0RhdGVGcm9tVG9GaWx0ZXIgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlclZhbHVlRnJvbSAhPT0gdW5kZWZpbmVkIHx8IHRoaXMuZmlsdGVyVmFsdWVUbyAhPT0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJWYWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUJvb2xlYW5GaWx0ZXIoKSB7XG4gICAgaWYgKHRoaXMuZmlsdGVyVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSAhdGhpcy5maWx0ZXJWYWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUZpbHRlcnMoKTtcbiAgfVxuXG4gIGNsZWFyQm9vbGVhbkZpbHRlcigpIHtcbiAgICB0aGlzLmZpbHRlclZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudXBkYXRlRmlsdGVycygpO1xuICB9XG5cbiAgZ2V0RmlsdGVyVmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuc2hvd0RhdGVGcm9tVG9GaWx0ZXIgPT09IHRydWUpIHtcbiAgICAgIGlmICh0aGlzLmZpbHRlclZhbHVlRnJvbSAmJiB0aGlzLmZpbHRlclZhbHVlVG8pIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5maWVsZH1Gcm9tYCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5maWx0ZXJWYWx1ZUZyb20uZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICAgICAgdHlwZTogJz4nLFxuICAgICAgICAgIHZhbHVlVHlwZTogJ2RhdGUnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiBgJHt0aGlzLmZpZWxkfVRvYCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5maWx0ZXJWYWx1ZVRvLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgICAgIHR5cGU6ICc8JyxcbiAgICAgICAgICB2YWx1ZVR5cGU6ICdkYXRlJ1xuICAgICAgICB9XTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJWYWx1ZUZyb20pIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5maWVsZH1Gcm9tYCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5maWx0ZXJWYWx1ZUZyb20uZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICAgICAgdHlwZTogJz4nLFxuICAgICAgICAgIHZhbHVlVHlwZTogJ2RhdGUnXG4gICAgICAgIH1dO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlclZhbHVlVG8pIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5maWVsZH1Ub2AsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyVmFsdWVUby5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgICAgICB0eXBlOiAnPCcsXG4gICAgICAgICAgdmFsdWVUeXBlOiAnZGF0ZSdcbiAgICAgICAgfV07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlclZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCByZXN1bHQgPSBbe1xuICAgICAgICBuYW1lOiB0aGlzLmZpZWxkLFxuICAgICAgICB2YWx1ZTogdGhpcy5maWx0ZXJWYWx1ZVxuICAgICAgfV07XG4gICAgICBpZiAodGhpcy5zaG93Qm9vbGVhbkZpbHRlcikge1xuICAgICAgICByZXN1bHRbMF0udHlwZSA9ICc9JztcbiAgICAgICAgcmVzdWx0WzBdLnZhbHVlVHlwZSA9ICdib29sZWFuJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93U2VsZWN0MkZpbHRlcikge1xuICAgICAgICByZXN1bHRbMF0udHlwZSA9ICc9JztcbiAgICAgICAgcmVzdWx0WzBdLnZhbHVlVHlwZSA9ICdpbnQnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dJbnB1dEZpbHRlcikge1xuICAgICAgICByZXN1bHRbMF0udHlwZSA9ICdsaWtlJztcbiAgICAgICAgcmVzdWx0WzBdLnZhbHVlVHlwZSA9ICdzdHJpbmcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldFF1ZXJ5U3RyaW5nKCkge1xuICAgIGlmICh0aGlzLnNob3dEYXRlRnJvbVRvRmlsdGVyID09PSB0cnVlKSB7XG4gICAgICBpZiAodGhpcy5maWx0ZXJWYWx1ZUZyb20gJiYgdGhpcy5maWx0ZXJWYWx1ZVRvKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmZpZWxkfUZyb209JHt0aGlzLmZpbHRlclZhbHVlRnJvbS51bml4KCkqMTAwMH0mJHt0aGlzLmZpZWxkfVRvPSR7dGhpcy5maWx0ZXJWYWx1ZVRvLnVuaXgoKSoxMDAwfWA7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyVmFsdWVGcm9tKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmZpZWxkfUZyb209JHt0aGlzLmZpbHRlclZhbHVlRnJvbS51bml4KCkqMTAwMH1gO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlclZhbHVlVG8pIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZmllbGR9VG89JHt0aGlzLmZpbHRlclZhbHVlVG8udW5peCgpKjEwMDB9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlclZhbHVlKXtcbiAgICAgIHJldHVybiBgJHt0aGlzLmZpZWxkfT0ke3RoaXMuZmlsdGVyVmFsdWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==