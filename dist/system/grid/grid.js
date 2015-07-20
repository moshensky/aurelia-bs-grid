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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQvZ3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7cUdBUWEsSUFBSTs7Ozs7Ozs7OzttQ0FSVCxRQUFRO2lDQUFFLE1BQU07Z0RBQUUscUJBQXFCOzBDQUFFLGVBQWU7d0NBQUUsYUFBYTs7K0JBQ3ZFLFVBQVU7O3NDQUNWLFFBQVE7OztBQU1ILFVBQUk7Ozs7OEJBQUosSUFBSTs7dUJBR2QsUUFBUTs7bUJBQWMsQ0FBQzs7Ozs7dUJBS3ZCLFFBQVE7O21CQUFlLEtBQUs7Ozs7O3VCQUc1QixRQUFROzttQkFBcUIsS0FBSzs7Ozs7dUJBQ2xDLFFBQVE7O21CQUFtQixLQUFLOzs7Ozt1QkFHaEMsUUFBUTs7bUJBQWdCLEtBQUs7Ozs7O3VCQUM3QixRQUFROzttQkFBWSxJQUFJOzs7Ozt1QkFDeEIsUUFBUTs7bUJBQVksRUFBRTs7Ozs7dUJBQ3RCLFFBQVE7O21CQUFRLENBQUM7Ozs7O3VCQUNqQixRQUFROzttQkFBYSxFQUFFOzs7Ozt1QkFFdkIsUUFBUTs7bUJBQXdCLElBQUk7Ozs7O3VCQUNwQyxRQUFROzttQkFBbUIsSUFBSTs7Ozs7dUJBRS9CLFFBQVE7O21CQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Ozs7O3VCQVNqQyxRQUFROzttQkFBaUIsS0FBSzs7Ozs7dUJBQzlCLFFBQVE7O21CQUFZLElBQUk7Ozs7O3VCQVF4QixRQUFROzs7Ozt1QkFLUixRQUFROzttQkFBYyxLQUFLOzs7Ozt1QkFDM0IsUUFBUTs7bUJBQWdCLElBQUk7Ozs7O3VCQUc1QixRQUFROzttQkFBaUIsRUFBRTs7Ozs7dUJBRzNCLFFBQVE7O21CQUFZLElBQUk7Ozs7O3VCQUV4QixRQUFROzttQkFBa0IsWUFBWTs7Ozs7dUJBR3RDLFFBQVE7O21CQUFRLElBQUk7Ozs7O3VCQUNwQixRQUFROzttQkFBZSxJQUFJOzs7OztBQWNqQixpQkExRUEsSUFBSSxDQTBFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBaERoRCxnQkFBZ0IsR0FBRyxDQUFDO2VBQ3BCLGVBQWUsR0FBRyxDQUFDO2VBRW5CLFVBQVUsR0FBRyxDQUFDOzs7Ozs7ZUFNZCxtQkFBbUIsR0FBRyxFQUFFO2VBQ3hCLE9BQU8sR0FBRyxFQUFFO2VBR1osT0FBTyxHQUFHLElBQUk7Ozs7ZUFJZCxhQUFhLEdBQUcsRUFBRTtlQUNsQixPQUFPLEdBQUcsRUFBRTs7Ozs7Ozs7OztlQVdaLE9BQU8sR0FBRyxLQUFLOzs7Ozs7OztlQVFmLEtBQUssR0FBRyxFQUFFO2VBQ1YsSUFBSSxHQUFHLEVBQUU7ZUFDVCxLQUFLLEdBQUcsQ0FBQztlQUdULFNBQVMsR0FBRyxLQUFLO2VBSWpCLGNBQWMsR0FBRyxFQUFFOztBQUdqQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixjQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQzs7QUFHdkMsY0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDNUI7OzhCQWpGVSxJQUFJOztpQkFtRkksK0JBQUc7OztBQUdwQixnQkFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEQsZ0JBQUksY0FBYyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs7QUFFekYsMEJBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLEVBQUk7O0FBRTFCLGtCQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztrQkFBRSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ25FLG1CQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLO2VBQUEsQ0FBQyxDQUFDOztBQUU5QyxrQkFBSSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7QUFFL0Msb0JBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3JCLENBQUMsQ0FBQzs7QUFHSCxnQkFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbkIsZ0JBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDOUQsaUJBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO3FCQUFJLE1BQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSzthQUFBLENBQUMsQ0FBQzs7QUFHcEQsbUJBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztXQUN4RDs7O2lCQUdPLG9CQUFHO0FBQ1QsZ0JBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDOztBQUV6QixnQkFBSSxJQUFJLENBQUMsUUFBUSxFQUNmLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztXQUNsQjs7O2lCQUVHLGNBQUMsZ0JBQWdCLEVBQUU7O0FBRXJCLGdCQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7O0FBSW5DLGdCQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzs7QUFJeEIsZ0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3RELGdCQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUc1QyxnQkFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixFQUFFLENBQUM7O0FBR2pELG9CQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztBQUdsQyx1QkFBVyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDeEQsdUJBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLHVEQUFtRCxDQUFDLENBQUM7O0FBR3ZGLGlCQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDOUIsa0JBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDdEMsMkJBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztlQUN4RDthQUNGOztBQUdELGdCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUN4QixrQkFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFHdEMsbUJBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO0FBQ2xCLG9CQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7O0FBRTFCLHNCQUFJLElBQUksSUFBSSxVQUFVLEVBQ3BCLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBRXZCLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUNsQztlQUNGOztBQUVELHlCQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzdCLENBQUMsQ0FBQzs7QUFHSCxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7O0FBR3hELGdCQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztXQUM3Qjs7O2lCQUVLLGtCQUFHO0FBQ1AsZ0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLGdCQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztXQUM1Qjs7O2lCQUdRLG1CQUFDLEdBQUcsRUFBRTtBQUdiLGdCQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDaEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7O0FBRXBCLGdCQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztXQUN4Qjs7O2lCQUdVLHFCQUFDLElBQUksRUFBRTtBQUNoQixnQkFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0IsZ0JBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztXQUNoQjs7O2lCQUVjLDJCQUFHO0FBQ2hCLGdCQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLGdCQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7V0FDcEI7OztpQkFFYSx3QkFBQyxJQUFJLEVBQUU7QUFHbkIsZ0JBQUksUUFBUSxHQUFHLElBQUksQ0FBQzs7QUFFcEIsZ0JBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFDakQsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBR3hDLGdCQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7O0FBRzdCLGdCQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUN0QyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFHdEMsZ0JBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQ3JDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUV0QyxnQkFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7O0FBRXJCLGdCQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7O0FBRW5CLGdCQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7V0FDeEI7OztpQkFFUSxtQkFBQyxJQUFJLEVBQUU7QUFDZCxnQkFBSSxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQSxHQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbEUsZ0JBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOztBQUV4RCxtQkFBTyxJQUFJLENBQUM7V0FDYjs7O2lCQUdVLHVCQUFHO0FBQ1osZ0JBQUksSUFBSSxDQUFDLEtBQUssRUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOztBQUVoRixnQkFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUEsR0FBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxRSxnQkFBSSxDQUFDLGVBQWUsR0FBRyxBQUFDLElBQUksQ0FBQyxVQUFVLEdBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztXQUNsRTs7O2lCQUdVLHFCQUFDLE1BQU0sRUFBRTtBQUNsQixtQkFBTyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDckIscUJBQU8sTUFBTSxDQUNWLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUNoQixvQkFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ1osb0JBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtBQUNoQixxQkFBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ1QsbUJBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNwQjtBQUNELG9CQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUM7QUFDNUIsb0JBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUUsR0FBRyxBQUFDLENBQUM7QUFDL0IsdUJBQU8sQ0FBQyxDQUFDO2VBQ1YsQ0FBQyxDQUNELE1BQU0sQ0FBQyxTQUFTLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdkMsdUJBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7ZUFDbEIsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNULENBQUM7V0FDSDs7O2lCQUVlLDRCQUFHO0FBQ2pCLGdCQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7V0FDaEI7OztpQkFFVSxxQkFBQyxLQUFLLEVBQUU7QUFHakIsZ0JBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQzs7QUFHeEIsb0JBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7QUFDekIsbUJBQUssS0FBSztBQUNSLHVCQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ2pCLHNCQUFNO0FBQUEsQUFDUixtQkFBSyxNQUFNO0FBQ1QsdUJBQU8sR0FBRyxFQUFFLENBQUM7QUFDYixzQkFBTTtBQUFBLEFBQ1I7QUFDRSx1QkFBTyxHQUFHLEtBQUssQ0FBQztBQUNoQixzQkFBTTtBQUFBLGFBQ1Q7O0FBRUQsZ0JBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDOztBQUc5QixnQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFbEQsZ0JBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUNWLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOztBQUUxQyxnQkFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFHckMsZ0JBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztXQUNoQjs7O2lCQUVRLG1CQUFDLElBQUksRUFBRTtBQUdkLGdCQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7O0FBR2hCLGlCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN4RCxrQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUV2QyxtQkFBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQzdCLG9CQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEdBQUksSUFBSSxHQUFLLEdBQUcsR0FBRyxJQUFJLEFBQUMsQ0FBQyxDQUFDO2VBQ3JFO2FBQ0Y7QUFDRCxhQUFDOztBQUlELGdCQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O0FBRTNDLG1CQUFPLElBQUksQ0FBQztXQUNiOzs7aUJBR1UscUJBQUMsSUFBSSxFQUFFOzs7QUFDaEIsbUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBSztBQUMxQixrQkFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDOztBQUVuQixtQkFBSyxJQUFJLENBQUMsR0FBRyxPQUFLLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDakQsb0JBQUksR0FBRyxHQUFHLE9BQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUUxQixvQkFBSSxHQUFHLENBQUMsV0FBVyxLQUFLLEVBQUUsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDdkYseUJBQU8sR0FBRyxLQUFLLENBQUM7aUJBQ2pCO2VBQ0Y7O0FBRUQscUJBQU8sT0FBTyxDQUFDO2FBQ2hCLENBQUMsQ0FBQztXQUNKOzs7aUJBRWUsNEJBQUc7QUFDakIsZ0JBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQzs7QUFFZCxpQkFBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNqRCxrQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsa0JBQUksR0FBRyxDQUFDLFdBQVcsS0FBSyxFQUFFLEVBQUU7QUFDMUIsb0JBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLFdBQVcsRUFBQyxDQUFDLENBQUM7ZUFDdkQ7YUFDRjs7QUFFRCxtQkFBTyxJQUFJLENBQUM7V0FDYjs7O2lCQUVZLHlCQUFHO0FBQ2QsZ0JBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztXQUNoQjs7O2lCQUdNLG1CQUFHO0FBRVIsZ0JBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDOztBQUUzQixnQkFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQ3RGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUVmLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1dBRW5DOzs7aUJBRU0sbUJBQUc7OztBQUNSLGdCQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFDWixNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7O0FBRXZELGdCQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7QUFHeEIsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOztBQUdwQixnQkFBSSxDQUFDLElBQUksQ0FBQztBQUNSLHFCQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87QUFDckIsb0JBQU0sRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDO0FBQzVELHVCQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2FBQ25DLENBQUMsQ0FDQyxJQUFJLENBQUMsVUFBQyxNQUFNLEVBQUs7QUFHaEIscUJBQUssWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUUxQixxQkFBSyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3RCLEVBQUUsVUFBQyxNQUFNLEVBQUs7QUFFYixrQkFBSSxPQUFLLFdBQVcsRUFDbEIsT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRTNCLHFCQUFLLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDdEIsQ0FBQyxDQUFDO1dBQ047OztpQkFFVyxzQkFBQyxNQUFNLEVBQUU7QUFHbkIsZ0JBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7O0FBSXZCLGdCQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7QUFFdkYsa0JBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztBQUN6QixrQkFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakMsTUFBTTtBQUNMLGtCQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDeEIsa0JBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hDOztBQUVELGdCQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7O0FBSTFCLGdCQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7V0FDcEI7OztpQkFFYywyQkFBRzs7O0FBRWhCLGdCQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzs7QUFHM0IsZ0JBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUVqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQ3JDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDNUIsU0FBUyxDQUFDLFVBQUMsT0FBTyxFQUFLO0FBQ3RCLHVCQUFLLE9BQU8sRUFBRSxDQUFDO2VBQ2hCLENBQUMsQ0FBQztXQUNSOzs7aUJBRWtCLCtCQUFHO0FBQ3BCLGdCQUFJLElBQUksQ0FBQyxZQUFZLEVBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztXQUN2Qjs7O2lCQUlLLGdCQUFDLElBQUksRUFBRTtBQUNYLGdCQUFJLElBQUksQ0FBQyxVQUFVLEVBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1dBQzVCOzs7aUJBR21CLGdDQUFHO0FBQ3JCLGdCQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsS0FBSyxFQUFFLENBQUM7V0FDcEQ7OztpQkFFZ0IsNkJBQUc7QUFHbEIsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7O0FBRXpELGdCQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZCLGtCQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUNoRSxNQUFNO0FBQ0wsa0JBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0I7V0FDRjs7O29CQTdjVSxJQUFJO0FBQUosWUFBSSxHQURoQixNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FDOUIsSUFBSSxLQUFKLElBQUk7QUFBSixZQUFJLEdBRmhCLHFCQUFxQixFQUFFLENBRVgsSUFBSSxLQUFKLElBQUk7QUFBSixZQUFJLEdBSGhCLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FHVCxJQUFJLEtBQUosSUFBSTtlQUFKLElBQUk7OztzQkFBSixJQUFJIiwiZmlsZSI6ImdyaWQvZ3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGluamVjdCwgc2tpcENvbnRlbnRQcm9jZXNzaW5nLCBPYnNlcnZlckxvY2F0b3IsIGN1c3RvbUVsZW1lbnQgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0dyaWRDb2x1bW59IGZyb20gJy4vZ3JpZC1jb2x1bW4nO1xuaW1wb3J0IHtDb21waWxlcn0gZnJvbSAnZ29veS9hdXJlbGlhLWNvbXBpbGVyJztcbmltcG9ydCAnLi9hdXJlbGlhLWJzLWdyaWQuY3NzISc7XG5cbkBjdXN0b21FbGVtZW50KCdncmlkJylcbkBza2lwQ29udGVudFByb2Nlc3NpbmcoKVxuQGluamVjdChFbGVtZW50LCBDb21waWxlciwgT2JzZXJ2ZXJMb2NhdG9yKVxuZXhwb3J0IGNsYXNzIEdyaWQge1xuXG4gIC8qID09IFN0eWxpbmcgPT0gKi9cbiAgQGJpbmRhYmxlIGdyaWRIZWlnaHQgPSAwO1xuXG4gIC8qID09IE9wdGlvbnMgPT0gKi9cblxuICAvLyBJbml0aWFsIGxvYWQgZmxhZyAoZm9yIGNsaWVudCBzaWRlKVxuICBAYmluZGFibGUgaW5pdGlhbExvYWQgPSBmYWxzZTtcblxuICAvLyBGaWx0ZXJpbmdcbiAgQGJpbmRhYmxlIHNob3dDb2x1bW5GaWx0ZXJzID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBzZXJ2ZXJGaWx0ZXJpbmcgPSBmYWxzZTtcblxuICAvLyBQYWdpbmF0aW9uXG4gIEBiaW5kYWJsZSBzZXJ2ZXJQYWdpbmcgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIHBhZ2VhYmxlID0gdHJ1ZTtcbiAgQGJpbmRhYmxlIHBhZ2VTaXplID0gMTA7XG4gIEBiaW5kYWJsZSBwYWdlID0gMTtcbiAgQGJpbmRhYmxlIHBhZ2VyU2l6ZSA9IDEwO1xuXG4gIEBiaW5kYWJsZSBzaG93Rmlyc3RMYXN0QnV0dG9ucyA9IHRydWU7XG4gIEBiaW5kYWJsZSBzaG93SnVtcEJ1dHRvbnMgPSB0cnVlO1xuXG4gIEBiaW5kYWJsZSBwYWdlU2l6ZXMgPSBbMTAsIDI1LCA1MF07XG5cbiAgZmlyc3RWaXNpYmxlSXRlbSA9IDA7XG4gIGxhc3RWaXNpYmxlSXRlbSA9IDA7XG5cbiAgcGFnZU51bWJlciA9IDE7XG5cblxuICAvLyBTb3J0aW5hdGlvblxuICBAYmluZGFibGUgc2VydmVyU29ydGluZyA9IGZhbHNlO1xuICBAYmluZGFibGUgc29ydGFibGUgPSB0cnVlO1xuICBzb3J0UHJvY2Vzc2luZ09yZGVyID0gW107IC8vIFJlcHJlc2VudHMgd2hpY2ggb3JkZXIgdG8gYXBwbHkgc29ydHMgdG8gZWFjaCBjb2x1bW5cbiAgc29ydGluZyA9IHt9O1xuXG4gIC8vIEJ1cm5pbmF0aW9uP1xuICBUcm9nZG9yID0gdHJ1ZTtcblxuICAvLyBDb2x1bW4gZGVmc1xuICBAYmluZGFibGUgYXV0b0dlbmVyYXRlQ29sdW1ucztcbiAgY29sdW1uSGVhZGVycyA9IFtdO1xuICBjb2x1bW5zID0gW107XG5cbiAgLy8gU2VsZWN0aW9uXG4gIEBiaW5kYWJsZSBzZWxlY3RhYmxlID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBzZWxlY3RlZEl0ZW0gPSBudWxsO1xuXG4gIC8vIE1pc2NcbiAgQGJpbmRhYmxlIG5vUm93c01lc3NhZ2UgPSBcIlwiO1xuXG4gIC8vIERhdGEgLi4uLlxuICBAYmluZGFibGUgYXV0b0xvYWQgPSB0cnVlO1xuICBsb2FkaW5nID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBsb2FkaW5nTWVzc2FnZSA9IFwiTG9hZGluZy4uLlwiO1xuXG4gIC8vIFJlYWRcbiAgQGJpbmRhYmxlIHJlYWQgPSBudWxsO1xuICBAYmluZGFibGUgb25SZWFkRXJyb3IgPSBudWxsO1xuXG4gIC8vIFRyYWNraW5nXG4gIGNhY2hlID0gW107XG4gIGRhdGEgPSBbXTtcbiAgY291bnQgPSAwO1xuXG4gIC8vIFN1YnNjcmlwdGlvbiBoYW5kbGluZ1xuICB1bmJpbmRpbmcgPSBmYWxzZTtcblxuICAvLyBWaXN1YWxcbiAgLy8gVE9ETzogY2FsYyBzY3JvbGxiYXIgd2lkdGggdXNpbmcgYnJvd3NlclxuICBzY3JvbGxCYXJXaWR0aCA9IDE2O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbXBpbGVyLCBvYnNlcnZlckxvY2F0b3IpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY29tcGlsZXIgPSBjb21waWxlcjtcbiAgICB0aGlzLm9ic2VydmVyTG9jYXRvciA9IG9ic2VydmVyTG9jYXRvcjtcblxuICAgIC8vIEdyYWIgdXNlciB0ZW1wbGF0ZSBmcm9tIGVsZW1lbnRcbiAgICB0aGlzLnByb2Nlc3NVc2VyVGVtcGxhdGUoKTtcbiAgfVxuXG4gIHByb2Nlc3NVc2VyVGVtcGxhdGUoKSB7XG5cbiAgICAvLyBHZXQgYW55IGNvbCB0YWdzIGZyb20gdGhlIGNvbnRlbnRcbiAgICB2YXIgcm93RWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZ3JpZC1yb3dcIik7XG4gICAgdmFyIGNvbHVtbkVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocm93RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZ3JpZC1jb2xcIikpO1xuXG4gICAgY29sdW1uRWxlbWVudHMuZm9yRWFjaChjID0+IHtcblxuICAgICAgdmFyIGF0dHJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYy5hdHRyaWJ1dGVzKSwgY29sSGFzaCA9IHt9O1xuICAgICAgYXR0cnMuZm9yRWFjaChhID0+IGNvbEhhc2hbYS5uYW1lXSA9IGEudmFsdWUpO1xuXG4gICAgICB2YXIgY29sID0gbmV3IEdyaWRDb2x1bW4oY29sSGFzaCwgYy5pbm5lckhUTUwpO1xuXG4gICAgICB0aGlzLmFkZENvbHVtbihjb2wpO1xuICAgIH0pO1xuXG4gICAgLy8gUHVsbCBhbnkgcm93IGF0dHJzIGludG8gYSBoYXNoIG9iamVjdFxuICAgIHRoaXMucm93QXR0cnMgPSB7fTtcbiAgICB2YXIgYXR0cnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChyb3dFbGVtZW50LmF0dHJpYnV0ZXMpO1xuICAgIGF0dHJzLmZvckVhY2goYSA9PiB0aGlzLnJvd0F0dHJzW2EubmFtZV0gPSBhLnZhbHVlKTtcblxuICAgIC8vIFJlbW92ZSBhbGwgY2hpbGRyZW5cbiAgICB3aGlsZSAodGhpcy5lbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMClcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQuY2hpbGROb2Rlc1swXSk7XG4gIH1cblxuICAvKiA9PT0gTGlmZWN5Y2xlID09PSAqL1xuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmdyaWRIZWlnaHRDaGFuZ2VkKCk7XG5cbiAgICBpZiAodGhpcy5hdXRvTG9hZClcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgYmluZChleGVjdXRpb25Db250ZXh0KSB7XG5cbiAgICB0aGlzW1wiJHBhcmVudFwiXSA9IGV4ZWN1dGlvbkNvbnRleHQ7XG5cbiAgICAvLyBFbnN1cmUgdGhlIGdyaWQgc2V0dGluZ3NcbiAgICAvLyBJZiB3ZSBjYW4gcGFnZSBvbiB0aGUgc2VydmVyIGFuZCB3ZSBjYW4ndCBzZXJ2ZXIgc29ydCwgd2UgY2FuJ3Qgc29ydCBsb2NhbGx5XG4gICAgaWYgKHRoaXMuc2VydmVyUGFnaW5nICYmICF0aGlzLnNlcnZlclNvcnRpbmcpXG4gICAgICB0aGlzLnNvcnRhYmxlID0gZmFsc2U7XG5cbiAgICAvLyBCdWlsZCB0aGUgcm93cyB0aGVuIGR5bmFtaWNhbGx5IGNvbXBpbGUgdGhlIHRhYmxlXG4gICAgLy8gR2V0IHRoZSB0YWJsZS4uLlxuICAgIHZhciB0YWJsZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidGFibGU+dGJvZHlcIik7XG4gICAgdmFyIHJvd1RlbXBsYXRlID0gdGFibGUucXVlcnlTZWxlY3RvcihcInRyXCIpO1xuXG4gICAgLy8gQ3JlYXRlIGEgZnJhZ21lbnQgd2Ugd2lsbCBtYW5pcHVsYXRlIHRoZSBET00gaW5cbiAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICAvLyBNb3ZlIHRoZSByb3cgdGVtcGxhdGUgdG8gdGhlIGZyYWdtZW50XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQocm93VGVtcGxhdGUpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSByZXBlYXRlclxuICAgIHJvd1RlbXBsYXRlLnNldEF0dHJpYnV0ZShcInJlcGVhdC5mb3JcIiwgXCIkaXRlbSBvZiBkYXRhXCIpO1xuICAgIHJvd1RlbXBsYXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiJHsgJGl0ZW0gPT09ICRwYXJlbnQuc2VsZWN0ZWRJdGVtID8gJ2luZm8nIDogJycgfVwiKTtcblxuICAgIC8vIENvcHkgYW55IHVzZXIgc3BlY2lmaWVkIHJvdyBhdHRyaWJ1dGVzIHRvIHRoZSByb3cgdGVtcGxhdGVcbiAgICBmb3IgKHZhciBwcm9wIGluIHRoaXMucm93QXR0cnMpIHtcbiAgICAgIGlmICh0aGlzLnJvd0F0dHJzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIHJvd1RlbXBsYXRlLnNldEF0dHJpYnV0ZShwcm9wLCB0aGlzLnJvd1RlbXBsYXRlW3Byb3BdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgdGhlIGNvbHVtbnNcbiAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjID0+IHtcbiAgICAgIHZhciB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICAgIGZvciAodmFyIHByb3AgaW4gYykge1xuICAgICAgICBpZiAoYy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuXG4gICAgICAgICAgaWYgKHByb3AgPT0gXCJ0ZW1wbGF0ZVwiKVxuICAgICAgICAgICAgdGQuaW5uZXJIVE1MID0gY1twcm9wXTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB0ZC5zZXRBdHRyaWJ1dGUocHJvcCwgY1twcm9wXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcm93VGVtcGxhdGUuYXBwZW5kQ2hpbGQodGQpO1xuICAgIH0pO1xuXG4gICAgLy8gQ29tcGlsZVxuICAgIHRoaXMuY29tcGlsZXIuY29tcGlsZSh0YWJsZSwgdGhpcywgdW5kZWZpbmVkLCBmcmFnbWVudCk7XG5cbiAgICAvLyBIQUNLOiB3aHkgaXMgdGhlIGNoYW5nZSBoYW5kbGVyIG5vdCBmaXJpbmcgZm9yIG5vUm93c01lc3NhZ2U/XG4gICAgdGhpcy5ub1Jvd3NNZXNzYWdlQ2hhbmdlZCgpO1xuICB9XG5cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMudW5iaW5kaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmRvbnRXYXRjaEZvckNoYW5nZXMoKTtcbiAgfVxuXG4gIC8qID09PSBDb2x1bW4gaGFuZGxpbmcgPT09ICovXG4gIGFkZENvbHVtbihjb2wpIHtcblxuICAgIC8vIE5vLXNvcnQgaWYgZ3JpZCBpcyBub3Qgc29ydGFibGVcbiAgICBpZiAoIXRoaXMuc29ydGFibGUpXG4gICAgICBjb2wubm9zb3J0ID0gdHJ1ZTtcblxuICAgIHRoaXMuY29sdW1ucy5wdXNoKGNvbCk7XG4gIH1cblxuICAvKiA9PT0gUGFnaW5nID09PSAqL1xuICBwYWdlQ2hhbmdlZChwYWdlKSB7XG4gICAgdGhpcy5wYWdlTnVtYmVyID0gTnVtYmVyKHBhZ2UpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgcGFnZVNpemVDaGFuZ2VkKCkge1xuICAgIHRoaXMucGFnZUNoYW5nZWQoMSk7XG4gICAgdGhpcy51cGRhdGVQYWdlcigpO1xuICB9XG5cbiAgZmlsdGVyU29ydFBhZ2UoZGF0YSkge1xuICAgIC8vIEFwcGxpZXMgZmlsdGVyLCBzb3J0IHRoZW4gcGFnZVxuICAgIC8vIDEuIEZpcnN0IGZpbHRlciB0aGUgZGF0YSBkb3duIHRvIHRoZSBzZXQgd2Ugd2FudCwgaWYgd2UgYXJlIHVzaW5nIGxvY2FsIGRhdGFcbiAgICB2YXIgdGVtcERhdGEgPSBkYXRhO1xuXG4gICAgaWYgKHRoaXMuc2hvd0NvbHVtbkZpbHRlcnMgJiYgIXRoaXMuc2VydmVyRmlsdGVyaW5nKVxuICAgICAgdGVtcERhdGEgPSB0aGlzLmFwcGx5RmlsdGVyKHRlbXBEYXRhKTtcblxuICAgIC8vIENvdW50IHRoZSBkYXRhIG5vdyBiZWZvcmUgdGhlIHNvcnQvcGFnZVxuICAgIHRoaXMuY291bnQgPSB0ZW1wRGF0YS5sZW5ndGg7XG5cbiAgICAvLyAyLiBOb3cgc29ydCB0aGUgZGF0YVxuICAgIGlmICh0aGlzLnNvcnRhYmxlICYmICF0aGlzLnNlcnZlclNvcnRpbmcpXG4gICAgICB0ZW1wRGF0YSA9IHRoaXMuYXBwbHlTb3J0KHRlbXBEYXRhKTtcblxuICAgIC8vIDMuIE5vdyBhcHBseSBwYWdpbmdcbiAgICBpZiAodGhpcy5wYWdlYWJsZSAmJiAhdGhpcy5zZXJ2ZXJQYWdpbmcpXG4gICAgICB0ZW1wRGF0YSA9IHRoaXMuYXBwbHlQYWdlKHRlbXBEYXRhKTtcblxuICAgIHRoaXMuZGF0YSA9IHRlbXBEYXRhO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlcigpO1xuXG4gICAgdGhpcy53YXRjaEZvckNoYW5nZXMoKTtcbiAgfVxuXG4gIGFwcGx5UGFnZShkYXRhKSB7XG4gICAgdmFyIHN0YXJ0ID0gKE51bWJlcih0aGlzLnBhZ2VOdW1iZXIpIC0gMSkgKiBOdW1iZXIodGhpcy5wYWdlU2l6ZSk7XG4gICAgZGF0YSA9IGRhdGEuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgTnVtYmVyKHRoaXMucGFnZVNpemUpKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cblxuICB1cGRhdGVQYWdlcigpIHtcbiAgICBpZiAodGhpcy5wYWdlcilcbiAgICAgIHRoaXMucGFnZXIudXBkYXRlKHRoaXMucGFnZU51bWJlciwgTnVtYmVyKHRoaXMucGFnZVNpemUpLCBOdW1iZXIodGhpcy5jb3VudCkpO1xuXG4gICAgdGhpcy5maXJzdFZpc2libGVJdGVtID0gKHRoaXMucGFnZU51bWJlciAtIDEpICogTnVtYmVyKHRoaXMucGFnZVNpemUpICsgMTtcbiAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbSA9ICh0aGlzLnBhZ2VOdW1iZXIpICogTnVtYmVyKHRoaXMucGFnZVNpemUpO1xuICB9XG5cbiAgLyogPT09IFNvcnRpbmcgPT09ICovXG4gIGZpZWxkU29ydGVyKGZpZWxkcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZpZWxkc1xuICAgICAgICAubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgdmFyIGRpciA9IDE7XG4gICAgICAgICAgaWYgKG9bMF0gPT09ICctJykge1xuICAgICAgICAgICAgZGlyID0gLTE7XG4gICAgICAgICAgICBvID0gby5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhW29dID4gYltvXSkgcmV0dXJuIGRpcjtcbiAgICAgICAgICBpZiAoYVtvXSA8IGJbb10pIHJldHVybiAtKGRpcik7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gZmlyc3ROb25aZXJvVmFsdWUocCwgbikge1xuICAgICAgICAgIHJldHVybiBwID8gcCA6IG47XG4gICAgICAgIH0sIDApO1xuICAgIH07XG4gIH1cblxuICBwYWdlU2l6ZXNDaGFuZ2VkKCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgc29ydENoYW5nZWQoZmllbGQpIHtcblxuICAgIC8vIERldGVybWluZSBuZXcgc29ydFxuICAgIHZhciBuZXdTb3J0ID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gRmlndXJlIG91dCB3aGljaCB3YXkgdGhpcyBmaWVsZCBzaG91bGQgYmUgc29ydGluZ1xuICAgIHN3aXRjaCAodGhpcy5zb3J0aW5nW2ZpZWxkXSkge1xuICAgICAgY2FzZSBcImFzY1wiOlxuICAgICAgICBuZXdTb3J0ID0gXCJkZXNjXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRlc2NcIjpcbiAgICAgICAgbmV3U29ydCA9IFwiXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbmV3U29ydCA9IFwiYXNjXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuc29ydGluZ1tmaWVsZF0gPSBuZXdTb3J0O1xuXG4gICAgLy8gSWYgdGhlIHNvcnQgaXMgcHJlc2VudCBpbiB0aGUgc29ydCBzdGFjaywgc2xpY2UgaXQgdG8gdGhlIGJhY2sgb2YgdGhlIHN0YWNrLCBvdGhlcndpc2UganVzdCBhZGQgaXRcbiAgICB2YXIgcG9zID0gdGhpcy5zb3J0UHJvY2Vzc2luZ09yZGVyLmluZGV4T2YoZmllbGQpO1xuXG4gICAgaWYgKHBvcyA+IC0xKVxuICAgICAgdGhpcy5zb3J0UHJvY2Vzc2luZ09yZGVyLnNwbGljZShwb3MsIDEpO1xuXG4gICAgdGhpcy5zb3J0UHJvY2Vzc2luZ09yZGVyLnB1c2goZmllbGQpO1xuXG4gICAgLy8gQXBwbHkgdGhlIG5ldyBzb3J0XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBhcHBseVNvcnQoZGF0YSkge1xuXG4gICAgLy8gRm9ybWF0IHRoZSBzb3J0IGZpZWxkc1xuICAgIHZhciBmaWVsZHMgPSBbXTtcblxuICAgIC8vIEdldCB0aGUgZmllbGRzIGluIHRoZSBcInNvcnRpbmdPUmRlclwiXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNvcnRQcm9jZXNzaW5nT3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3J0ID0gdGhpcy5zb3J0UHJvY2Vzc2luZ09yZGVyW2ldO1xuXG4gICAgICBmb3IgKHZhciBwcm9wIGluIHRoaXMuc29ydGluZykge1xuICAgICAgICBpZiAoc29ydCA9PSBwcm9wICYmIHRoaXMuc29ydGluZ1twcm9wXSAhPT0gXCJcIilcbiAgICAgICAgICBmaWVsZHMucHVzaCh0aGlzLnNvcnRpbmdbcHJvcF0gPT09IFwiYXNjXCIgPyAocHJvcCkgOiAoXCItXCIgKyBwcm9wKSk7XG4gICAgICB9XG4gICAgfVxuICAgIDtcblxuXG4gICAgLy8gSWYgc2VydmVyIHNvcnQsIGp1c3QgcmVmcmVzaFxuICAgIGRhdGEgPSBkYXRhLnNvcnQodGhpcy5maWVsZFNvcnRlcihmaWVsZHMpKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyogPT09IEZpbHRlcmluZyA9PT0gKi9cbiAgYXBwbHlGaWx0ZXIoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLmZpbHRlcigocm93KSA9PiB7XG4gICAgICB2YXIgaW5jbHVkZSA9IHRydWU7XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLmNvbHVtbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIGNvbCA9IHRoaXMuY29sdW1uc1tpXTtcblxuICAgICAgICBpZiAoY29sLmZpbHRlclZhbHVlICE9PSBcIlwiICYmIHJvd1tjb2wuZmllbGRdLnRvU3RyaW5nKCkuaW5kZXhPZihjb2wuZmlsdGVyVmFsdWUpID09PSAtMSkge1xuICAgICAgICAgIGluY2x1ZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5jbHVkZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEZpbHRlckNvbHVtbnMoKSB7XG4gICAgdmFyIGNvbHMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSB0aGlzLmNvbHVtbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb2wgPSB0aGlzLmNvbHVtbnNbaV07XG5cbiAgICAgIGlmIChjb2wuZmlsdGVyVmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgY29scy5wdXNoKHtmaWVsZDogY29sLmZpZWxkLCB2YWx1ZTogY29sLmZpbHRlclZhbHVlfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbHM7XG4gIH1cblxuICB1cGRhdGVGaWx0ZXJzKCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyogPT09IERhdGEgPT09ICovXG4gIHJlZnJlc2goKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBhbnkgc2VydmVyIHNpZGUgc3R1ZmYgd2UgbmVlZCB0byBnZXQgdGhlIGRhdGEgZmlyc3RcbiAgICB0aGlzLmRvbnRXYXRjaEZvckNoYW5nZXMoKTtcblxuICAgIGlmICh0aGlzLnNlcnZlclBhZ2luZyB8fCB0aGlzLnNlcnZlclNvcnRpbmcgfHwgdGhpcy5zZXJ2ZXJGaWx0ZXJpbmcgfHwgIXRoaXMuaW5pdGlhbExvYWQpXG4gICAgICB0aGlzLmdldERhdGEoKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmZpbHRlclNvcnRQYWdlKHRoaXMuY2FjaGUpO1xuXG4gIH1cblxuICBnZXREYXRhKCkge1xuICAgIGlmICghdGhpcy5yZWFkKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVhZCBtZXRob2Qgc3BlY2lmaWVkIGZvciBncmlkXCIpO1xuXG4gICAgdGhpcy5pbml0aWFsTG9hZCA9IHRydWU7XG5cbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgcHJvZ3Jlc3MgaW5kaWNhdG9yXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgIC8vIFRyeSB0byByZWFkIGZyb20gdGhlIGRhdGEgYWRhcHRlclxuICAgIHRoaXMucmVhZCh7XG4gICAgICBzb3J0aW5nOiB0aGlzLnNvcnRpbmcsXG4gICAgICBwYWdpbmc6IHtwYWdlOiB0aGlzLnBhZ2VOdW1iZXIsIHNpemU6IE51bWJlcih0aGlzLnBhZ2VTaXplKX0sXG4gICAgICBmaWx0ZXJpbmc6IHRoaXMuZ2V0RmlsdGVyQ29sdW1ucygpXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcblxuICAgICAgICAvLyBEYXRhIHNob3VsZCBiZSBpbiB0aGUgcmVzdWx0IHNvIGdyYWIgaXQgYW5kIGFzc2lnbiBpdCB0byB0aGUgZGF0YSBwcm9wZXJ0eVxuICAgICAgICB0aGlzLmhhbmRsZVJlc3VsdChyZXN1bHQpO1xuXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAvLyBTb21ldGhpbmcgd2VudCB0ZXJyaWJseSB3cm9uZywgbm90aWZ5IHRoZSBjb25zdW1lclxuICAgICAgICBpZiAodGhpcy5vblJlYWRFcnJvcilcbiAgICAgICAgICB0aGlzLm9uUmVhZEVycm9yKHJlc3VsdCk7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVJlc3VsdChyZXN1bHQpIHtcblxuICAgIC8vIFRPRE86IENoZWNrIHZhbGlkIHN0dWZmIHdhcyByZXR1cm5lZFxuICAgIHZhciBkYXRhID0gcmVzdWx0LmRhdGE7XG5cbiAgICAvLyBJcyB0aGUgZGF0YSBiZWluZyBwYWdpbmF0ZWQgb24gdGhlIGNsaWVudCBzaWRlP1xuICAgIC8vIFRPRE86IFdvcmsgb3V0IHdoZW4gd2Ugc2hvdWxkIHdlIHVzZSB0aGUgY2FjaGUuLi4gZXZlcj8gSWYgaXQncyBsb2NhbCBkYXRhXG4gICAgaWYgKHRoaXMucGFnZWFibGUgJiYgIXRoaXMuc2VydmVyUGFnaW5nICYmICF0aGlzLnNlcnZlclNvcnRpbmcgJiYgIXRoaXMuc2VydmVyRmlsdGVyaW5nKSB7XG4gICAgICAvLyBDYWNoZSB0aGUgZGF0YVxuICAgICAgdGhpcy5jYWNoZSA9IHJlc3VsdC5kYXRhO1xuICAgICAgdGhpcy5maWx0ZXJTb3J0UGFnZSh0aGlzLmNhY2hlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhID0gcmVzdWx0LmRhdGE7XG4gICAgICB0aGlzLmZpbHRlclNvcnRQYWdlKHRoaXMuZGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb3VudCA9IHJlc3VsdC5jb3VudDtcblxuICAgIC8vIFVwZGF0ZSB0aGUgcGFnZXIgLSBtYXliZSB0aGUgZ3JpZCBvcHRpb25zIHNob3VsZCBjb250YWluIGFuIHVwZGF0ZSBjYWxsYmFjayBpbnN0ZWFkIG9mIHJlZmZpbmcgdGhlXG4gICAgLy8gcGFnZXIgaW50byB0aGUgY3VycmVudCBWTT9cbiAgICB0aGlzLnVwZGF0ZVBhZ2VyKCk7XG4gIH1cblxuICB3YXRjaEZvckNoYW5nZXMoKSB7XG5cbiAgICB0aGlzLmRvbnRXYXRjaEZvckNoYW5nZXMoKTtcblxuICAgIC8vIEd1YXJkIGFnYWluc3QgZGF0YSByZWZyZXNoIGV2ZW50cyBoaXR0aW5nIGFmdGVyIHRoZSB1c2VyIGRvZXMgYW55dGhpbmcgdGhhdCB1bmxvYWRzIHRoZSBncmlkXG4gICAgaWYgKCF0aGlzLnVuYmluZGluZylcbiAgICAvLyBXZSBjYW4gdXBkYXRlIHRoZSBwYWdlciBhdXRvbWFnaWNhbGx5XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMub2JzZXJ2ZXJMb2NhdG9yXG4gICAgICAgIC5nZXRBcnJheU9ic2VydmVyKHRoaXMuY2FjaGUpXG4gICAgICAgIC5zdWJzY3JpYmUoKHNwbGljZXMpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgfSk7XG4gIH1cblxuICBkb250V2F0Y2hGb3JDaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbilcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uKCk7XG4gIH1cblxuICAvKiA9PT0gU2VsZWN0aW9uID09PSAqL1xuXG4gIHNlbGVjdChpdGVtKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0YWJsZSlcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgfVxuXG4gIC8qID09PSBDaGFuZ2UgaGFuZGxlcnMgPT09ICovXG4gIG5vUm93c01lc3NhZ2VDaGFuZ2VkKCkge1xuICAgIHRoaXMuc2hvd05vUm93c01lc3NhZ2UgPSB0aGlzLm5vUm93c01lc3NhZ2UgIT09IFwiXCI7XG4gIH1cblxuICBncmlkSGVpZ2h0Q2hhbmdlZCgpIHtcblxuICAgIC8vIFRPRE86IE1ha2UgdGhpcyBhIG9uZSBvZmZcbiAgICB2YXIgY29udCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWQtY29udGFpbmVyXCIpO1xuXG4gICAgaWYgKHRoaXMuZ3JpZEhlaWdodCA+IDApIHtcbiAgICAgIGNvbnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJoZWlnaHQ6XCIgKyB0aGlzLmdyaWRIZWlnaHQgKyBcInB4XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgIH1cbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=