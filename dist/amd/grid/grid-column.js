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

  exports.GridColumn = GridColumn;
});
//# sourceMappingURL=data:application/json;base64,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OztXQWpLVSxVQUFVOzs7VUFBVixVQUFVLEdBQVYsVUFBVSIsImZpbGUiOiJncmlkL2dyaWQtY29sdW1uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEdyaWRDb2x1bW4ge1xuXG4gIHNwZWNpYWxDb2x1bW5zID0gWydoZWFkaW5nJywgJ25vc29ydCddO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgdGVtcGxhdGUsIHBhcmVudCkge1xuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB0aGlzLmZpZWxkID0gY29uZmlnLmZpZWxkO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgaWYgKCF0aGlzLmZpZWxkKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaWVsZCBpcyByZXF1aXJlZCcpO1xuXG4gICAgdGhpcy5oZWFkaW5nID0gY29uZmlnLmhlYWRpbmcgfHwgY29uZmlnLmZpZWxkO1xuICAgIHRoaXMubm9zb3J0ID0gY29uZmlnLm5vc29ydCAhPT0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuZmlsdGVyVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWx0ZXJWYWx1ZUZyb20gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWx0ZXJWYWx1ZVRvID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2hvd0lucHV0RmlsdGVyID0gY29uZmlnWydpbnB1dC1maWx0ZXInXSA9PT0gJ3RydWUnO1xuICAgIHRoaXMuc2hvd0RhdGVGaWx0ZXIgPSBjb25maWdbJ2RhdGUtZmlsdGVyJ10gPT09ICd0cnVlJztcbiAgICB0aGlzLnNob3dEYXRlRnJvbVRvRmlsdGVyID0gY29uZmlnWydkYXRlLWZpbHRlci1mcm9tLXRvJ10gPT09ICd0cnVlJztcbiAgICB0aGlzLnNob3dCb29sZWFuRmlsdGVyID0gY29uZmlnWydib29sZWFuLWZpbHRlciddID09PSAndHJ1ZSc7XG4gICAgaWYgKHRoaXMuc2hvd0Jvb2xlYW5GaWx0ZXIpIHtcbiAgICAgIHN3aXRjaCAoY29uZmlnWydmaWx0ZXItdmFsdWUnXSkge1xuICAgICAgICBjYXNlICd0cnVlJzpcbiAgICAgICAgICB0aGlzLmZpbHRlclZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZmFsc2UnOlxuICAgICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLmZpbHRlclZhbHVlID0gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zaG93U2VsZWN0MkZpbHRlciA9IGNvbmZpZ1snc2VsZWN0Mi1maWx0ZXInXSA9PT0gJ3RydWUnO1xuICAgIHRoaXMuc2VsZWN0Mkl0ZW1zID0gY29uZmlnWydzZWxlY3QyLWl0ZW1zJ107XG5cbiAgICAvLyBTZXQgYXR0cmlidXRlc1xuICAgIGZvciAodmFyIHByb3AgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KHByb3ApICYmIHRoaXMuc3BlY2lhbENvbHVtbnMuaW5kZXhPZihwcm9wKSA8IDApIHtcbiAgICAgICAgdGhpc1twcm9wXSA9IGNvbmZpZ1twcm9wXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGNoYW5nZURpcmVjdGlvblNvcnQoKSB7XG4gICAgc3dpdGNoICh0aGlzLnNvcnREaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2FzYyc6XG4gICAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9ICdkZXNjJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZXNjJzpcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9ICdhc2MnO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLnBhcmVudC5jaGFuZ2VTb3J0KHtcbiAgICAgIG5hbWU6IHRoaXMuZmllbGQsXG4gICAgICB2YWx1ZTogdGhpcy5zb3J0RGlyZWN0aW9uXG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVGaWx0ZXJzKCkge1xuICAgIHRoaXMucGFyZW50LnVwZGF0ZUZpbHRlcnMoKTtcbiAgfVxuXG4gIGhhc0ZpbHRlclZhbHVlKCkge1xuICAgIGlmICh0aGlzLnNob3dEYXRlRnJvbVRvRmlsdGVyID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJWYWx1ZUZyb20gIT09IHVuZGVmaW5lZCB8fCB0aGlzLmZpbHRlclZhbHVlVG8gIT09IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyVmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVCb29sZWFuRmlsdGVyKCkge1xuICAgIGlmICh0aGlzLmZpbHRlclZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlclZhbHVlID0gIXRoaXMuZmlsdGVyVmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVGaWx0ZXJzKCk7XG4gIH1cblxuICBjbGVhckJvb2xlYW5GaWx0ZXIoKSB7XG4gICAgdGhpcy5maWx0ZXJWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcnMoKTtcbiAgfVxuXG4gIGdldEZpbHRlclZhbHVlKCkge1xuICAgIGlmICh0aGlzLnNob3dEYXRlRnJvbVRvRmlsdGVyID09PSB0cnVlKSB7XG4gICAgICBpZiAodGhpcy5maWx0ZXJWYWx1ZUZyb20gJiYgdGhpcy5maWx0ZXJWYWx1ZVRvKSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgIG5hbWU6IGAke3RoaXMuZmllbGR9RnJvbWAsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyVmFsdWVGcm9tLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgICAgIHR5cGU6ICc+JyxcbiAgICAgICAgICB2YWx1ZVR5cGU6ICdkYXRlJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5maWVsZH1Ub2AsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyVmFsdWVUby5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgICAgICB0eXBlOiAnPCcsXG4gICAgICAgICAgdmFsdWVUeXBlOiAnZGF0ZSdcbiAgICAgICAgfV07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyVmFsdWVGcm9tKSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgIG5hbWU6IGAke3RoaXMuZmllbGR9RnJvbWAsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyVmFsdWVGcm9tLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgICAgIHR5cGU6ICc+JyxcbiAgICAgICAgICB2YWx1ZVR5cGU6ICdkYXRlJ1xuICAgICAgICB9XTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJWYWx1ZVRvKSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgIG5hbWU6IGAke3RoaXMuZmllbGR9VG9gLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmZpbHRlclZhbHVlVG8uZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICAgICAgdHlwZTogJzwnLFxuICAgICAgICAgIHZhbHVlVHlwZTogJ2RhdGUnXG4gICAgICAgIH1dO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gW3tcbiAgICAgICAgbmFtZTogdGhpcy5maWVsZCxcbiAgICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyVmFsdWVcbiAgICAgIH1dO1xuICAgICAgaWYgKHRoaXMuc2hvd0Jvb2xlYW5GaWx0ZXIpIHtcbiAgICAgICAgcmVzdWx0WzBdLnR5cGUgPSAnPSc7XG4gICAgICAgIHJlc3VsdFswXS52YWx1ZVR5cGUgPSAnYm9vbGVhbic7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2hvd1NlbGVjdDJGaWx0ZXIpIHtcbiAgICAgICAgcmVzdWx0WzBdLnR5cGUgPSAnPSc7XG4gICAgICAgIHJlc3VsdFswXS52YWx1ZVR5cGUgPSAnaW50JztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93SW5wdXRGaWx0ZXIpIHtcbiAgICAgICAgcmVzdWx0WzBdLnR5cGUgPSAnbGlrZSc7XG4gICAgICAgIHJlc3VsdFswXS52YWx1ZVR5cGUgPSAnc3RyaW5nJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBnZXRRdWVyeVN0cmluZygpIHtcbiAgICBpZiAodGhpcy5zaG93RGF0ZUZyb21Ub0ZpbHRlciA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKHRoaXMuZmlsdGVyVmFsdWVGcm9tICYmIHRoaXMuZmlsdGVyVmFsdWVUbykge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5maWVsZH1Gcm9tPSR7dGhpcy5maWx0ZXJWYWx1ZUZyb20udW5peCgpKjEwMDB9JiR7dGhpcy5maWVsZH1Ubz0ke3RoaXMuZmlsdGVyVmFsdWVUby51bml4KCkqMTAwMH1gO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlclZhbHVlRnJvbSkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5maWVsZH1Gcm9tPSR7dGhpcy5maWx0ZXJWYWx1ZUZyb20udW5peCgpKjEwMDB9YDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJWYWx1ZVRvKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmZpZWxkfVRvPSR7dGhpcy5maWx0ZXJWYWx1ZVRvLnVuaXgoKSoxMDAwfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJWYWx1ZSl7XG4gICAgICByZXR1cm4gYCR7dGhpcy5maWVsZH09JHt0aGlzLmZpbHRlclZhbHVlfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=