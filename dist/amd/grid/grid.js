define(['exports', 'aurelia-framework', './grid-column', './aurelia-bs-grid.css!'], function (exports, _aureliaFramework, _gridColumn, _aureliaBsGridCss) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  var Grid = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(Grid, [{
      key: 'gridHeight',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return 0;
      },
      enumerable: true
    }, {
      key: 'initialLoad',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'filterDelay',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return 250;
      },
      enumerable: true
    }, {
      key: 'showColumnFilters',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'serverFiltering',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'serverPaging',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'pageable',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return true;
      },
      enumerable: true
    }, {
      key: 'pageSize',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return 10;
      },
      enumerable: true
    }, {
      key: 'page',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return 1;
      },
      enumerable: true
    }, {
      key: 'pagerSize',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return 10;
      },
      enumerable: true
    }, {
      key: 'showFirstLastButtons',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return true;
      },
      enumerable: true
    }, {
      key: 'showJumpButtons',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return true;
      },
      enumerable: true
    }, {
      key: 'pageSizes',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return [10, 25, 50];
      },
      enumerable: true
    }, {
      key: 'serverSorting',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'sortable',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return true;
      },
      enumerable: true
    }, {
      key: 'autoGenerateColumns',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'selectable',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'selectedItem',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'noRowsMessage',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return '';
      },
      enumerable: true
    }, {
      key: 'autoLoad',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return true;
      },
      enumerable: true
    }, {
      key: 'loadingMessage',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return 'Loading...';
      },
      enumerable: true
    }, {
      key: 'read',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'onReadError',
      decorators: [_aureliaFramework.bindable],
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

      debugger;
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

          var col = new _gridColumn.GridColumn(colHash, c.innerHTML, _this);

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

        if (!viewSlot) viewSlot = new _aureliaFramework.ViewSlot(element, true);

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
    Grid = (0, _aureliaFramework.inject)(Element, _aureliaFramework.ObserverLocator, _aureliaFramework.ViewCompiler, _aureliaFramework.ViewResources, _aureliaFramework.Container)(Grid) || Grid;
    Grid = (0, _aureliaFramework.processContent)(false)(Grid) || Grid;
    Grid = (0, _aureliaFramework.customElement)('grid')(Grid) || Grid;
    return Grid;
  })();

  exports.Grid = Grid;
});
//# sourceMappingURL=data:application/json;base64,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QyxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ2hFLE1BQU07QUFDTCxjQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9CO09BQ0Y7OztnQkEzZ0JVLElBQUk7QUFBSixRQUFJLEdBRGhCLHNCQU5pQixNQUFNLEVBTWhCLE9BQU8sb0JBTjJCLGVBQWUsb0JBQWlCLFlBQVksb0JBQUUsYUFBYSxvQkFBRSxTQUFTLENBTXZDLENBQzVELElBQUksS0FBSixJQUFJO0FBQUosUUFBSSxHQUZoQixzQkFMeUIsY0FBYyxFQUt4QixLQUFLLENBQUMsQ0FFVCxJQUFJLEtBQUosSUFBSTtBQUFKLFFBQUksR0FIaEIsc0JBSjBELGFBQWEsRUFJekQsTUFBTSxDQUFDLENBR1QsSUFBSSxLQUFKLElBQUk7V0FBSixJQUFJOzs7VUFBSixJQUFJLEdBQUosSUFBSSIsImZpbGUiOiJncmlkL2dyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBpbmplY3QsIHByb2Nlc3NDb250ZW50LCBPYnNlcnZlckxvY2F0b3IsIGN1c3RvbUVsZW1lbnQsIFZpZXdDb21waWxlciwgVmlld1Jlc291cmNlcywgQ29udGFpbmVyLCBWaWV3U2xvdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtHcmlkQ29sdW1ufSBmcm9tICcuL2dyaWQtY29sdW1uJztcbmltcG9ydCAnLi9hdXJlbGlhLWJzLWdyaWQuY3NzISc7XG5cbkBjdXN0b21FbGVtZW50KCdncmlkJylcbkBwcm9jZXNzQ29udGVudChmYWxzZSlcbkBpbmplY3QoRWxlbWVudCwgT2JzZXJ2ZXJMb2NhdG9yLCBWaWV3Q29tcGlsZXIsIFZpZXdSZXNvdXJjZXMsIENvbnRhaW5lcilcbmV4cG9ydCBjbGFzcyBHcmlkIHtcbiAgLyogPT0gU3R5bGluZyA9PSAqL1xuICBAYmluZGFibGUgZ3JpZEhlaWdodCA9IDA7XG5cbiAgLyogPT0gT3B0aW9ucyA9PSAqL1xuXG4gIC8vIEluaXRpYWwgbG9hZCBmbGFnIChmb3IgY2xpZW50IHNpZGUpXG4gIEBiaW5kYWJsZSBpbml0aWFsTG9hZCA9IGZhbHNlO1xuXG4gIC8vIEZpbHRlcmluZ1xuICB1cGRhdGVGaWx0ZXJzU2V0VGltZW91dCA9IHVuZGVmaW5lZDtcbiAgQGJpbmRhYmxlIGZpbHRlckRlbGF5ID0gMjUwO1xuICBAYmluZGFibGUgc2hvd0NvbHVtbkZpbHRlcnMgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIHNlcnZlckZpbHRlcmluZyA9IGZhbHNlO1xuXG4gIC8vIFBhZ2luYXRpb25cbiAgQGJpbmRhYmxlIHNlcnZlclBhZ2luZyA9IGZhbHNlO1xuICBAYmluZGFibGUgcGFnZWFibGUgPSB0cnVlO1xuICBAYmluZGFibGUgcGFnZVNpemUgPSAxMDtcbiAgQGJpbmRhYmxlIHBhZ2UgPSAxO1xuICBAYmluZGFibGUgcGFnZXJTaXplID0gMTA7XG5cbiAgQGJpbmRhYmxlIHNob3dGaXJzdExhc3RCdXR0b25zID0gdHJ1ZTtcbiAgQGJpbmRhYmxlIHNob3dKdW1wQnV0dG9ucyA9IHRydWU7XG5cbiAgQGJpbmRhYmxlIHBhZ2VTaXplcyA9IFsxMCwgMjUsIDUwXTtcblxuICBmaXJzdFZpc2libGVJdGVtID0gMDtcbiAgbGFzdFZpc2libGVJdGVtID0gMDtcblxuICBwYWdlTnVtYmVyID0gMTtcblxuXG4gIC8vIFNvcnRpbmF0aW9uXG4gIEBiaW5kYWJsZSBzZXJ2ZXJTb3J0aW5nID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBzb3J0YWJsZSA9IHRydWU7XG4gIHNvcnRQcm9jZXNzaW5nT3JkZXIgPSBbXTsgLy8gUmVwcmVzZW50cyB3aGljaCBvcmRlciB0byBhcHBseSBzb3J0cyB0byBlYWNoIGNvbHVtblxuICBzb3J0aW5nID0gW107XG5cbiAgLy8gQ29sdW1uIGRlZnNcbiAgQGJpbmRhYmxlIGF1dG9HZW5lcmF0ZUNvbHVtbnM7XG4gIGNvbHVtbkhlYWRlcnMgPSBbXTtcbiAgY29sdW1ucyA9IFtdO1xuXG4gIC8vIFNlbGVjdGlvblxuICBAYmluZGFibGUgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICBAYmluZGFibGUgc2VsZWN0ZWRJdGVtID0gbnVsbDtcblxuICAvLyBNaXNjXG4gIEBiaW5kYWJsZSBub1Jvd3NNZXNzYWdlID0gJyc7XG5cbiAgLy8gRGF0YSAuLi4uXG4gIEBiaW5kYWJsZSBhdXRvTG9hZCA9IHRydWU7XG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIGxvYWRpbmdNZXNzYWdlID0gJ0xvYWRpbmcuLi4nO1xuXG4gIC8vIFJlYWRcbiAgQGJpbmRhYmxlIHJlYWQgPSBudWxsO1xuICBAYmluZGFibGUgb25SZWFkRXJyb3IgPSBudWxsO1xuXG4gIC8vIFRyYWNraW5nXG4gIGNhY2hlID0gW107XG4gIGRhdGEgPSBbXTtcbiAgY291bnQgPSAwO1xuXG4gIC8vIFN1YnNjcmlwdGlvbiBoYW5kbGluZ1xuICB1bmJpbmRpbmcgPSBmYWxzZTtcblxuICAvLyBWaXN1YWxcbiAgLy8gVE9ETzogY2FsYyBzY3JvbGxiYXIgd2lkdGggdXNpbmcgYnJvd3NlclxuICBzY3JvbGxCYXJXaWR0aCA9IDE2O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9ic2VydmVyTG9jYXRvciwgdmlld0NvbWlsZXIsIHJlc291cmNlcywgY29udGFpbmVyKSB7XG4gICAgZGVidWdnZXI7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9ic2VydmVyTG9jYXRvciA9IG9ic2VydmVyTG9jYXRvcjtcbiAgICB0aGlzLnZpZXdDb21waWxlciA9IHZpZXdDb21pbGVyO1xuICAgIHRoaXMucmVzb3VyY2VzID0gcmVzb3VyY2VzO1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgLy8gR3JhYiB1c2VyIHRlbXBsYXRlIGZyb20gZWxlbWVudFxuICAgIHRoaXMucHJvY2Vzc1VzZXJUZW1wbGF0ZSgpO1xuICB9XG5cbiAgcHJvY2Vzc1VzZXJUZW1wbGF0ZSgpIHtcbiAgICAvLyBHZXQgYW55IGNvbCB0YWdzIGZyb20gdGhlIGNvbnRlbnRcbiAgICB2YXIgcm93RWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdncmlkLXJvdycpO1xuICAgIHZhciBjb2x1bW5FbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHJvd0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZ3JpZC1jb2wnKSk7XG5cbiAgICBjb2x1bW5FbGVtZW50cy5mb3JFYWNoKGMgPT4ge1xuICAgICAgdmFyIGF0dHJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYy5hdHRyaWJ1dGVzKTtcbiAgICAgIHZhciBjb2xIYXNoID0gYXR0cnMucmVkdWNlKChtYXAsIGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICBtYXBbYXR0cmlidXRlLm5hbWVdID0gYXR0cmlidXRlLnZhbHVlO1xuICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgfSwge30pO1xuXG4gICAgICB2YXIgY29sID0gbmV3IEdyaWRDb2x1bW4oY29sSGFzaCwgYy5pbm5lckhUTUwsIHRoaXMpO1xuXG4gICAgICB0aGlzLmFkZENvbHVtbihjb2wpO1xuICAgIH0pO1xuXG4gICAgLy8gUHVsbCBhbnkgcm93IGF0dHJzIGludG8gYSBoYXNoIG9iamVjdFxuICAgIHRoaXMucm93QXR0cnMgPSB7fTtcbiAgICB2YXIgYXR0cnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChyb3dFbGVtZW50LmF0dHJpYnV0ZXMpO1xuICAgIGF0dHJzLmZvckVhY2goYSA9PiB0aGlzLnJvd0F0dHJzW2EubmFtZV0gPSBhLnZhbHVlKTtcblxuICAgIC8vIFJlbW92ZSBhbGwgY2hpbGRyZW5cbiAgICB3aGlsZSAodGhpcy5lbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMClcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQuY2hpbGROb2Rlc1swXSk7XG4gIH1cblxuICBjb21waWxlKGVsZW1lbnQsIGN0eCA9IG51bGwsdmlld1Nsb3QgPSBudWxsLHRlbXBsYXRlT3JGcmFnbWVudD1udWxsKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhdS10YXJnZXQnKTtcblxuICAgIGlmKCF0ZW1wbGF0ZU9yRnJhZ21lbnQpe1xuICAgICAgdmFyIHRlbXBsYXRlT3JGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgIHZhciBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGMuaW5uZXJIVE1MID0gZWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB0ZW1wbGF0ZU9yRnJhZ21lbnQuYXBwZW5kQ2hpbGQoYyk7XG4gICAgfVxuICAgIHZhciB2aWV3ID0gdGhpcy52aWV3Q29tcGlsZXIuY29tcGlsZSh0ZW1wbGF0ZU9yRnJhZ21lbnQsIHRoaXMucmVzb3VyY2VzKS5jcmVhdGUodGhpcy5jb250YWluZXIsIGN0eCk7XG5cbiAgICBpZighdmlld1Nsb3QpIHZpZXdTbG90ID0gbmV3IFZpZXdTbG90KGVsZW1lbnQsIHRydWUpO1xuXG4gICAgdmlld1Nsb3QuYWRkKHZpZXcpO1xuICAgIHZpZXdTbG90LmF0dGFjaGVkKCk7XG4gIH1cblxuICAvKiA9PT0gTGlmZWN5Y2xlID09PSAqL1xuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmdyaWRIZWlnaHRDaGFuZ2VkKCk7XG5cbiAgICBpZiAodGhpcy5hdXRvTG9hZCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG5cbiAgYmluZChleGVjdXRpb25Db250ZXh0KSB7XG5cbiAgICB0aGlzWyckcGFyZW50J10gPSBleGVjdXRpb25Db250ZXh0O1xuXG4gICAgLy8gRW5zdXJlIHRoZSBncmlkIHNldHRpbmdzXG4gICAgLy8gSWYgd2UgY2FuIHBhZ2Ugb24gdGhlIHNlcnZlciBhbmQgd2UgY2FuJ3Qgc2VydmVyIHNvcnQsIHdlIGNhbid0IHNvcnQgbG9jYWxseVxuICAgIGlmICh0aGlzLnNlcnZlclBhZ2luZyAmJiAhdGhpcy5zZXJ2ZXJTb3J0aW5nKSB7XG4gICAgICB0aGlzLnNvcnRhYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQnVpbGQgdGhlIHJvd3MgdGhlbiBkeW5hbWljYWxseSBjb21waWxlIHRoZSB0YWJsZVxuICAgIC8vIEdldCB0aGUgdGFibGUuLi5cbiAgICB2YXIgdGFibGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcigndGFibGU+dGJvZHknKTtcbiAgICB2YXIgcm93VGVtcGxhdGUgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKCd0cicpO1xuXG4gICAgLy8gQ3JlYXRlIGEgZnJhZ21lbnQgd2Ugd2lsbCBtYW5pcHVsYXRlIHRoZSBET00gaW5cbiAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICAvLyBNb3ZlIHRoZSByb3cgdGVtcGxhdGUgdG8gdGhlIGZyYWdtZW50XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQocm93VGVtcGxhdGUpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSByZXBlYXRlclxuICAgIHJvd1RlbXBsYXRlLnNldEF0dHJpYnV0ZSgncmVwZWF0LmZvcicsICckaXRlbSBvZiBkYXRhJyk7XG4gICAgcm93VGVtcGxhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICckeyAkaXRlbSA9PT0gJHBhcmVudC5zZWxlY3RlZEl0ZW0gPyBcImluZm9cIiA6IFwiXCIgfScpO1xuXG4gICAgLy8gQ29weSBhbnkgdXNlciBzcGVjaWZpZWQgcm93IGF0dHJpYnV0ZXMgdG8gdGhlIHJvdyB0ZW1wbGF0ZVxuICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5yb3dBdHRycykge1xuICAgICAgaWYgKHRoaXMucm93QXR0cnMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgcm93VGVtcGxhdGUuc2V0QXR0cmlidXRlKHByb3AsIHRoaXMucm93QXR0cnNbcHJvcF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSB0aGUgY29sdW1uc1xuICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGMgPT4ge1xuICAgICAgdmFyIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblxuICAgICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICAgIGZvciAodmFyIHByb3AgaW4gYykge1xuICAgICAgICBpZiAoYy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuXG4gICAgICAgICAgaWYgKHByb3AgPT0gJ3RlbXBsYXRlJylcbiAgICAgICAgICAgIHRkLmlubmVySFRNTCA9IGNbcHJvcF07XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGQuc2V0QXR0cmlidXRlKHByb3AsIGNbcHJvcF0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJvd1RlbXBsYXRlLmFwcGVuZENoaWxkKHRkKTtcbiAgICB9KTtcblxuICAgIC8vIENvbXBpbGVcbiAgICB0aGlzLmNvbXBpbGUodGFibGUsIHRoaXMsIHVuZGVmaW5lZCwgZnJhZ21lbnQpO1xuXG4gICAgLy8gSEFDSzogd2h5IGlzIHRoZSBjaGFuZ2UgaGFuZGxlciBub3QgZmlyaW5nIGZvciBub1Jvd3NNZXNzYWdlP1xuICAgIHRoaXMubm9Sb3dzTWVzc2FnZUNoYW5nZWQoKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLnVuYmluZGluZyA9IHRydWU7XG4gICAgdGhpcy5kb250V2F0Y2hGb3JDaGFuZ2VzKCk7XG4gIH1cblxuICAvKiA9PT0gQ29sdW1uIGhhbmRsaW5nID09PSAqL1xuICBhZGRDb2x1bW4oY29sKSB7XG5cbiAgICAvLyBOby1zb3J0IGlmIGdyaWQgaXMgbm90IHNvcnRhYmxlXG4gICAgaWYgKCF0aGlzLnNvcnRhYmxlKVxuICAgICAgY29sLm5vc29ydCA9IHRydWU7XG5cbiAgICB0aGlzLmNvbHVtbnMucHVzaChjb2wpO1xuICB9XG5cbiAgLyogPT09IFBhZ2luZyA9PT0gKi9cbiAgcGFnZUNoYW5nZWQocGFnZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAocGFnZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSBOdW1iZXIocGFnZSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBwYWdlU2l6ZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5wYWdlQ2hhbmdlZCgxKTtcbiAgICB0aGlzLnVwZGF0ZVBhZ2VyKCk7XG4gIH1cblxuICBmaWx0ZXJTb3J0UGFnZShkYXRhKSB7XG4gICAgLy8gQXBwbGllcyBmaWx0ZXIsIHNvcnQgdGhlbiBwYWdlXG4gICAgLy8gMS4gRmlyc3QgZmlsdGVyIHRoZSBkYXRhIGRvd24gdG8gdGhlIHNldCB3ZSB3YW50LCBpZiB3ZSBhcmUgdXNpbmcgbG9jYWwgZGF0YVxuICAgIHZhciB0ZW1wRGF0YSA9IGRhdGE7XG5cbiAgICBpZiAodGhpcy5zaG93Q29sdW1uRmlsdGVycyAmJiAhdGhpcy5zZXJ2ZXJGaWx0ZXJpbmcpXG4gICAgICB0ZW1wRGF0YSA9IHRoaXMuYXBwbHlGaWx0ZXIodGVtcERhdGEpO1xuXG4gICAgLy8gQ291bnQgdGhlIGRhdGEgbm93IGJlZm9yZSB0aGUgc29ydC9wYWdlXG4gICAgdGhpcy5jb3VudCA9IHRlbXBEYXRhLmxlbmd0aDtcblxuICAgIC8vIDIuIE5vdyBzb3J0IHRoZSBkYXRhXG4gICAgaWYgKHRoaXMuc29ydGFibGUgJiYgIXRoaXMuc2VydmVyU29ydGluZylcbiAgICAgIHRlbXBEYXRhID0gdGhpcy5hcHBseVNvcnQodGVtcERhdGEpO1xuXG4gICAgLy8gMy4gTm93IGFwcGx5IHBhZ2luZ1xuICAgIGlmICh0aGlzLnBhZ2VhYmxlICYmICF0aGlzLnNlcnZlclBhZ2luZylcbiAgICAgIHRlbXBEYXRhID0gdGhpcy5hcHBseVBhZ2UodGVtcERhdGEpO1xuXG4gICAgdGhpcy5kYXRhID0gdGVtcERhdGE7XG5cbiAgICB0aGlzLnVwZGF0ZVBhZ2VyKCk7XG5cbiAgICB0aGlzLndhdGNoRm9yQ2hhbmdlcygpO1xuICB9XG5cbiAgYXBwbHlQYWdlKGRhdGEpIHtcbiAgICB2YXIgc3RhcnQgPSAoTnVtYmVyKHRoaXMucGFnZU51bWJlcikgLSAxKSAqIE51bWJlcih0aGlzLnBhZ2VTaXplKTtcbiAgICBkYXRhID0gZGF0YS5zbGljZShzdGFydCwgc3RhcnQgKyBOdW1iZXIodGhpcy5wYWdlU2l6ZSkpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuXG4gIHVwZGF0ZVBhZ2VyKCkge1xuICAgIGlmICh0aGlzLnBhZ2VyKVxuICAgICAgdGhpcy5wYWdlci51cGRhdGUodGhpcy5wYWdlTnVtYmVyLCBOdW1iZXIodGhpcy5wYWdlU2l6ZSksIE51bWJlcih0aGlzLmNvdW50KSk7XG5cbiAgICB0aGlzLmZpcnN0VmlzaWJsZUl0ZW0gPSAodGhpcy5wYWdlTnVtYmVyIC0gMSkgKiBOdW1iZXIodGhpcy5wYWdlU2l6ZSkgKyAxO1xuICAgIHRoaXMubGFzdFZpc2libGVJdGVtID0gKHRoaXMucGFnZU51bWJlcikgKiBOdW1iZXIodGhpcy5wYWdlU2l6ZSk7XG4gIH1cblxuICAvKiA9PT0gU29ydGluZyA9PT0gKi9cbiAgZmllbGRTb3J0ZXIoZmllbGRzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZmllbGRzXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICB2YXIgZGlyID0gMTtcbiAgICAgICAgICBpZiAob1swXSA9PT0gJy0nKSB7XG4gICAgICAgICAgICBkaXIgPSAtMTtcbiAgICAgICAgICAgIG8gPSBvLnN1YnN0cmluZygxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFbb10gPiBiW29dKSByZXR1cm4gZGlyO1xuICAgICAgICAgIGlmIChhW29dIDwgYltvXSkgcmV0dXJuIC0oZGlyKTtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSlcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiBmaXJzdE5vblplcm9WYWx1ZShwLCBuKSB7XG4gICAgICAgICAgcmV0dXJuIHAgPyBwIDogbjtcbiAgICAgICAgfSwgMCk7XG4gICAgfTtcbiAgfVxuXG4gIHBhZ2VTaXplc0NoYW5nZWQoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvLyB0b2RvOiByZW1vdmUgb3IgcmVkb1xuICBzb3J0Q2hhbmdlZChmaWVsZCkge1xuXG4gICAgLy8gRGV0ZXJtaW5lIG5ldyBzb3J0XG4gICAgdmFyIG5ld1NvcnQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBGaWd1cmUgb3V0IHdoaWNoIHdheSB0aGlzIGZpZWxkIHNob3VsZCBiZSBzb3J0aW5nXG4gICAgc3dpdGNoICh0aGlzLnNvcnRpbmdbZmllbGRdKSB7XG4gICAgICBjYXNlICdhc2MnOlxuICAgICAgICBuZXdTb3J0ID0gJ2Rlc2MnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rlc2MnOlxuICAgICAgICBuZXdTb3J0ID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbmV3U29ydCA9ICdhc2MnO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLnNvcnRpbmdbZmllbGRdID0gbmV3U29ydDtcblxuICAgIC8vIElmIHRoZSBzb3J0IGlzIHByZXNlbnQgaW4gdGhlIHNvcnQgc3RhY2ssIHNsaWNlIGl0IHRvIHRoZSBiYWNrIG9mIHRoZSBzdGFjaywgb3RoZXJ3aXNlIGp1c3QgYWRkIGl0XG4gICAgdmFyIHBvcyA9IHRoaXMuc29ydFByb2Nlc3NpbmdPcmRlci5pbmRleE9mKGZpZWxkKTtcblxuICAgIGlmIChwb3MgPiAtMSlcbiAgICAgIHRoaXMuc29ydFByb2Nlc3NpbmdPcmRlci5zcGxpY2UocG9zLCAxKTtcblxuICAgIHRoaXMuc29ydFByb2Nlc3NpbmdPcmRlci5wdXNoKGZpZWxkKTtcblxuICAgIC8vIEFwcGx5IHRoZSBuZXcgc29ydFxuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLy8gdG9kbzogcmVtb3ZlIG9yIHJlZG9cbiAgYXBwbHlTb3J0KGRhdGEpIHtcblxuICAgIC8vIEZvcm1hdCB0aGUgc29ydCBmaWVsZHNcbiAgICB2YXIgZmllbGRzID0gW107XG5cbiAgICAvLyBHZXQgdGhlIGZpZWxkcyBpbiB0aGUgJ3NvcnRpbmdPUmRlcidcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc29ydFByb2Nlc3NpbmdPcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvcnQgPSB0aGlzLnNvcnRQcm9jZXNzaW5nT3JkZXJbaV07XG5cbiAgICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5zb3J0aW5nKSB7XG4gICAgICAgIGlmIChzb3J0ID09IHByb3AgJiYgdGhpcy5zb3J0aW5nW3Byb3BdICE9PSAnJylcbiAgICAgICAgICBmaWVsZHMucHVzaCh0aGlzLnNvcnRpbmdbcHJvcF0gPT09ICdhc2MnID8gKHByb3ApIDogKCctJyArIHByb3ApKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIElmIHNlcnZlciBzb3J0LCBqdXN0IHJlZnJlc2hcbiAgICBkYXRhID0gZGF0YS5zb3J0KHRoaXMuZmllbGRTb3J0ZXIoZmllbGRzKSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG5cbiAgY2hhbmdlU29ydChzb3J0KSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5zb3J0aW5nLmZpbmRJbmRleCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoZWwubmFtZSA9PT0gc29ydC5uYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5zb3J0aW5nLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHNvcnQudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zb3J0aW5nLnB1c2goc29ydCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKiA9PT0gRmlsdGVyaW5nID09PSAqL1xuICBhcHBseUZpbHRlcihkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEuZmlsdGVyKChyb3cpID0+IHtcbiAgICAgIHZhciBpbmNsdWRlID0gdHJ1ZTtcblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMuY29sdW1ucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB2YXIgY29sID0gdGhpcy5jb2x1bW5zW2ldO1xuXG4gICAgICAgIGlmIChjb2wuZmlsdGVyVmFsdWUgIT09ICcnICYmIHJvd1tjb2wuZmllbGRdLnRvU3RyaW5nKCkuaW5kZXhPZihjb2wuZmlsdGVyVmFsdWUpID09PSAtMSkge1xuICAgICAgICAgIGluY2x1ZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5jbHVkZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEZpbHRlcnNRdWVyeVN0cmluZygpIHtcbiAgICB2YXIgZmlsdGVycyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSB0aGlzLmNvbHVtbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBjb2wgPSB0aGlzLmNvbHVtbnNbaV07XG4gICAgICBsZXQgZmlsdGVyUXVlcnlTdHJpbmcgPSBjb2wuZ2V0UXVlcnlTdHJpbmcoKTtcbiAgICAgIGlmIChmaWx0ZXJRdWVyeVN0cmluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZpbHRlcnMucHVzaChmaWx0ZXJRdWVyeVN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlcnM7XG4gIH1cblxuICBnZXRGaWx0ZXJzVmFsdWVzKCkge1xuICAgIGxldCBmaWx0ZXJzID0gW107XG4gICAgZm9yICh2YXIgaSA9IHRoaXMuY29sdW1ucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNvbCA9IHRoaXMuY29sdW1uc1tpXTtcbiAgICAgIGZpbHRlcnMgPSBmaWx0ZXJzLmNvbmNhdChjb2wuZ2V0RmlsdGVyVmFsdWUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlcnM7XG4gIH1cblxuICB1cGRhdGVGaWx0ZXJzKCkge1xuICAgIGlmICh0aGlzLnVwZGF0ZUZpbHRlcnNTZXRUaW1lb3V0KSB7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudXBkYXRlRmlsdGVyc1NldFRpbWVvdXQpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlRmlsdGVyc1NldFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLnJlZnJlc2guYmluZCh0aGlzKSwgdGhpcy5maWx0ZXJEZWxheSk7XG4gIH1cblxuICAvKiA9PT0gRGF0YSA9PT0gKi9cbiAgcmVmcmVzaCgpIHtcbiAgICAvLyBJZiB3ZSBoYXZlIGFueSBzZXJ2ZXIgc2lkZSBzdHVmZiB3ZSBuZWVkIHRvIGdldCB0aGUgZGF0YSBmaXJzdFxuICAgIHRoaXMuZG9udFdhdGNoRm9yQ2hhbmdlcygpO1xuXG4gICAgaWYgKHRoaXMuc2VydmVyUGFnaW5nIHx8IHRoaXMuc2VydmVyU29ydGluZyB8fCB0aGlzLnNlcnZlckZpbHRlcmluZyB8fCAhdGhpcy5pbml0aWFsTG9hZCkge1xuICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyU29ydFBhZ2UodGhpcy5jYWNoZSk7XG4gICAgfVxuXG4gIH1cblxuICBnZXREYXRhKCkge1xuICAgIGlmICghdGhpcy5yZWFkKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyByZWFkIG1ldGhvZCBzcGVjaWZpZWQgZm9yIGdyaWQnKTtcblxuICAgIHRoaXMuaW5pdGlhbExvYWQgPSB0cnVlO1xuXG4gICAgLy8gVE9ETzogSW1wbGVtZW50IHByb2dyZXNzIGluZGljYXRvclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAvLyBUcnkgdG8gcmVhZCBmcm9tIHRoZSBkYXRhIGFkYXB0ZXJcbiAgICBsZXQgcXVlcnlWYWx1ZXMgPSB7fTtcbiAgICBxdWVyeVZhbHVlcy5maWx0ZXJzID0gdGhpcy5nZXRGaWx0ZXJzVmFsdWVzKCk7XG4gICAgcXVlcnlWYWx1ZXMucGFnaW5nID0ge1xuICAgICAgcGFnZTogdGhpcy5wYWdlTnVtYmVyLFxuICAgICAgY291bnQ6IHdpbmRvdy5OdW1iZXIodGhpcy5wYWdlU2l6ZSwgMTApXG4gICAgfTtcbiAgICBxdWVyeVZhbHVlcy5zb3J0ZXJzID0gdGhpcy5zb3J0aW5nO1xuXG4gICAgdGhpcy5yZWFkKHF1ZXJ5VmFsdWVzKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIC8vIERhdGEgc2hvdWxkIGJlIGluIHRoZSByZXN1bHQgc28gZ3JhYiBpdCBhbmQgYXNzaWduIGl0IHRvIHRoZSBkYXRhIHByb3BlcnR5XG4gICAgICB0aGlzLmhhbmRsZVJlc3VsdChyZXN1bHQpO1xuXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9LCAocmVzdWx0KSA9PiB7XG4gICAgICAvLyBTb21ldGhpbmcgd2VudCB0ZXJyaWJseSB3cm9uZywgbm90aWZ5IHRoZSBjb25zdW1lclxuICAgICAgaWYgKHRoaXMub25SZWFkRXJyb3IpXG4gICAgICAgIHRoaXMub25SZWFkRXJyb3IocmVzdWx0KTtcblxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVSZXN1bHQocmVzdWx0KSB7XG5cbiAgICAvLyBUT0RPOiBDaGVjayB2YWxpZCBzdHVmZiB3YXMgcmV0dXJuZWRcbiAgICB2YXIgZGF0YSA9IHJlc3VsdC5kYXRhO1xuXG4gICAgLy8gSXMgdGhlIGRhdGEgYmVpbmcgcGFnaW5hdGVkIG9uIHRoZSBjbGllbnQgc2lkZT9cbiAgICAvLyBUT0RPOiBXb3JrIG91dCB3aGVuIHdlIHNob3VsZCB3ZSB1c2UgdGhlIGNhY2hlLi4uIGV2ZXI/IElmIGl0J3MgbG9jYWwgZGF0YVxuICAgIGlmICh0aGlzLnBhZ2VhYmxlICYmICF0aGlzLnNlcnZlclBhZ2luZyAmJiAhdGhpcy5zZXJ2ZXJTb3J0aW5nICYmICF0aGlzLnNlcnZlckZpbHRlcmluZykge1xuICAgICAgLy8gQ2FjaGUgdGhlIGRhdGFcbiAgICAgIHRoaXMuY2FjaGUgPSByZXN1bHQuZGF0YTtcbiAgICAgIHRoaXMuZmlsdGVyU29ydFBhZ2UodGhpcy5jYWNoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YSA9IHJlc3VsdC5kYXRhO1xuICAgICAgdGhpcy5maWx0ZXJTb3J0UGFnZSh0aGlzLmRhdGEpO1xuICAgIH1cblxuICAgIHRoaXMuY291bnQgPSByZXN1bHQuY291bnQ7XG5cbiAgICAvLyBVcGRhdGUgdGhlIHBhZ2VyIC0gbWF5YmUgdGhlIGdyaWQgb3B0aW9ucyBzaG91bGQgY29udGFpbiBhbiB1cGRhdGUgY2FsbGJhY2sgaW5zdGVhZCBvZiByZWZmaW5nIHRoZVxuICAgIC8vIHBhZ2VyIGludG8gdGhlIGN1cnJlbnQgVk0/XG4gICAgdGhpcy51cGRhdGVQYWdlcigpO1xuICB9XG5cbiAgd2F0Y2hGb3JDaGFuZ2VzKCkge1xuICAgIHRoaXMuZG9udFdhdGNoRm9yQ2hhbmdlcygpO1xuXG4gICAgLy8gR3VhcmQgYWdhaW5zdCBkYXRhIHJlZnJlc2ggZXZlbnRzIGhpdHRpbmcgYWZ0ZXIgdGhlIHVzZXIgZG9lcyBhbnl0aGluZyB0aGF0IHVubG9hZHMgdGhlIGdyaWRcbiAgICBpZiAoIXRoaXMudW5iaW5kaW5nKVxuICAgIC8vIFdlIGNhbiB1cGRhdGUgdGhlIHBhZ2VyIGF1dG9tYWdpY2FsbHlcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5vYnNlcnZlckxvY2F0b3JcbiAgICAgICAgLmdldEFycmF5T2JzZXJ2ZXIodGhpcy5jYWNoZSlcbiAgICAgICAgLnN1YnNjcmliZSgoc3BsaWNlcykgPT4ge1xuICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIGRvbnRXYXRjaEZvckNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24oKTtcbiAgfVxuXG4gIC8qID09PSBTZWxlY3Rpb24gPT09ICovXG5cbiAgc2VsZWN0KGl0ZW0pIHtcbiAgICBpZiAodGhpcy5zZWxlY3RhYmxlKVxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICB9XG5cbiAgLyogPT09IENoYW5nZSBoYW5kbGVycyA9PT0gKi9cbiAgbm9Sb3dzTWVzc2FnZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5zaG93Tm9Sb3dzTWVzc2FnZSA9IHRoaXMubm9Sb3dzTWVzc2FnZSAhPT0gJyc7XG4gIH1cblxuICBncmlkSGVpZ2h0Q2hhbmdlZCgpIHtcblxuICAgIC8vIFRPRE86IE1ha2UgdGhpcyBhIG9uZSBvZmZcbiAgICB2YXIgY29udCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1jb250YWluZXInKTtcblxuICAgIGlmICh0aGlzLmdyaWRIZWlnaHQgPiAwKSB7XG4gICAgICBjb250LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnaGVpZ2h0OicgKyB0aGlzLmdyaWRIZWlnaHQgKyAncHgnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgfVxuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==