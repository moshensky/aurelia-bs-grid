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

              var attrs = Array.prototype.slice.call(c.attributes),
                  colHash = {};
              attrs.forEach(function (a) {
                return colHash[a.name] = a.value;
              });

              var col = new GridColumn(colHash, c.innerHTML);

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

            if (this.autoLoad) this.refresh();
          }
        }, {
          key: 'bind',
          value: function bind(executionContext) {

            this['$parent'] = executionContext;

            if (this.serverPaging && !this.serverSorting) this.sortable = false;

            var table = this.element.querySelector('table>tbody');
            var rowTemplate = table.querySelector('tr');

            var fragment = document.createDocumentFragment();

            fragment.appendChild(rowTemplate);

            rowTemplate.setAttribute('repeat.for', '$item of data');
            rowTemplate.setAttribute('class', '${ $item === $parent.selectedItem ? \'info\' : \'\' }');

            for (var prop in this.rowAttrs) {
              if (this.rowAttrs.hasOwnProperty(prop)) {
                rowTemplate.setAttribute(prop, this.rowTemplate[prop]);
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
          value: function pageChanged(page) {
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

            setTimeout(this.syncColumnHeadersWithColumns.bind(this), 0);
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
            ;

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
            var cols = [];

            for (var i = this.columns.length - 1; i >= 0; i--) {
              var col = this.columns[i];

              if (col.filterValue !== '') {
                cols.push({ field: col.field, value: col.filterValue });
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
            var cont = this.element.querySelector('.grid-content-container');

            if (this.gridHeight > 0) {
              cont.setAttribute('style', 'height:' + this.gridHeight + 'px');
            } else {
              cont.removeAttribute('style');
            }
          }
        }, {
          key: 'syncColumnHeadersWithColumns',
          value: function syncColumnHeadersWithColumns() {
            var headers = this.element.querySelectorAll('table>thead>tr:first-child>th');
            var filters = this.element.querySelectorAll('table>thead>tr:last-child>th');

            var cells = this.element.querySelectorAll('table>tbody>tr:first-child>td');

            for (var i = headers.length - 1; i >= 0; i--) {
              var header = headers[i];
              var filter = filters[i];
              var cell = cells[i];
              var overflow = this.isBodyOverflowing();

              var tgtWidth = cell.offsetWidth + (i == headers.length - 1 && overflow ? this.scrollBarWidth : 0);

              header.setAttribute('style', 'width: ' + tgtWidth + 'px');
              filter.setAttribute('style', 'width: ' + tgtWidth + 'px');
            }
            ;
          }
        }, {
          key: 'isBodyOverflowing',
          value: function isBodyOverflowing() {
            var body = this.element.querySelector('.grid-content-container');
            return body.offsetHeight < body.scrollHeight || body.offsetWidth < body.scrollWidth;
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
//# sourceMappingURL=data:application/json;base64,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QUFBQyxDQUFDOztBQUdsRyxvQkFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUMxRCxvQkFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUMzRDtBQUNELGFBQUM7V0FDRjs7O2lCQUVnQiw2QkFBRztBQUNsQixnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUNqRSxtQkFBTyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1dBQ3JGOzs7b0JBNWVVLElBQUk7QUFBSixZQUFJLEdBRGhCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUM5QixJQUFJLEtBQUosSUFBSTtBQUFKLFlBQUksR0FGaEIscUJBQXFCLEVBQUUsQ0FFWCxJQUFJLEtBQUosSUFBSTtBQUFKLFlBQUksR0FIaEIsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUdULElBQUksS0FBSixJQUFJO2VBQUosSUFBSTs7O3NCQUFKLElBQUkiLCJmaWxlIjoiZ3JpZC9ncmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgaW5qZWN0LCBza2lwQ29udGVudFByb2Nlc3NpbmcsIE9ic2VydmVyTG9jYXRvciwgY3VzdG9tRWxlbWVudCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7R3JpZENvbHVtbn0gZnJvbSAnLi9ncmlkLWNvbHVtbic7XG5pbXBvcnQge0NvbXBpbGVyfSBmcm9tICdnb295L2F1cmVsaWEtY29tcGlsZXInO1xuaW1wb3J0ICcuL2F1cmVsaWEtYnMtZ3JpZC5jc3MhJztcblxuQGN1c3RvbUVsZW1lbnQoJ2dyaWQnKVxuQHNraXBDb250ZW50UHJvY2Vzc2luZygpXG5AaW5qZWN0KEVsZW1lbnQsIENvbXBpbGVyLCBPYnNlcnZlckxvY2F0b3IpXG5leHBvcnQgY2xhc3MgR3JpZCB7XG5cbiAgLyogPT0gU3R5bGluZyA9PSAqL1xuICBAYmluZGFibGUgZ3JpZEhlaWdodCA9IDA7XG5cbiAgLyogPT0gT3B0aW9ucyA9PSAqL1xuXG4gIC8vIEluaXRpYWwgbG9hZCBmbGFnIChmb3IgY2xpZW50IHNpZGUpXG4gIEBiaW5kYWJsZSBpbml0aWFsTG9hZCA9IGZhbHNlO1xuXG4gIC8vIEZpbHRlcmluZ1xuICBAYmluZGFibGUgc2hvd0NvbHVtbkZpbHRlcnMgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIHNlcnZlckZpbHRlcmluZyA9IGZhbHNlO1xuXG4gIC8vIFBhZ2luYXRpb25cbiAgQGJpbmRhYmxlIHNlcnZlclBhZ2luZyA9IGZhbHNlO1xuICBAYmluZGFibGUgcGFnZWFibGUgPSB0cnVlO1xuICBAYmluZGFibGUgcGFnZVNpemUgPSAxMDtcbiAgQGJpbmRhYmxlIHBhZ2UgPSAxO1xuICBAYmluZGFibGUgcGFnZXJTaXplID0gMTA7XG5cbiAgQGJpbmRhYmxlIHNob3dGaXJzdExhc3RCdXR0b25zID0gdHJ1ZTtcbiAgQGJpbmRhYmxlIHNob3dKdW1wQnV0dG9ucyA9IHRydWU7XG5cbiAgQGJpbmRhYmxlIHBhZ2VTaXplcyA9IFsxMCwgMjUsIDUwXTtcblxuICBmaXJzdFZpc2libGVJdGVtID0gMDtcbiAgbGFzdFZpc2libGVJdGVtID0gMDtcblxuICBwYWdlTnVtYmVyID0gMTtcblxuXG4gIC8vIFNvcnRpbmF0aW9uXG4gIEBiaW5kYWJsZSBzZXJ2ZXJTb3J0aW5nID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBzb3J0YWJsZSA9IHRydWU7XG4gIHNvcnRQcm9jZXNzaW5nT3JkZXIgPSBbXTsgLy8gUmVwcmVzZW50cyB3aGljaCBvcmRlciB0byBhcHBseSBzb3J0cyB0byBlYWNoIGNvbHVtblxuICBzb3J0aW5nID0ge307XG5cbiAgLy8gQnVybmluYXRpb24/XG4gIFRyb2dkb3IgPSB0cnVlO1xuXG4gIC8vIENvbHVtbiBkZWZzXG4gIEBiaW5kYWJsZSBhdXRvR2VuZXJhdGVDb2x1bW5zO1xuICBjb2x1bW5IZWFkZXJzID0gW107XG4gIGNvbHVtbnMgPSBbXTtcblxuICAvLyBTZWxlY3Rpb25cbiAgQGJpbmRhYmxlIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIHNlbGVjdGVkSXRlbSA9IG51bGw7XG5cbiAgLy8gTWlzY1xuICBAYmluZGFibGUgbm9Sb3dzTWVzc2FnZSA9IFwiXCI7XG5cbiAgLy8gRGF0YSAuLi4uXG4gIEBiaW5kYWJsZSBhdXRvTG9hZCA9IHRydWU7XG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIGxvYWRpbmdNZXNzYWdlID0gXCJMb2FkaW5nLi4uXCI7XG5cbiAgLy8gUmVhZFxuICBAYmluZGFibGUgcmVhZCA9IG51bGw7XG4gIEBiaW5kYWJsZSBvblJlYWRFcnJvciA9IG51bGw7XG5cbiAgLy8gVHJhY2tpbmdcbiAgY2FjaGUgPSBbXTtcbiAgZGF0YSA9IFtdO1xuICBjb3VudCA9IDA7XG5cbiAgLy8gU3Vic2NyaXB0aW9uIGhhbmRsaW5nXG4gIHVuYmluZGluZyA9IGZhbHNlO1xuXG4gIC8vIFZpc3VhbFxuICAvLyBUT0RPOiBjYWxjIHNjcm9sbGJhciB3aWR0aCB1c2luZyBicm93c2VyXG4gIHNjcm9sbEJhcldpZHRoID0gMTY7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29tcGlsZXIsIG9ic2VydmVyTG9jYXRvcikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jb21waWxlciA9IGNvbXBpbGVyO1xuICAgIHRoaXMub2JzZXJ2ZXJMb2NhdG9yID0gb2JzZXJ2ZXJMb2NhdG9yO1xuXG4gICAgLy8gR3JhYiB1c2VyIHRlbXBsYXRlIGZyb20gZWxlbWVudFxuICAgIHRoaXMucHJvY2Vzc1VzZXJUZW1wbGF0ZSgpO1xuICB9XG5cbiAgcHJvY2Vzc1VzZXJUZW1wbGF0ZSgpIHtcblxuICAgIC8vIEdldCBhbnkgY29sIHRhZ3MgZnJvbSB0aGUgY29udGVudFxuICAgIHZhciByb3dFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJncmlkLXJvd1wiKTtcbiAgICB2YXIgY29sdW1uRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChyb3dFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJncmlkLWNvbFwiKSk7XG5cbiAgICBjb2x1bW5FbGVtZW50cy5mb3JFYWNoKGMgPT4ge1xuXG4gICAgICB2YXIgYXR0cnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjLmF0dHJpYnV0ZXMpLCBjb2xIYXNoID0ge307XG4gICAgICBhdHRycy5mb3JFYWNoKGEgPT4gY29sSGFzaFthLm5hbWVdID0gYS52YWx1ZSk7XG5cbiAgICAgIHZhciBjb2wgPSBuZXcgR3JpZENvbHVtbihjb2xIYXNoLCBjLmlubmVySFRNTCk7XG5cbiAgICAgIHRoaXMuYWRkQ29sdW1uKGNvbCk7XG4gICAgfSk7XG5cbiAgICAvLyBQdWxsIGFueSByb3cgYXR0cnMgaW50byBhIGhhc2ggb2JqZWN0XG4gICAgdGhpcy5yb3dBdHRycyA9IHt9O1xuICAgIHZhciBhdHRycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHJvd0VsZW1lbnQuYXR0cmlidXRlcyk7XG4gICAgYXR0cnMuZm9yRWFjaChhID0+IHRoaXMucm93QXR0cnNbYS5uYW1lXSA9IGEudmFsdWUpO1xuXG4gICAgLy8gUmVtb3ZlIGFsbCBjaGlsZHJlblxuICAgIHdoaWxlICh0aGlzLmVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAwKVxuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudC5jaGlsZE5vZGVzWzBdKTtcbiAgfVxuXG4gIC8qID09PSBMaWZlY3ljbGUgPT09ICovXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMuZ3JpZEhlaWdodENoYW5nZWQoKTtcblxuICAgIGlmICh0aGlzLmF1dG9Mb2FkKVxuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBiaW5kKGV4ZWN1dGlvbkNvbnRleHQpIHtcblxuICAgIHRoaXNbXCIkcGFyZW50XCJdID0gZXhlY3V0aW9uQ29udGV4dDtcblxuICAgIC8vIEVuc3VyZSB0aGUgZ3JpZCBzZXR0aW5nc1xuICAgIC8vIElmIHdlIGNhbiBwYWdlIG9uIHRoZSBzZXJ2ZXIgYW5kIHdlIGNhbid0IHNlcnZlciBzb3J0LCB3ZSBjYW4ndCBzb3J0IGxvY2FsbHlcbiAgICBpZiAodGhpcy5zZXJ2ZXJQYWdpbmcgJiYgIXRoaXMuc2VydmVyU29ydGluZylcbiAgICAgIHRoaXMuc29ydGFibGUgPSBmYWxzZTtcblxuICAgIC8vIEJ1aWxkIHRoZSByb3dzIHRoZW4gZHluYW1pY2FsbHkgY29tcGlsZSB0aGUgdGFibGVcbiAgICAvLyBHZXQgdGhlIHRhYmxlLi4uXG4gICAgdmFyIHRhYmxlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZT50Ym9keVwiKTtcbiAgICB2YXIgcm93VGVtcGxhdGUgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKFwidHJcIik7XG5cbiAgICAvLyBDcmVhdGUgYSBmcmFnbWVudCB3ZSB3aWxsIG1hbmlwdWxhdGUgdGhlIERPTSBpblxuICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIC8vIE1vdmUgdGhlIHJvdyB0ZW1wbGF0ZSB0byB0aGUgZnJhZ21lbnRcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChyb3dUZW1wbGF0ZSk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHJlcGVhdGVyXG4gICAgcm93VGVtcGxhdGUuc2V0QXR0cmlidXRlKFwicmVwZWF0LmZvclwiLCBcIiRpdGVtIG9mIGRhdGFcIik7XG4gICAgcm93VGVtcGxhdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCIkeyAkaXRlbSA9PT0gJHBhcmVudC5zZWxlY3RlZEl0ZW0gPyAnaW5mbycgOiAnJyB9XCIpO1xuXG4gICAgLy8gQ29weSBhbnkgdXNlciBzcGVjaWZpZWQgcm93IGF0dHJpYnV0ZXMgdG8gdGhlIHJvdyB0ZW1wbGF0ZVxuICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5yb3dBdHRycykge1xuICAgICAgaWYgKHRoaXMucm93QXR0cnMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgcm93VGVtcGxhdGUuc2V0QXR0cmlidXRlKHByb3AsIHRoaXMucm93VGVtcGxhdGVbcHJvcF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSB0aGUgY29sdW1uc1xuICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGMgPT4ge1xuICAgICAgdmFyIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAvLyBTZXQgYXR0cmlidXRlc1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiBjKSB7XG4gICAgICAgIGlmIChjLmhhc093blByb3BlcnR5KHByb3ApKSB7XG5cbiAgICAgICAgICBpZiAocHJvcCA9PSBcInRlbXBsYXRlXCIpXG4gICAgICAgICAgICB0ZC5pbm5lckhUTUwgPSBjW3Byb3BdO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRkLnNldEF0dHJpYnV0ZShwcm9wLCBjW3Byb3BdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByb3dUZW1wbGF0ZS5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgfSk7XG5cbiAgICAvLyBDb21waWxlXG4gICAgdGhpcy5jb21waWxlci5jb21waWxlKHRhYmxlLCB0aGlzLCB1bmRlZmluZWQsIGZyYWdtZW50KTtcblxuICAgIC8vIEhBQ0s6IHdoeSBpcyB0aGUgY2hhbmdlIGhhbmRsZXIgbm90IGZpcmluZyBmb3Igbm9Sb3dzTWVzc2FnZT9cbiAgICB0aGlzLm5vUm93c01lc3NhZ2VDaGFuZ2VkKCk7XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgdGhpcy51bmJpbmRpbmcgPSB0cnVlO1xuICAgIHRoaXMuZG9udFdhdGNoRm9yQ2hhbmdlcygpO1xuICB9XG5cbiAgLyogPT09IENvbHVtbiBoYW5kbGluZyA9PT0gKi9cbiAgYWRkQ29sdW1uKGNvbCkge1xuXG4gICAgLy8gTm8tc29ydCBpZiBncmlkIGlzIG5vdCBzb3J0YWJsZVxuICAgIGlmICghdGhpcy5zb3J0YWJsZSlcbiAgICAgIGNvbC5ub3NvcnQgPSB0cnVlO1xuXG4gICAgdGhpcy5jb2x1bW5zLnB1c2goY29sKTtcbiAgfVxuXG4gIC8qID09PSBQYWdpbmcgPT09ICovXG4gIHBhZ2VDaGFuZ2VkKHBhZ2UpIHtcbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSBOdW1iZXIocGFnZSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBwYWdlU2l6ZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5wYWdlQ2hhbmdlZCgxKTtcbiAgICB0aGlzLnVwZGF0ZVBhZ2VyKCk7XG4gIH1cblxuICBmaWx0ZXJTb3J0UGFnZShkYXRhKSB7XG4gICAgLy8gQXBwbGllcyBmaWx0ZXIsIHNvcnQgdGhlbiBwYWdlXG4gICAgLy8gMS4gRmlyc3QgZmlsdGVyIHRoZSBkYXRhIGRvd24gdG8gdGhlIHNldCB3ZSB3YW50LCBpZiB3ZSBhcmUgdXNpbmcgbG9jYWwgZGF0YVxuICAgIHZhciB0ZW1wRGF0YSA9IGRhdGE7XG5cbiAgICBpZiAodGhpcy5zaG93Q29sdW1uRmlsdGVycyAmJiAhdGhpcy5zZXJ2ZXJGaWx0ZXJpbmcpXG4gICAgICB0ZW1wRGF0YSA9IHRoaXMuYXBwbHlGaWx0ZXIodGVtcERhdGEpO1xuXG4gICAgLy8gQ291bnQgdGhlIGRhdGEgbm93IGJlZm9yZSB0aGUgc29ydC9wYWdlXG4gICAgdGhpcy5jb3VudCA9IHRlbXBEYXRhLmxlbmd0aDtcblxuICAgIC8vIDIuIE5vdyBzb3J0IHRoZSBkYXRhXG4gICAgaWYgKHRoaXMuc29ydGFibGUgJiYgIXRoaXMuc2VydmVyU29ydGluZylcbiAgICAgIHRlbXBEYXRhID0gdGhpcy5hcHBseVNvcnQodGVtcERhdGEpO1xuXG4gICAgLy8gMy4gTm93IGFwcGx5IHBhZ2luZ1xuICAgIGlmICh0aGlzLnBhZ2VhYmxlICYmICF0aGlzLnNlcnZlclBhZ2luZylcbiAgICAgIHRlbXBEYXRhID0gdGhpcy5hcHBseVBhZ2UodGVtcERhdGEpO1xuXG4gICAgdGhpcy5kYXRhID0gdGVtcERhdGE7XG5cbiAgICB0aGlzLnVwZGF0ZVBhZ2VyKCk7XG5cbiAgICB0aGlzLndhdGNoRm9yQ2hhbmdlcygpO1xuXG4gICAgc2V0VGltZW91dCh0aGlzLnN5bmNDb2x1bW5IZWFkZXJzV2l0aENvbHVtbnMuYmluZCh0aGlzKSwgMCk7XG4gIH1cblxuICBhcHBseVBhZ2UoZGF0YSkge1xuICAgIHZhciBzdGFydCA9IChOdW1iZXIodGhpcy5wYWdlTnVtYmVyKSAtIDEpICogTnVtYmVyKHRoaXMucGFnZVNpemUpO1xuICAgIGRhdGEgPSBkYXRhLnNsaWNlKHN0YXJ0LCBzdGFydCArIE51bWJlcih0aGlzLnBhZ2VTaXplKSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG5cbiAgdXBkYXRlUGFnZXIoKSB7XG4gICAgaWYgKHRoaXMucGFnZXIpXG4gICAgICB0aGlzLnBhZ2VyLnVwZGF0ZSh0aGlzLnBhZ2VOdW1iZXIsIE51bWJlcih0aGlzLnBhZ2VTaXplKSwgTnVtYmVyKHRoaXMuY291bnQpKTtcblxuICAgIHRoaXMuZmlyc3RWaXNpYmxlSXRlbSA9ICh0aGlzLnBhZ2VOdW1iZXIgLSAxKSAqIE51bWJlcih0aGlzLnBhZ2VTaXplKSArIDE7XG4gICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW0gPSAodGhpcy5wYWdlTnVtYmVyKSAqIE51bWJlcih0aGlzLnBhZ2VTaXplKTtcbiAgfVxuXG4gIC8qID09PSBTb3J0aW5nID09PSAqL1xuICBmaWVsZFNvcnRlcihmaWVsZHMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmaWVsZHNcbiAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgIHZhciBkaXIgPSAxO1xuICAgICAgICAgIGlmIChvWzBdID09PSAnLScpIHtcbiAgICAgICAgICAgIGRpciA9IC0xO1xuICAgICAgICAgICAgbyA9IG8uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYVtvXSA+IGJbb10pIHJldHVybiBkaXI7XG4gICAgICAgICAgaWYgKGFbb10gPCBiW29dKSByZXR1cm4gLShkaXIpO1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KVxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIGZpcnN0Tm9uWmVyb1ZhbHVlKHAsIG4pIHtcbiAgICAgICAgICByZXR1cm4gcCA/IHAgOiBuO1xuICAgICAgICB9LCAwKTtcbiAgICB9O1xuICB9XG5cbiAgcGFnZVNpemVzQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHNvcnRDaGFuZ2VkKGZpZWxkKSB7XG5cbiAgICAvLyBEZXRlcm1pbmUgbmV3IHNvcnRcbiAgICB2YXIgbmV3U29ydCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIEZpZ3VyZSBvdXQgd2hpY2ggd2F5IHRoaXMgZmllbGQgc2hvdWxkIGJlIHNvcnRpbmdcbiAgICBzd2l0Y2ggKHRoaXMuc29ydGluZ1tmaWVsZF0pIHtcbiAgICAgIGNhc2UgXCJhc2NcIjpcbiAgICAgICAgbmV3U29ydCA9IFwiZGVzY1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkZXNjXCI6XG4gICAgICAgIG5ld1NvcnQgPSBcIlwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG5ld1NvcnQgPSBcImFzY1wiO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLnNvcnRpbmdbZmllbGRdID0gbmV3U29ydDtcblxuICAgIC8vIElmIHRoZSBzb3J0IGlzIHByZXNlbnQgaW4gdGhlIHNvcnQgc3RhY2ssIHNsaWNlIGl0IHRvIHRoZSBiYWNrIG9mIHRoZSBzdGFjaywgb3RoZXJ3aXNlIGp1c3QgYWRkIGl0XG4gICAgdmFyIHBvcyA9IHRoaXMuc29ydFByb2Nlc3NpbmdPcmRlci5pbmRleE9mKGZpZWxkKTtcblxuICAgIGlmIChwb3MgPiAtMSlcbiAgICAgIHRoaXMuc29ydFByb2Nlc3NpbmdPcmRlci5zcGxpY2UocG9zLCAxKTtcblxuICAgIHRoaXMuc29ydFByb2Nlc3NpbmdPcmRlci5wdXNoKGZpZWxkKTtcblxuICAgIC8vIEFwcGx5IHRoZSBuZXcgc29ydFxuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgYXBwbHlTb3J0KGRhdGEpIHtcblxuICAgIC8vIEZvcm1hdCB0aGUgc29ydCBmaWVsZHNcbiAgICB2YXIgZmllbGRzID0gW107XG5cbiAgICAvLyBHZXQgdGhlIGZpZWxkcyBpbiB0aGUgXCJzb3J0aW5nT1JkZXJcIlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zb3J0UHJvY2Vzc2luZ09yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc29ydCA9IHRoaXMuc29ydFByb2Nlc3NpbmdPcmRlcltpXTtcblxuICAgICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLnNvcnRpbmcpIHtcbiAgICAgICAgaWYgKHNvcnQgPT0gcHJvcCAmJiB0aGlzLnNvcnRpbmdbcHJvcF0gIT09IFwiXCIpXG4gICAgICAgICAgZmllbGRzLnB1c2godGhpcy5zb3J0aW5nW3Byb3BdID09PSBcImFzY1wiID8gKHByb3ApIDogKFwiLVwiICsgcHJvcCkpO1xuICAgICAgfVxuICAgIH1cbiAgICA7XG5cblxuICAgIC8vIElmIHNlcnZlciBzb3J0LCBqdXN0IHJlZnJlc2hcbiAgICBkYXRhID0gZGF0YS5zb3J0KHRoaXMuZmllbGRTb3J0ZXIoZmllbGRzKSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qID09PSBGaWx0ZXJpbmcgPT09ICovXG4gIGFwcGx5RmlsdGVyKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YS5maWx0ZXIoKHJvdykgPT4ge1xuICAgICAgdmFyIGluY2x1ZGUgPSB0cnVlO1xuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy5jb2x1bW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBjb2wgPSB0aGlzLmNvbHVtbnNbaV07XG5cbiAgICAgICAgaWYgKGNvbC5maWx0ZXJWYWx1ZSAhPT0gXCJcIiAmJiByb3dbY29sLmZpZWxkXS50b1N0cmluZygpLmluZGV4T2YoY29sLmZpbHRlclZhbHVlKSA9PT0gLTEpIHtcbiAgICAgICAgICBpbmNsdWRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluY2x1ZGU7XG4gICAgfSk7XG4gIH1cblxuICBnZXRGaWx0ZXJDb2x1bW5zKCkge1xuICAgIHZhciBjb2xzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gdGhpcy5jb2x1bW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgY29sID0gdGhpcy5jb2x1bW5zW2ldO1xuXG4gICAgICBpZiAoY29sLmZpbHRlclZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgIGNvbHMucHVzaCh7ZmllbGQ6IGNvbC5maWVsZCwgdmFsdWU6IGNvbC5maWx0ZXJWYWx1ZX0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb2xzO1xuICB9XG5cbiAgdXBkYXRlRmlsdGVycygpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qID09PSBEYXRhID09PSAqL1xuICByZWZyZXNoKCkge1xuICAgIC8vIElmIHdlIGhhdmUgYW55IHNlcnZlciBzaWRlIHN0dWZmIHdlIG5lZWQgdG8gZ2V0IHRoZSBkYXRhIGZpcnN0XG4gICAgdGhpcy5kb250V2F0Y2hGb3JDaGFuZ2VzKCk7XG5cbiAgICBpZiAodGhpcy5zZXJ2ZXJQYWdpbmcgfHwgdGhpcy5zZXJ2ZXJTb3J0aW5nIHx8IHRoaXMuc2VydmVyRmlsdGVyaW5nIHx8ICF0aGlzLmluaXRpYWxMb2FkKVxuICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5maWx0ZXJTb3J0UGFnZSh0aGlzLmNhY2hlKTtcblxuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICBpZiAoIXRoaXMucmVhZClcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJlYWQgbWV0aG9kIHNwZWNpZmllZCBmb3IgZ3JpZFwiKTtcblxuICAgIHRoaXMuaW5pdGlhbExvYWQgPSB0cnVlO1xuXG4gICAgLy8gVE9ETzogSW1wbGVtZW50IHByb2dyZXNzIGluZGljYXRvclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAvLyBUcnkgdG8gcmVhZCBmcm9tIHRoZSBkYXRhIGFkYXB0ZXJcbiAgICB0aGlzLnJlYWQoe1xuICAgICAgc29ydGluZzogdGhpcy5zb3J0aW5nLFxuICAgICAgcGFnaW5nOiB7cGFnZTogdGhpcy5wYWdlTnVtYmVyLCBzaXplOiBOdW1iZXIodGhpcy5wYWdlU2l6ZSl9LFxuICAgICAgZmlsdGVyaW5nOiB0aGlzLmdldEZpbHRlckNvbHVtbnMoKVxuICAgIH0pXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG5cbiAgICAgICAgLy8gRGF0YSBzaG91bGQgYmUgaW4gdGhlIHJlc3VsdCBzbyBncmFiIGl0IGFuZCBhc3NpZ24gaXQgdG8gdGhlIGRhdGEgcHJvcGVydHlcbiAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHQocmVzdWx0KTtcblxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0sIChyZXN1bHQpID0+IHtcbiAgICAgICAgLy8gU29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmcsIG5vdGlmeSB0aGUgY29uc3VtZXJcbiAgICAgICAgaWYgKHRoaXMub25SZWFkRXJyb3IpXG4gICAgICAgICAgdGhpcy5vblJlYWRFcnJvcihyZXN1bHQpO1xuXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBoYW5kbGVSZXN1bHQocmVzdWx0KSB7XG5cbiAgICAvLyBUT0RPOiBDaGVjayB2YWxpZCBzdHVmZiB3YXMgcmV0dXJuZWRcbiAgICB2YXIgZGF0YSA9IHJlc3VsdC5kYXRhO1xuXG4gICAgLy8gSXMgdGhlIGRhdGEgYmVpbmcgcGFnaW5hdGVkIG9uIHRoZSBjbGllbnQgc2lkZT9cbiAgICAvLyBUT0RPOiBXb3JrIG91dCB3aGVuIHdlIHNob3VsZCB3ZSB1c2UgdGhlIGNhY2hlLi4uIGV2ZXI/IElmIGl0J3MgbG9jYWwgZGF0YVxuICAgIGlmICh0aGlzLnBhZ2VhYmxlICYmICF0aGlzLnNlcnZlclBhZ2luZyAmJiAhdGhpcy5zZXJ2ZXJTb3J0aW5nICYmICF0aGlzLnNlcnZlckZpbHRlcmluZykge1xuICAgICAgLy8gQ2FjaGUgdGhlIGRhdGFcbiAgICAgIHRoaXMuY2FjaGUgPSByZXN1bHQuZGF0YTtcbiAgICAgIHRoaXMuZmlsdGVyU29ydFBhZ2UodGhpcy5jYWNoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YSA9IHJlc3VsdC5kYXRhO1xuICAgICAgdGhpcy5maWx0ZXJTb3J0UGFnZSh0aGlzLmRhdGEpO1xuICAgIH1cblxuICAgIHRoaXMuY291bnQgPSByZXN1bHQuY291bnQ7XG5cbiAgICAvLyBVcGRhdGUgdGhlIHBhZ2VyIC0gbWF5YmUgdGhlIGdyaWQgb3B0aW9ucyBzaG91bGQgY29udGFpbiBhbiB1cGRhdGUgY2FsbGJhY2sgaW5zdGVhZCBvZiByZWZmaW5nIHRoZVxuICAgIC8vIHBhZ2VyIGludG8gdGhlIGN1cnJlbnQgVk0/XG4gICAgdGhpcy51cGRhdGVQYWdlcigpO1xuICB9XG5cbiAgd2F0Y2hGb3JDaGFuZ2VzKCkge1xuXG4gICAgdGhpcy5kb250V2F0Y2hGb3JDaGFuZ2VzKCk7XG5cbiAgICAvLyBHdWFyZCBhZ2FpbnN0IGRhdGEgcmVmcmVzaCBldmVudHMgaGl0dGluZyBhZnRlciB0aGUgdXNlciBkb2VzIGFueXRoaW5nIHRoYXQgdW5sb2FkcyB0aGUgZ3JpZFxuICAgIGlmICghdGhpcy51bmJpbmRpbmcpXG4gICAgLy8gV2UgY2FuIHVwZGF0ZSB0aGUgcGFnZXIgYXV0b21hZ2ljYWxseVxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLm9ic2VydmVyTG9jYXRvclxuICAgICAgICAuZ2V0QXJyYXlPYnNlcnZlcih0aGlzLmNhY2hlKVxuICAgICAgICAuc3Vic2NyaWJlKChzcGxpY2VzKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgZG9udFdhdGNoRm9yQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbigpO1xuICB9XG5cbiAgLyogPT09IFNlbGVjdGlvbiA9PT0gKi9cblxuICBzZWxlY3QoaXRlbSkge1xuICAgIGlmICh0aGlzLnNlbGVjdGFibGUpXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gIH1cblxuICAvKiA9PT0gQ2hhbmdlIGhhbmRsZXJzID09PSAqL1xuICBub1Jvd3NNZXNzYWdlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnNob3dOb1Jvd3NNZXNzYWdlID0gdGhpcy5ub1Jvd3NNZXNzYWdlICE9PSBcIlwiO1xuICB9XG5cbiAgZ3JpZEhlaWdodENoYW5nZWQoKSB7XG5cbiAgICAvLyBUT0RPOiBNYWtlIHRoaXMgYSBvbmUgb2ZmXG4gICAgdmFyIGNvbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkLWNvbnRlbnQtY29udGFpbmVyXCIpO1xuXG4gICAgaWYgKHRoaXMuZ3JpZEhlaWdodCA+IDApIHtcbiAgICAgIGNvbnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJoZWlnaHQ6XCIgKyB0aGlzLmdyaWRIZWlnaHQgKyBcInB4XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qID09PSBWaXN1YWwgPT09ICovXG4gIHN5bmNDb2x1bW5IZWFkZXJzV2l0aENvbHVtbnMoKSB7XG4gICAgLy8gR2V0IHRoZSBoZWFkZXIgcm93XG4gICAgdmFyIGhlYWRlcnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRhYmxlPnRoZWFkPnRyOmZpcnN0LWNoaWxkPnRoXCIpO1xuICAgIHZhciBmaWx0ZXJzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZT50aGVhZD50cjpsYXN0LWNoaWxkPnRoXCIpO1xuXG4gICAgLy8gR2V0IHRoZSBmaXJzdCByb3cgZnJvbSB0aGUgZGF0YSBpZiB0aGVyZSBpcyBvbmUuLi5cbiAgICB2YXIgY2VsbHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRhYmxlPnRib2R5PnRyOmZpcnN0LWNoaWxkPnRkXCIpO1xuXG4gICAgZm9yICh2YXIgaSA9IGhlYWRlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBoZWFkZXIgPSBoZWFkZXJzW2ldO1xuICAgICAgdmFyIGZpbHRlciA9IGZpbHRlcnNbaV07XG4gICAgICB2YXIgY2VsbCA9IGNlbGxzW2ldO1xuICAgICAgdmFyIG92ZXJmbG93ID0gdGhpcy5pc0JvZHlPdmVyZmxvd2luZygpO1xuXG4gICAgICB2YXIgdGd0V2lkdGggPSBjZWxsLm9mZnNldFdpZHRoICsgKGkgPT0gaGVhZGVycy5sZW5ndGggLSAxICYmIG92ZXJmbG93ID8gdGhpcy5zY3JvbGxCYXJXaWR0aCA6IDApO1xuXG4gICAgICAvLyBNYWtlIHRoZSBoZWFkZXIgdGhlIHNhbWUgd2lkdGggYXMgdGhlIGNlbGwuLi5cbiAgICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiBcIiArIHRndFdpZHRoICsgXCJweFwiKTtcbiAgICAgIGZpbHRlci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiBcIiArIHRndFdpZHRoICsgXCJweFwiKTtcbiAgICB9XG4gICAgO1xuICB9XG5cbiAgaXNCb2R5T3ZlcmZsb3dpbmcoKSB7XG4gICAgdmFyIGJvZHkgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkLWNvbnRlbnQtY29udGFpbmVyXCIpO1xuICAgIHJldHVybiBib2R5Lm9mZnNldEhlaWdodCA8IGJvZHkuc2Nyb2xsSGVpZ2h0IHx8IGJvZHkub2Zmc2V0V2lkdGggPCBib2R5LnNjcm9sbFdpZHRoO1xuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==