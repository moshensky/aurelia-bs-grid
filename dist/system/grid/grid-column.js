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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQvZ3JpZC1jb2x1bW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQWEsVUFBVTs7Ozs7Ozs7O0FBQVYsZ0JBQVU7QUFJVixpQkFKQSxVQUFVLENBSVQsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0NBSjNCLFVBQVU7O2VBRXJCLGNBQWMsR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7O0FBR3BDLGNBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLGNBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUMxQixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7QUFFckIsY0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztBQUV2QyxjQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztBQUM5QyxjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO0FBQ3JDLGNBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0FBQzdCLGNBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0FBQ2pDLGNBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0FBQy9CLGNBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLE1BQU0sQ0FBQztBQUN6RCxjQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxNQUFNLENBQUM7QUFDdkQsY0FBSSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLE1BQU0sQ0FBQztBQUNyRSxjQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssTUFBTSxDQUFDOztBQUc3RCxlQUFLLElBQUksSUFBSSxJQUFJLE1BQU0sRUFBRTtBQUN2QixnQkFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUN4RSxrQkFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjtXQUNGO1NBQ0Y7O3FCQTVCVSxVQUFVOztpQkE4QlIseUJBQUc7QUFDZCxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztXQUM3Qjs7O2lCQUVhLDBCQUFHO0FBQ2YsZ0JBQUksSUFBSSxDQUFDLG9CQUFvQixLQUFLLElBQUksRUFBRTtBQUN0QyxxQkFBTyxJQUFJLENBQUMsZUFBZSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVMsQ0FBQzthQUMvRSxNQUFNO0FBQ0wscUJBQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLENBQUM7YUFDdkM7V0FDRjs7O2lCQUVhLDBCQUFHO0FBQ2YsZ0JBQUksSUFBSSxDQUFDLG9CQUFvQixLQUFLLElBQUksRUFBRTtBQUN0QyxxQkFBTztBQUNMLG9CQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWU7QUFDMUIsa0JBQUUsRUFBRSxJQUFJLENBQUMsYUFBYTtlQUN2QixDQUFDO2FBQ0gsTUFBTTtBQUNMLHFCQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDekI7V0FDRjs7O2VBbkRVLFVBQVU7Ozs0QkFBVixVQUFVIiwiZmlsZSI6ImdyaWQvZ3JpZC1jb2x1bW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgR3JpZENvbHVtbiB7XG5cbiAgc3BlY2lhbENvbHVtbnMgPSBbJ2hlYWRpbmcnLCAnbm9zb3J0J107XG5cbiAgY29uc3RydWN0b3IoY29uZmlnLCB0ZW1wbGF0ZSwgcGFyZW50KSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMuZmllbGQgPSBjb25maWcuZmllbGQ7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICBpZiAoIXRoaXMuZmllbGQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpZWxkIGlzIHJlcXVpcmVkJyk7XG5cbiAgICB0aGlzLmhlYWRpbmcgPSBjb25maWcuaGVhZGluZyB8fCBjb25maWcuZmllbGQ7XG4gICAgdGhpcy5ub3NvcnQgPSBjb25maWcubm9zb3J0IHx8IGZhbHNlO1xuICAgIHRoaXMuZmlsdGVyVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWx0ZXJWYWx1ZUZyb20gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWx0ZXJWYWx1ZVRvID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2hvd0lucHV0RmlsdGVyID0gY29uZmlnWydpbnB1dC1maWx0ZXInXSA9PT0gJ3RydWUnO1xuICAgIHRoaXMuc2hvd0RhdGVGaWx0ZXIgPSBjb25maWdbJ2RhdGUtZmlsdGVyJ10gPT09ICd0cnVlJztcbiAgICB0aGlzLnNob3dEYXRlRnJvbVRvRmlsdGVyID0gY29uZmlnWydkYXRlLWZpbHRlci1mcm9tLXRvJ10gPT09ICd0cnVlJztcbiAgICB0aGlzLnNob3dCb29sZWFuRmlsdGVyID0gY29uZmlnWydib29sZWFuLWZpbHRlciddID09PSAndHJ1ZSc7XG5cbiAgICAvLyBTZXQgYXR0cmlidXRlc1xuICAgIGZvciAodmFyIHByb3AgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KHByb3ApICYmIHRoaXMuc3BlY2lhbENvbHVtbnMuaW5kZXhPZihwcm9wKSA8IDApIHtcbiAgICAgICAgdGhpc1twcm9wXSA9IGNvbmZpZ1twcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVGaWx0ZXJzKCkge1xuICAgIHRoaXMucGFyZW50LnVwZGF0ZUZpbHRlcnMoKTtcbiAgfVxuXG4gIGhhc0ZpbHRlclZhbHVlKCkge1xuICAgIGlmICh0aGlzLnNob3dEYXRlRnJvbVRvRmlsdGVyID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJWYWx1ZUZyb20gIT09IHVuZGVmaW5lZCB8fCB0aGlzLmZpbHRlclZhbHVlVG8gIT09IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyVmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBnZXRGaWx0ZXJWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5zaG93RGF0ZUZyb21Ub0ZpbHRlciA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZnJvbTogdGhpcy5maWx0ZXJWYWx1ZUZyb20sXG4gICAgICAgIHRvOiB0aGlzLmZpbHRlclZhbHVlVG9cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlclZhbHVlO1xuICAgIH1cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=