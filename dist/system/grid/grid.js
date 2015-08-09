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
          this.sorting = [];

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
          key: 'changeSort',
          value: function changeSort(sort) {
            var index = this.sorting.findIndex(function (el, index) {
              if (el.name === sort.name) {
                return true;
              }

              return false;
            });

            if (index > -1) {
              this.sorting.splice(index, 1);
            }

            if (sort.value !== undefined) {
              this.sorting.push(sort);
            }

            this.refresh();
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
          key: 'getFiltersQueryString',
          value: function getFiltersQueryString() {
            var filters = [];
            for (var i = this.columns.length - 1; i >= 0; i--) {
              var col = this.columns[i];
              var filterQueryString = col.getQueryString();
              if (filterQueryString !== undefined) {
                filters.push(filterQueryString);
              }
            }

            return filters;
          }
        }, {
          key: 'getFiltersValues',
          value: function getFiltersValues() {
            var filters = [];
            for (var i = this.columns.length - 1; i >= 0; i--) {
              var col = this.columns[i];
              filters = filters.concat(col.getFilterValue());
            }

            return filters;
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

            if (this.serverPaging || this.serverSorting || this.serverFiltering || !this.initialLoad) {
              this.getData();
            } else {
              this.filterSortPage(this.cache);
            }
          }
        }, {
          key: 'getData',
          value: function getData() {
            var _this3 = this;

            if (!this.read) throw new Error('No read method specified for grid');

            this.initialLoad = true;

            this.loading = true;

            var queryValues = {};
            queryValues.filters = this.getFiltersValues();
            queryValues.paging = {
              page: this.pageNumber,
              count: window.Number(this.pageSize, 10)
            };
            queryValues.sorters = this.sorting;

            this.read(queryValues).then(function (result) {
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
//# sourceMappingURL=data:application/json;base64,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QkFBSSxJQUFJLENBQUMsWUFBWSxFQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7V0FDdkI7OztpQkFJSyxnQkFBQyxJQUFJLEVBQUU7QUFDWCxnQkFBSSxJQUFJLENBQUMsVUFBVSxFQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztXQUM1Qjs7O2lCQUdtQixnQ0FBRztBQUNyQixnQkFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLEtBQUssRUFBRSxDQUFDO1dBQ3BEOzs7aUJBRWdCLDZCQUFHO0FBR2xCLGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOztBQUV6RCxnQkFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRTtBQUN2QixrQkFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDaEUsTUFBTTtBQUNMLGtCQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQy9CO1dBQ0Y7OztvQkF6ZlUsSUFBSTtBQUFKLFlBQUksR0FEaEIsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQzlCLElBQUksS0FBSixJQUFJO0FBQUosWUFBSSxHQUZoQixxQkFBcUIsRUFBRSxDQUVYLElBQUksS0FBSixJQUFJO0FBQUosWUFBSSxHQUhoQixhQUFhLENBQUMsTUFBTSxDQUFDLENBR1QsSUFBSSxLQUFKLElBQUk7ZUFBSixJQUFJOzs7c0JBQUosSUFBSSIsImZpbGUiOiJncmlkL2dyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBpbmplY3QsIHNraXBDb250ZW50UHJvY2Vzc2luZywgT2JzZXJ2ZXJMb2NhdG9yLCBjdXN0b21FbGVtZW50IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtHcmlkQ29sdW1ufSBmcm9tICcuL2dyaWQtY29sdW1uJztcbmltcG9ydCB7Q29tcGlsZXJ9IGZyb20gJ2dvb3kvYXVyZWxpYS1jb21waWxlcic7XG5pbXBvcnQgJy4vYXVyZWxpYS1icy1ncmlkLmNzcyEnO1xuXG5AY3VzdG9tRWxlbWVudCgnZ3JpZCcpXG5Ac2tpcENvbnRlbnRQcm9jZXNzaW5nKClcbkBpbmplY3QoRWxlbWVudCwgQ29tcGlsZXIsIE9ic2VydmVyTG9jYXRvcilcbmV4cG9ydCBjbGFzcyBHcmlkIHtcblxuICAvKiA9PSBTdHlsaW5nID09ICovXG4gIEBiaW5kYWJsZSBncmlkSGVpZ2h0ID0gMDtcblxuICAvKiA9PSBPcHRpb25zID09ICovXG5cbiAgLy8gSW5pdGlhbCBsb2FkIGZsYWcgKGZvciBjbGllbnQgc2lkZSlcbiAgQGJpbmRhYmxlIGluaXRpYWxMb2FkID0gZmFsc2U7XG5cbiAgLy8gRmlsdGVyaW5nXG4gIHVwZGF0ZUZpbHRlcnNTZXRUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICBAYmluZGFibGUgZmlsdGVyRGVsYXkgPSAyNTA7XG4gIEBiaW5kYWJsZSBzaG93Q29sdW1uRmlsdGVycyA9IGZhbHNlO1xuICBAYmluZGFibGUgc2VydmVyRmlsdGVyaW5nID0gZmFsc2U7XG5cbiAgLy8gUGFnaW5hdGlvblxuICBAYmluZGFibGUgc2VydmVyUGFnaW5nID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBwYWdlYWJsZSA9IHRydWU7XG4gIEBiaW5kYWJsZSBwYWdlU2l6ZSA9IDEwO1xuICBAYmluZGFibGUgcGFnZSA9IDE7XG4gIEBiaW5kYWJsZSBwYWdlclNpemUgPSAxMDtcblxuICBAYmluZGFibGUgc2hvd0ZpcnN0TGFzdEJ1dHRvbnMgPSB0cnVlO1xuICBAYmluZGFibGUgc2hvd0p1bXBCdXR0b25zID0gdHJ1ZTtcblxuICBAYmluZGFibGUgcGFnZVNpemVzID0gWzEwLCAyNSwgNTBdO1xuXG4gIGZpcnN0VmlzaWJsZUl0ZW0gPSAwO1xuICBsYXN0VmlzaWJsZUl0ZW0gPSAwO1xuXG4gIHBhZ2VOdW1iZXIgPSAxO1xuXG5cbiAgLy8gU29ydGluYXRpb25cbiAgQGJpbmRhYmxlIHNlcnZlclNvcnRpbmcgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIHNvcnRhYmxlID0gdHJ1ZTtcbiAgc29ydFByb2Nlc3NpbmdPcmRlciA9IFtdOyAvLyBSZXByZXNlbnRzIHdoaWNoIG9yZGVyIHRvIGFwcGx5IHNvcnRzIHRvIGVhY2ggY29sdW1uXG4gIHNvcnRpbmcgPSBbXTtcblxuICAvLyBDb2x1bW4gZGVmc1xuICBAYmluZGFibGUgYXV0b0dlbmVyYXRlQ29sdW1ucztcbiAgY29sdW1uSGVhZGVycyA9IFtdO1xuICBjb2x1bW5zID0gW107XG5cbiAgLy8gU2VsZWN0aW9uXG4gIEBiaW5kYWJsZSBzZWxlY3RhYmxlID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBzZWxlY3RlZEl0ZW0gPSBudWxsO1xuXG4gIC8vIE1pc2NcbiAgQGJpbmRhYmxlIG5vUm93c01lc3NhZ2UgPSAnJztcblxuICAvLyBEYXRhIC4uLi5cbiAgQGJpbmRhYmxlIGF1dG9Mb2FkID0gdHJ1ZTtcbiAgbG9hZGluZyA9IGZhbHNlO1xuICBAYmluZGFibGUgbG9hZGluZ01lc3NhZ2UgPSAnTG9hZGluZy4uLic7XG5cbiAgLy8gUmVhZFxuICBAYmluZGFibGUgcmVhZCA9IG51bGw7XG4gIEBiaW5kYWJsZSBvblJlYWRFcnJvciA9IG51bGw7XG5cbiAgLy8gVHJhY2tpbmdcbiAgY2FjaGUgPSBbXTtcbiAgZGF0YSA9IFtdO1xuICBjb3VudCA9IDA7XG5cbiAgLy8gU3Vic2NyaXB0aW9uIGhhbmRsaW5nXG4gIHVuYmluZGluZyA9IGZhbHNlO1xuXG4gIC8vIFZpc3VhbFxuICAvLyBUT0RPOiBjYWxjIHNjcm9sbGJhciB3aWR0aCB1c2luZyBicm93c2VyXG4gIHNjcm9sbEJhcldpZHRoID0gMTY7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29tcGlsZXIsIG9ic2VydmVyTG9jYXRvcikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jb21waWxlciA9IGNvbXBpbGVyO1xuICAgIHRoaXMub2JzZXJ2ZXJMb2NhdG9yID0gb2JzZXJ2ZXJMb2NhdG9yO1xuXG4gICAgLy8gR3JhYiB1c2VyIHRlbXBsYXRlIGZyb20gZWxlbWVudFxuICAgIHRoaXMucHJvY2Vzc1VzZXJUZW1wbGF0ZSgpO1xuICB9XG5cbiAgcHJvY2Vzc1VzZXJUZW1wbGF0ZSgpIHtcbiAgICAvLyBHZXQgYW55IGNvbCB0YWdzIGZyb20gdGhlIGNvbnRlbnRcbiAgICB2YXIgcm93RWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdncmlkLXJvdycpO1xuICAgIHZhciBjb2x1bW5FbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHJvd0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZ3JpZC1jb2wnKSk7XG5cbiAgICBjb2x1bW5FbGVtZW50cy5mb3JFYWNoKGMgPT4ge1xuICAgICAgdmFyIGF0dHJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYy5hdHRyaWJ1dGVzKTtcbiAgICAgIHZhciBjb2xIYXNoID0gYXR0cnMucmVkdWNlKChtYXAsIGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICBtYXBbYXR0cmlidXRlLm5hbWVdID0gYXR0cmlidXRlLnZhbHVlO1xuICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgfSwge30pO1xuXG4gICAgICB2YXIgY29sID0gbmV3IEdyaWRDb2x1bW4oY29sSGFzaCwgYy5pbm5lckhUTUwsIHRoaXMpO1xuXG4gICAgICB0aGlzLmFkZENvbHVtbihjb2wpO1xuICAgIH0pO1xuXG4gICAgLy8gUHVsbCBhbnkgcm93IGF0dHJzIGludG8gYSBoYXNoIG9iamVjdFxuICAgIHRoaXMucm93QXR0cnMgPSB7fTtcbiAgICB2YXIgYXR0cnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChyb3dFbGVtZW50LmF0dHJpYnV0ZXMpO1xuICAgIGF0dHJzLmZvckVhY2goYSA9PiB0aGlzLnJvd0F0dHJzW2EubmFtZV0gPSBhLnZhbHVlKTtcblxuICAgIC8vIFJlbW92ZSBhbGwgY2hpbGRyZW5cbiAgICB3aGlsZSAodGhpcy5lbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMClcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQuY2hpbGROb2Rlc1swXSk7XG4gIH1cblxuXG4gIC8qID09PSBMaWZlY3ljbGUgPT09ICovXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMuZ3JpZEhlaWdodENoYW5nZWQoKTtcblxuICAgIGlmICh0aGlzLmF1dG9Mb2FkID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gIH1cblxuICBiaW5kKGV4ZWN1dGlvbkNvbnRleHQpIHtcblxuICAgIHRoaXNbJyRwYXJlbnQnXSA9IGV4ZWN1dGlvbkNvbnRleHQ7XG5cbiAgICAvLyBFbnN1cmUgdGhlIGdyaWQgc2V0dGluZ3NcbiAgICAvLyBJZiB3ZSBjYW4gcGFnZSBvbiB0aGUgc2VydmVyIGFuZCB3ZSBjYW4ndCBzZXJ2ZXIgc29ydCwgd2UgY2FuJ3Qgc29ydCBsb2NhbGx5XG4gICAgaWYgKHRoaXMuc2VydmVyUGFnaW5nICYmICF0aGlzLnNlcnZlclNvcnRpbmcpIHtcbiAgICAgIHRoaXMuc29ydGFibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBCdWlsZCB0aGUgcm93cyB0aGVuIGR5bmFtaWNhbGx5IGNvbXBpbGUgdGhlIHRhYmxlXG4gICAgLy8gR2V0IHRoZSB0YWJsZS4uLlxuICAgIHZhciB0YWJsZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZT50Ym9keScpO1xuICAgIHZhciByb3dUZW1wbGF0ZSA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ3RyJyk7XG5cbiAgICAvLyBDcmVhdGUgYSBmcmFnbWVudCB3ZSB3aWxsIG1hbmlwdWxhdGUgdGhlIERPTSBpblxuICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIC8vIE1vdmUgdGhlIHJvdyB0ZW1wbGF0ZSB0byB0aGUgZnJhZ21lbnRcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChyb3dUZW1wbGF0ZSk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHJlcGVhdGVyXG4gICAgcm93VGVtcGxhdGUuc2V0QXR0cmlidXRlKCdyZXBlYXQuZm9yJywgJyRpdGVtIG9mIGRhdGEnKTtcbiAgICByb3dUZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJyR7ICRpdGVtID09PSAkcGFyZW50LnNlbGVjdGVkSXRlbSA/IFwiaW5mb1wiIDogXCJcIiB9Jyk7XG5cbiAgICAvLyBDb3B5IGFueSB1c2VyIHNwZWNpZmllZCByb3cgYXR0cmlidXRlcyB0byB0aGUgcm93IHRlbXBsYXRlXG4gICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLnJvd0F0dHJzKSB7XG4gICAgICBpZiAodGhpcy5yb3dBdHRycy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICByb3dUZW1wbGF0ZS5zZXRBdHRyaWJ1dGUocHJvcCwgdGhpcy5yb3dBdHRyc1twcm9wXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBjb2x1bW5zXG4gICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYyA9PiB7XG4gICAgICB2YXIgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXG4gICAgICAvLyBTZXQgYXR0cmlidXRlc1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiBjKSB7XG4gICAgICAgIGlmIChjLmhhc093blByb3BlcnR5KHByb3ApKSB7XG5cbiAgICAgICAgICBpZiAocHJvcCA9PSAndGVtcGxhdGUnKVxuICAgICAgICAgICAgdGQuaW5uZXJIVE1MID0gY1twcm9wXTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB0ZC5zZXRBdHRyaWJ1dGUocHJvcCwgY1twcm9wXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcm93VGVtcGxhdGUuYXBwZW5kQ2hpbGQodGQpO1xuICAgIH0pO1xuXG4gICAgLy8gQ29tcGlsZVxuICAgIHRoaXMuY29tcGlsZXIuY29tcGlsZSh0YWJsZSwgdGhpcywgdW5kZWZpbmVkLCBmcmFnbWVudCk7XG5cbiAgICAvLyBIQUNLOiB3aHkgaXMgdGhlIGNoYW5nZSBoYW5kbGVyIG5vdCBmaXJpbmcgZm9yIG5vUm93c01lc3NhZ2U/XG4gICAgdGhpcy5ub1Jvd3NNZXNzYWdlQ2hhbmdlZCgpO1xuICB9XG5cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMudW5iaW5kaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmRvbnRXYXRjaEZvckNoYW5nZXMoKTtcbiAgfVxuXG4gIC8qID09PSBDb2x1bW4gaGFuZGxpbmcgPT09ICovXG4gIGFkZENvbHVtbihjb2wpIHtcblxuICAgIC8vIE5vLXNvcnQgaWYgZ3JpZCBpcyBub3Qgc29ydGFibGVcbiAgICBpZiAoIXRoaXMuc29ydGFibGUpXG4gICAgICBjb2wubm9zb3J0ID0gdHJ1ZTtcblxuICAgIHRoaXMuY29sdW1ucy5wdXNoKGNvbCk7XG4gIH1cblxuICAvKiA9PT0gUGFnaW5nID09PSAqL1xuICBwYWdlQ2hhbmdlZChwYWdlLCBvbGRWYWx1ZSkge1xuICAgIGlmIChwYWdlID09PSBvbGRWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucGFnZU51bWJlciA9IE51bWJlcihwYWdlKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHBhZ2VTaXplQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnBhZ2VDaGFuZ2VkKDEpO1xuICAgIHRoaXMudXBkYXRlUGFnZXIoKTtcbiAgfVxuXG4gIGZpbHRlclNvcnRQYWdlKGRhdGEpIHtcbiAgICAvLyBBcHBsaWVzIGZpbHRlciwgc29ydCB0aGVuIHBhZ2VcbiAgICAvLyAxLiBGaXJzdCBmaWx0ZXIgdGhlIGRhdGEgZG93biB0byB0aGUgc2V0IHdlIHdhbnQsIGlmIHdlIGFyZSB1c2luZyBsb2NhbCBkYXRhXG4gICAgdmFyIHRlbXBEYXRhID0gZGF0YTtcblxuICAgIGlmICh0aGlzLnNob3dDb2x1bW5GaWx0ZXJzICYmICF0aGlzLnNlcnZlckZpbHRlcmluZylcbiAgICAgIHRlbXBEYXRhID0gdGhpcy5hcHBseUZpbHRlcih0ZW1wRGF0YSk7XG5cbiAgICAvLyBDb3VudCB0aGUgZGF0YSBub3cgYmVmb3JlIHRoZSBzb3J0L3BhZ2VcbiAgICB0aGlzLmNvdW50ID0gdGVtcERhdGEubGVuZ3RoO1xuXG4gICAgLy8gMi4gTm93IHNvcnQgdGhlIGRhdGFcbiAgICBpZiAodGhpcy5zb3J0YWJsZSAmJiAhdGhpcy5zZXJ2ZXJTb3J0aW5nKVxuICAgICAgdGVtcERhdGEgPSB0aGlzLmFwcGx5U29ydCh0ZW1wRGF0YSk7XG5cbiAgICAvLyAzLiBOb3cgYXBwbHkgcGFnaW5nXG4gICAgaWYgKHRoaXMucGFnZWFibGUgJiYgIXRoaXMuc2VydmVyUGFnaW5nKVxuICAgICAgdGVtcERhdGEgPSB0aGlzLmFwcGx5UGFnZSh0ZW1wRGF0YSk7XG5cbiAgICB0aGlzLmRhdGEgPSB0ZW1wRGF0YTtcblxuICAgIHRoaXMudXBkYXRlUGFnZXIoKTtcblxuICAgIHRoaXMud2F0Y2hGb3JDaGFuZ2VzKCk7XG4gIH1cblxuICBhcHBseVBhZ2UoZGF0YSkge1xuICAgIHZhciBzdGFydCA9IChOdW1iZXIodGhpcy5wYWdlTnVtYmVyKSAtIDEpICogTnVtYmVyKHRoaXMucGFnZVNpemUpO1xuICAgIGRhdGEgPSBkYXRhLnNsaWNlKHN0YXJ0LCBzdGFydCArIE51bWJlcih0aGlzLnBhZ2VTaXplKSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG5cbiAgdXBkYXRlUGFnZXIoKSB7XG4gICAgaWYgKHRoaXMucGFnZXIpXG4gICAgICB0aGlzLnBhZ2VyLnVwZGF0ZSh0aGlzLnBhZ2VOdW1iZXIsIE51bWJlcih0aGlzLnBhZ2VTaXplKSwgTnVtYmVyKHRoaXMuY291bnQpKTtcblxuICAgIHRoaXMuZmlyc3RWaXNpYmxlSXRlbSA9ICh0aGlzLnBhZ2VOdW1iZXIgLSAxKSAqIE51bWJlcih0aGlzLnBhZ2VTaXplKSArIDE7XG4gICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW0gPSAodGhpcy5wYWdlTnVtYmVyKSAqIE51bWJlcih0aGlzLnBhZ2VTaXplKTtcbiAgfVxuXG4gIC8qID09PSBTb3J0aW5nID09PSAqL1xuICBmaWVsZFNvcnRlcihmaWVsZHMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmaWVsZHNcbiAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgIHZhciBkaXIgPSAxO1xuICAgICAgICAgIGlmIChvWzBdID09PSAnLScpIHtcbiAgICAgICAgICAgIGRpciA9IC0xO1xuICAgICAgICAgICAgbyA9IG8uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYVtvXSA+IGJbb10pIHJldHVybiBkaXI7XG4gICAgICAgICAgaWYgKGFbb10gPCBiW29dKSByZXR1cm4gLShkaXIpO1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KVxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIGZpcnN0Tm9uWmVyb1ZhbHVlKHAsIG4pIHtcbiAgICAgICAgICByZXR1cm4gcCA/IHAgOiBuO1xuICAgICAgICB9LCAwKTtcbiAgICB9O1xuICB9XG5cbiAgcGFnZVNpemVzQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8vIHRvZG86IHJlbW92ZSBvciByZWRvXG4gIHNvcnRDaGFuZ2VkKGZpZWxkKSB7XG5cbiAgICAvLyBEZXRlcm1pbmUgbmV3IHNvcnRcbiAgICB2YXIgbmV3U29ydCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIEZpZ3VyZSBvdXQgd2hpY2ggd2F5IHRoaXMgZmllbGQgc2hvdWxkIGJlIHNvcnRpbmdcbiAgICBzd2l0Y2ggKHRoaXMuc29ydGluZ1tmaWVsZF0pIHtcbiAgICAgIGNhc2UgJ2FzYyc6XG4gICAgICAgIG5ld1NvcnQgPSAnZGVzYyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGVzYyc6XG4gICAgICAgIG5ld1NvcnQgPSAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBuZXdTb3J0ID0gJ2FzYyc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuc29ydGluZ1tmaWVsZF0gPSBuZXdTb3J0O1xuXG4gICAgLy8gSWYgdGhlIHNvcnQgaXMgcHJlc2VudCBpbiB0aGUgc29ydCBzdGFjaywgc2xpY2UgaXQgdG8gdGhlIGJhY2sgb2YgdGhlIHN0YWNrLCBvdGhlcndpc2UganVzdCBhZGQgaXRcbiAgICB2YXIgcG9zID0gdGhpcy5zb3J0UHJvY2Vzc2luZ09yZGVyLmluZGV4T2YoZmllbGQpO1xuXG4gICAgaWYgKHBvcyA+IC0xKVxuICAgICAgdGhpcy5zb3J0UHJvY2Vzc2luZ09yZGVyLnNwbGljZShwb3MsIDEpO1xuXG4gICAgdGhpcy5zb3J0UHJvY2Vzc2luZ09yZGVyLnB1c2goZmllbGQpO1xuXG4gICAgLy8gQXBwbHkgdGhlIG5ldyBzb3J0XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvLyB0b2RvOiByZW1vdmUgb3IgcmVkb1xuICBhcHBseVNvcnQoZGF0YSkge1xuXG4gICAgLy8gRm9ybWF0IHRoZSBzb3J0IGZpZWxkc1xuICAgIHZhciBmaWVsZHMgPSBbXTtcblxuICAgIC8vIEdldCB0aGUgZmllbGRzIGluIHRoZSAnc29ydGluZ09SZGVyJ1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zb3J0UHJvY2Vzc2luZ09yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc29ydCA9IHRoaXMuc29ydFByb2Nlc3NpbmdPcmRlcltpXTtcblxuICAgICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLnNvcnRpbmcpIHtcbiAgICAgICAgaWYgKHNvcnQgPT0gcHJvcCAmJiB0aGlzLnNvcnRpbmdbcHJvcF0gIT09ICcnKVxuICAgICAgICAgIGZpZWxkcy5wdXNoKHRoaXMuc29ydGluZ1twcm9wXSA9PT0gJ2FzYycgPyAocHJvcCkgOiAoJy0nICsgcHJvcCkpO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gSWYgc2VydmVyIHNvcnQsIGp1c3QgcmVmcmVzaFxuICAgIGRhdGEgPSBkYXRhLnNvcnQodGhpcy5maWVsZFNvcnRlcihmaWVsZHMpKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cblxuICBjaGFuZ2VTb3J0KHNvcnQpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnNvcnRpbmcuZmluZEluZGV4KChlbCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChlbC5uYW1lID09PSBzb3J0Lm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLnNvcnRpbmcuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBpZiAoc29ydC52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNvcnRpbmcucHVzaChzb3J0KTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qID09PSBGaWx0ZXJpbmcgPT09ICovXG4gIGFwcGx5RmlsdGVyKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YS5maWx0ZXIoKHJvdykgPT4ge1xuICAgICAgdmFyIGluY2x1ZGUgPSB0cnVlO1xuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy5jb2x1bW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBjb2wgPSB0aGlzLmNvbHVtbnNbaV07XG5cbiAgICAgICAgaWYgKGNvbC5maWx0ZXJWYWx1ZSAhPT0gJycgJiYgcm93W2NvbC5maWVsZF0udG9TdHJpbmcoKS5pbmRleE9mKGNvbC5maWx0ZXJWYWx1ZSkgPT09IC0xKSB7XG4gICAgICAgICAgaW5jbHVkZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbmNsdWRlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsdGVyc1F1ZXJ5U3RyaW5nKCkge1xuICAgIHZhciBmaWx0ZXJzID0gW107XG4gICAgZm9yICh2YXIgaSA9IHRoaXMuY29sdW1ucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNvbCA9IHRoaXMuY29sdW1uc1tpXTtcbiAgICAgIGxldCBmaWx0ZXJRdWVyeVN0cmluZyA9IGNvbC5nZXRRdWVyeVN0cmluZygpO1xuICAgICAgaWYgKGZpbHRlclF1ZXJ5U3RyaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZmlsdGVycy5wdXNoKGZpbHRlclF1ZXJ5U3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmlsdGVycztcbiAgfVxuXG4gIGdldEZpbHRlcnNWYWx1ZXMoKSB7XG4gICAgbGV0IGZpbHRlcnMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gdGhpcy5jb2x1bW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY29sID0gdGhpcy5jb2x1bW5zW2ldO1xuICAgICAgZmlsdGVycyA9IGZpbHRlcnMuY29uY2F0KGNvbC5nZXRGaWx0ZXJWYWx1ZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsdGVycztcbiAgfVxuXG4gIHVwZGF0ZUZpbHRlcnMoKSB7XG4gICAgaWYgKHRoaXMudXBkYXRlRmlsdGVyc1NldFRpbWVvdXQpIHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy51cGRhdGVGaWx0ZXJzU2V0VGltZW91dCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVGaWx0ZXJzU2V0VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpLCB0aGlzLmZpbHRlckRlbGF5KTtcbiAgfVxuXG4gIC8qID09PSBEYXRhID09PSAqL1xuICByZWZyZXNoKCkge1xuICAgIC8vIElmIHdlIGhhdmUgYW55IHNlcnZlciBzaWRlIHN0dWZmIHdlIG5lZWQgdG8gZ2V0IHRoZSBkYXRhIGZpcnN0XG4gICAgdGhpcy5kb250V2F0Y2hGb3JDaGFuZ2VzKCk7XG5cbiAgICBpZiAodGhpcy5zZXJ2ZXJQYWdpbmcgfHwgdGhpcy5zZXJ2ZXJTb3J0aW5nIHx8IHRoaXMuc2VydmVyRmlsdGVyaW5nIHx8ICF0aGlzLmluaXRpYWxMb2FkKSB7XG4gICAgICB0aGlzLmdldERhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJTb3J0UGFnZSh0aGlzLmNhY2hlKTtcbiAgICB9XG5cbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgaWYgKCF0aGlzLnJlYWQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHJlYWQgbWV0aG9kIHNwZWNpZmllZCBmb3IgZ3JpZCcpO1xuXG4gICAgdGhpcy5pbml0aWFsTG9hZCA9IHRydWU7XG5cbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgcHJvZ3Jlc3MgaW5kaWNhdG9yXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgIC8vIFRyeSB0byByZWFkIGZyb20gdGhlIGRhdGEgYWRhcHRlclxuICAgIGxldCBxdWVyeVZhbHVlcyA9IHt9O1xuICAgIHF1ZXJ5VmFsdWVzLmZpbHRlcnMgPSB0aGlzLmdldEZpbHRlcnNWYWx1ZXMoKTtcbiAgICBxdWVyeVZhbHVlcy5wYWdpbmcgPSB7XG4gICAgICBwYWdlOiB0aGlzLnBhZ2VOdW1iZXIsXG4gICAgICBjb3VudDogd2luZG93Lk51bWJlcih0aGlzLnBhZ2VTaXplLCAxMClcbiAgICB9O1xuICAgIHF1ZXJ5VmFsdWVzLnNvcnRlcnMgPSB0aGlzLnNvcnRpbmc7XG5cbiAgICB0aGlzLnJlYWQocXVlcnlWYWx1ZXMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgLy8gRGF0YSBzaG91bGQgYmUgaW4gdGhlIHJlc3VsdCBzbyBncmFiIGl0IGFuZCBhc3NpZ24gaXQgdG8gdGhlIGRhdGEgcHJvcGVydHlcbiAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KHJlc3VsdCk7XG5cbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0sIChyZXN1bHQpID0+IHtcbiAgICAgIC8vIFNvbWV0aGluZyB3ZW50IHRlcnJpYmx5IHdyb25nLCBub3RpZnkgdGhlIGNvbnN1bWVyXG4gICAgICBpZiAodGhpcy5vblJlYWRFcnJvcilcbiAgICAgICAgdGhpcy5vblJlYWRFcnJvcihyZXN1bHQpO1xuXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVJlc3VsdChyZXN1bHQpIHtcblxuICAgIC8vIFRPRE86IENoZWNrIHZhbGlkIHN0dWZmIHdhcyByZXR1cm5lZFxuICAgIHZhciBkYXRhID0gcmVzdWx0LmRhdGE7XG5cbiAgICAvLyBJcyB0aGUgZGF0YSBiZWluZyBwYWdpbmF0ZWQgb24gdGhlIGNsaWVudCBzaWRlP1xuICAgIC8vIFRPRE86IFdvcmsgb3V0IHdoZW4gd2Ugc2hvdWxkIHdlIHVzZSB0aGUgY2FjaGUuLi4gZXZlcj8gSWYgaXQncyBsb2NhbCBkYXRhXG4gICAgaWYgKHRoaXMucGFnZWFibGUgJiYgIXRoaXMuc2VydmVyUGFnaW5nICYmICF0aGlzLnNlcnZlclNvcnRpbmcgJiYgIXRoaXMuc2VydmVyRmlsdGVyaW5nKSB7XG4gICAgICAvLyBDYWNoZSB0aGUgZGF0YVxuICAgICAgdGhpcy5jYWNoZSA9IHJlc3VsdC5kYXRhO1xuICAgICAgdGhpcy5maWx0ZXJTb3J0UGFnZSh0aGlzLmNhY2hlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhID0gcmVzdWx0LmRhdGE7XG4gICAgICB0aGlzLmZpbHRlclNvcnRQYWdlKHRoaXMuZGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb3VudCA9IHJlc3VsdC5jb3VudDtcblxuICAgIC8vIFVwZGF0ZSB0aGUgcGFnZXIgLSBtYXliZSB0aGUgZ3JpZCBvcHRpb25zIHNob3VsZCBjb250YWluIGFuIHVwZGF0ZSBjYWxsYmFjayBpbnN0ZWFkIG9mIHJlZmZpbmcgdGhlXG4gICAgLy8gcGFnZXIgaW50byB0aGUgY3VycmVudCBWTT9cbiAgICB0aGlzLnVwZGF0ZVBhZ2VyKCk7XG4gIH1cblxuICB3YXRjaEZvckNoYW5nZXMoKSB7XG4gICAgdGhpcy5kb250V2F0Y2hGb3JDaGFuZ2VzKCk7XG5cbiAgICAvLyBHdWFyZCBhZ2FpbnN0IGRhdGEgcmVmcmVzaCBldmVudHMgaGl0dGluZyBhZnRlciB0aGUgdXNlciBkb2VzIGFueXRoaW5nIHRoYXQgdW5sb2FkcyB0aGUgZ3JpZFxuICAgIGlmICghdGhpcy51bmJpbmRpbmcpXG4gICAgLy8gV2UgY2FuIHVwZGF0ZSB0aGUgcGFnZXIgYXV0b21hZ2ljYWxseVxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLm9ic2VydmVyTG9jYXRvclxuICAgICAgICAuZ2V0QXJyYXlPYnNlcnZlcih0aGlzLmNhY2hlKVxuICAgICAgICAuc3Vic2NyaWJlKChzcGxpY2VzKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgZG9udFdhdGNoRm9yQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbigpO1xuICB9XG5cbiAgLyogPT09IFNlbGVjdGlvbiA9PT0gKi9cblxuICBzZWxlY3QoaXRlbSkge1xuICAgIGlmICh0aGlzLnNlbGVjdGFibGUpXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gIH1cblxuICAvKiA9PT0gQ2hhbmdlIGhhbmRsZXJzID09PSAqL1xuICBub1Jvd3NNZXNzYWdlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnNob3dOb1Jvd3NNZXNzYWdlID0gdGhpcy5ub1Jvd3NNZXNzYWdlICE9PSAnJztcbiAgfVxuXG4gIGdyaWRIZWlnaHRDaGFuZ2VkKCkge1xuXG4gICAgLy8gVE9ETzogTWFrZSB0aGlzIGEgb25lIG9mZlxuICAgIHZhciBjb250ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWNvbnRhaW5lcicpO1xuXG4gICAgaWYgKHRoaXMuZ3JpZEhlaWdodCA+IDApIHtcbiAgICAgIGNvbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdoZWlnaHQ6JyArIHRoaXMuZ3JpZEhlaWdodCArICdweCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB9XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9