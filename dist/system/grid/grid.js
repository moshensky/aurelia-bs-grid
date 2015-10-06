System.register(['aurelia-framework', './grid-column'], function (_export) {
  'use strict';

  var bindable, inject, processContent, ObserverLocator, customElement, ViewCompiler, ViewResources, Container, ViewSlot, GridColumn, Grid;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
      processContent = _aureliaFramework.processContent;
      ObserverLocator = _aureliaFramework.ObserverLocator;
      customElement = _aureliaFramework.customElement;
      ViewCompiler = _aureliaFramework.ViewCompiler;
      ViewResources = _aureliaFramework.ViewResources;
      Container = _aureliaFramework.Container;
      ViewSlot = _aureliaFramework.ViewSlot;
    }, function (_gridColumn) {
      GridColumn = _gridColumn.GridColumn;
    }],
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

        function Grid(element, observerLocator, viewComiler, resources, container) {
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
          this.observerLocator = observerLocator;
          this.viewCompiler = viewComiler;
          this.resources = resources;
          this.container = container;

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
          key: 'compile',
          value: function compile(element) {
            var ctx = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
            var viewSlot = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
            var templateOrFragment = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

            element.classList.remove('au-target');

            if (!templateOrFragment) {
              var templateOrFragment = document.createDocumentFragment();
              var c = document.createElement('div');
              c.innerHTML = element.innerHTML;
              templateOrFragment.appendChild(c);
            }
            var view = this.viewCompiler.compile(templateOrFragment, this.resources).create(this.container, ctx);

            if (!viewSlot) viewSlot = new ViewSlot(element, true);

            viewSlot.add(view);
            viewSlot.attached();
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
            rowTemplate.setAttribute('class', '${ $item.className }');

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

            this.compile(table, this, undefined, fragment);

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
        Grid = inject(Element, ObserverLocator, ViewCompiler, ViewResources, Container)(Grid) || Grid;
        Grid = processContent(false)(Grid) || Grid;
        Grid = customElement('grid')(Grid) || Grid;
        return Grid;
      })();

      _export('Grid', Grid);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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SSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7V0FDNUI7OztpQkFHbUIsZ0NBQUc7QUFDckIsZ0JBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsYUFBYSxLQUFLLEVBQUUsQ0FBQztXQUNwRDs7O2lCQUVnQiw2QkFBRztBQUdsQixnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7QUFFekQsZ0JBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7QUFDdkIsa0JBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ2hFLE1BQU07QUFDTCxrQkFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMvQjtXQUNGOzs7b0JBM2dCVSxJQUFJO0FBQUosWUFBSSxHQURoQixNQUFNLENBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUM1RCxJQUFJLEtBQUosSUFBSTtBQUFKLFlBQUksR0FGaEIsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUVULElBQUksS0FBSixJQUFJO0FBQUosWUFBSSxHQUhoQixhQUFhLENBQUMsTUFBTSxDQUFDLENBR1QsSUFBSSxLQUFKLElBQUk7ZUFBSixJQUFJOzs7c0JBQUosSUFBSSIsImZpbGUiOiJncmlkL2dyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBpbmplY3QsIHByb2Nlc3NDb250ZW50LCBPYnNlcnZlckxvY2F0b3IsIGN1c3RvbUVsZW1lbnQsIFZpZXdDb21waWxlciwgVmlld1Jlc291cmNlcywgQ29udGFpbmVyLCBWaWV3U2xvdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtHcmlkQ29sdW1ufSBmcm9tICcuL2dyaWQtY29sdW1uJztcblxuQGN1c3RvbUVsZW1lbnQoJ2dyaWQnKVxuQHByb2Nlc3NDb250ZW50KGZhbHNlKVxuQGluamVjdChFbGVtZW50LCBPYnNlcnZlckxvY2F0b3IsIFZpZXdDb21waWxlciwgVmlld1Jlc291cmNlcywgQ29udGFpbmVyKVxuZXhwb3J0IGNsYXNzIEdyaWQge1xuICAvKiA9PSBTdHlsaW5nID09ICovXG4gIEBiaW5kYWJsZSBncmlkSGVpZ2h0ID0gMDtcblxuICAvKiA9PSBPcHRpb25zID09ICovXG5cblxuICAvLyBJbml0aWFsIGxvYWQgZmxhZyAoZm9yIGNsaWVudCBzaWRlKVxuICBAYmluZGFibGUgaW5pdGlhbExvYWQgPSBmYWxzZTtcblxuICAvLyBGaWx0ZXJpbmdcbiAgdXBkYXRlRmlsdGVyc1NldFRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gIEBiaW5kYWJsZSBmaWx0ZXJEZWxheSA9IDI1MDtcbiAgQGJpbmRhYmxlIHNob3dDb2x1bW5GaWx0ZXJzID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBzZXJ2ZXJGaWx0ZXJpbmcgPSBmYWxzZTtcblxuICAvLyBQYWdpbmF0aW9uXG4gIEBiaW5kYWJsZSBzZXJ2ZXJQYWdpbmcgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIHBhZ2VhYmxlID0gdHJ1ZTtcbiAgQGJpbmRhYmxlIHBhZ2VTaXplID0gMTA7XG4gIEBiaW5kYWJsZSBwYWdlID0gMTtcbiAgQGJpbmRhYmxlIHBhZ2VyU2l6ZSA9IDEwO1xuXG4gIEBiaW5kYWJsZSBzaG93Rmlyc3RMYXN0QnV0dG9ucyA9IHRydWU7XG4gIEBiaW5kYWJsZSBzaG93SnVtcEJ1dHRvbnMgPSB0cnVlO1xuXG4gIEBiaW5kYWJsZSBwYWdlU2l6ZXMgPSBbMTAsIDI1LCA1MF07XG5cbiAgZmlyc3RWaXNpYmxlSXRlbSA9IDA7XG4gIGxhc3RWaXNpYmxlSXRlbSA9IDA7XG5cbiAgcGFnZU51bWJlciA9IDE7XG5cblxuICAvLyBTb3J0aW5hdGlvblxuICBAYmluZGFibGUgc2VydmVyU29ydGluZyA9IGZhbHNlO1xuICBAYmluZGFibGUgc29ydGFibGUgPSB0cnVlO1xuICBzb3J0UHJvY2Vzc2luZ09yZGVyID0gW107IC8vIFJlcHJlc2VudHMgd2hpY2ggb3JkZXIgdG8gYXBwbHkgc29ydHMgdG8gZWFjaCBjb2x1bW5cbiAgc29ydGluZyA9IFtdO1xuXG4gIC8vIENvbHVtbiBkZWZzXG4gIEBiaW5kYWJsZSBhdXRvR2VuZXJhdGVDb2x1bW5zO1xuICBjb2x1bW5IZWFkZXJzID0gW107XG4gIGNvbHVtbnMgPSBbXTtcblxuICAvLyBTZWxlY3Rpb25cbiAgQGJpbmRhYmxlIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIHNlbGVjdGVkSXRlbSA9IG51bGw7XG5cbiAgLy8gTWlzY1xuICBAYmluZGFibGUgbm9Sb3dzTWVzc2FnZSA9ICcnO1xuXG4gIC8vIERhdGEgLi4uLlxuICBAYmluZGFibGUgYXV0b0xvYWQgPSB0cnVlO1xuICBsb2FkaW5nID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBsb2FkaW5nTWVzc2FnZSA9ICdMb2FkaW5nLi4uJztcblxuICAvLyBSZWFkXG4gIEBiaW5kYWJsZSByZWFkID0gbnVsbDtcbiAgQGJpbmRhYmxlIG9uUmVhZEVycm9yID0gbnVsbDtcblxuICAvLyBUcmFja2luZ1xuICBjYWNoZSA9IFtdO1xuICBkYXRhID0gW107XG4gIGNvdW50ID0gMDtcblxuICAvLyBTdWJzY3JpcHRpb24gaGFuZGxpbmdcbiAgdW5iaW5kaW5nID0gZmFsc2U7XG5cbiAgLy8gVmlzdWFsXG4gIC8vIFRPRE86IGNhbGMgc2Nyb2xsYmFyIHdpZHRoIHVzaW5nIGJyb3dzZXJcbiAgc2Nyb2xsQmFyV2lkdGggPSAxNjtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvYnNlcnZlckxvY2F0b3IsIHZpZXdDb21pbGVyLCByZXNvdXJjZXMsIGNvbnRhaW5lcikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5vYnNlcnZlckxvY2F0b3IgPSBvYnNlcnZlckxvY2F0b3I7XG4gICAgdGhpcy52aWV3Q29tcGlsZXIgPSB2aWV3Q29taWxlcjtcbiAgICB0aGlzLnJlc291cmNlcyA9IHJlc291cmNlcztcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgIC8vIEdyYWIgdXNlciB0ZW1wbGF0ZSBmcm9tIGVsZW1lbnRcbiAgICB0aGlzLnByb2Nlc3NVc2VyVGVtcGxhdGUoKTtcbiAgfVxuXG4gIHByb2Nlc3NVc2VyVGVtcGxhdGUoKSB7XG4gICAgLy8gR2V0IGFueSBjb2wgdGFncyBmcm9tIHRoZSBjb250ZW50XG4gICAgdmFyIHJvd0VsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignZ3JpZC1yb3cnKTtcbiAgICB2YXIgY29sdW1uRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChyb3dFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2dyaWQtY29sJykpO1xuXG4gICAgY29sdW1uRWxlbWVudHMuZm9yRWFjaChjID0+IHtcbiAgICAgIHZhciBhdHRycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGMuYXR0cmlidXRlcyk7XG4gICAgICB2YXIgY29sSGFzaCA9IGF0dHJzLnJlZHVjZSgobWFwLCBhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgbWFwW2F0dHJpYnV0ZS5uYW1lXSA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgIH0sIHt9KTtcblxuICAgICAgdmFyIGNvbCA9IG5ldyBHcmlkQ29sdW1uKGNvbEhhc2gsIGMuaW5uZXJIVE1MLCB0aGlzKTtcblxuICAgICAgdGhpcy5hZGRDb2x1bW4oY29sKTtcbiAgICB9KTtcblxuICAgIC8vIFB1bGwgYW55IHJvdyBhdHRycyBpbnRvIGEgaGFzaCBvYmplY3RcbiAgICB0aGlzLnJvd0F0dHJzID0ge307XG4gICAgdmFyIGF0dHJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocm93RWxlbWVudC5hdHRyaWJ1dGVzKTtcbiAgICBhdHRycy5mb3JFYWNoKGEgPT4gdGhpcy5yb3dBdHRyc1thLm5hbWVdID0gYS52YWx1ZSk7XG5cbiAgICAvLyBSZW1vdmUgYWxsIGNoaWxkcmVuXG4gICAgd2hpbGUgKHRoaXMuZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA+IDApXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50LmNoaWxkTm9kZXNbMF0pO1xuICB9XG5cbiAgY29tcGlsZShlbGVtZW50LCBjdHggPSBudWxsLHZpZXdTbG90ID0gbnVsbCx0ZW1wbGF0ZU9yRnJhZ21lbnQ9bnVsbCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYXUtdGFyZ2V0Jyk7XG5cbiAgICBpZighdGVtcGxhdGVPckZyYWdtZW50KXtcbiAgICAgIHZhciB0ZW1wbGF0ZU9yRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICB2YXIgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjLmlubmVySFRNTCA9IGVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgdGVtcGxhdGVPckZyYWdtZW50LmFwcGVuZENoaWxkKGMpO1xuICAgIH1cbiAgICB2YXIgdmlldyA9IHRoaXMudmlld0NvbXBpbGVyLmNvbXBpbGUodGVtcGxhdGVPckZyYWdtZW50LCB0aGlzLnJlc291cmNlcykuY3JlYXRlKHRoaXMuY29udGFpbmVyLCBjdHgpO1xuXG4gICAgaWYoIXZpZXdTbG90KSB2aWV3U2xvdCA9IG5ldyBWaWV3U2xvdChlbGVtZW50LCB0cnVlKTtcblxuICAgIHZpZXdTbG90LmFkZCh2aWV3KTtcbiAgICB2aWV3U2xvdC5hdHRhY2hlZCgpO1xuICB9XG5cbiAgLyogPT09IExpZmVjeWNsZSA9PT0gKi9cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5ncmlkSGVpZ2h0Q2hhbmdlZCgpO1xuXG4gICAgaWYgKHRoaXMuYXV0b0xvYWQgPT09IHRydWUpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIGJpbmQoZXhlY3V0aW9uQ29udGV4dCkge1xuXG4gICAgdGhpc1snJHBhcmVudCddID0gZXhlY3V0aW9uQ29udGV4dDtcblxuICAgIC8vIEVuc3VyZSB0aGUgZ3JpZCBzZXR0aW5nc1xuICAgIC8vIElmIHdlIGNhbiBwYWdlIG9uIHRoZSBzZXJ2ZXIgYW5kIHdlIGNhbid0IHNlcnZlciBzb3J0LCB3ZSBjYW4ndCBzb3J0IGxvY2FsbHlcbiAgICBpZiAodGhpcy5zZXJ2ZXJQYWdpbmcgJiYgIXRoaXMuc2VydmVyU29ydGluZykge1xuICAgICAgdGhpcy5zb3J0YWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEJ1aWxkIHRoZSByb3dzIHRoZW4gZHluYW1pY2FsbHkgY29tcGlsZSB0aGUgdGFibGVcbiAgICAvLyBHZXQgdGhlIHRhYmxlLi4uXG4gICAgdmFyIHRhYmxlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlPnRib2R5Jyk7XG4gICAgdmFyIHJvd1RlbXBsYXRlID0gdGFibGUucXVlcnlTZWxlY3RvcigndHInKTtcblxuICAgIC8vIENyZWF0ZSBhIGZyYWdtZW50IHdlIHdpbGwgbWFuaXB1bGF0ZSB0aGUgRE9NIGluXG4gICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgLy8gTW92ZSB0aGUgcm93IHRlbXBsYXRlIHRvIHRoZSBmcmFnbWVudFxuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHJvd1RlbXBsYXRlKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgcmVwZWF0ZXJcbiAgICByb3dUZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3JlcGVhdC5mb3InLCAnJGl0ZW0gb2YgZGF0YScpO1xuICAgIHJvd1RlbXBsYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnJHsgJGl0ZW0uY2xhc3NOYW1lIH0nKTtcblxuICAgIC8vIENvcHkgYW55IHVzZXIgc3BlY2lmaWVkIHJvdyBhdHRyaWJ1dGVzIHRvIHRoZSByb3cgdGVtcGxhdGVcbiAgICBmb3IgKHZhciBwcm9wIGluIHRoaXMucm93QXR0cnMpIHtcbiAgICAgIGlmICh0aGlzLnJvd0F0dHJzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIHJvd1RlbXBsYXRlLnNldEF0dHJpYnV0ZShwcm9wLCB0aGlzLnJvd0F0dHJzW3Byb3BdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgdGhlIGNvbHVtbnNcbiAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjID0+IHtcbiAgICAgIHZhciB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cbiAgICAgIC8vIFNldCBhdHRyaWJ1dGVzXG4gICAgICBmb3IgKHZhciBwcm9wIGluIGMpIHtcbiAgICAgICAgaWYgKGMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcblxuICAgICAgICAgIGlmIChwcm9wID09ICd0ZW1wbGF0ZScpXG4gICAgICAgICAgICB0ZC5pbm5lckhUTUwgPSBjW3Byb3BdO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRkLnNldEF0dHJpYnV0ZShwcm9wLCBjW3Byb3BdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByb3dUZW1wbGF0ZS5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgfSk7XG5cbiAgICAvLyBDb21waWxlXG4gICAgdGhpcy5jb21waWxlKHRhYmxlLCB0aGlzLCB1bmRlZmluZWQsIGZyYWdtZW50KTtcblxuICAgIC8vIEhBQ0s6IHdoeSBpcyB0aGUgY2hhbmdlIGhhbmRsZXIgbm90IGZpcmluZyBmb3Igbm9Sb3dzTWVzc2FnZT9cbiAgICB0aGlzLm5vUm93c01lc3NhZ2VDaGFuZ2VkKCk7XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgdGhpcy51bmJpbmRpbmcgPSB0cnVlO1xuICAgIHRoaXMuZG9udFdhdGNoRm9yQ2hhbmdlcygpO1xuICB9XG5cbiAgLyogPT09IENvbHVtbiBoYW5kbGluZyA9PT0gKi9cbiAgYWRkQ29sdW1uKGNvbCkge1xuXG4gICAgLy8gTm8tc29ydCBpZiBncmlkIGlzIG5vdCBzb3J0YWJsZVxuICAgIGlmICghdGhpcy5zb3J0YWJsZSlcbiAgICAgIGNvbC5ub3NvcnQgPSB0cnVlO1xuXG4gICAgdGhpcy5jb2x1bW5zLnB1c2goY29sKTtcbiAgfVxuXG4gIC8qID09PSBQYWdpbmcgPT09ICovXG4gIHBhZ2VDaGFuZ2VkKHBhZ2UsIG9sZFZhbHVlKSB7XG4gICAgaWYgKHBhZ2UgPT09IG9sZFZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wYWdlTnVtYmVyID0gTnVtYmVyKHBhZ2UpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgcGFnZVNpemVDaGFuZ2VkKCkge1xuICAgIHRoaXMucGFnZUNoYW5nZWQoMSk7XG4gICAgdGhpcy51cGRhdGVQYWdlcigpO1xuICB9XG5cbiAgZmlsdGVyU29ydFBhZ2UoZGF0YSkge1xuICAgIC8vIEFwcGxpZXMgZmlsdGVyLCBzb3J0IHRoZW4gcGFnZVxuICAgIC8vIDEuIEZpcnN0IGZpbHRlciB0aGUgZGF0YSBkb3duIHRvIHRoZSBzZXQgd2Ugd2FudCwgaWYgd2UgYXJlIHVzaW5nIGxvY2FsIGRhdGFcbiAgICB2YXIgdGVtcERhdGEgPSBkYXRhO1xuXG4gICAgaWYgKHRoaXMuc2hvd0NvbHVtbkZpbHRlcnMgJiYgIXRoaXMuc2VydmVyRmlsdGVyaW5nKVxuICAgICAgdGVtcERhdGEgPSB0aGlzLmFwcGx5RmlsdGVyKHRlbXBEYXRhKTtcblxuICAgIC8vIENvdW50IHRoZSBkYXRhIG5vdyBiZWZvcmUgdGhlIHNvcnQvcGFnZVxuICAgIHRoaXMuY291bnQgPSB0ZW1wRGF0YS5sZW5ndGg7XG5cbiAgICAvLyAyLiBOb3cgc29ydCB0aGUgZGF0YVxuICAgIGlmICh0aGlzLnNvcnRhYmxlICYmICF0aGlzLnNlcnZlclNvcnRpbmcpXG4gICAgICB0ZW1wRGF0YSA9IHRoaXMuYXBwbHlTb3J0KHRlbXBEYXRhKTtcblxuICAgIC8vIDMuIE5vdyBhcHBseSBwYWdpbmdcbiAgICBpZiAodGhpcy5wYWdlYWJsZSAmJiAhdGhpcy5zZXJ2ZXJQYWdpbmcpXG4gICAgICB0ZW1wRGF0YSA9IHRoaXMuYXBwbHlQYWdlKHRlbXBEYXRhKTtcblxuICAgIHRoaXMuZGF0YSA9IHRlbXBEYXRhO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlcigpO1xuXG4gICAgdGhpcy53YXRjaEZvckNoYW5nZXMoKTtcbiAgfVxuXG4gIGFwcGx5UGFnZShkYXRhKSB7XG4gICAgdmFyIHN0YXJ0ID0gKE51bWJlcih0aGlzLnBhZ2VOdW1iZXIpIC0gMSkgKiBOdW1iZXIodGhpcy5wYWdlU2l6ZSk7XG4gICAgZGF0YSA9IGRhdGEuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgTnVtYmVyKHRoaXMucGFnZVNpemUpKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cblxuICB1cGRhdGVQYWdlcigpIHtcbiAgICBpZiAodGhpcy5wYWdlcilcbiAgICAgIHRoaXMucGFnZXIudXBkYXRlKHRoaXMucGFnZU51bWJlciwgTnVtYmVyKHRoaXMucGFnZVNpemUpLCBOdW1iZXIodGhpcy5jb3VudCkpO1xuXG4gICAgdGhpcy5maXJzdFZpc2libGVJdGVtID0gKHRoaXMucGFnZU51bWJlciAtIDEpICogTnVtYmVyKHRoaXMucGFnZVNpemUpICsgMTtcbiAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbSA9ICh0aGlzLnBhZ2VOdW1iZXIpICogTnVtYmVyKHRoaXMucGFnZVNpemUpO1xuICB9XG5cbiAgLyogPT09IFNvcnRpbmcgPT09ICovXG4gIGZpZWxkU29ydGVyKGZpZWxkcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZpZWxkc1xuICAgICAgICAubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgdmFyIGRpciA9IDE7XG4gICAgICAgICAgaWYgKG9bMF0gPT09ICctJykge1xuICAgICAgICAgICAgZGlyID0gLTE7XG4gICAgICAgICAgICBvID0gby5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhW29dID4gYltvXSkgcmV0dXJuIGRpcjtcbiAgICAgICAgICBpZiAoYVtvXSA8IGJbb10pIHJldHVybiAtKGRpcik7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gZmlyc3ROb25aZXJvVmFsdWUocCwgbikge1xuICAgICAgICAgIHJldHVybiBwID8gcCA6IG47XG4gICAgICAgIH0sIDApO1xuICAgIH07XG4gIH1cblxuICBwYWdlU2l6ZXNDaGFuZ2VkKCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLy8gdG9kbzogcmVtb3ZlIG9yIHJlZG9cbiAgc29ydENoYW5nZWQoZmllbGQpIHtcblxuICAgIC8vIERldGVybWluZSBuZXcgc29ydFxuICAgIHZhciBuZXdTb3J0ID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gRmlndXJlIG91dCB3aGljaCB3YXkgdGhpcyBmaWVsZCBzaG91bGQgYmUgc29ydGluZ1xuICAgIHN3aXRjaCAodGhpcy5zb3J0aW5nW2ZpZWxkXSkge1xuICAgICAgY2FzZSAnYXNjJzpcbiAgICAgICAgbmV3U29ydCA9ICdkZXNjJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZXNjJzpcbiAgICAgICAgbmV3U29ydCA9ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG5ld1NvcnQgPSAnYXNjJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5zb3J0aW5nW2ZpZWxkXSA9IG5ld1NvcnQ7XG5cbiAgICAvLyBJZiB0aGUgc29ydCBpcyBwcmVzZW50IGluIHRoZSBzb3J0IHN0YWNrLCBzbGljZSBpdCB0byB0aGUgYmFjayBvZiB0aGUgc3RhY2ssIG90aGVyd2lzZSBqdXN0IGFkZCBpdFxuICAgIHZhciBwb3MgPSB0aGlzLnNvcnRQcm9jZXNzaW5nT3JkZXIuaW5kZXhPZihmaWVsZCk7XG5cbiAgICBpZiAocG9zID4gLTEpXG4gICAgICB0aGlzLnNvcnRQcm9jZXNzaW5nT3JkZXIuc3BsaWNlKHBvcywgMSk7XG5cbiAgICB0aGlzLnNvcnRQcm9jZXNzaW5nT3JkZXIucHVzaChmaWVsZCk7XG5cbiAgICAvLyBBcHBseSB0aGUgbmV3IHNvcnRcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8vIHRvZG86IHJlbW92ZSBvciByZWRvXG4gIGFwcGx5U29ydChkYXRhKSB7XG5cbiAgICAvLyBGb3JtYXQgdGhlIHNvcnQgZmllbGRzXG4gICAgdmFyIGZpZWxkcyA9IFtdO1xuXG4gICAgLy8gR2V0IHRoZSBmaWVsZHMgaW4gdGhlICdzb3J0aW5nT1JkZXInXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNvcnRQcm9jZXNzaW5nT3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3J0ID0gdGhpcy5zb3J0UHJvY2Vzc2luZ09yZGVyW2ldO1xuXG4gICAgICBmb3IgKHZhciBwcm9wIGluIHRoaXMuc29ydGluZykge1xuICAgICAgICBpZiAoc29ydCA9PSBwcm9wICYmIHRoaXMuc29ydGluZ1twcm9wXSAhPT0gJycpXG4gICAgICAgICAgZmllbGRzLnB1c2godGhpcy5zb3J0aW5nW3Byb3BdID09PSAnYXNjJyA/IChwcm9wKSA6ICgnLScgKyBwcm9wKSk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBJZiBzZXJ2ZXIgc29ydCwganVzdCByZWZyZXNoXG4gICAgZGF0YSA9IGRhdGEuc29ydCh0aGlzLmZpZWxkU29ydGVyKGZpZWxkcykpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuXG4gIGNoYW5nZVNvcnQoc29ydCkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuc29ydGluZy5maW5kSW5kZXgoKGVsLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGVsLm5hbWUgPT09IHNvcnQubmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuc29ydGluZy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGlmIChzb3J0LnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc29ydGluZy5wdXNoKHNvcnQpO1xuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyogPT09IEZpbHRlcmluZyA9PT0gKi9cbiAgYXBwbHlGaWx0ZXIoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLmZpbHRlcigocm93KSA9PiB7XG4gICAgICB2YXIgaW5jbHVkZSA9IHRydWU7XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLmNvbHVtbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIGNvbCA9IHRoaXMuY29sdW1uc1tpXTtcblxuICAgICAgICBpZiAoY29sLmZpbHRlclZhbHVlICE9PSAnJyAmJiByb3dbY29sLmZpZWxkXS50b1N0cmluZygpLmluZGV4T2YoY29sLmZpbHRlclZhbHVlKSA9PT0gLTEpIHtcbiAgICAgICAgICBpbmNsdWRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluY2x1ZGU7XG4gICAgfSk7XG4gIH1cblxuICBnZXRGaWx0ZXJzUXVlcnlTdHJpbmcoKSB7XG4gICAgdmFyIGZpbHRlcnMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gdGhpcy5jb2x1bW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY29sID0gdGhpcy5jb2x1bW5zW2ldO1xuICAgICAgbGV0IGZpbHRlclF1ZXJ5U3RyaW5nID0gY29sLmdldFF1ZXJ5U3RyaW5nKCk7XG4gICAgICBpZiAoZmlsdGVyUXVlcnlTdHJpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmaWx0ZXJzLnB1c2goZmlsdGVyUXVlcnlTdHJpbmcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaWx0ZXJzO1xuICB9XG5cbiAgZ2V0RmlsdGVyc1ZhbHVlcygpIHtcbiAgICBsZXQgZmlsdGVycyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSB0aGlzLmNvbHVtbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBjb2wgPSB0aGlzLmNvbHVtbnNbaV07XG4gICAgICBmaWx0ZXJzID0gZmlsdGVycy5jb25jYXQoY29sLmdldEZpbHRlclZhbHVlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBmaWx0ZXJzO1xuICB9XG5cbiAgdXBkYXRlRmlsdGVycygpIHtcbiAgICBpZiAodGhpcy51cGRhdGVGaWx0ZXJzU2V0VGltZW91dCkge1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnVwZGF0ZUZpbHRlcnNTZXRUaW1lb3V0KTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUZpbHRlcnNTZXRUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5yZWZyZXNoLmJpbmQodGhpcyksIHRoaXMuZmlsdGVyRGVsYXkpO1xuICB9XG5cbiAgLyogPT09IERhdGEgPT09ICovXG4gIHJlZnJlc2goKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBhbnkgc2VydmVyIHNpZGUgc3R1ZmYgd2UgbmVlZCB0byBnZXQgdGhlIGRhdGEgZmlyc3RcbiAgICB0aGlzLmRvbnRXYXRjaEZvckNoYW5nZXMoKTtcblxuICAgIGlmICh0aGlzLnNlcnZlclBhZ2luZyB8fCB0aGlzLnNlcnZlclNvcnRpbmcgfHwgdGhpcy5zZXJ2ZXJGaWx0ZXJpbmcgfHwgIXRoaXMuaW5pdGlhbExvYWQpIHtcbiAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlclNvcnRQYWdlKHRoaXMuY2FjaGUpO1xuICAgIH1cblxuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICBpZiAoIXRoaXMucmVhZClcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gcmVhZCBtZXRob2Qgc3BlY2lmaWVkIGZvciBncmlkJyk7XG5cbiAgICB0aGlzLmluaXRpYWxMb2FkID0gdHJ1ZTtcblxuICAgIC8vIFRPRE86IEltcGxlbWVudCBwcm9ncmVzcyBpbmRpY2F0b3JcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgLy8gVHJ5IHRvIHJlYWQgZnJvbSB0aGUgZGF0YSBhZGFwdGVyXG4gICAgbGV0IHF1ZXJ5VmFsdWVzID0ge307XG4gICAgcXVlcnlWYWx1ZXMuZmlsdGVycyA9IHRoaXMuZ2V0RmlsdGVyc1ZhbHVlcygpO1xuICAgIHF1ZXJ5VmFsdWVzLnBhZ2luZyA9IHtcbiAgICAgIHBhZ2U6IHRoaXMucGFnZU51bWJlcixcbiAgICAgIGNvdW50OiB3aW5kb3cuTnVtYmVyKHRoaXMucGFnZVNpemUsIDEwKVxuICAgIH07XG4gICAgcXVlcnlWYWx1ZXMuc29ydGVycyA9IHRoaXMuc29ydGluZztcblxuICAgIHRoaXMucmVhZChxdWVyeVZhbHVlcykudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAvLyBEYXRhIHNob3VsZCBiZSBpbiB0aGUgcmVzdWx0IHNvIGdyYWIgaXQgYW5kIGFzc2lnbiBpdCB0byB0aGUgZGF0YSBwcm9wZXJ0eVxuICAgICAgdGhpcy5oYW5kbGVSZXN1bHQocmVzdWx0KTtcblxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSwgKHJlc3VsdCkgPT4ge1xuICAgICAgLy8gU29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmcsIG5vdGlmeSB0aGUgY29uc3VtZXJcbiAgICAgIGlmICh0aGlzLm9uUmVhZEVycm9yKVxuICAgICAgICB0aGlzLm9uUmVhZEVycm9yKHJlc3VsdCk7XG5cbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlUmVzdWx0KHJlc3VsdCkge1xuXG4gICAgLy8gVE9ETzogQ2hlY2sgdmFsaWQgc3R1ZmYgd2FzIHJldHVybmVkXG4gICAgdmFyIGRhdGEgPSByZXN1bHQuZGF0YTtcblxuICAgIC8vIElzIHRoZSBkYXRhIGJlaW5nIHBhZ2luYXRlZCBvbiB0aGUgY2xpZW50IHNpZGU/XG4gICAgLy8gVE9ETzogV29yayBvdXQgd2hlbiB3ZSBzaG91bGQgd2UgdXNlIHRoZSBjYWNoZS4uLiBldmVyPyBJZiBpdCdzIGxvY2FsIGRhdGFcbiAgICBpZiAodGhpcy5wYWdlYWJsZSAmJiAhdGhpcy5zZXJ2ZXJQYWdpbmcgJiYgIXRoaXMuc2VydmVyU29ydGluZyAmJiAhdGhpcy5zZXJ2ZXJGaWx0ZXJpbmcpIHtcbiAgICAgIC8vIENhY2hlIHRoZSBkYXRhXG4gICAgICB0aGlzLmNhY2hlID0gcmVzdWx0LmRhdGE7XG4gICAgICB0aGlzLmZpbHRlclNvcnRQYWdlKHRoaXMuY2FjaGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEgPSByZXN1bHQuZGF0YTtcbiAgICAgIHRoaXMuZmlsdGVyU29ydFBhZ2UodGhpcy5kYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvdW50ID0gcmVzdWx0LmNvdW50O1xuXG4gICAgLy8gVXBkYXRlIHRoZSBwYWdlciAtIG1heWJlIHRoZSBncmlkIG9wdGlvbnMgc2hvdWxkIGNvbnRhaW4gYW4gdXBkYXRlIGNhbGxiYWNrIGluc3RlYWQgb2YgcmVmZmluZyB0aGVcbiAgICAvLyBwYWdlciBpbnRvIHRoZSBjdXJyZW50IFZNP1xuICAgIHRoaXMudXBkYXRlUGFnZXIoKTtcbiAgfVxuXG4gIHdhdGNoRm9yQ2hhbmdlcygpIHtcbiAgICB0aGlzLmRvbnRXYXRjaEZvckNoYW5nZXMoKTtcblxuICAgIC8vIEd1YXJkIGFnYWluc3QgZGF0YSByZWZyZXNoIGV2ZW50cyBoaXR0aW5nIGFmdGVyIHRoZSB1c2VyIGRvZXMgYW55dGhpbmcgdGhhdCB1bmxvYWRzIHRoZSBncmlkXG4gICAgaWYgKCF0aGlzLnVuYmluZGluZylcbiAgICAvLyBXZSBjYW4gdXBkYXRlIHRoZSBwYWdlciBhdXRvbWFnaWNhbGx5XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMub2JzZXJ2ZXJMb2NhdG9yXG4gICAgICAgIC5nZXRBcnJheU9ic2VydmVyKHRoaXMuY2FjaGUpXG4gICAgICAgIC5zdWJzY3JpYmUoKHNwbGljZXMpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgfSk7XG4gIH1cblxuICBkb250V2F0Y2hGb3JDaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbilcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uKCk7XG4gIH1cblxuICAvKiA9PT0gU2VsZWN0aW9uID09PSAqL1xuXG4gIHNlbGVjdChpdGVtKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0YWJsZSlcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgfVxuXG4gIC8qID09PSBDaGFuZ2UgaGFuZGxlcnMgPT09ICovXG4gIG5vUm93c01lc3NhZ2VDaGFuZ2VkKCkge1xuICAgIHRoaXMuc2hvd05vUm93c01lc3NhZ2UgPSB0aGlzLm5vUm93c01lc3NhZ2UgIT09ICcnO1xuICB9XG5cbiAgZ3JpZEhlaWdodENoYW5nZWQoKSB7XG5cbiAgICAvLyBUT0RPOiBNYWtlIHRoaXMgYSBvbmUgb2ZmXG4gICAgdmFyIGNvbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQtY29udGFpbmVyJyk7XG5cbiAgICBpZiAodGhpcy5ncmlkSGVpZ2h0ID4gMCkge1xuICAgICAgY29udC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2hlaWdodDonICsgdGhpcy5ncmlkSGVpZ2h0ICsgJ3B4Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIH1cbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=