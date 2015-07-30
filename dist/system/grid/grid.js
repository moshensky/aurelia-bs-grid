System.register(['aurelia-framework', './grid-column', 'gooy/aurelia-compiler', './aurelia-bs-grid.css!'], function (_export) {
  'use strict';

  var bindable, inject, skipContentProcessing, ObserverLocator, customElement, GridColumn, Compiler, Grid;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
      skipContentProcessing = _aureliaFramework.skipContentProcessing;
      ObserverLocator = _aureliaFramework.ObserverLocator;
      customElement = _aureliaFramework.customElement;
    }, function (_gridColumn) {
      GridColumn = _gridColumn.GridColumn;
    }, function (_gooyAureliaCompiler) {
      Compiler = _gooyAureliaCompiler.Compiler;
    }, function (_aureliaBsGridCss) {}],
    execute: function () {
      Grid = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(Grid, [{
          key: 'gridHeight',
          decorators: [bindable],
          initializer: function initializer() {
            return 0;
          },
          enumerable: true
        }, {
          key: 'initialLoad',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'filterDelay',
          decorators: [bindable],
          initializer: function initializer() {
            return 250;
          },
          enumerable: true
        }, {
          key: 'showColumnFilters',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'serverFiltering',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'serverPaging',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'pageable',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'pageSize',
          decorators: [bindable],
          initializer: function initializer() {
            return 10;
          },
          enumerable: true
        }, {
          key: 'page',
          decorators: [bindable],
          initializer: function initializer() {
            return 1;
          },
          enumerable: true
        }, {
          key: 'pagerSize',
          decorators: [bindable],
          initializer: function initializer() {
            return 10;
          },
          enumerable: true
        }, {
          key: 'showFirstLastButtons',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'showJumpButtons',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'pageSizes',
          decorators: [bindable],
          initializer: function initializer() {
            return [10, 25, 50];
          },
          enumerable: true
        }, {
          key: 'serverSorting',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'sortable',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'autoGenerateColumns',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'selectable',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'selectedItem',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'noRowsMessage',
          decorators: [bindable],
          initializer: function initializer() {
            return '';
          },
          enumerable: true
        }, {
          key: 'autoLoad',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'loadingMessage',
          decorators: [bindable],
          initializer: function initializer() {
            return 'Loading...';
          },
          enumerable: true
        }, {
          key: 'read',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'onReadError',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function Grid(element, compiler, observerLocator) {
          _classCallCheck(this, _Grid);

          _defineDecoratedPropertyDescriptor(this, 'gridHeight', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'initialLoad', _instanceInitializers);

          this.updateFiltersSetTimeout = undefined;

          _defineDecoratedPropertyDescriptor(this, 'filterDelay', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'showColumnFilters', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'serverFiltering', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'serverPaging', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'pageable', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'pageSize', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'page', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'pagerSize', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'showFirstLastButtons', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'showJumpButtons', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'pageSizes', _instanceInitializers);

          this.firstVisibleItem = 0;
          this.lastVisibleItem = 0;
          this.pageNumber = 1;

          _defineDecoratedPropertyDescriptor(this, 'serverSorting', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers);

          this.sortProcessingOrder = [];
          this.sorting = {};
          this.Trogdor = true;

          _defineDecoratedPropertyDescriptor(this, 'autoGenerateColumns', _instanceInitializers);

          this.columnHeaders = [];
          this.columns = [];

          _defineDecoratedPropertyDescriptor(this, 'selectable', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'selectedItem', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'noRowsMessage', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'autoLoad', _instanceInitializers);

          this.loading = false;

          _defineDecoratedPropertyDescriptor(this, 'loadingMessage', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'read', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'onReadError', _instanceInitializers);

          this.cache = [];
          this.data = [];
          this.count = 0;
          this.unbinding = false;
          this.scrollBarWidth = 16;

          this.element = element;
          this.compiler = compiler;
          this.observerLocator = observerLocator;

          this.processUserTemplate();
        }

        _createDecoratedClass(Grid, [{
          key: 'processUserTemplate',
          value: function processUserTemplate() {
            var _this = this;

            var rowElement = this.element.querySelector('grid-row');
            var columnElements = Array.prototype.slice.call(rowElement.querySelectorAll('grid-col'));

            columnElements.forEach(function (c) {
              var attrs = Array.prototype.slice.call(c.attributes);
              var colHash = attrs.reduce(function (map, attribute) {
                map[attribute.name] = attribute.value;
                return map;
              }, {});

              var col = new GridColumn(colHash, c.innerHTML, _this);

              _this.addColumn(col);
            });

            this.rowAttrs = {};
            var attrs = Array.prototype.slice.call(rowElement.attributes);
            attrs.forEach(function (a) {
              return _this.rowAttrs[a.name] = a.value;
            });

            while (this.element.childNodes.length > 0) this.element.removeChild(this.element.childNodes[0]);
          }
        }, {
          key: 'attached',
          value: function attached() {
            this.gridHeightChanged();

            if (this.autoLoad === true) {
              this.refresh();
            }
          }
        }, {
          key: 'bind',
          value: function bind(executionContext) {

            this['$parent'] = executionContext;

            if (this.serverPaging && !this.serverSorting) {
              this.sortable = false;
            }

            var table = this.element.querySelector('table>tbody');
            var rowTemplate = table.querySelector('tr');

            var fragment = document.createDocumentFragment();

            fragment.appendChild(rowTemplate);

            rowTemplate.setAttribute('repeat.for', '$item of data');
            rowTemplate.setAttribute('class', '${ $item === $parent.selectedItem ? "info" : "" }');

            for (var prop in this.rowAttrs) {
              if (this.rowAttrs.hasOwnProperty(prop)) {
                rowTemplate.setAttribute(prop, this.rowAttrs[prop]);
              }
            }

            this.columns.forEach(function (c) {
              var td = document.createElement('td');

              for (var prop in c) {
                if (c.hasOwnProperty(prop)) {

                  if (prop == 'template') td.innerHTML = c[prop];else td.setAttribute(prop, c[prop]);
                }
              }

              rowTemplate.appendChild(td);
            });

            this.compiler.compile(table, this, undefined, fragment);

            this.noRowsMessageChanged();
          }
        }, {
          key: 'unbind',
          value: function unbind() {
            this.unbinding = true;
            this.dontWatchForChanges();
          }
        }, {
          key: 'addColumn',
          value: function addColumn(col) {
            if (!this.sortable) col.nosort = true;

            this.columns.push(col);
          }
        }, {
          key: 'pageChanged',
          value: function pageChanged(page, oldValue) {
            if (page === oldValue) {
              return;
            }

            this.pageNumber = Number(page);
            this.refresh();
          }
        }, {
          key: 'pageSizeChanged',
          value: function pageSizeChanged() {
            this.pageChanged(1);
            this.updatePager();
          }
        }, {
          key: 'filterSortPage',
          value: function filterSortPage(data) {
            var tempData = data;

            if (this.showColumnFilters && !this.serverFiltering) tempData = this.applyFilter(tempData);

            this.count = tempData.length;

            if (this.sortable && !this.serverSorting) tempData = this.applySort(tempData);

            if (this.pageable && !this.serverPaging) tempData = this.applyPage(tempData);

            this.data = tempData;

            this.updatePager();

            this.watchForChanges();
          }
        }, {
          key: 'applyPage',
          value: function applyPage(data) {
            var start = (Number(this.pageNumber) - 1) * Number(this.pageSize);
            data = data.slice(start, start + Number(this.pageSize));

            return data;
          }
        }, {
          key: 'updatePager',
          value: function updatePager() {
            if (this.pager) this.pager.update(this.pageNumber, Number(this.pageSize), Number(this.count));

            this.firstVisibleItem = (this.pageNumber - 1) * Number(this.pageSize) + 1;
            this.lastVisibleItem = this.pageNumber * Number(this.pageSize);
          }
        }, {
          key: 'fieldSorter',
          value: function fieldSorter(fields) {
            return function (a, b) {
              return fields.map(function (o) {
                var dir = 1;
                if (o[0] === '-') {
                  dir = -1;
                  o = o.substring(1);
                }
                if (a[o] > b[o]) return dir;
                if (a[o] < b[o]) return -dir;
                return 0;
              }).reduce(function firstNonZeroValue(p, n) {
                return p ? p : n;
              }, 0);
            };
          }
        }, {
          key: 'pageSizesChanged',
          value: function pageSizesChanged() {
            this.refresh();
          }
        }, {
          key: 'sortChanged',
          value: function sortChanged(field) {
            var newSort = undefined;

            switch (this.sorting[field]) {
              case 'asc':
                newSort = 'desc';
                break;
              case 'desc':
                newSort = '';
                break;
              default:
                newSort = 'asc';
                break;
            }

            this.sorting[field] = newSort;

            var pos = this.sortProcessingOrder.indexOf(field);

            if (pos > -1) this.sortProcessingOrder.splice(pos, 1);

            this.sortProcessingOrder.push(field);

            this.refresh();
          }
        }, {
          key: 'applySort',
          value: function applySort(data) {
            var fields = [];

            for (var i = 0; i < this.sortProcessingOrder.length; i++) {
              var sort = this.sortProcessingOrder[i];

              for (var prop in this.sorting) {
                if (sort == prop && this.sorting[prop] !== '') fields.push(this.sorting[prop] === 'asc' ? prop : '-' + prop);
              }
            }

            data = data.sort(this.fieldSorter(fields));

            return data;
          }
        }, {
          key: 'applyFilter',
          value: function applyFilter(data) {
            var _this2 = this;

            return data.filter(function (row) {
              var include = true;

              for (var i = _this2.columns.length - 1; i >= 0; i--) {
                var col = _this2.columns[i];

                if (col.filterValue !== '' && row[col.field].toString().indexOf(col.filterValue) === -1) {
                  include = false;
                }
              }

              return include;
            });
          }
        }, {
          key: 'getFilterColumns',
          value: function getFilterColumns() {
            var cols = {};

            for (var i = this.columns.length - 1; i >= 0; i--) {
              var col = this.columns[i];

              if (col.hasFilterValue()) {
                cols[col.field] = col.getFilterValue();
              }
            }

            return cols;
          }
        }, {
          key: 'updateFilters',
          value: function updateFilters() {
            if (this.updateFiltersSetTimeout) {
              window.clearTimeout(this.updateFiltersSetTimeout);
            }

            this.updateFiltersSetTimeout = window.setTimeout(this.refresh.bind(this), this.filterDelay);
          }
        }, {
          key: 'refresh',
          value: function refresh() {
            this.dontWatchForChanges();

            if (this.serverPaging || this.serverSorting || this.serverFiltering || !this.initialLoad) this.getData();else this.filterSortPage(this.cache);
          }
        }, {
          key: 'getData',
          value: function getData() {
            var _this3 = this;

            if (!this.read) throw new Error('No read method specified for grid');

            this.initialLoad = true;

            this.loading = true;

            this.read({
              sorting: this.sorting,
              paging: { page: this.pageNumber, size: Number(this.pageSize) },
              filtering: this.getFilterColumns()
            }).then(function (result) {
              _this3.handleResult(result);

              _this3.loading = false;
            }, function (result) {
              if (_this3.onReadError) _this3.onReadError(result);

              _this3.loading = false;
            });
          }
        }, {
          key: 'handleResult',
          value: function handleResult(result) {
            var data = result.data;

            if (this.pageable && !this.serverPaging && !this.serverSorting && !this.serverFiltering) {
              this.cache = result.data;
              this.filterSortPage(this.cache);
            } else {
              this.data = result.data;
              this.filterSortPage(this.data);
            }

            this.count = result.count;

            this.updatePager();
          }
        }, {
          key: 'watchForChanges',
          value: function watchForChanges() {
            var _this4 = this;

            this.dontWatchForChanges();

            if (!this.unbinding) this.subscription = this.observerLocator.getArrayObserver(this.cache).subscribe(function (splices) {
                _this4.refresh();
              });
          }
        }, {
          key: 'dontWatchForChanges',
          value: function dontWatchForChanges() {
            if (this.subscription) this.subscription();
          }
        }, {
          key: 'select',
          value: function select(item) {
            if (this.selectable) this.selectedItem = item;
          }
        }, {
          key: 'noRowsMessageChanged',
          value: function noRowsMessageChanged() {
            this.showNoRowsMessage = this.noRowsMessage !== '';
          }
        }, {
          key: 'gridHeightChanged',
          value: function gridHeightChanged() {
            var cont = this.element.querySelector('.grid-container');

            if (this.gridHeight > 0) {
              cont.setAttribute('style', 'height:' + this.gridHeight + 'px');
            } else {
              cont.removeAttribute('style');
            }
          }
        }], null, _instanceInitializers);

        var _Grid = Grid;
        Grid = inject(Element, Compiler, ObserverLocator)(Grid) || Grid;
        Grid = skipContentProcessing()(Grid) || Grid;
        Grid = customElement('grid')(Grid) || Grid;
        return Grid;
      })();

      _export('Grid', Grid);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUFDcEIsZ0JBQUksSUFBSSxDQUFDLFlBQVksRUFDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1dBQ3ZCOzs7aUJBSUssZ0JBQUMsSUFBSSxFQUFFO0FBQ1gsZ0JBQUksSUFBSSxDQUFDLFVBQVUsRUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7V0FDNUI7OztpQkFHbUIsZ0NBQUc7QUFDckIsZ0JBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsYUFBYSxLQUFLLEVBQUUsQ0FBQztXQUNwRDs7O2lCQUVnQiw2QkFBRztBQUdsQixnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7QUFFekQsZ0JBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7QUFDdkIsa0JBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ2hFLE1BQU07QUFDTCxrQkFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMvQjtXQUNGOzs7b0JBMWRVLElBQUk7QUFBSixZQUFJLEdBRGhCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUM5QixJQUFJLEtBQUosSUFBSTtBQUFKLFlBQUksR0FGaEIscUJBQXFCLEVBQUUsQ0FFWCxJQUFJLEtBQUosSUFBSTtBQUFKLFlBQUksR0FIaEIsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUdULElBQUksS0FBSixJQUFJO2VBQUosSUFBSSIsImZpbGUiOiJncmlkL2dyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBpbmplY3QsIHNraXBDb250ZW50UHJvY2Vzc2luZywgT2JzZXJ2ZXJMb2NhdG9yLCBjdXN0b21FbGVtZW50IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtHcmlkQ29sdW1ufSBmcm9tICcuL2dyaWQtY29sdW1uJztcbmltcG9ydCB7Q29tcGlsZXJ9IGZyb20gJ2dvb3kvYXVyZWxpYS1jb21waWxlcic7XG5pbXBvcnQgJy4vYXVyZWxpYS1icy1ncmlkLmNzcyEnO1xuXG5AY3VzdG9tRWxlbWVudCgnZ3JpZCcpXG5Ac2tpcENvbnRlbnRQcm9jZXNzaW5nKClcbkBpbmplY3QoRWxlbWVudCwgQ29tcGlsZXIsIE9ic2VydmVyTG9jYXRvcilcbmV4cG9ydCBjbGFzcyBHcmlkIHtcblxuICAvKiA9PSBTdHlsaW5nID09ICovXG4gIEBiaW5kYWJsZSBncmlkSGVpZ2h0ID0gMDtcblxuICAvKiA9PSBPcHRpb25zID09ICovXG5cbiAgLy8gSW5pdGlhbCBsb2FkIGZsYWcgKGZvciBjbGllbnQgc2lkZSlcbiAgQGJpbmRhYmxlIGluaXRpYWxMb2FkID0gZmFsc2U7XG5cbiAgLy8gRmlsdGVyaW5nXG4gIHVwZGF0ZUZpbHRlcnNTZXRUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICBAYmluZGFibGUgZmlsdGVyRGVsYXkgPSAyNTA7XG4gIEBiaW5kYWJsZSBzaG93Q29sdW1uRmlsdGVycyA9IGZhbHNlO1xuICBAYmluZGFibGUgc2VydmVyRmlsdGVyaW5nID0gZmFsc2U7XG5cbiAgLy8gUGFnaW5hdGlvblxuICBAYmluZGFibGUgc2VydmVyUGFnaW5nID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBwYWdlYWJsZSA9IHRydWU7XG4gIEBiaW5kYWJsZSBwYWdlU2l6ZSA9IDEwO1xuICBAYmluZGFibGUgcGFnZSA9IDE7XG4gIEBiaW5kYWJsZSBwYWdlclNpemUgPSAxMDtcblxuICBAYmluZGFibGUgc2hvd0ZpcnN0TGFzdEJ1dHRvbnMgPSB0cnVlO1xuICBAYmluZGFibGUgc2hvd0p1bXBCdXR0b25zID0gdHJ1ZTtcblxuICBAYmluZGFibGUgcGFnZVNpemVzID0gWzEwLCAyNSwgNTBdO1xuXG4gIGZpcnN0VmlzaWJsZUl0ZW0gPSAwO1xuICBsYXN0VmlzaWJsZUl0ZW0gPSAwO1xuXG4gIHBhZ2VOdW1iZXIgPSAxO1xuXG5cbiAgLy8gU29ydGluYXRpb25cbiAgQGJpbmRhYmxlIHNlcnZlclNvcnRpbmcgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIHNvcnRhYmxlID0gdHJ1ZTtcbiAgc29ydFByb2Nlc3NpbmdPcmRlciA9IFtdOyAvLyBSZXByZXNlbnRzIHdoaWNoIG9yZGVyIHRvIGFwcGx5IHNvcnRzIHRvIGVhY2ggY29sdW1uXG4gIHNvcnRpbmcgPSB7fTtcblxuICAvLyBCdXJuaW5hdGlvbj9cbiAgVHJvZ2RvciA9IHRydWU7XG5cbiAgLy8gQ29sdW1uIGRlZnNcbiAgQGJpbmRhYmxlIGF1dG9HZW5lcmF0ZUNvbHVtbnM7XG4gIGNvbHVtbkhlYWRlcnMgPSBbXTtcbiAgY29sdW1ucyA9IFtdO1xuXG4gIC8vIFNlbGVjdGlvblxuICBAYmluZGFibGUgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICBAYmluZGFibGUgc2VsZWN0ZWRJdGVtID0gbnVsbDtcblxuICAvLyBNaXNjXG4gIEBiaW5kYWJsZSBub1Jvd3NNZXNzYWdlID0gJyc7XG5cbiAgLy8gRGF0YSAuLi4uXG4gIEBiaW5kYWJsZSBhdXRvTG9hZCA9IHRydWU7XG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIGxvYWRpbmdNZXNzYWdlID0gJ0xvYWRpbmcuLi4nO1xuXG4gIC8vIFJlYWRcbiAgQGJpbmRhYmxlIHJlYWQgPSBudWxsO1xuICBAYmluZGFibGUgb25SZWFkRXJyb3IgPSBudWxsO1xuXG4gIC8vIFRyYWNraW5nXG4gIGNhY2hlID0gW107XG4gIGRhdGEgPSBbXTtcbiAgY291bnQgPSAwO1xuXG4gIC8vIFN1YnNjcmlwdGlvbiBoYW5kbGluZ1xuICB1bmJpbmRpbmcgPSBmYWxzZTtcblxuICAvLyBWaXN1YWxcbiAgLy8gVE9ETzogY2FsYyBzY3JvbGxiYXIgd2lkdGggdXNpbmcgYnJvd3NlclxuICBzY3JvbGxCYXJXaWR0aCA9IDE2O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbXBpbGVyLCBvYnNlcnZlckxvY2F0b3IpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY29tcGlsZXIgPSBjb21waWxlcjtcbiAgICB0aGlzLm9ic2VydmVyTG9jYXRvciA9IG9ic2VydmVyTG9jYXRvcjtcblxuICAgIC8vIEdyYWIgdXNlciB0ZW1wbGF0ZSBmcm9tIGVsZW1lbnRcbiAgICB0aGlzLnByb2Nlc3NVc2VyVGVtcGxhdGUoKTtcbiAgfVxuXG4gIHByb2Nlc3NVc2VyVGVtcGxhdGUoKSB7XG5cbiAgICAvLyBHZXQgYW55IGNvbCB0YWdzIGZyb20gdGhlIGNvbnRlbnRcbiAgICB2YXIgcm93RWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdncmlkLXJvdycpO1xuICAgIHZhciBjb2x1bW5FbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHJvd0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZ3JpZC1jb2wnKSk7XG5cbiAgICBjb2x1bW5FbGVtZW50cy5mb3JFYWNoKGMgPT4ge1xuICAgICAgdmFyIGF0dHJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYy5hdHRyaWJ1dGVzKTtcbiAgICAgIHZhciBjb2xIYXNoID0gYXR0cnMucmVkdWNlKChtYXAsIGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICBtYXBbYXR0cmlidXRlLm5hbWVdID0gYXR0cmlidXRlLnZhbHVlO1xuICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgfSwge30pO1xuXG4gICAgICB2YXIgY29sID0gbmV3IEdyaWRDb2x1bW4oY29sSGFzaCwgYy5pbm5lckhUTUwsIHRoaXMpO1xuXG4gICAgICB0aGlzLmFkZENvbHVtbihjb2wpO1xuICAgIH0pO1xuXG4gICAgLy8gUHVsbCBhbnkgcm93IGF0dHJzIGludG8gYSBoYXNoIG9iamVjdFxuICAgIHRoaXMucm93QXR0cnMgPSB7fTtcbiAgICB2YXIgYXR0cnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChyb3dFbGVtZW50LmF0dHJpYnV0ZXMpO1xuICAgIGF0dHJzLmZvckVhY2goYSA9PiB0aGlzLnJvd0F0dHJzW2EubmFtZV0gPSBhLnZhbHVlKTtcblxuICAgIC8vIFJlbW92ZSBhbGwgY2hpbGRyZW5cbiAgICB3aGlsZSAodGhpcy5lbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMClcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQuY2hpbGROb2Rlc1swXSk7XG4gIH1cblxuICAvKiA9PT0gTGlmZWN5Y2xlID09PSAqL1xuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmdyaWRIZWlnaHRDaGFuZ2VkKCk7XG5cbiAgICBpZiAodGhpcy5hdXRvTG9hZCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG5cbiAgYmluZChleGVjdXRpb25Db250ZXh0KSB7XG5cbiAgICB0aGlzWyckcGFyZW50J10gPSBleGVjdXRpb25Db250ZXh0O1xuXG4gICAgLy8gRW5zdXJlIHRoZSBncmlkIHNldHRpbmdzXG4gICAgLy8gSWYgd2UgY2FuIHBhZ2Ugb24gdGhlIHNlcnZlciBhbmQgd2UgY2FuJ3Qgc2VydmVyIHNvcnQsIHdlIGNhbid0IHNvcnQgbG9jYWxseVxuICAgIGlmICh0aGlzLnNlcnZlclBhZ2luZyAmJiAhdGhpcy5zZXJ2ZXJTb3J0aW5nKSB7XG4gICAgICB0aGlzLnNvcnRhYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQnVpbGQgdGhlIHJvd3MgdGhlbiBkeW5hbWljYWxseSBjb21waWxlIHRoZSB0YWJsZVxuICAgIC8vIEdldCB0aGUgdGFibGUuLi5cbiAgICB2YXIgdGFibGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcigndGFibGU+dGJvZHknKTtcbiAgICB2YXIgcm93VGVtcGxhdGUgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKCd0cicpO1xuXG4gICAgLy8gQ3JlYXRlIGEgZnJhZ21lbnQgd2Ugd2lsbCBtYW5pcHVsYXRlIHRoZSBET00gaW5cbiAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICAvLyBNb3ZlIHRoZSByb3cgdGVtcGxhdGUgdG8gdGhlIGZyYWdtZW50XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQocm93VGVtcGxhdGUpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSByZXBlYXRlclxuICAgIHJvd1RlbXBsYXRlLnNldEF0dHJpYnV0ZSgncmVwZWF0LmZvcicsICckaXRlbSBvZiBkYXRhJyk7XG4gICAgcm93VGVtcGxhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICckeyAkaXRlbSA9PT0gJHBhcmVudC5zZWxlY3RlZEl0ZW0gPyBcImluZm9cIiA6IFwiXCIgfScpO1xuXG4gICAgLy8gQ29weSBhbnkgdXNlciBzcGVjaWZpZWQgcm93IGF0dHJpYnV0ZXMgdG8gdGhlIHJvdyB0ZW1wbGF0ZVxuICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5yb3dBdHRycykge1xuICAgICAgaWYgKHRoaXMucm93QXR0cnMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgcm93VGVtcGxhdGUuc2V0QXR0cmlidXRlKHByb3AsIHRoaXMucm93QXR0cnNbcHJvcF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSB0aGUgY29sdW1uc1xuICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGMgPT4ge1xuICAgICAgdmFyIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblxuICAgICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICAgIGZvciAodmFyIHByb3AgaW4gYykge1xuICAgICAgICBpZiAoYy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuXG4gICAgICAgICAgaWYgKHByb3AgPT0gJ3RlbXBsYXRlJylcbiAgICAgICAgICAgIHRkLmlubmVySFRNTCA9IGNbcHJvcF07XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGQuc2V0QXR0cmlidXRlKHByb3AsIGNbcHJvcF0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJvd1RlbXBsYXRlLmFwcGVuZENoaWxkKHRkKTtcbiAgICB9KTtcblxuICAgIC8vIENvbXBpbGVcbiAgICB0aGlzLmNvbXBpbGVyLmNvbXBpbGUodGFibGUsIHRoaXMsIHVuZGVmaW5lZCwgZnJhZ21lbnQpO1xuXG4gICAgLy8gSEFDSzogd2h5IGlzIHRoZSBjaGFuZ2UgaGFuZGxlciBub3QgZmlyaW5nIGZvciBub1Jvd3NNZXNzYWdlP1xuICAgIHRoaXMubm9Sb3dzTWVzc2FnZUNoYW5nZWQoKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLnVuYmluZGluZyA9IHRydWU7XG4gICAgdGhpcy5kb250V2F0Y2hGb3JDaGFuZ2VzKCk7XG4gIH1cblxuICAvKiA9PT0gQ29sdW1uIGhhbmRsaW5nID09PSAqL1xuICBhZGRDb2x1bW4oY29sKSB7XG5cbiAgICAvLyBOby1zb3J0IGlmIGdyaWQgaXMgbm90IHNvcnRhYmxlXG4gICAgaWYgKCF0aGlzLnNvcnRhYmxlKVxuICAgICAgY29sLm5vc29ydCA9IHRydWU7XG5cbiAgICB0aGlzLmNvbHVtbnMucHVzaChjb2wpO1xuICB9XG5cbiAgLyogPT09IFBhZ2luZyA9PT0gKi9cbiAgcGFnZUNoYW5nZWQocGFnZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAocGFnZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSBOdW1iZXIocGFnZSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBwYWdlU2l6ZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5wYWdlQ2hhbmdlZCgxKTtcbiAgICB0aGlzLnVwZGF0ZVBhZ2VyKCk7XG4gIH1cblxuICBmaWx0ZXJTb3J0UGFnZShkYXRhKSB7XG4gICAgLy8gQXBwbGllcyBmaWx0ZXIsIHNvcnQgdGhlbiBwYWdlXG4gICAgLy8gMS4gRmlyc3QgZmlsdGVyIHRoZSBkYXRhIGRvd24gdG8gdGhlIHNldCB3ZSB3YW50LCBpZiB3ZSBhcmUgdXNpbmcgbG9jYWwgZGF0YVxuICAgIHZhciB0ZW1wRGF0YSA9IGRhdGE7XG5cbiAgICBpZiAodGhpcy5zaG93Q29sdW1uRmlsdGVycyAmJiAhdGhpcy5zZXJ2ZXJGaWx0ZXJpbmcpXG4gICAgICB0ZW1wRGF0YSA9IHRoaXMuYXBwbHlGaWx0ZXIodGVtcERhdGEpO1xuXG4gICAgLy8gQ291bnQgdGhlIGRhdGEgbm93IGJlZm9yZSB0aGUgc29ydC9wYWdlXG4gICAgdGhpcy5jb3VudCA9IHRlbXBEYXRhLmxlbmd0aDtcblxuICAgIC8vIDIuIE5vdyBzb3J0IHRoZSBkYXRhXG4gICAgaWYgKHRoaXMuc29ydGFibGUgJiYgIXRoaXMuc2VydmVyU29ydGluZylcbiAgICAgIHRlbXBEYXRhID0gdGhpcy5hcHBseVNvcnQodGVtcERhdGEpO1xuXG4gICAgLy8gMy4gTm93IGFwcGx5IHBhZ2luZ1xuICAgIGlmICh0aGlzLnBhZ2VhYmxlICYmICF0aGlzLnNlcnZlclBhZ2luZylcbiAgICAgIHRlbXBEYXRhID0gdGhpcy5hcHBseVBhZ2UodGVtcERhdGEpO1xuXG4gICAgdGhpcy5kYXRhID0gdGVtcERhdGE7XG5cbiAgICB0aGlzLnVwZGF0ZVBhZ2VyKCk7XG5cbiAgICB0aGlzLndhdGNoRm9yQ2hhbmdlcygpO1xuICB9XG5cbiAgYXBwbHlQYWdlKGRhdGEpIHtcbiAgICB2YXIgc3RhcnQgPSAoTnVtYmVyKHRoaXMucGFnZU51bWJlcikgLSAxKSAqIE51bWJlcih0aGlzLnBhZ2VTaXplKTtcbiAgICBkYXRhID0gZGF0YS5zbGljZShzdGFydCwgc3RhcnQgKyBOdW1iZXIodGhpcy5wYWdlU2l6ZSkpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuXG4gIHVwZGF0ZVBhZ2VyKCkge1xuICAgIGlmICh0aGlzLnBhZ2VyKVxuICAgICAgdGhpcy5wYWdlci51cGRhdGUodGhpcy5wYWdlTnVtYmVyLCBOdW1iZXIodGhpcy5wYWdlU2l6ZSksIE51bWJlcih0aGlzLmNvdW50KSk7XG5cbiAgICB0aGlzLmZpcnN0VmlzaWJsZUl0ZW0gPSAodGhpcy5wYWdlTnVtYmVyIC0gMSkgKiBOdW1iZXIodGhpcy5wYWdlU2l6ZSkgKyAxO1xuICAgIHRoaXMubGFzdFZpc2libGVJdGVtID0gKHRoaXMucGFnZU51bWJlcikgKiBOdW1iZXIodGhpcy5wYWdlU2l6ZSk7XG4gIH1cblxuICAvKiA9PT0gU29ydGluZyA9PT0gKi9cbiAgZmllbGRTb3J0ZXIoZmllbGRzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZmllbGRzXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICB2YXIgZGlyID0gMTtcbiAgICAgICAgICBpZiAob1swXSA9PT0gJy0nKSB7XG4gICAgICAgICAgICBkaXIgPSAtMTtcbiAgICAgICAgICAgIG8gPSBvLnN1YnN0cmluZygxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFbb10gPiBiW29dKSByZXR1cm4gZGlyO1xuICAgICAgICAgIGlmIChhW29dIDwgYltvXSkgcmV0dXJuIC0oZGlyKTtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSlcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiBmaXJzdE5vblplcm9WYWx1ZShwLCBuKSB7XG4gICAgICAgICAgcmV0dXJuIHAgPyBwIDogbjtcbiAgICAgICAgfSwgMCk7XG4gICAgfTtcbiAgfVxuXG4gIHBhZ2VTaXplc0NoYW5nZWQoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBzb3J0Q2hhbmdlZChmaWVsZCkge1xuXG4gICAgLy8gRGV0ZXJtaW5lIG5ldyBzb3J0XG4gICAgdmFyIG5ld1NvcnQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBGaWd1cmUgb3V0IHdoaWNoIHdheSB0aGlzIGZpZWxkIHNob3VsZCBiZSBzb3J0aW5nXG4gICAgc3dpdGNoICh0aGlzLnNvcnRpbmdbZmllbGRdKSB7XG4gICAgICBjYXNlICdhc2MnOlxuICAgICAgICBuZXdTb3J0ID0gJ2Rlc2MnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rlc2MnOlxuICAgICAgICBuZXdTb3J0ID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbmV3U29ydCA9ICdhc2MnO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLnNvcnRpbmdbZmllbGRdID0gbmV3U29ydDtcblxuICAgIC8vIElmIHRoZSBzb3J0IGlzIHByZXNlbnQgaW4gdGhlIHNvcnQgc3RhY2ssIHNsaWNlIGl0IHRvIHRoZSBiYWNrIG9mIHRoZSBzdGFjaywgb3RoZXJ3aXNlIGp1c3QgYWRkIGl0XG4gICAgdmFyIHBvcyA9IHRoaXMuc29ydFByb2Nlc3NpbmdPcmRlci5pbmRleE9mKGZpZWxkKTtcblxuICAgIGlmIChwb3MgPiAtMSlcbiAgICAgIHRoaXMuc29ydFByb2Nlc3NpbmdPcmRlci5zcGxpY2UocG9zLCAxKTtcblxuICAgIHRoaXMuc29ydFByb2Nlc3NpbmdPcmRlci5wdXNoKGZpZWxkKTtcblxuICAgIC8vIEFwcGx5IHRoZSBuZXcgc29ydFxuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgYXBwbHlTb3J0KGRhdGEpIHtcblxuICAgIC8vIEZvcm1hdCB0aGUgc29ydCBmaWVsZHNcbiAgICB2YXIgZmllbGRzID0gW107XG5cbiAgICAvLyBHZXQgdGhlIGZpZWxkcyBpbiB0aGUgJ3NvcnRpbmdPUmRlcidcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc29ydFByb2Nlc3NpbmdPcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvcnQgPSB0aGlzLnNvcnRQcm9jZXNzaW5nT3JkZXJbaV07XG5cbiAgICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5zb3J0aW5nKSB7XG4gICAgICAgIGlmIChzb3J0ID09IHByb3AgJiYgdGhpcy5zb3J0aW5nW3Byb3BdICE9PSAnJylcbiAgICAgICAgICBmaWVsZHMucHVzaCh0aGlzLnNvcnRpbmdbcHJvcF0gPT09ICdhc2MnID8gKHByb3ApIDogKCctJyArIHByb3ApKTtcbiAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgLy8gSWYgc2VydmVyIHNvcnQsIGp1c3QgcmVmcmVzaFxuICAgIGRhdGEgPSBkYXRhLnNvcnQodGhpcy5maWVsZFNvcnRlcihmaWVsZHMpKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyogPT09IEZpbHRlcmluZyA9PT0gKi9cbiAgYXBwbHlGaWx0ZXIoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLmZpbHRlcigocm93KSA9PiB7XG4gICAgICB2YXIgaW5jbHVkZSA9IHRydWU7XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLmNvbHVtbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIGNvbCA9IHRoaXMuY29sdW1uc1tpXTtcblxuICAgICAgICBpZiAoY29sLmZpbHRlclZhbHVlICE9PSAnJyAmJiByb3dbY29sLmZpZWxkXS50b1N0cmluZygpLmluZGV4T2YoY29sLmZpbHRlclZhbHVlKSA9PT0gLTEpIHtcbiAgICAgICAgICBpbmNsdWRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluY2x1ZGU7XG4gICAgfSk7XG4gIH1cblxuICBnZXRGaWx0ZXJDb2x1bW5zKCkge1xuICAgIHZhciBjb2xzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gdGhpcy5jb2x1bW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgY29sID0gdGhpcy5jb2x1bW5zW2ldO1xuXG4gICAgICBpZiAoY29sLmhhc0ZpbHRlclZhbHVlKCkpIHtcbiAgICAgICAgY29sc1tjb2wuZmllbGRdID0gY29sLmdldEZpbHRlclZhbHVlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbHM7XG4gIH1cblxuICB1cGRhdGVGaWx0ZXJzKCkge1xuICAgIGlmICh0aGlzLnVwZGF0ZUZpbHRlcnNTZXRUaW1lb3V0KSB7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudXBkYXRlRmlsdGVyc1NldFRpbWVvdXQpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlRmlsdGVyc1NldFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLnJlZnJlc2guYmluZCh0aGlzKSwgdGhpcy5maWx0ZXJEZWxheSk7XG4gIH1cblxuICAvKiA9PT0gRGF0YSA9PT0gKi9cbiAgcmVmcmVzaCgpIHtcbiAgICAvLyBJZiB3ZSBoYXZlIGFueSBzZXJ2ZXIgc2lkZSBzdHVmZiB3ZSBuZWVkIHRvIGdldCB0aGUgZGF0YSBmaXJzdFxuICAgIHRoaXMuZG9udFdhdGNoRm9yQ2hhbmdlcygpO1xuXG4gICAgaWYgKHRoaXMuc2VydmVyUGFnaW5nIHx8IHRoaXMuc2VydmVyU29ydGluZyB8fCB0aGlzLnNlcnZlckZpbHRlcmluZyB8fCAhdGhpcy5pbml0aWFsTG9hZClcbiAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuZmlsdGVyU29ydFBhZ2UodGhpcy5jYWNoZSk7XG5cbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgaWYgKCF0aGlzLnJlYWQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHJlYWQgbWV0aG9kIHNwZWNpZmllZCBmb3IgZ3JpZCcpO1xuXG4gICAgdGhpcy5pbml0aWFsTG9hZCA9IHRydWU7XG5cbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgcHJvZ3Jlc3MgaW5kaWNhdG9yXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgIC8vIFRyeSB0byByZWFkIGZyb20gdGhlIGRhdGEgYWRhcHRlclxuICAgIHRoaXMucmVhZCh7XG4gICAgICBzb3J0aW5nOiB0aGlzLnNvcnRpbmcsXG4gICAgICBwYWdpbmc6IHtwYWdlOiB0aGlzLnBhZ2VOdW1iZXIsIHNpemU6IE51bWJlcih0aGlzLnBhZ2VTaXplKX0sXG4gICAgICBmaWx0ZXJpbmc6IHRoaXMuZ2V0RmlsdGVyQ29sdW1ucygpXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcblxuICAgICAgICAvLyBEYXRhIHNob3VsZCBiZSBpbiB0aGUgcmVzdWx0IHNvIGdyYWIgaXQgYW5kIGFzc2lnbiBpdCB0byB0aGUgZGF0YSBwcm9wZXJ0eVxuICAgICAgICB0aGlzLmhhbmRsZVJlc3VsdChyZXN1bHQpO1xuXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAvLyBTb21ldGhpbmcgd2VudCB0ZXJyaWJseSB3cm9uZywgbm90aWZ5IHRoZSBjb25zdW1lclxuICAgICAgICBpZiAodGhpcy5vblJlYWRFcnJvcilcbiAgICAgICAgICB0aGlzLm9uUmVhZEVycm9yKHJlc3VsdCk7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVJlc3VsdChyZXN1bHQpIHtcblxuICAgIC8vIFRPRE86IENoZWNrIHZhbGlkIHN0dWZmIHdhcyByZXR1cm5lZFxuICAgIHZhciBkYXRhID0gcmVzdWx0LmRhdGE7XG5cbiAgICAvLyBJcyB0aGUgZGF0YSBiZWluZyBwYWdpbmF0ZWQgb24gdGhlIGNsaWVudCBzaWRlP1xuICAgIC8vIFRPRE86IFdvcmsgb3V0IHdoZW4gd2Ugc2hvdWxkIHdlIHVzZSB0aGUgY2FjaGUuLi4gZXZlcj8gSWYgaXQncyBsb2NhbCBkYXRhXG4gICAgaWYgKHRoaXMucGFnZWFibGUgJiYgIXRoaXMuc2VydmVyUGFnaW5nICYmICF0aGlzLnNlcnZlclNvcnRpbmcgJiYgIXRoaXMuc2VydmVyRmlsdGVyaW5nKSB7XG4gICAgICAvLyBDYWNoZSB0aGUgZGF0YVxuICAgICAgdGhpcy5jYWNoZSA9IHJlc3VsdC5kYXRhO1xuICAgICAgdGhpcy5maWx0ZXJTb3J0UGFnZSh0aGlzLmNhY2hlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhID0gcmVzdWx0LmRhdGE7XG4gICAgICB0aGlzLmZpbHRlclNvcnRQYWdlKHRoaXMuZGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb3VudCA9IHJlc3VsdC5jb3VudDtcblxuICAgIC8vIFVwZGF0ZSB0aGUgcGFnZXIgLSBtYXliZSB0aGUgZ3JpZCBvcHRpb25zIHNob3VsZCBjb250YWluIGFuIHVwZGF0ZSBjYWxsYmFjayBpbnN0ZWFkIG9mIHJlZmZpbmcgdGhlXG4gICAgLy8gcGFnZXIgaW50byB0aGUgY3VycmVudCBWTT9cbiAgICB0aGlzLnVwZGF0ZVBhZ2VyKCk7XG4gIH1cblxuICB3YXRjaEZvckNoYW5nZXMoKSB7XG4gICAgdGhpcy5kb250V2F0Y2hGb3JDaGFuZ2VzKCk7XG5cbiAgICAvLyBHdWFyZCBhZ2FpbnN0IGRhdGEgcmVmcmVzaCBldmVudHMgaGl0dGluZyBhZnRlciB0aGUgdXNlciBkb2VzIGFueXRoaW5nIHRoYXQgdW5sb2FkcyB0aGUgZ3JpZFxuICAgIGlmICghdGhpcy51bmJpbmRpbmcpXG4gICAgLy8gV2UgY2FuIHVwZGF0ZSB0aGUgcGFnZXIgYXV0b21hZ2ljYWxseVxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLm9ic2VydmVyTG9jYXRvclxuICAgICAgICAuZ2V0QXJyYXlPYnNlcnZlcih0aGlzLmNhY2hlKVxuICAgICAgICAuc3Vic2NyaWJlKChzcGxpY2VzKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgZG9udFdhdGNoRm9yQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbigpO1xuICB9XG5cbiAgLyogPT09IFNlbGVjdGlvbiA9PT0gKi9cblxuICBzZWxlY3QoaXRlbSkge1xuICAgIGlmICh0aGlzLnNlbGVjdGFibGUpXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gIH1cblxuICAvKiA9PT0gQ2hhbmdlIGhhbmRsZXJzID09PSAqL1xuICBub1Jvd3NNZXNzYWdlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnNob3dOb1Jvd3NNZXNzYWdlID0gdGhpcy5ub1Jvd3NNZXNzYWdlICE9PSAnJztcbiAgfVxuXG4gIGdyaWRIZWlnaHRDaGFuZ2VkKCkge1xuXG4gICAgLy8gVE9ETzogTWFrZSB0aGlzIGEgb25lIG9mZlxuICAgIHZhciBjb250ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWNvbnRhaW5lcicpO1xuXG4gICAgaWYgKHRoaXMuZ3JpZEhlaWdodCA+IDApIHtcbiAgICAgIGNvbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdoZWlnaHQ6JyArIHRoaXMuZ3JpZEhlaWdodCArICdweCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB9XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9