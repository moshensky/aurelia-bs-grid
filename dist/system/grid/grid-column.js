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
                  value: this.filterValueFrom.unix() * 1000,
                  type: '>',
                  valueType: 'datetime'
                }, {
                  name: this.field + 'To',
                  value: this.filterValueTo.unix() * 1000,
                  type: '<',
                  valueType: 'datetime'
                }];
              } else if (this.filterValueFrom) {
                return [{
                  name: this.field + 'From',
                  value: this.filterValueFrom.unix() * 1000,
                  type: '>',
                  valueType: 'datetime'
                }];
              } else if (this.filterValueTo) {
                return [{
                  name: this.field + 'To',
                  value: this.filterValueTo.unix() * 1000,
                  type: '<',
                  valueType: 'datetime'
                }];
              }
            } else if (this.filterValue) {
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
//# sourceMappingURL=data:application/json;base64,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QUNmOztBQUVELG1CQUFPLEVBQUUsQ0FBQztXQUNYOzs7aUJBRWEsMEJBQUc7QUFDZixnQkFBSSxJQUFJLENBQUMsb0JBQW9CLEtBQUssSUFBSSxFQUFFO0FBQ3RDLGtCQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUM5Qyx1QkFBVSxJQUFJLENBQUMsS0FBSyxhQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEdBQUMsSUFBSSxTQUFJLElBQUksQ0FBQyxLQUFLLFdBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsR0FBQyxJQUFJLENBQUc7ZUFDbEgsTUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7QUFDL0IsdUJBQVUsSUFBSSxDQUFDLEtBQUssYUFBUSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxHQUFDLElBQUksQ0FBRztlQUNoRSxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUM3Qix1QkFBVSxJQUFJLENBQUMsS0FBSyxXQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEdBQUMsSUFBSSxDQUFHO2VBQzVELE1BQU07QUFDTCx1QkFBTyxTQUFTLENBQUM7ZUFDbEI7YUFDRixNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBQztBQUMxQixxQkFBVSxJQUFJLENBQUMsS0FBSyxTQUFJLElBQUksQ0FBQyxXQUFXLENBQUc7YUFDNUMsTUFBTTtBQUNMLHFCQUFPLFNBQVMsQ0FBQzthQUNsQjtXQUNGOzs7ZUFuSlUsVUFBVTs7OzRCQUFWLFVBQVUiLCJmaWxlIjoiZ3JpZC9ncmlkLWNvbHVtbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHcmlkQ29sdW1uIHtcblxuICBzcGVjaWFsQ29sdW1ucyA9IFsnaGVhZGluZycsICdub3NvcnQnXTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcsIHRlbXBsYXRlLCBwYXJlbnQpIHtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5maWVsZCA9IGNvbmZpZy5maWVsZDtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgIGlmICghdGhpcy5maWVsZClcbiAgICAgIHRocm93IG5ldyBFcnJvcignZmllbGQgaXMgcmVxdWlyZWQnKTtcblxuICAgIHRoaXMuaGVhZGluZyA9IGNvbmZpZy5oZWFkaW5nIHx8IGNvbmZpZy5maWVsZDtcbiAgICB0aGlzLm5vc29ydCA9IGNvbmZpZy5ub3NvcnQgfHwgZmFsc2U7XG4gICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5maWx0ZXJWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbHRlclZhbHVlRnJvbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbHRlclZhbHVlVG8gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaG93SW5wdXRGaWx0ZXIgPSBjb25maWdbJ2lucHV0LWZpbHRlciddID09PSAndHJ1ZSc7XG4gICAgdGhpcy5zaG93RGF0ZUZpbHRlciA9IGNvbmZpZ1snZGF0ZS1maWx0ZXInXSA9PT0gJ3RydWUnO1xuICAgIHRoaXMuc2hvd0RhdGVGcm9tVG9GaWx0ZXIgPSBjb25maWdbJ2RhdGUtZmlsdGVyLWZyb20tdG8nXSA9PT0gJ3RydWUnO1xuICAgIHRoaXMuc2hvd0Jvb2xlYW5GaWx0ZXIgPSBjb25maWdbJ2Jvb2xlYW4tZmlsdGVyJ10gPT09ICd0cnVlJztcbiAgICB0aGlzLnNob3dTZWxlY3QyRmlsdGVyID0gY29uZmlnWydzZWxlY3QyLWZpbHRlciddID09PSAndHJ1ZSc7XG4gICAgdGhpcy5zZWxlY3QySXRlbXMgPSBjb25maWdbJ3NlbGVjdDItaXRlbXMnXTtcblxuICAgIC8vIFNldCBhdHRyaWJ1dGVzXG4gICAgZm9yICh2YXIgcHJvcCBpbiBjb25maWcpIHtcbiAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgdGhpcy5zcGVjaWFsQ29sdW1ucy5pbmRleE9mKHByb3ApIDwgMCkge1xuICAgICAgICB0aGlzW3Byb3BdID0gY29uZmlnW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZURpcmVjdGlvblNvcnQoKSB7XG4gICAgc3dpdGNoICh0aGlzLnNvcnREaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2FzYyc6XG4gICAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9ICdkZXNjJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZXNjJzpcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9ICdhc2MnO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLnBhcmVudC5jaGFuZ2VTb3J0KHtcbiAgICAgIG5hbWU6IHRoaXMuZmllbGQsXG4gICAgICB2YWx1ZTogdGhpcy5zb3J0RGlyZWN0aW9uXG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVGaWx0ZXJzKCkge1xuICAgIHRoaXMucGFyZW50LnVwZGF0ZUZpbHRlcnMoKTtcbiAgfVxuXG4gIGhhc0ZpbHRlclZhbHVlKCkge1xuICAgIGlmICh0aGlzLnNob3dEYXRlRnJvbVRvRmlsdGVyID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJWYWx1ZUZyb20gIT09IHVuZGVmaW5lZCB8fCB0aGlzLmZpbHRlclZhbHVlVG8gIT09IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyVmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVCb29sZWFuRmlsdGVyKCkge1xuICAgIGlmICh0aGlzLmZpbHRlclZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlclZhbHVlID0gIXRoaXMuZmlsdGVyVmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVGaWx0ZXJzKCk7XG4gIH1cblxuICBjbGVhckJvb2xlYW5GaWx0ZXIoKSB7XG4gICAgdGhpcy5maWx0ZXJWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcnMoKTtcbiAgfVxuXG4gIGdldEZpbHRlclZhbHVlKCkge1xuICAgIGlmICh0aGlzLnNob3dEYXRlRnJvbVRvRmlsdGVyID09PSB0cnVlKSB7XG4gICAgICBpZiAodGhpcy5maWx0ZXJWYWx1ZUZyb20gJiYgdGhpcy5maWx0ZXJWYWx1ZVRvKSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgIG5hbWU6IGAke3RoaXMuZmllbGR9RnJvbWAsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyVmFsdWVGcm9tLnVuaXgoKSAqIDEwMDAsXG4gICAgICAgICAgdHlwZTogJz4nLFxuICAgICAgICAgIHZhbHVlVHlwZTogJ2RhdGV0aW1lJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5maWVsZH1Ub2AsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyVmFsdWVUby51bml4KCkgKiAxMDAwLFxuICAgICAgICAgIHR5cGU6ICc8JyxcbiAgICAgICAgICB2YWx1ZVR5cGU6ICdkYXRldGltZSdcbiAgICAgICAgfV07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyVmFsdWVGcm9tKSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgIG5hbWU6IGAke3RoaXMuZmllbGR9RnJvbWAsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyVmFsdWVGcm9tLnVuaXgoKSAqIDEwMDAsXG4gICAgICAgICAgdHlwZTogJz4nLFxuICAgICAgICAgIHZhbHVlVHlwZTogJ2RhdGV0aW1lJ1xuICAgICAgICB9XTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJWYWx1ZVRvKSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgIG5hbWU6IGAke3RoaXMuZmllbGR9VG9gLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmZpbHRlclZhbHVlVG8udW5peCgpICogMTAwMCxcbiAgICAgICAgICB0eXBlOiAnPCcsXG4gICAgICAgICAgdmFsdWVUeXBlOiAnZGF0ZXRpbWUnXG4gICAgICAgIH1dO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJWYWx1ZSkge1xuICAgICAgbGV0IHJlc3VsdCA9IFt7XG4gICAgICAgIG5hbWU6IHRoaXMuZmllbGQsXG4gICAgICAgIHZhbHVlOiB0aGlzLmZpbHRlclZhbHVlXG4gICAgICB9XTtcbiAgICAgIGlmICh0aGlzLnNob3dCb29sZWFuRmlsdGVyKSB7XG4gICAgICAgIHJlc3VsdFswXS50eXBlID0gJz0nO1xuICAgICAgICByZXN1bHRbMF0udmFsdWVUeXBlID0gJ2Jvb2xlYW4nO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dTZWxlY3QyRmlsdGVyKSB7XG4gICAgICAgIHJlc3VsdFswXS50eXBlID0gJz0nO1xuICAgICAgICByZXN1bHRbMF0udmFsdWVUeXBlID0gJ2ludCc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2hvd0lucHV0RmlsdGVyKSB7XG4gICAgICAgIHJlc3VsdFswXS50eXBlID0gJ2xpa2UnO1xuICAgICAgICByZXN1bHRbMF0udmFsdWVUeXBlID0gJ3N0cmluZyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0UXVlcnlTdHJpbmcoKSB7XG4gICAgaWYgKHRoaXMuc2hvd0RhdGVGcm9tVG9GaWx0ZXIgPT09IHRydWUpIHtcbiAgICAgIGlmICh0aGlzLmZpbHRlclZhbHVlRnJvbSAmJiB0aGlzLmZpbHRlclZhbHVlVG8pIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZmllbGR9RnJvbT0ke3RoaXMuZmlsdGVyVmFsdWVGcm9tLnVuaXgoKSoxMDAwfSYke3RoaXMuZmllbGR9VG89JHt0aGlzLmZpbHRlclZhbHVlVG8udW5peCgpKjEwMDB9YDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJWYWx1ZUZyb20pIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZmllbGR9RnJvbT0ke3RoaXMuZmlsdGVyVmFsdWVGcm9tLnVuaXgoKSoxMDAwfWA7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyVmFsdWVUbykge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5maWVsZH1Ubz0ke3RoaXMuZmlsdGVyVmFsdWVUby51bml4KCkqMTAwMH1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyVmFsdWUpe1xuICAgICAgcmV0dXJuIGAke3RoaXMuZmllbGR9PSR7dGhpcy5maWx0ZXJWYWx1ZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9