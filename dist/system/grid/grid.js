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
            this.refresh();
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
//# sourceMappingURL=data:application/json;base64,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OztpQkFFZ0IsNkJBQUc7QUFHbEIsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7O0FBRXpELGdCQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZCLGtCQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUNoRSxNQUFNO0FBQ0wsa0JBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0I7V0FDRjs7O29CQXBkVSxJQUFJO0FBQUosWUFBSSxHQURoQixNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FDOUIsSUFBSSxLQUFKLElBQUk7QUFBSixZQUFJLEdBRmhCLHFCQUFxQixFQUFFLENBRVgsSUFBSSxLQUFKLElBQUk7QUFBSixZQUFJLEdBSGhCLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FHVCxJQUFJLEtBQUosSUFBSTtlQUFKLElBQUk7OztzQkFBSixJQUFJIiwiZmlsZSI6ImdyaWQvZ3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGluamVjdCwgc2tpcENvbnRlbnRQcm9jZXNzaW5nLCBPYnNlcnZlckxvY2F0b3IsIGN1c3RvbUVsZW1lbnQgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0dyaWRDb2x1bW59IGZyb20gJy4vZ3JpZC1jb2x1bW4nO1xuaW1wb3J0IHtDb21waWxlcn0gZnJvbSAnZ29veS9hdXJlbGlhLWNvbXBpbGVyJztcbmltcG9ydCAnLi9hdXJlbGlhLWJzLWdyaWQuY3NzISc7XG5cbkBjdXN0b21FbGVtZW50KCdncmlkJylcbkBza2lwQ29udGVudFByb2Nlc3NpbmcoKVxuQGluamVjdChFbGVtZW50LCBDb21waWxlciwgT2JzZXJ2ZXJMb2NhdG9yKVxuZXhwb3J0IGNsYXNzIEdyaWQge1xuXG4gIC8qID09IFN0eWxpbmcgPT0gKi9cbiAgQGJpbmRhYmxlIGdyaWRIZWlnaHQgPSAwO1xuXG4gIC8qID09IE9wdGlvbnMgPT0gKi9cblxuICAvLyBJbml0aWFsIGxvYWQgZmxhZyAoZm9yIGNsaWVudCBzaWRlKVxuICBAYmluZGFibGUgaW5pdGlhbExvYWQgPSBmYWxzZTtcblxuICAvLyBGaWx0ZXJpbmdcbiAgQGJpbmRhYmxlIHNob3dDb2x1bW5GaWx0ZXJzID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBzZXJ2ZXJGaWx0ZXJpbmcgPSBmYWxzZTtcblxuICAvLyBQYWdpbmF0aW9uXG4gIEBiaW5kYWJsZSBzZXJ2ZXJQYWdpbmcgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIHBhZ2VhYmxlID0gdHJ1ZTtcbiAgQGJpbmRhYmxlIHBhZ2VTaXplID0gMTA7XG4gIEBiaW5kYWJsZSBwYWdlID0gMTtcbiAgQGJpbmRhYmxlIHBhZ2VyU2l6ZSA9IDEwO1xuXG4gIEBiaW5kYWJsZSBzaG93Rmlyc3RMYXN0QnV0dG9ucyA9IHRydWU7XG4gIEBiaW5kYWJsZSBzaG93SnVtcEJ1dHRvbnMgPSB0cnVlO1xuXG4gIEBiaW5kYWJsZSBwYWdlU2l6ZXMgPSBbMTAsIDI1LCA1MF07XG5cbiAgZmlyc3RWaXNpYmxlSXRlbSA9IDA7XG4gIGxhc3RWaXNpYmxlSXRlbSA9IDA7XG5cbiAgcGFnZU51bWJlciA9IDE7XG5cblxuICAvLyBTb3J0aW5hdGlvblxuICBAYmluZGFibGUgc2VydmVyU29ydGluZyA9IGZhbHNlO1xuICBAYmluZGFibGUgc29ydGFibGUgPSB0cnVlO1xuICBzb3J0UHJvY2Vzc2luZ09yZGVyID0gW107IC8vIFJlcHJlc2VudHMgd2hpY2ggb3JkZXIgdG8gYXBwbHkgc29ydHMgdG8gZWFjaCBjb2x1bW5cbiAgc29ydGluZyA9IHt9O1xuXG4gIC8vIEJ1cm5pbmF0aW9uP1xuICBUcm9nZG9yID0gdHJ1ZTtcblxuICAvLyBDb2x1bW4gZGVmc1xuICBAYmluZGFibGUgYXV0b0dlbmVyYXRlQ29sdW1ucztcbiAgY29sdW1uSGVhZGVycyA9IFtdO1xuICBjb2x1bW5zID0gW107XG5cbiAgLy8gU2VsZWN0aW9uXG4gIEBiaW5kYWJsZSBzZWxlY3RhYmxlID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBzZWxlY3RlZEl0ZW0gPSBudWxsO1xuXG4gIC8vIE1pc2NcbiAgQGJpbmRhYmxlIG5vUm93c01lc3NhZ2UgPSAnJztcblxuICAvLyBEYXRhIC4uLi5cbiAgQGJpbmRhYmxlIGF1dG9Mb2FkID0gdHJ1ZTtcbiAgbG9hZGluZyA9IGZhbHNlO1xuICBAYmluZGFibGUgbG9hZGluZ01lc3NhZ2UgPSAnTG9hZGluZy4uLic7XG5cbiAgLy8gUmVhZFxuICBAYmluZGFibGUgcmVhZCA9IG51bGw7XG4gIEBiaW5kYWJsZSBvblJlYWRFcnJvciA9IG51bGw7XG5cbiAgLy8gVHJhY2tpbmdcbiAgY2FjaGUgPSBbXTtcbiAgZGF0YSA9IFtdO1xuICBjb3VudCA9IDA7XG5cbiAgLy8gU3Vic2NyaXB0aW9uIGhhbmRsaW5nXG4gIHVuYmluZGluZyA9IGZhbHNlO1xuXG4gIC8vIFZpc3VhbFxuICAvLyBUT0RPOiBjYWxjIHNjcm9sbGJhciB3aWR0aCB1c2luZyBicm93c2VyXG4gIHNjcm9sbEJhcldpZHRoID0gMTY7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29tcGlsZXIsIG9ic2VydmVyTG9jYXRvcikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jb21waWxlciA9IGNvbXBpbGVyO1xuICAgIHRoaXMub2JzZXJ2ZXJMb2NhdG9yID0gb2JzZXJ2ZXJMb2NhdG9yO1xuXG4gICAgLy8gR3JhYiB1c2VyIHRlbXBsYXRlIGZyb20gZWxlbWVudFxuICAgIHRoaXMucHJvY2Vzc1VzZXJUZW1wbGF0ZSgpO1xuICB9XG5cbiAgcHJvY2Vzc1VzZXJUZW1wbGF0ZSgpIHtcblxuICAgIC8vIEdldCBhbnkgY29sIHRhZ3MgZnJvbSB0aGUgY29udGVudFxuICAgIHZhciByb3dFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2dyaWQtcm93Jyk7XG4gICAgdmFyIGNvbHVtbkVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocm93RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdncmlkLWNvbCcpKTtcblxuICAgIGNvbHVtbkVsZW1lbnRzLmZvckVhY2goYyA9PiB7XG4gICAgICB2YXIgYXR0cnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjLmF0dHJpYnV0ZXMpO1xuICAgICAgdmFyIGNvbEhhc2ggPSBhdHRycy5yZWR1Y2UoKG1hcCwgYXR0cmlidXRlKSA9PiB7XG4gICAgICAgIG1hcFthdHRyaWJ1dGUubmFtZV0gPSBhdHRyaWJ1dGUudmFsdWU7XG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIHZhciBjb2wgPSBuZXcgR3JpZENvbHVtbihjb2xIYXNoLCBjLmlubmVySFRNTCwgdGhpcyk7XG5cbiAgICAgIHRoaXMuYWRkQ29sdW1uKGNvbCk7XG4gICAgfSk7XG5cbiAgICAvLyBQdWxsIGFueSByb3cgYXR0cnMgaW50byBhIGhhc2ggb2JqZWN0XG4gICAgdGhpcy5yb3dBdHRycyA9IHt9O1xuICAgIHZhciBhdHRycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHJvd0VsZW1lbnQuYXR0cmlidXRlcyk7XG4gICAgYXR0cnMuZm9yRWFjaChhID0+IHRoaXMucm93QXR0cnNbYS5uYW1lXSA9IGEudmFsdWUpO1xuXG4gICAgLy8gUmVtb3ZlIGFsbCBjaGlsZHJlblxuICAgIHdoaWxlICh0aGlzLmVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAwKVxuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudC5jaGlsZE5vZGVzWzBdKTtcbiAgfVxuXG4gIC8qID09PSBMaWZlY3ljbGUgPT09ICovXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMuZ3JpZEhlaWdodENoYW5nZWQoKTtcblxuICAgIGlmICh0aGlzLmF1dG9Mb2FkID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gIH1cblxuICBiaW5kKGV4ZWN1dGlvbkNvbnRleHQpIHtcblxuICAgIHRoaXNbJyRwYXJlbnQnXSA9IGV4ZWN1dGlvbkNvbnRleHQ7XG5cbiAgICAvLyBFbnN1cmUgdGhlIGdyaWQgc2V0dGluZ3NcbiAgICAvLyBJZiB3ZSBjYW4gcGFnZSBvbiB0aGUgc2VydmVyIGFuZCB3ZSBjYW4ndCBzZXJ2ZXIgc29ydCwgd2UgY2FuJ3Qgc29ydCBsb2NhbGx5XG4gICAgaWYgKHRoaXMuc2VydmVyUGFnaW5nICYmICF0aGlzLnNlcnZlclNvcnRpbmcpIHtcbiAgICAgIHRoaXMuc29ydGFibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBCdWlsZCB0aGUgcm93cyB0aGVuIGR5bmFtaWNhbGx5IGNvbXBpbGUgdGhlIHRhYmxlXG4gICAgLy8gR2V0IHRoZSB0YWJsZS4uLlxuICAgIHZhciB0YWJsZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZT50Ym9keScpO1xuICAgIHZhciByb3dUZW1wbGF0ZSA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ3RyJyk7XG5cbiAgICAvLyBDcmVhdGUgYSBmcmFnbWVudCB3ZSB3aWxsIG1hbmlwdWxhdGUgdGhlIERPTSBpblxuICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIC8vIE1vdmUgdGhlIHJvdyB0ZW1wbGF0ZSB0byB0aGUgZnJhZ21lbnRcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChyb3dUZW1wbGF0ZSk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHJlcGVhdGVyXG4gICAgcm93VGVtcGxhdGUuc2V0QXR0cmlidXRlKCdyZXBlYXQuZm9yJywgJyRpdGVtIG9mIGRhdGEnKTtcbiAgICByb3dUZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJyR7ICRpdGVtID09PSAkcGFyZW50LnNlbGVjdGVkSXRlbSA/IFwiaW5mb1wiIDogXCJcIiB9Jyk7XG5cbiAgICAvLyBDb3B5IGFueSB1c2VyIHNwZWNpZmllZCByb3cgYXR0cmlidXRlcyB0byB0aGUgcm93IHRlbXBsYXRlXG4gICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLnJvd0F0dHJzKSB7XG4gICAgICBpZiAodGhpcy5yb3dBdHRycy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICByb3dUZW1wbGF0ZS5zZXRBdHRyaWJ1dGUocHJvcCwgdGhpcy5yb3dBdHRyc1twcm9wXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBjb2x1bW5zXG4gICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYyA9PiB7XG4gICAgICB2YXIgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXG4gICAgICAvLyBTZXQgYXR0cmlidXRlc1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiBjKSB7XG4gICAgICAgIGlmIChjLmhhc093blByb3BlcnR5KHByb3ApKSB7XG5cbiAgICAgICAgICBpZiAocHJvcCA9PSAndGVtcGxhdGUnKVxuICAgICAgICAgICAgdGQuaW5uZXJIVE1MID0gY1twcm9wXTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB0ZC5zZXRBdHRyaWJ1dGUocHJvcCwgY1twcm9wXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcm93VGVtcGxhdGUuYXBwZW5kQ2hpbGQodGQpO1xuICAgIH0pO1xuXG4gICAgLy8gQ29tcGlsZVxuICAgIHRoaXMuY29tcGlsZXIuY29tcGlsZSh0YWJsZSwgdGhpcywgdW5kZWZpbmVkLCBmcmFnbWVudCk7XG5cbiAgICAvLyBIQUNLOiB3aHkgaXMgdGhlIGNoYW5nZSBoYW5kbGVyIG5vdCBmaXJpbmcgZm9yIG5vUm93c01lc3NhZ2U/XG4gICAgdGhpcy5ub1Jvd3NNZXNzYWdlQ2hhbmdlZCgpO1xuICB9XG5cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMudW5iaW5kaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmRvbnRXYXRjaEZvckNoYW5nZXMoKTtcbiAgfVxuXG4gIC8qID09PSBDb2x1bW4gaGFuZGxpbmcgPT09ICovXG4gIGFkZENvbHVtbihjb2wpIHtcblxuICAgIC8vIE5vLXNvcnQgaWYgZ3JpZCBpcyBub3Qgc29ydGFibGVcbiAgICBpZiAoIXRoaXMuc29ydGFibGUpXG4gICAgICBjb2wubm9zb3J0ID0gdHJ1ZTtcblxuICAgIHRoaXMuY29sdW1ucy5wdXNoKGNvbCk7XG4gIH1cblxuICAvKiA9PT0gUGFnaW5nID09PSAqL1xuICBwYWdlQ2hhbmdlZChwYWdlLCBvbGRWYWx1ZSkge1xuICAgIGlmIChwYWdlID09PSBvbGRWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucGFnZU51bWJlciA9IE51bWJlcihwYWdlKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHBhZ2VTaXplQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnBhZ2VDaGFuZ2VkKDEpO1xuICAgIHRoaXMudXBkYXRlUGFnZXIoKTtcbiAgfVxuXG4gIGZpbHRlclNvcnRQYWdlKGRhdGEpIHtcbiAgICAvLyBBcHBsaWVzIGZpbHRlciwgc29ydCB0aGVuIHBhZ2VcbiAgICAvLyAxLiBGaXJzdCBmaWx0ZXIgdGhlIGRhdGEgZG93biB0byB0aGUgc2V0IHdlIHdhbnQsIGlmIHdlIGFyZSB1c2luZyBsb2NhbCBkYXRhXG4gICAgdmFyIHRlbXBEYXRhID0gZGF0YTtcblxuICAgIGlmICh0aGlzLnNob3dDb2x1bW5GaWx0ZXJzICYmICF0aGlzLnNlcnZlckZpbHRlcmluZylcbiAgICAgIHRlbXBEYXRhID0gdGhpcy5hcHBseUZpbHRlcih0ZW1wRGF0YSk7XG5cbiAgICAvLyBDb3VudCB0aGUgZGF0YSBub3cgYmVmb3JlIHRoZSBzb3J0L3BhZ2VcbiAgICB0aGlzLmNvdW50ID0gdGVtcERhdGEubGVuZ3RoO1xuXG4gICAgLy8gMi4gTm93IHNvcnQgdGhlIGRhdGFcbiAgICBpZiAodGhpcy5zb3J0YWJsZSAmJiAhdGhpcy5zZXJ2ZXJTb3J0aW5nKVxuICAgICAgdGVtcERhdGEgPSB0aGlzLmFwcGx5U29ydCh0ZW1wRGF0YSk7XG5cbiAgICAvLyAzLiBOb3cgYXBwbHkgcGFnaW5nXG4gICAgaWYgKHRoaXMucGFnZWFibGUgJiYgIXRoaXMuc2VydmVyUGFnaW5nKVxuICAgICAgdGVtcERhdGEgPSB0aGlzLmFwcGx5UGFnZSh0ZW1wRGF0YSk7XG5cbiAgICB0aGlzLmRhdGEgPSB0ZW1wRGF0YTtcblxuICAgIHRoaXMudXBkYXRlUGFnZXIoKTtcblxuICAgIHRoaXMud2F0Y2hGb3JDaGFuZ2VzKCk7XG4gIH1cblxuICBhcHBseVBhZ2UoZGF0YSkge1xuICAgIHZhciBzdGFydCA9IChOdW1iZXIodGhpcy5wYWdlTnVtYmVyKSAtIDEpICogTnVtYmVyKHRoaXMucGFnZVNpemUpO1xuICAgIGRhdGEgPSBkYXRhLnNsaWNlKHN0YXJ0LCBzdGFydCArIE51bWJlcih0aGlzLnBhZ2VTaXplKSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG5cbiAgdXBkYXRlUGFnZXIoKSB7XG4gICAgaWYgKHRoaXMucGFnZXIpXG4gICAgICB0aGlzLnBhZ2VyLnVwZGF0ZSh0aGlzLnBhZ2VOdW1iZXIsIE51bWJlcih0aGlzLnBhZ2VTaXplKSwgTnVtYmVyKHRoaXMuY291bnQpKTtcblxuICAgIHRoaXMuZmlyc3RWaXNpYmxlSXRlbSA9ICh0aGlzLnBhZ2VOdW1iZXIgLSAxKSAqIE51bWJlcih0aGlzLnBhZ2VTaXplKSArIDE7XG4gICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW0gPSAodGhpcy5wYWdlTnVtYmVyKSAqIE51bWJlcih0aGlzLnBhZ2VTaXplKTtcbiAgfVxuXG4gIC8qID09PSBTb3J0aW5nID09PSAqL1xuICBmaWVsZFNvcnRlcihmaWVsZHMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmaWVsZHNcbiAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgIHZhciBkaXIgPSAxO1xuICAgICAgICAgIGlmIChvWzBdID09PSAnLScpIHtcbiAgICAgICAgICAgIGRpciA9IC0xO1xuICAgICAgICAgICAgbyA9IG8uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYVtvXSA+IGJbb10pIHJldHVybiBkaXI7XG4gICAgICAgICAgaWYgKGFbb10gPCBiW29dKSByZXR1cm4gLShkaXIpO1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KVxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIGZpcnN0Tm9uWmVyb1ZhbHVlKHAsIG4pIHtcbiAgICAgICAgICByZXR1cm4gcCA/IHAgOiBuO1xuICAgICAgICB9LCAwKTtcbiAgICB9O1xuICB9XG5cbiAgcGFnZVNpemVzQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHNvcnRDaGFuZ2VkKGZpZWxkKSB7XG5cbiAgICAvLyBEZXRlcm1pbmUgbmV3IHNvcnRcbiAgICB2YXIgbmV3U29ydCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIEZpZ3VyZSBvdXQgd2hpY2ggd2F5IHRoaXMgZmllbGQgc2hvdWxkIGJlIHNvcnRpbmdcbiAgICBzd2l0Y2ggKHRoaXMuc29ydGluZ1tmaWVsZF0pIHtcbiAgICAgIGNhc2UgJ2FzYyc6XG4gICAgICAgIG5ld1NvcnQgPSAnZGVzYyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGVzYyc6XG4gICAgICAgIG5ld1NvcnQgPSAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBuZXdTb3J0ID0gJ2FzYyc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuc29ydGluZ1tmaWVsZF0gPSBuZXdTb3J0O1xuXG4gICAgLy8gSWYgdGhlIHNvcnQgaXMgcHJlc2VudCBpbiB0aGUgc29ydCBzdGFjaywgc2xpY2UgaXQgdG8gdGhlIGJhY2sgb2YgdGhlIHN0YWNrLCBvdGhlcndpc2UganVzdCBhZGQgaXRcbiAgICB2YXIgcG9zID0gdGhpcy5zb3J0UHJvY2Vzc2luZ09yZGVyLmluZGV4T2YoZmllbGQpO1xuXG4gICAgaWYgKHBvcyA+IC0xKVxuICAgICAgdGhpcy5zb3J0UHJvY2Vzc2luZ09yZGVyLnNwbGljZShwb3MsIDEpO1xuXG4gICAgdGhpcy5zb3J0UHJvY2Vzc2luZ09yZGVyLnB1c2goZmllbGQpO1xuXG4gICAgLy8gQXBwbHkgdGhlIG5ldyBzb3J0XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBhcHBseVNvcnQoZGF0YSkge1xuXG4gICAgLy8gRm9ybWF0IHRoZSBzb3J0IGZpZWxkc1xuICAgIHZhciBmaWVsZHMgPSBbXTtcblxuICAgIC8vIEdldCB0aGUgZmllbGRzIGluIHRoZSAnc29ydGluZ09SZGVyJ1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zb3J0UHJvY2Vzc2luZ09yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc29ydCA9IHRoaXMuc29ydFByb2Nlc3NpbmdPcmRlcltpXTtcblxuICAgICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLnNvcnRpbmcpIHtcbiAgICAgICAgaWYgKHNvcnQgPT0gcHJvcCAmJiB0aGlzLnNvcnRpbmdbcHJvcF0gIT09ICcnKVxuICAgICAgICAgIGZpZWxkcy5wdXNoKHRoaXMuc29ydGluZ1twcm9wXSA9PT0gJ2FzYycgPyAocHJvcCkgOiAoJy0nICsgcHJvcCkpO1xuICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAvLyBJZiBzZXJ2ZXIgc29ydCwganVzdCByZWZyZXNoXG4gICAgZGF0YSA9IGRhdGEuc29ydCh0aGlzLmZpZWxkU29ydGVyKGZpZWxkcykpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKiA9PT0gRmlsdGVyaW5nID09PSAqL1xuICBhcHBseUZpbHRlcihkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEuZmlsdGVyKChyb3cpID0+IHtcbiAgICAgIHZhciBpbmNsdWRlID0gdHJ1ZTtcblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMuY29sdW1ucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB2YXIgY29sID0gdGhpcy5jb2x1bW5zW2ldO1xuXG4gICAgICAgIGlmIChjb2wuZmlsdGVyVmFsdWUgIT09ICcnICYmIHJvd1tjb2wuZmllbGRdLnRvU3RyaW5nKCkuaW5kZXhPZihjb2wuZmlsdGVyVmFsdWUpID09PSAtMSkge1xuICAgICAgICAgIGluY2x1ZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5jbHVkZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEZpbHRlckNvbHVtbnMoKSB7XG4gICAgdmFyIGNvbHMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSB0aGlzLmNvbHVtbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb2wgPSB0aGlzLmNvbHVtbnNbaV07XG5cbiAgICAgIGlmIChjb2wuaGFzRmlsdGVyVmFsdWUoKSkge1xuICAgICAgICBjb2xzW2NvbC5maWVsZF0gPSBjb2wuZ2V0RmlsdGVyVmFsdWUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29scztcbiAgfVxuXG4gIHVwZGF0ZUZpbHRlcnMoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKiA9PT0gRGF0YSA9PT0gKi9cbiAgcmVmcmVzaCgpIHtcbiAgICAvLyBJZiB3ZSBoYXZlIGFueSBzZXJ2ZXIgc2lkZSBzdHVmZiB3ZSBuZWVkIHRvIGdldCB0aGUgZGF0YSBmaXJzdFxuICAgIHRoaXMuZG9udFdhdGNoRm9yQ2hhbmdlcygpO1xuXG4gICAgaWYgKHRoaXMuc2VydmVyUGFnaW5nIHx8IHRoaXMuc2VydmVyU29ydGluZyB8fCB0aGlzLnNlcnZlckZpbHRlcmluZyB8fCAhdGhpcy5pbml0aWFsTG9hZClcbiAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuZmlsdGVyU29ydFBhZ2UodGhpcy5jYWNoZSk7XG5cbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgaWYgKCF0aGlzLnJlYWQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHJlYWQgbWV0aG9kIHNwZWNpZmllZCBmb3IgZ3JpZCcpO1xuXG4gICAgdGhpcy5pbml0aWFsTG9hZCA9IHRydWU7XG5cbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgcHJvZ3Jlc3MgaW5kaWNhdG9yXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgIC8vIFRyeSB0byByZWFkIGZyb20gdGhlIGRhdGEgYWRhcHRlclxuICAgIHRoaXMucmVhZCh7XG4gICAgICBzb3J0aW5nOiB0aGlzLnNvcnRpbmcsXG4gICAgICBwYWdpbmc6IHtwYWdlOiB0aGlzLnBhZ2VOdW1iZXIsIHNpemU6IE51bWJlcih0aGlzLnBhZ2VTaXplKX0sXG4gICAgICBmaWx0ZXJpbmc6IHRoaXMuZ2V0RmlsdGVyQ29sdW1ucygpXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcblxuICAgICAgICAvLyBEYXRhIHNob3VsZCBiZSBpbiB0aGUgcmVzdWx0IHNvIGdyYWIgaXQgYW5kIGFzc2lnbiBpdCB0byB0aGUgZGF0YSBwcm9wZXJ0eVxuICAgICAgICB0aGlzLmhhbmRsZVJlc3VsdChyZXN1bHQpO1xuXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAvLyBTb21ldGhpbmcgd2VudCB0ZXJyaWJseSB3cm9uZywgbm90aWZ5IHRoZSBjb25zdW1lclxuICAgICAgICBpZiAodGhpcy5vblJlYWRFcnJvcilcbiAgICAgICAgICB0aGlzLm9uUmVhZEVycm9yKHJlc3VsdCk7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVJlc3VsdChyZXN1bHQpIHtcblxuICAgIC8vIFRPRE86IENoZWNrIHZhbGlkIHN0dWZmIHdhcyByZXR1cm5lZFxuICAgIHZhciBkYXRhID0gcmVzdWx0LmRhdGE7XG5cbiAgICAvLyBJcyB0aGUgZGF0YSBiZWluZyBwYWdpbmF0ZWQgb24gdGhlIGNsaWVudCBzaWRlP1xuICAgIC8vIFRPRE86IFdvcmsgb3V0IHdoZW4gd2Ugc2hvdWxkIHdlIHVzZSB0aGUgY2FjaGUuLi4gZXZlcj8gSWYgaXQncyBsb2NhbCBkYXRhXG4gICAgaWYgKHRoaXMucGFnZWFibGUgJiYgIXRoaXMuc2VydmVyUGFnaW5nICYmICF0aGlzLnNlcnZlclNvcnRpbmcgJiYgIXRoaXMuc2VydmVyRmlsdGVyaW5nKSB7XG4gICAgICAvLyBDYWNoZSB0aGUgZGF0YVxuICAgICAgdGhpcy5jYWNoZSA9IHJlc3VsdC5kYXRhO1xuICAgICAgdGhpcy5maWx0ZXJTb3J0UGFnZSh0aGlzLmNhY2hlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhID0gcmVzdWx0LmRhdGE7XG4gICAgICB0aGlzLmZpbHRlclNvcnRQYWdlKHRoaXMuZGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb3VudCA9IHJlc3VsdC5jb3VudDtcblxuICAgIC8vIFVwZGF0ZSB0aGUgcGFnZXIgLSBtYXliZSB0aGUgZ3JpZCBvcHRpb25zIHNob3VsZCBjb250YWluIGFuIHVwZGF0ZSBjYWxsYmFjayBpbnN0ZWFkIG9mIHJlZmZpbmcgdGhlXG4gICAgLy8gcGFnZXIgaW50byB0aGUgY3VycmVudCBWTT9cbiAgICB0aGlzLnVwZGF0ZVBhZ2VyKCk7XG4gIH1cblxuICB3YXRjaEZvckNoYW5nZXMoKSB7XG4gICAgdGhpcy5kb250V2F0Y2hGb3JDaGFuZ2VzKCk7XG5cbiAgICAvLyBHdWFyZCBhZ2FpbnN0IGRhdGEgcmVmcmVzaCBldmVudHMgaGl0dGluZyBhZnRlciB0aGUgdXNlciBkb2VzIGFueXRoaW5nIHRoYXQgdW5sb2FkcyB0aGUgZ3JpZFxuICAgIGlmICghdGhpcy51bmJpbmRpbmcpXG4gICAgLy8gV2UgY2FuIHVwZGF0ZSB0aGUgcGFnZXIgYXV0b21hZ2ljYWxseVxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLm9ic2VydmVyTG9jYXRvclxuICAgICAgICAuZ2V0QXJyYXlPYnNlcnZlcih0aGlzLmNhY2hlKVxuICAgICAgICAuc3Vic2NyaWJlKChzcGxpY2VzKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgZG9udFdhdGNoRm9yQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbigpO1xuICB9XG5cbiAgLyogPT09IFNlbGVjdGlvbiA9PT0gKi9cblxuICBzZWxlY3QoaXRlbSkge1xuICAgIGlmICh0aGlzLnNlbGVjdGFibGUpXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gIH1cblxuICAvKiA9PT0gQ2hhbmdlIGhhbmRsZXJzID09PSAqL1xuICBub1Jvd3NNZXNzYWdlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnNob3dOb1Jvd3NNZXNzYWdlID0gdGhpcy5ub1Jvd3NNZXNzYWdlICE9PSAnJztcbiAgfVxuXG4gIGdyaWRIZWlnaHRDaGFuZ2VkKCkge1xuXG4gICAgLy8gVE9ETzogTWFrZSB0aGlzIGEgb25lIG9mZlxuICAgIHZhciBjb250ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWNvbnRhaW5lcicpO1xuXG4gICAgaWYgKHRoaXMuZ3JpZEhlaWdodCA+IDApIHtcbiAgICAgIGNvbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdoZWlnaHQ6JyArIHRoaXMuZ3JpZEhlaWdodCArICdweCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB9XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9