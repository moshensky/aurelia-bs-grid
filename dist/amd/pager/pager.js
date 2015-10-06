define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  var Pager = (function () {
    var _instanceInitializers = {};

    function Pager() {
      _classCallCheck(this, _Pager);

      _defineDecoratedPropertyDescriptor(this, 'onPageChanged', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'numToShow', _instanceInitializers);

      this.nextDisabled = false;
      this.prevDisabled = false;

      _defineDecoratedPropertyDescriptor(this, 'showFirstLastButtons', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'showJumpButtons', _instanceInitializers);

      this.page = 1;
      this.pageCount = 0;
      this.pages = [];
    }

    _createDecoratedClass(Pager, [{
      key: 'changePage',
      value: function changePage(page) {

        var oldPage = this.page;

        this.page = this.cap(page);

        if (oldPage !== this.page) {
          this.onPageChanged(this.page);
        }
      }
    }, {
      key: 'update',
      value: function update(page, pagesize, totalItems) {
        this.page = page;
        this.totalItems = totalItems;
        this.pageSize = pagesize;

        this.createPages();
      }
    }, {
      key: 'cap',
      value: function cap(page) {
        if (page < 1) return 1;
        if (page > this.pageCount) return this.pageCount;

        return page;
      }
    }, {
      key: 'createPages',
      value: function createPages() {
        this.pageCount = Math.ceil(this.totalItems / this.pageSize);

        var numToRender = this.pageCount < this.numToShow ? this.pageCount : this.numToShow;

        var indicatorPosition = Math.ceil(numToRender / 2);

        var firstPageNumber = this.page - indicatorPosition + 1;

        if (firstPageNumber < 1) firstPageNumber = 1;

        var lastPageNumber = firstPageNumber + numToRender - 1;

        if (lastPageNumber > this.pageCount) {
          var dif = this.pageCount - lastPageNumber;

          firstPageNumber += dif;
          lastPageNumber += dif;
        }

        var pages = [];

        for (var i = firstPageNumber; i <= lastPageNumber; i++) {
          pages.push(i);
        }
        ;

        this.pages = pages;

        this.updateButtons();
      }
    }, {
      key: 'updateButtons',
      value: function updateButtons() {
        this.nextDisabled = this.page === this.pageCount;
        this.prevDisabled = this.page === 1;
      }
    }, {
      key: 'next',
      value: function next() {
        this.changePage(this.page + 1);
      }
    }, {
      key: 'nextJump',
      value: function nextJump() {
        this.changePage(this.page + this.numToShow);
      }
    }, {
      key: 'prev',
      value: function prev() {
        this.changePage(this.page - 1);
      }
    }, {
      key: 'prevJump',
      value: function prevJump() {
        this.changePage(this.page - this.numToShow);
      }
    }, {
      key: 'first',
      value: function first() {
        this.changePage(1);
      }
    }, {
      key: 'last',
      value: function last() {
        this.changePage(this.pageCount);
      }
    }, {
      key: 'onPageChanged',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'numToShow',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return 5;
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
    }], null, _instanceInitializers);

    var _Pager = Pager;
    Pager = (0, _aureliaFramework.customElement)('pager')(Pager) || Pager;
    return Pager;
  })();

  exports.Pager = Pager;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VyL3BhZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7TUFHYSxLQUFLOzs7YUFBTCxLQUFLOzs7Ozs7O1dBU2hCLFlBQVksR0FBRyxLQUFLO1dBQ3BCLFlBQVksR0FBRyxLQUFLOzs7Ozs7V0FPcEIsSUFBSSxHQUFHLENBQUM7V0FDUixTQUFTLEdBQUcsQ0FBQztXQUViLEtBQUssR0FBRyxFQUFFOzs7MEJBcEJDLEtBQUs7O2FBc0JOLG9CQUFDLElBQUksRUFBRTs7QUFFZixZQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDOztBQUV4QixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRTNCLFlBQUksT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDekIsY0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7T0FDRjs7O2FBR0ssZ0JBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDakMsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsWUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7O0FBRXpCLFlBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztPQUNwQjs7O2FBRUUsYUFBQyxJQUFJLEVBQUU7QUFDUixZQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkIsWUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7O0FBRWpELGVBQU8sSUFBSSxDQUFDO09BQ2I7OzthQUVVLHVCQUFHO0FBR1osWUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUc1RCxZQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDOztBQUlwRixZQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDOztBQUduRCxZQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixHQUFHLENBQUMsQ0FBQzs7QUFHeEQsWUFBSSxlQUFlLEdBQUcsQ0FBQyxFQUNyQixlQUFlLEdBQUcsQ0FBQyxDQUFDOztBQUl0QixZQUFJLGNBQWMsR0FBRyxlQUFlLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQzs7QUFJdkQsWUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNuQyxjQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQzs7QUFFMUMseUJBQWUsSUFBSSxHQUFHLENBQUM7QUFDdkIsd0JBQWMsSUFBSSxHQUFHLENBQUM7U0FDdkI7O0FBRUQsWUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDOztBQUVmLGFBQUssSUFBSSxDQUFDLEdBQUcsZUFBZSxFQUFFLENBQUMsSUFBSSxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDdEQsZUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNmO0FBQ0QsU0FBQzs7QUFFRCxZQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7QUFFbkIsWUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO09BQ3RCOzs7YUFFWSx5QkFBRztBQUNkLFlBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ2pELFlBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7T0FDckM7OzthQUVHLGdCQUFHO0FBQ0wsWUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO09BQ2hDOzs7YUFFTyxvQkFBRztBQUNULFlBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7T0FDN0M7OzthQUVHLGdCQUFHO0FBQ0wsWUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO09BQ2hDOzs7YUFFTyxvQkFBRztBQUNULFlBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7T0FDN0M7OzthQUVJLGlCQUFHO0FBQ04sWUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUNwQjs7O2FBRUcsZ0JBQUc7QUFDTCxZQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztPQUNqQzs7O3FDQTNISyxRQUFROzs7OztxQ0FBUixRQUFROztlQVNRLENBQUM7Ozs7O3FDQVRqQixRQUFROztlQWdCbUIsSUFBSTs7Ozs7cUNBaEIvQixRQUFROztlQWlCYyxJQUFJOzs7OztpQkFkckIsS0FBSztBQUFMLFNBQUssR0FEakIsc0JBRmlCLGFBQWEsRUFFaEIsT0FBTyxDQUFDLENBQ1YsS0FBSyxLQUFMLEtBQUs7V0FBTCxLQUFLOzs7VUFBTCxLQUFLLEdBQUwsS0FBSyIsImZpbGUiOiJwYWdlci9wYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGN1c3RvbUVsZW1lbnQgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21FbGVtZW50KCdwYWdlcicpXG5leHBvcnQgY2xhc3MgUGFnZXIge1xuXG4gIC8vIENhbGxlZCB3aGVuIHRoZSBzZWxlY3RlZCBwYWdlIGNoYW5nZXNcbiAgQGJpbmRhYmxlIG9uUGFnZUNoYW5nZWQ7XG5cbiAgLy8gTWF4IG51bSBwYWdlcyB0byBzaG93XG4gIEBiaW5kYWJsZSBudW1Ub1Nob3cgPSA1O1xuXG4gIC8vIERpc2FibGUvZW5hYmxlXG4gIG5leHREaXNhYmxlZCA9IGZhbHNlO1xuICBwcmV2RGlzYWJsZWQgPSBmYWxzZTtcblxuICAvLyBQYWdlciBidXR0b24gb3B0aW9uc1xuICBAYmluZGFibGUgc2hvd0ZpcnN0TGFzdEJ1dHRvbnMgPSB0cnVlO1xuICBAYmluZGFibGUgc2hvd0p1bXBCdXR0b25zID0gdHJ1ZTtcblxuICAvLyBUb3RhbCBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGRhdGFzZXRcbiAgcGFnZSA9IDE7XG4gIHBhZ2VDb3VudCA9IDA7XG5cbiAgcGFnZXMgPSBbXTtcblxuICBjaGFuZ2VQYWdlKHBhZ2UpIHtcblxuICAgIHZhciBvbGRQYWdlID0gdGhpcy5wYWdlO1xuXG4gICAgdGhpcy5wYWdlID0gdGhpcy5jYXAocGFnZSk7XG5cbiAgICBpZiAob2xkUGFnZSAhPT0gdGhpcy5wYWdlKSB7XG4gICAgICB0aGlzLm9uUGFnZUNoYW5nZWQodGhpcy5wYWdlKTtcbiAgICB9XG4gIH1cblxuICAvLyBDYWxsZWQgd2hlbiB0aGUgZGF0YSBzb3VyY2UgY2hhbmdlc1xuICB1cGRhdGUocGFnZSwgcGFnZXNpemUsIHRvdGFsSXRlbXMpIHtcbiAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgIHRoaXMudG90YWxJdGVtcyA9IHRvdGFsSXRlbXM7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IHBhZ2VzaXplO1xuXG4gICAgdGhpcy5jcmVhdGVQYWdlcygpO1xuICB9XG5cbiAgY2FwKHBhZ2UpIHtcbiAgICBpZiAocGFnZSA8IDEpIHJldHVybiAxO1xuICAgIGlmIChwYWdlID4gdGhpcy5wYWdlQ291bnQpIHJldHVybiB0aGlzLnBhZ2VDb3VudDtcblxuICAgIHJldHVybiBwYWdlO1xuICB9XG5cbiAgY3JlYXRlUGFnZXMoKSB7XG5cbiAgICAvLyBDYWxjIHRoZSBtYXggcGFnZSBudW1iZXJcbiAgICB0aGlzLnBhZ2VDb3VudCA9IE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLnBhZ2VTaXplKTtcblxuICAgIC8vIENhcCB0aGUgbnVtYmVyIG9mIHBhZ2VzIHRvIHJlbmRlciBpZiB0aGUgY291bnQgaXMgbGVzcyB0aGFuIG51bWJlciB0byBzaG93IGF0IG9uY2VcbiAgICB2YXIgbnVtVG9SZW5kZXIgPSB0aGlzLnBhZ2VDb3VudCA8IHRoaXMubnVtVG9TaG93ID8gdGhpcy5wYWdlQ291bnQgOiB0aGlzLm51bVRvU2hvdztcblxuICAgIC8vIFRoZSBjdXJyZW50IHBhZ2Ugc2hvdWxkIHRyeSB0byBhcHBlYXIgaW4gdGhlIG1pZGRsZSwgc28gZ2V0IHRoZSBtZWRpYW5cbiAgICAvLyBvZiB0aGUgbnVtYmVyIG9mIHBhZ2VzIHRvIHNob3cgYXQgb25jZSAtIHRoaXMgd2lsbCBiZSBvdXIgYWRqdXN0bWVudCBmYWN0b3JcbiAgICB2YXIgaW5kaWNhdG9yUG9zaXRpb24gPSBNYXRoLmNlaWwobnVtVG9SZW5kZXIgLyAyKTtcblxuICAgIC8vIFN1YnRyYWN0IHRoZSBwb3MgZnJvbSB0aGUgY3VycmVudCBwYWdlIHRvIGdldCB0aGUgZmlyc3QgcGFnZSBub1xuICAgIHZhciBmaXJzdFBhZ2VOdW1iZXIgPSB0aGlzLnBhZ2UgLSBpbmRpY2F0b3JQb3NpdGlvbiArIDE7XG5cbiAgICAvLyBJZiB0aGUgZmlyc3QgcGFnZSBpcyBsZXNzIHRoYW4gMSwgbWFrZSBpdCAxXG4gICAgaWYgKGZpcnN0UGFnZU51bWJlciA8IDEpXG4gICAgICBmaXJzdFBhZ2VOdW1iZXIgPSAxO1xuXG4gICAgLy8gQWRkIHRoZSBudW1iZXIgb2YgcGFnZXMgdG8gcmVuZGVyXG4gICAgLy8gcmVtZW1iZXIgdG8gc3VidHJhY3QgMSBhcyB0aGlzIHJlcHJlc2VudHMgdGhlIGZpcnN0IHBhZ2UgbnVtYmVyXG4gICAgdmFyIGxhc3RQYWdlTnVtYmVyID0gZmlyc3RQYWdlTnVtYmVyICsgbnVtVG9SZW5kZXIgLSAxO1xuXG4gICAgLy8gSWYgdGhlIGxhc3QgcGFnZSBpcyBncmVhdGVyIHRoYW4gdGhlIHBhZ2UgY291bnRcbiAgICAvLyBhZGQgdGhlIGRpZmZlcmVuY2UgdG8gdGhlIGZpcnN0L2xhc3QgcGFnZVxuICAgIGlmIChsYXN0UGFnZU51bWJlciA+IHRoaXMucGFnZUNvdW50KSB7XG4gICAgICB2YXIgZGlmID0gdGhpcy5wYWdlQ291bnQgLSBsYXN0UGFnZU51bWJlcjtcblxuICAgICAgZmlyc3RQYWdlTnVtYmVyICs9IGRpZjtcbiAgICAgIGxhc3RQYWdlTnVtYmVyICs9IGRpZjtcbiAgICB9XG5cbiAgICB2YXIgcGFnZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSBmaXJzdFBhZ2VOdW1iZXI7IGkgPD0gbGFzdFBhZ2VOdW1iZXI7IGkrKykge1xuICAgICAgcGFnZXMucHVzaChpKTtcbiAgICB9XG4gICAgO1xuXG4gICAgdGhpcy5wYWdlcyA9IHBhZ2VzO1xuXG4gICAgdGhpcy51cGRhdGVCdXR0b25zKCk7XG4gIH1cblxuICB1cGRhdGVCdXR0b25zKCkge1xuICAgIHRoaXMubmV4dERpc2FibGVkID0gdGhpcy5wYWdlID09PSB0aGlzLnBhZ2VDb3VudDtcbiAgICB0aGlzLnByZXZEaXNhYmxlZCA9IHRoaXMucGFnZSA9PT0gMTtcbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgdGhpcy5jaGFuZ2VQYWdlKHRoaXMucGFnZSArIDEpO1xuICB9XG5cbiAgbmV4dEp1bXAoKSB7XG4gICAgdGhpcy5jaGFuZ2VQYWdlKHRoaXMucGFnZSArIHRoaXMubnVtVG9TaG93KTtcbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgdGhpcy5jaGFuZ2VQYWdlKHRoaXMucGFnZSAtIDEpO1xuICB9XG5cbiAgcHJldkp1bXAoKSB7XG4gICAgdGhpcy5jaGFuZ2VQYWdlKHRoaXMucGFnZSAtIHRoaXMubnVtVG9TaG93KTtcbiAgfVxuXG4gIGZpcnN0KCkge1xuICAgIHRoaXMuY2hhbmdlUGFnZSgxKTtcbiAgfVxuXG4gIGxhc3QoKSB7XG4gICAgdGhpcy5jaGFuZ2VQYWdlKHRoaXMucGFnZUNvdW50KTtcbiAgfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==