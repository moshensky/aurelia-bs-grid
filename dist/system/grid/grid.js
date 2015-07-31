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
//# sourceMappingURL=data:application/json;base64,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QyxZQUFZLEVBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztXQUN2Qjs7O2lCQUlLLGdCQUFDLElBQUksRUFBRTtBQUNYLGdCQUFJLElBQUksQ0FBQyxVQUFVLEVBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1dBQzVCOzs7aUJBR21CLGdDQUFHO0FBQ3JCLGdCQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsS0FBSyxFQUFFLENBQUM7V0FDcEQ7OztpQkFFZ0IsNkJBQUc7QUFHbEIsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7O0FBRXpELGdCQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZCLGtCQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUNoRSxNQUFNO0FBQ0wsa0JBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0I7V0FDRjs7O29CQXZkVSxJQUFJO0FBQUosWUFBSSxHQURoQixNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FDOUIsSUFBSSxLQUFKLElBQUk7QUFBSixZQUFJLEdBRmhCLHFCQUFxQixFQUFFLENBRVgsSUFBSSxLQUFKLElBQUk7QUFBSixZQUFJLEdBSGhCLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FHVCxJQUFJLEtBQUosSUFBSTtlQUFKLElBQUk7OztzQkFBSixJQUFJIiwiZmlsZSI6ImdyaWQvZ3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGluamVjdCwgc2tpcENvbnRlbnRQcm9jZXNzaW5nLCBPYnNlcnZlckxvY2F0b3IsIGN1c3RvbUVsZW1lbnQgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0dyaWRDb2x1bW59IGZyb20gJy4vZ3JpZC1jb2x1bW4nO1xuaW1wb3J0IHtDb21waWxlcn0gZnJvbSAnZ29veS9hdXJlbGlhLWNvbXBpbGVyJztcbmltcG9ydCAnLi9hdXJlbGlhLWJzLWdyaWQuY3NzISc7XG5cbkBjdXN0b21FbGVtZW50KCdncmlkJylcbkBza2lwQ29udGVudFByb2Nlc3NpbmcoKVxuQGluamVjdChFbGVtZW50LCBDb21waWxlciwgT2JzZXJ2ZXJMb2NhdG9yKVxuZXhwb3J0IGNsYXNzIEdyaWQge1xuXG4gIC8qID09IFN0eWxpbmcgPT0gKi9cbiAgQGJpbmRhYmxlIGdyaWRIZWlnaHQgPSAwO1xuXG4gIC8qID09IE9wdGlvbnMgPT0gKi9cblxuICAvLyBJbml0aWFsIGxvYWQgZmxhZyAoZm9yIGNsaWVudCBzaWRlKVxuICBAYmluZGFibGUgaW5pdGlhbExvYWQgPSBmYWxzZTtcblxuICAvLyBGaWx0ZXJpbmdcbiAgdXBkYXRlRmlsdGVyc1NldFRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gIEBiaW5kYWJsZSBmaWx0ZXJEZWxheSA9IDI1MDtcbiAgQGJpbmRhYmxlIHNob3dDb2x1bW5GaWx0ZXJzID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBzZXJ2ZXJGaWx0ZXJpbmcgPSBmYWxzZTtcblxuICAvLyBQYWdpbmF0aW9uXG4gIEBiaW5kYWJsZSBzZXJ2ZXJQYWdpbmcgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIHBhZ2VhYmxlID0gdHJ1ZTtcbiAgQGJpbmRhYmxlIHBhZ2VTaXplID0gMTA7XG4gIEBiaW5kYWJsZSBwYWdlID0gMTtcbiAgQGJpbmRhYmxlIHBhZ2VyU2l6ZSA9IDEwO1xuXG4gIEBiaW5kYWJsZSBzaG93Rmlyc3RMYXN0QnV0dG9ucyA9IHRydWU7XG4gIEBiaW5kYWJsZSBzaG93SnVtcEJ1dHRvbnMgPSB0cnVlO1xuXG4gIEBiaW5kYWJsZSBwYWdlU2l6ZXMgPSBbMTAsIDI1LCA1MF07XG5cbiAgZmlyc3RWaXNpYmxlSXRlbSA9IDA7XG4gIGxhc3RWaXNpYmxlSXRlbSA9IDA7XG5cbiAgcGFnZU51bWJlciA9IDE7XG5cblxuICAvLyBTb3J0aW5hdGlvblxuICBAYmluZGFibGUgc2VydmVyU29ydGluZyA9IGZhbHNlO1xuICBAYmluZGFibGUgc29ydGFibGUgPSB0cnVlO1xuICBzb3J0UHJvY2Vzc2luZ09yZGVyID0gW107IC8vIFJlcHJlc2VudHMgd2hpY2ggb3JkZXIgdG8gYXBwbHkgc29ydHMgdG8gZWFjaCBjb2x1bW5cbiAgc29ydGluZyA9IHt9O1xuXG4gIC8vIENvbHVtbiBkZWZzXG4gIEBiaW5kYWJsZSBhdXRvR2VuZXJhdGVDb2x1bW5zO1xuICBjb2x1bW5IZWFkZXJzID0gW107XG4gIGNvbHVtbnMgPSBbXTtcblxuICAvLyBTZWxlY3Rpb25cbiAgQGJpbmRhYmxlIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIHNlbGVjdGVkSXRlbSA9IG51bGw7XG5cbiAgLy8gTWlzY1xuICBAYmluZGFibGUgbm9Sb3dzTWVzc2FnZSA9ICcnO1xuXG4gIC8vIERhdGEgLi4uLlxuICBAYmluZGFibGUgYXV0b0xvYWQgPSB0cnVlO1xuICBsb2FkaW5nID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBsb2FkaW5nTWVzc2FnZSA9ICdMb2FkaW5nLi4uJztcblxuICAvLyBSZWFkXG4gIEBiaW5kYWJsZSByZWFkID0gbnVsbDtcbiAgQGJpbmRhYmxlIG9uUmVhZEVycm9yID0gbnVsbDtcblxuICAvLyBUcmFja2luZ1xuICBjYWNoZSA9IFtdO1xuICBkYXRhID0gW107XG4gIGNvdW50ID0gMDtcblxuICAvLyBTdWJzY3JpcHRpb24gaGFuZGxpbmdcbiAgdW5iaW5kaW5nID0gZmFsc2U7XG5cbiAgLy8gVmlzdWFsXG4gIC8vIFRPRE86IGNhbGMgc2Nyb2xsYmFyIHdpZHRoIHVzaW5nIGJyb3dzZXJcbiAgc2Nyb2xsQmFyV2lkdGggPSAxNjtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb21waWxlciwgb2JzZXJ2ZXJMb2NhdG9yKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmNvbXBpbGVyID0gY29tcGlsZXI7XG4gICAgdGhpcy5vYnNlcnZlckxvY2F0b3IgPSBvYnNlcnZlckxvY2F0b3I7XG5cbiAgICAvLyBHcmFiIHVzZXIgdGVtcGxhdGUgZnJvbSBlbGVtZW50XG4gICAgdGhpcy5wcm9jZXNzVXNlclRlbXBsYXRlKCk7XG4gIH1cblxuICBwcm9jZXNzVXNlclRlbXBsYXRlKCkge1xuICAgIC8vIEdldCBhbnkgY29sIHRhZ3MgZnJvbSB0aGUgY29udGVudFxuICAgIHZhciByb3dFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2dyaWQtcm93Jyk7XG4gICAgdmFyIGNvbHVtbkVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocm93RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdncmlkLWNvbCcpKTtcblxuICAgIGNvbHVtbkVsZW1lbnRzLmZvckVhY2goYyA9PiB7XG4gICAgICB2YXIgYXR0cnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjLmF0dHJpYnV0ZXMpO1xuICAgICAgdmFyIGNvbEhhc2ggPSBhdHRycy5yZWR1Y2UoKG1hcCwgYXR0cmlidXRlKSA9PiB7XG4gICAgICAgIG1hcFthdHRyaWJ1dGUubmFtZV0gPSBhdHRyaWJ1dGUudmFsdWU7XG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIHZhciBjb2wgPSBuZXcgR3JpZENvbHVtbihjb2xIYXNoLCBjLmlubmVySFRNTCwgdGhpcyk7XG5cbiAgICAgIHRoaXMuYWRkQ29sdW1uKGNvbCk7XG4gICAgfSk7XG5cbiAgICAvLyBQdWxsIGFueSByb3cgYXR0cnMgaW50byBhIGhhc2ggb2JqZWN0XG4gICAgdGhpcy5yb3dBdHRycyA9IHt9O1xuICAgIHZhciBhdHRycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHJvd0VsZW1lbnQuYXR0cmlidXRlcyk7XG4gICAgYXR0cnMuZm9yRWFjaChhID0+IHRoaXMucm93QXR0cnNbYS5uYW1lXSA9IGEudmFsdWUpO1xuXG4gICAgLy8gUmVtb3ZlIGFsbCBjaGlsZHJlblxuICAgIHdoaWxlICh0aGlzLmVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAwKVxuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudC5jaGlsZE5vZGVzWzBdKTtcbiAgfVxuXG5cbiAgLyogPT09IExpZmVjeWNsZSA9PT0gKi9cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5ncmlkSGVpZ2h0Q2hhbmdlZCgpO1xuXG4gICAgaWYgKHRoaXMuYXV0b0xvYWQgPT09IHRydWUpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIGJpbmQoZXhlY3V0aW9uQ29udGV4dCkge1xuXG4gICAgdGhpc1snJHBhcmVudCddID0gZXhlY3V0aW9uQ29udGV4dDtcblxuICAgIC8vIEVuc3VyZSB0aGUgZ3JpZCBzZXR0aW5nc1xuICAgIC8vIElmIHdlIGNhbiBwYWdlIG9uIHRoZSBzZXJ2ZXIgYW5kIHdlIGNhbid0IHNlcnZlciBzb3J0LCB3ZSBjYW4ndCBzb3J0IGxvY2FsbHlcbiAgICBpZiAodGhpcy5zZXJ2ZXJQYWdpbmcgJiYgIXRoaXMuc2VydmVyU29ydGluZykge1xuICAgICAgdGhpcy5zb3J0YWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEJ1aWxkIHRoZSByb3dzIHRoZW4gZHluYW1pY2FsbHkgY29tcGlsZSB0aGUgdGFibGVcbiAgICAvLyBHZXQgdGhlIHRhYmxlLi4uXG4gICAgdmFyIHRhYmxlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlPnRib2R5Jyk7XG4gICAgdmFyIHJvd1RlbXBsYXRlID0gdGFibGUucXVlcnlTZWxlY3RvcigndHInKTtcblxuICAgIC8vIENyZWF0ZSBhIGZyYWdtZW50IHdlIHdpbGwgbWFuaXB1bGF0ZSB0aGUgRE9NIGluXG4gICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgLy8gTW92ZSB0aGUgcm93IHRlbXBsYXRlIHRvIHRoZSBmcmFnbWVudFxuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHJvd1RlbXBsYXRlKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgcmVwZWF0ZXJcbiAgICByb3dUZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3JlcGVhdC5mb3InLCAnJGl0ZW0gb2YgZGF0YScpO1xuICAgIHJvd1RlbXBsYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnJHsgJGl0ZW0gPT09ICRwYXJlbnQuc2VsZWN0ZWRJdGVtID8gXCJpbmZvXCIgOiBcIlwiIH0nKTtcblxuICAgIC8vIENvcHkgYW55IHVzZXIgc3BlY2lmaWVkIHJvdyBhdHRyaWJ1dGVzIHRvIHRoZSByb3cgdGVtcGxhdGVcbiAgICBmb3IgKHZhciBwcm9wIGluIHRoaXMucm93QXR0cnMpIHtcbiAgICAgIGlmICh0aGlzLnJvd0F0dHJzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIHJvd1RlbXBsYXRlLnNldEF0dHJpYnV0ZShwcm9wLCB0aGlzLnJvd0F0dHJzW3Byb3BdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgdGhlIGNvbHVtbnNcbiAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjID0+IHtcbiAgICAgIHZhciB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cbiAgICAgIC8vIFNldCBhdHRyaWJ1dGVzXG4gICAgICBmb3IgKHZhciBwcm9wIGluIGMpIHtcbiAgICAgICAgaWYgKGMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcblxuICAgICAgICAgIGlmIChwcm9wID09ICd0ZW1wbGF0ZScpXG4gICAgICAgICAgICB0ZC5pbm5lckhUTUwgPSBjW3Byb3BdO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRkLnNldEF0dHJpYnV0ZShwcm9wLCBjW3Byb3BdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByb3dUZW1wbGF0ZS5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgfSk7XG5cbiAgICAvLyBDb21waWxlXG4gICAgdGhpcy5jb21waWxlci5jb21waWxlKHRhYmxlLCB0aGlzLCB1bmRlZmluZWQsIGZyYWdtZW50KTtcblxuICAgIC8vIEhBQ0s6IHdoeSBpcyB0aGUgY2hhbmdlIGhhbmRsZXIgbm90IGZpcmluZyBmb3Igbm9Sb3dzTWVzc2FnZT9cbiAgICB0aGlzLm5vUm93c01lc3NhZ2VDaGFuZ2VkKCk7XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgdGhpcy51bmJpbmRpbmcgPSB0cnVlO1xuICAgIHRoaXMuZG9udFdhdGNoRm9yQ2hhbmdlcygpO1xuICB9XG5cbiAgLyogPT09IENvbHVtbiBoYW5kbGluZyA9PT0gKi9cbiAgYWRkQ29sdW1uKGNvbCkge1xuXG4gICAgLy8gTm8tc29ydCBpZiBncmlkIGlzIG5vdCBzb3J0YWJsZVxuICAgIGlmICghdGhpcy5zb3J0YWJsZSlcbiAgICAgIGNvbC5ub3NvcnQgPSB0cnVlO1xuXG4gICAgdGhpcy5jb2x1bW5zLnB1c2goY29sKTtcbiAgfVxuXG4gIC8qID09PSBQYWdpbmcgPT09ICovXG4gIHBhZ2VDaGFuZ2VkKHBhZ2UsIG9sZFZhbHVlKSB7XG4gICAgaWYgKHBhZ2UgPT09IG9sZFZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wYWdlTnVtYmVyID0gTnVtYmVyKHBhZ2UpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgcGFnZVNpemVDaGFuZ2VkKCkge1xuICAgIHRoaXMucGFnZUNoYW5nZWQoMSk7XG4gICAgdGhpcy51cGRhdGVQYWdlcigpO1xuICB9XG5cbiAgZmlsdGVyU29ydFBhZ2UoZGF0YSkge1xuICAgIC8vIEFwcGxpZXMgZmlsdGVyLCBzb3J0IHRoZW4gcGFnZVxuICAgIC8vIDEuIEZpcnN0IGZpbHRlciB0aGUgZGF0YSBkb3duIHRvIHRoZSBzZXQgd2Ugd2FudCwgaWYgd2UgYXJlIHVzaW5nIGxvY2FsIGRhdGFcbiAgICB2YXIgdGVtcERhdGEgPSBkYXRhO1xuXG4gICAgaWYgKHRoaXMuc2hvd0NvbHVtbkZpbHRlcnMgJiYgIXRoaXMuc2VydmVyRmlsdGVyaW5nKVxuICAgICAgdGVtcERhdGEgPSB0aGlzLmFwcGx5RmlsdGVyKHRlbXBEYXRhKTtcblxuICAgIC8vIENvdW50IHRoZSBkYXRhIG5vdyBiZWZvcmUgdGhlIHNvcnQvcGFnZVxuICAgIHRoaXMuY291bnQgPSB0ZW1wRGF0YS5sZW5ndGg7XG5cbiAgICAvLyAyLiBOb3cgc29ydCB0aGUgZGF0YVxuICAgIGlmICh0aGlzLnNvcnRhYmxlICYmICF0aGlzLnNlcnZlclNvcnRpbmcpXG4gICAgICB0ZW1wRGF0YSA9IHRoaXMuYXBwbHlTb3J0KHRlbXBEYXRhKTtcblxuICAgIC8vIDMuIE5vdyBhcHBseSBwYWdpbmdcbiAgICBpZiAodGhpcy5wYWdlYWJsZSAmJiAhdGhpcy5zZXJ2ZXJQYWdpbmcpXG4gICAgICB0ZW1wRGF0YSA9IHRoaXMuYXBwbHlQYWdlKHRlbXBEYXRhKTtcblxuICAgIHRoaXMuZGF0YSA9IHRlbXBEYXRhO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlcigpO1xuXG4gICAgdGhpcy53YXRjaEZvckNoYW5nZXMoKTtcbiAgfVxuXG4gIGFwcGx5UGFnZShkYXRhKSB7XG4gICAgdmFyIHN0YXJ0ID0gKE51bWJlcih0aGlzLnBhZ2VOdW1iZXIpIC0gMSkgKiBOdW1iZXIodGhpcy5wYWdlU2l6ZSk7XG4gICAgZGF0YSA9IGRhdGEuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgTnVtYmVyKHRoaXMucGFnZVNpemUpKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cblxuICB1cGRhdGVQYWdlcigpIHtcbiAgICBpZiAodGhpcy5wYWdlcilcbiAgICAgIHRoaXMucGFnZXIudXBkYXRlKHRoaXMucGFnZU51bWJlciwgTnVtYmVyKHRoaXMucGFnZVNpemUpLCBOdW1iZXIodGhpcy5jb3VudCkpO1xuXG4gICAgdGhpcy5maXJzdFZpc2libGVJdGVtID0gKHRoaXMucGFnZU51bWJlciAtIDEpICogTnVtYmVyKHRoaXMucGFnZVNpemUpICsgMTtcbiAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbSA9ICh0aGlzLnBhZ2VOdW1iZXIpICogTnVtYmVyKHRoaXMucGFnZVNpemUpO1xuICB9XG5cbiAgLyogPT09IFNvcnRpbmcgPT09ICovXG4gIGZpZWxkU29ydGVyKGZpZWxkcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZpZWxkc1xuICAgICAgICAubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgdmFyIGRpciA9IDE7XG4gICAgICAgICAgaWYgKG9bMF0gPT09ICctJykge1xuICAgICAgICAgICAgZGlyID0gLTE7XG4gICAgICAgICAgICBvID0gby5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhW29dID4gYltvXSkgcmV0dXJuIGRpcjtcbiAgICAgICAgICBpZiAoYVtvXSA8IGJbb10pIHJldHVybiAtKGRpcik7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gZmlyc3ROb25aZXJvVmFsdWUocCwgbikge1xuICAgICAgICAgIHJldHVybiBwID8gcCA6IG47XG4gICAgICAgIH0sIDApO1xuICAgIH07XG4gIH1cblxuICBwYWdlU2l6ZXNDaGFuZ2VkKCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgc29ydENoYW5nZWQoZmllbGQpIHtcblxuICAgIC8vIERldGVybWluZSBuZXcgc29ydFxuICAgIHZhciBuZXdTb3J0ID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gRmlndXJlIG91dCB3aGljaCB3YXkgdGhpcyBmaWVsZCBzaG91bGQgYmUgc29ydGluZ1xuICAgIHN3aXRjaCAodGhpcy5zb3J0aW5nW2ZpZWxkXSkge1xuICAgICAgY2FzZSAnYXNjJzpcbiAgICAgICAgbmV3U29ydCA9ICdkZXNjJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZXNjJzpcbiAgICAgICAgbmV3U29ydCA9ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG5ld1NvcnQgPSAnYXNjJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5zb3J0aW5nW2ZpZWxkXSA9IG5ld1NvcnQ7XG5cbiAgICAvLyBJZiB0aGUgc29ydCBpcyBwcmVzZW50IGluIHRoZSBzb3J0IHN0YWNrLCBzbGljZSBpdCB0byB0aGUgYmFjayBvZiB0aGUgc3RhY2ssIG90aGVyd2lzZSBqdXN0IGFkZCBpdFxuICAgIHZhciBwb3MgPSB0aGlzLnNvcnRQcm9jZXNzaW5nT3JkZXIuaW5kZXhPZihmaWVsZCk7XG5cbiAgICBpZiAocG9zID4gLTEpXG4gICAgICB0aGlzLnNvcnRQcm9jZXNzaW5nT3JkZXIuc3BsaWNlKHBvcywgMSk7XG5cbiAgICB0aGlzLnNvcnRQcm9jZXNzaW5nT3JkZXIucHVzaChmaWVsZCk7XG5cbiAgICAvLyBBcHBseSB0aGUgbmV3IHNvcnRcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIGFwcGx5U29ydChkYXRhKSB7XG5cbiAgICAvLyBGb3JtYXQgdGhlIHNvcnQgZmllbGRzXG4gICAgdmFyIGZpZWxkcyA9IFtdO1xuXG4gICAgLy8gR2V0IHRoZSBmaWVsZHMgaW4gdGhlICdzb3J0aW5nT1JkZXInXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNvcnRQcm9jZXNzaW5nT3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3J0ID0gdGhpcy5zb3J0UHJvY2Vzc2luZ09yZGVyW2ldO1xuXG4gICAgICBmb3IgKHZhciBwcm9wIGluIHRoaXMuc29ydGluZykge1xuICAgICAgICBpZiAoc29ydCA9PSBwcm9wICYmIHRoaXMuc29ydGluZ1twcm9wXSAhPT0gJycpXG4gICAgICAgICAgZmllbGRzLnB1c2godGhpcy5zb3J0aW5nW3Byb3BdID09PSAnYXNjJyA/IChwcm9wKSA6ICgnLScgKyBwcm9wKSk7XG4gICAgICB9XG4gICAgfVxuXG5cblxuICAgIC8vIElmIHNlcnZlciBzb3J0LCBqdXN0IHJlZnJlc2hcbiAgICBkYXRhID0gZGF0YS5zb3J0KHRoaXMuZmllbGRTb3J0ZXIoZmllbGRzKSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qID09PSBGaWx0ZXJpbmcgPT09ICovXG4gIGFwcGx5RmlsdGVyKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YS5maWx0ZXIoKHJvdykgPT4ge1xuICAgICAgdmFyIGluY2x1ZGUgPSB0cnVlO1xuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy5jb2x1bW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBjb2wgPSB0aGlzLmNvbHVtbnNbaV07XG5cbiAgICAgICAgaWYgKGNvbC5maWx0ZXJWYWx1ZSAhPT0gJycgJiYgcm93W2NvbC5maWVsZF0udG9TdHJpbmcoKS5pbmRleE9mKGNvbC5maWx0ZXJWYWx1ZSkgPT09IC0xKSB7XG4gICAgICAgICAgaW5jbHVkZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbmNsdWRlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsdGVyQ29sdW1ucygpIHtcbiAgICB2YXIgY29scyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IHRoaXMuY29sdW1ucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGNvbCA9IHRoaXMuY29sdW1uc1tpXTtcblxuICAgICAgaWYgKGNvbC5oYXNGaWx0ZXJWYWx1ZSgpKSB7XG4gICAgICAgIGNvbHNbY29sLmZpZWxkXSA9IGNvbC5nZXRGaWx0ZXJWYWx1ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb2xzO1xuICB9XG5cbiAgdXBkYXRlRmlsdGVycygpIHtcbiAgICBpZiAodGhpcy51cGRhdGVGaWx0ZXJzU2V0VGltZW91dCkge1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnVwZGF0ZUZpbHRlcnNTZXRUaW1lb3V0KTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUZpbHRlcnNTZXRUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5yZWZyZXNoLmJpbmQodGhpcyksIHRoaXMuZmlsdGVyRGVsYXkpO1xuICB9XG5cbiAgLyogPT09IERhdGEgPT09ICovXG4gIHJlZnJlc2goKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBhbnkgc2VydmVyIHNpZGUgc3R1ZmYgd2UgbmVlZCB0byBnZXQgdGhlIGRhdGEgZmlyc3RcbiAgICB0aGlzLmRvbnRXYXRjaEZvckNoYW5nZXMoKTtcblxuICAgIGlmICh0aGlzLnNlcnZlclBhZ2luZyB8fCB0aGlzLnNlcnZlclNvcnRpbmcgfHwgdGhpcy5zZXJ2ZXJGaWx0ZXJpbmcgfHwgIXRoaXMuaW5pdGlhbExvYWQpXG4gICAgICB0aGlzLmdldERhdGEoKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmZpbHRlclNvcnRQYWdlKHRoaXMuY2FjaGUpO1xuXG4gIH1cblxuICBnZXREYXRhKCkge1xuICAgIGlmICghdGhpcy5yZWFkKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyByZWFkIG1ldGhvZCBzcGVjaWZpZWQgZm9yIGdyaWQnKTtcblxuICAgIHRoaXMuaW5pdGlhbExvYWQgPSB0cnVlO1xuXG4gICAgLy8gVE9ETzogSW1wbGVtZW50IHByb2dyZXNzIGluZGljYXRvclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAvLyBUcnkgdG8gcmVhZCBmcm9tIHRoZSBkYXRhIGFkYXB0ZXJcbiAgICB0aGlzLnJlYWQoe1xuICAgICAgc29ydGluZzogdGhpcy5zb3J0aW5nLFxuICAgICAgcGFnaW5nOiB7cGFnZTogdGhpcy5wYWdlTnVtYmVyLCBzaXplOiBOdW1iZXIodGhpcy5wYWdlU2l6ZSl9LFxuICAgICAgZmlsdGVyaW5nOiB0aGlzLmdldEZpbHRlckNvbHVtbnMoKVxuICAgIH0pXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG5cbiAgICAgICAgLy8gRGF0YSBzaG91bGQgYmUgaW4gdGhlIHJlc3VsdCBzbyBncmFiIGl0IGFuZCBhc3NpZ24gaXQgdG8gdGhlIGRhdGEgcHJvcGVydHlcbiAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHQocmVzdWx0KTtcblxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0sIChyZXN1bHQpID0+IHtcbiAgICAgICAgLy8gU29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmcsIG5vdGlmeSB0aGUgY29uc3VtZXJcbiAgICAgICAgaWYgKHRoaXMub25SZWFkRXJyb3IpXG4gICAgICAgICAgdGhpcy5vblJlYWRFcnJvcihyZXN1bHQpO1xuXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBoYW5kbGVSZXN1bHQocmVzdWx0KSB7XG5cbiAgICAvLyBUT0RPOiBDaGVjayB2YWxpZCBzdHVmZiB3YXMgcmV0dXJuZWRcbiAgICB2YXIgZGF0YSA9IHJlc3VsdC5kYXRhO1xuXG4gICAgLy8gSXMgdGhlIGRhdGEgYmVpbmcgcGFnaW5hdGVkIG9uIHRoZSBjbGllbnQgc2lkZT9cbiAgICAvLyBUT0RPOiBXb3JrIG91dCB3aGVuIHdlIHNob3VsZCB3ZSB1c2UgdGhlIGNhY2hlLi4uIGV2ZXI/IElmIGl0J3MgbG9jYWwgZGF0YVxuICAgIGlmICh0aGlzLnBhZ2VhYmxlICYmICF0aGlzLnNlcnZlclBhZ2luZyAmJiAhdGhpcy5zZXJ2ZXJTb3J0aW5nICYmICF0aGlzLnNlcnZlckZpbHRlcmluZykge1xuICAgICAgLy8gQ2FjaGUgdGhlIGRhdGFcbiAgICAgIHRoaXMuY2FjaGUgPSByZXN1bHQuZGF0YTtcbiAgICAgIHRoaXMuZmlsdGVyU29ydFBhZ2UodGhpcy5jYWNoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YSA9IHJlc3VsdC5kYXRhO1xuICAgICAgdGhpcy5maWx0ZXJTb3J0UGFnZSh0aGlzLmRhdGEpO1xuICAgIH1cblxuICAgIHRoaXMuY291bnQgPSByZXN1bHQuY291bnQ7XG5cbiAgICAvLyBVcGRhdGUgdGhlIHBhZ2VyIC0gbWF5YmUgdGhlIGdyaWQgb3B0aW9ucyBzaG91bGQgY29udGFpbiBhbiB1cGRhdGUgY2FsbGJhY2sgaW5zdGVhZCBvZiByZWZmaW5nIHRoZVxuICAgIC8vIHBhZ2VyIGludG8gdGhlIGN1cnJlbnQgVk0/XG4gICAgdGhpcy51cGRhdGVQYWdlcigpO1xuICB9XG5cbiAgd2F0Y2hGb3JDaGFuZ2VzKCkge1xuICAgIHRoaXMuZG9udFdhdGNoRm9yQ2hhbmdlcygpO1xuXG4gICAgLy8gR3VhcmQgYWdhaW5zdCBkYXRhIHJlZnJlc2ggZXZlbnRzIGhpdHRpbmcgYWZ0ZXIgdGhlIHVzZXIgZG9lcyBhbnl0aGluZyB0aGF0IHVubG9hZHMgdGhlIGdyaWRcbiAgICBpZiAoIXRoaXMudW5iaW5kaW5nKVxuICAgIC8vIFdlIGNhbiB1cGRhdGUgdGhlIHBhZ2VyIGF1dG9tYWdpY2FsbHlcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5vYnNlcnZlckxvY2F0b3JcbiAgICAgICAgLmdldEFycmF5T2JzZXJ2ZXIodGhpcy5jYWNoZSlcbiAgICAgICAgLnN1YnNjcmliZSgoc3BsaWNlcykgPT4ge1xuICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIGRvbnRXYXRjaEZvckNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24oKTtcbiAgfVxuXG4gIC8qID09PSBTZWxlY3Rpb24gPT09ICovXG5cbiAgc2VsZWN0KGl0ZW0pIHtcbiAgICBpZiAodGhpcy5zZWxlY3RhYmxlKVxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICB9XG5cbiAgLyogPT09IENoYW5nZSBoYW5kbGVycyA9PT0gKi9cbiAgbm9Sb3dzTWVzc2FnZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5zaG93Tm9Sb3dzTWVzc2FnZSA9IHRoaXMubm9Sb3dzTWVzc2FnZSAhPT0gJyc7XG4gIH1cblxuICBncmlkSGVpZ2h0Q2hhbmdlZCgpIHtcblxuICAgIC8vIFRPRE86IE1ha2UgdGhpcyBhIG9uZSBvZmZcbiAgICB2YXIgY29udCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1jb250YWluZXInKTtcblxuICAgIGlmICh0aGlzLmdyaWRIZWlnaHQgPiAwKSB7XG4gICAgICBjb250LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnaGVpZ2h0OicgKyB0aGlzLmdyaWRIZWlnaHQgKyAncHgnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgfVxuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==