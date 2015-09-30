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
//# sourceMappingURL=data:application/json;base64,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QUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO09BQ2hDOzs7YUFFTyxvQkFBRztBQUNULFlBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7T0FDN0M7OzthQUVHLGdCQUFHO0FBQ0wsWUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO09BQ2hDOzs7YUFFTyxvQkFBRztBQUNULFlBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7T0FDN0M7OzthQUVJLGlCQUFHO0FBQ04sWUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUNwQjs7O2FBRUcsZ0JBQUc7QUFDTCxZQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztPQUNqQzs7O3FDQTNISyxRQUFROzs7OztxQ0FBUixRQUFROztlQVNRLENBQUM7Ozs7O3FDQVRqQixRQUFROztlQWdCbUIsSUFBSTs7Ozs7cUNBaEIvQixRQUFROztlQWlCYyxJQUFJOzs7OztpQkFkckIsS0FBSztBQUFMLFNBQUssR0FEakIsc0JBRmlCLGFBQWEsRUFFaEIsT0FBTyxDQUFDLENBQ1YsS0FBSyxLQUFMLEtBQUs7V0FBTCxLQUFLIiwiZmlsZSI6InBhZ2VyL3BhZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUVsZW1lbnQoJ3BhZ2VyJylcbmV4cG9ydCBjbGFzcyBQYWdlciB7XG5cbiAgLy8gQ2FsbGVkIHdoZW4gdGhlIHNlbGVjdGVkIHBhZ2UgY2hhbmdlc1xuICBAYmluZGFibGUgb25QYWdlQ2hhbmdlZDtcblxuICAvLyBNYXggbnVtIHBhZ2VzIHRvIHNob3dcbiAgQGJpbmRhYmxlIG51bVRvU2hvdyA9IDU7XG5cbiAgLy8gRGlzYWJsZS9lbmFibGVcbiAgbmV4dERpc2FibGVkID0gZmFsc2U7XG4gIHByZXZEaXNhYmxlZCA9IGZhbHNlO1xuXG4gIC8vIFBhZ2VyIGJ1dHRvbiBvcHRpb25zXG4gIEBiaW5kYWJsZSBzaG93Rmlyc3RMYXN0QnV0dG9ucyA9IHRydWU7XG4gIEBiaW5kYWJsZSBzaG93SnVtcEJ1dHRvbnMgPSB0cnVlO1xuXG4gIC8vIFRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgZGF0YXNldFxuICBwYWdlID0gMTtcbiAgcGFnZUNvdW50ID0gMDtcblxuICBwYWdlcyA9IFtdO1xuXG4gIGNoYW5nZVBhZ2UocGFnZSkge1xuXG4gICAgdmFyIG9sZFBhZ2UgPSB0aGlzLnBhZ2U7XG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLmNhcChwYWdlKTtcblxuICAgIGlmIChvbGRQYWdlICE9PSB0aGlzLnBhZ2UpIHtcbiAgICAgIHRoaXMub25QYWdlQ2hhbmdlZCh0aGlzLnBhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENhbGxlZCB3aGVuIHRoZSBkYXRhIHNvdXJjZSBjaGFuZ2VzXG4gIHVwZGF0ZShwYWdlLCBwYWdlc2l6ZSwgdG90YWxJdGVtcykge1xuICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgdGhpcy50b3RhbEl0ZW1zID0gdG90YWxJdGVtcztcbiAgICB0aGlzLnBhZ2VTaXplID0gcGFnZXNpemU7XG5cbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKCk7XG4gIH1cblxuICBjYXAocGFnZSkge1xuICAgIGlmIChwYWdlIDwgMSkgcmV0dXJuIDE7XG4gICAgaWYgKHBhZ2UgPiB0aGlzLnBhZ2VDb3VudCkgcmV0dXJuIHRoaXMucGFnZUNvdW50O1xuXG4gICAgcmV0dXJuIHBhZ2U7XG4gIH1cblxuICBjcmVhdGVQYWdlcygpIHtcblxuICAgIC8vIENhbGMgdGhlIG1heCBwYWdlIG51bWJlclxuICAgIHRoaXMucGFnZUNvdW50ID0gTWF0aC5jZWlsKHRoaXMudG90YWxJdGVtcyAvIHRoaXMucGFnZVNpemUpO1xuXG4gICAgLy8gQ2FwIHRoZSBudW1iZXIgb2YgcGFnZXMgdG8gcmVuZGVyIGlmIHRoZSBjb3VudCBpcyBsZXNzIHRoYW4gbnVtYmVyIHRvIHNob3cgYXQgb25jZVxuICAgIHZhciBudW1Ub1JlbmRlciA9IHRoaXMucGFnZUNvdW50IDwgdGhpcy5udW1Ub1Nob3cgPyB0aGlzLnBhZ2VDb3VudCA6IHRoaXMubnVtVG9TaG93O1xuXG4gICAgLy8gVGhlIGN1cnJlbnQgcGFnZSBzaG91bGQgdHJ5IHRvIGFwcGVhciBpbiB0aGUgbWlkZGxlLCBzbyBnZXQgdGhlIG1lZGlhblxuICAgIC8vIG9mIHRoZSBudW1iZXIgb2YgcGFnZXMgdG8gc2hvdyBhdCBvbmNlIC0gdGhpcyB3aWxsIGJlIG91ciBhZGp1c3RtZW50IGZhY3RvclxuICAgIHZhciBpbmRpY2F0b3JQb3NpdGlvbiA9IE1hdGguY2VpbChudW1Ub1JlbmRlciAvIDIpO1xuXG4gICAgLy8gU3VidHJhY3QgdGhlIHBvcyBmcm9tIHRoZSBjdXJyZW50IHBhZ2UgdG8gZ2V0IHRoZSBmaXJzdCBwYWdlIG5vXG4gICAgdmFyIGZpcnN0UGFnZU51bWJlciA9IHRoaXMucGFnZSAtIGluZGljYXRvclBvc2l0aW9uICsgMTtcblxuICAgIC8vIElmIHRoZSBmaXJzdCBwYWdlIGlzIGxlc3MgdGhhbiAxLCBtYWtlIGl0IDFcbiAgICBpZiAoZmlyc3RQYWdlTnVtYmVyIDwgMSlcbiAgICAgIGZpcnN0UGFnZU51bWJlciA9IDE7XG5cbiAgICAvLyBBZGQgdGhlIG51bWJlciBvZiBwYWdlcyB0byByZW5kZXJcbiAgICAvLyByZW1lbWJlciB0byBzdWJ0cmFjdCAxIGFzIHRoaXMgcmVwcmVzZW50cyB0aGUgZmlyc3QgcGFnZSBudW1iZXJcbiAgICB2YXIgbGFzdFBhZ2VOdW1iZXIgPSBmaXJzdFBhZ2VOdW1iZXIgKyBudW1Ub1JlbmRlciAtIDE7XG5cbiAgICAvLyBJZiB0aGUgbGFzdCBwYWdlIGlzIGdyZWF0ZXIgdGhhbiB0aGUgcGFnZSBjb3VudFxuICAgIC8vIGFkZCB0aGUgZGlmZmVyZW5jZSB0byB0aGUgZmlyc3QvbGFzdCBwYWdlXG4gICAgaWYgKGxhc3RQYWdlTnVtYmVyID4gdGhpcy5wYWdlQ291bnQpIHtcbiAgICAgIHZhciBkaWYgPSB0aGlzLnBhZ2VDb3VudCAtIGxhc3RQYWdlTnVtYmVyO1xuXG4gICAgICBmaXJzdFBhZ2VOdW1iZXIgKz0gZGlmO1xuICAgICAgbGFzdFBhZ2VOdW1iZXIgKz0gZGlmO1xuICAgIH1cblxuICAgIHZhciBwYWdlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IGZpcnN0UGFnZU51bWJlcjsgaSA8PSBsYXN0UGFnZU51bWJlcjsgaSsrKSB7XG4gICAgICBwYWdlcy5wdXNoKGkpO1xuICAgIH1cbiAgICA7XG5cbiAgICB0aGlzLnBhZ2VzID0gcGFnZXM7XG5cbiAgICB0aGlzLnVwZGF0ZUJ1dHRvbnMoKTtcbiAgfVxuXG4gIHVwZGF0ZUJ1dHRvbnMoKSB7XG4gICAgdGhpcy5uZXh0RGlzYWJsZWQgPSB0aGlzLnBhZ2UgPT09IHRoaXMucGFnZUNvdW50O1xuICAgIHRoaXMucHJldkRpc2FibGVkID0gdGhpcy5wYWdlID09PSAxO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICB0aGlzLmNoYW5nZVBhZ2UodGhpcy5wYWdlICsgMSk7XG4gIH1cblxuICBuZXh0SnVtcCgpIHtcbiAgICB0aGlzLmNoYW5nZVBhZ2UodGhpcy5wYWdlICsgdGhpcy5udW1Ub1Nob3cpO1xuICB9XG5cbiAgcHJldigpIHtcbiAgICB0aGlzLmNoYW5nZVBhZ2UodGhpcy5wYWdlIC0gMSk7XG4gIH1cblxuICBwcmV2SnVtcCgpIHtcbiAgICB0aGlzLmNoYW5nZVBhZ2UodGhpcy5wYWdlIC0gdGhpcy5udW1Ub1Nob3cpO1xuICB9XG5cbiAgZmlyc3QoKSB7XG4gICAgdGhpcy5jaGFuZ2VQYWdlKDEpO1xuICB9XG5cbiAgbGFzdCgpIHtcbiAgICB0aGlzLmNoYW5nZVBhZ2UodGhpcy5wYWdlQ291bnQpO1xuICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9