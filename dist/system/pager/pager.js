System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, customElement, Pager;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      customElement = _aureliaFramework.customElement;
    }],
    execute: function () {
      Pager = (function () {
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
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'numToShow',
          decorators: [bindable],
          initializer: function initializer() {
            return 5;
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
        }], null, _instanceInitializers);

        var _Pager = Pager;
        Pager = customElement('pager')(Pager) || Pager;
        return Pager;
      })();

      _export('Pager', Pager);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VyL3BhZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsrQkFHYSxLQUFLOzs7Ozs7Ozs7O21DQUhWLFFBQVE7d0NBQUUsYUFBYTs7O0FBR2xCLFdBQUs7OztpQkFBTCxLQUFLOzs7Ozs7O2VBU2hCLFlBQVksR0FBRyxLQUFLO2VBQ3BCLFlBQVksR0FBRyxLQUFLOzs7Ozs7ZUFPcEIsSUFBSSxHQUFHLENBQUM7ZUFDUixTQUFTLEdBQUcsQ0FBQztlQUViLEtBQUssR0FBRyxFQUFFOzs7OEJBcEJDLEtBQUs7O2lCQXNCTixvQkFBQyxJQUFJLEVBQUU7O0FBRWYsZ0JBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7O0FBRXhCLGdCQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRTNCLGdCQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ3pCLGtCQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvQjtXQUNGOzs7aUJBR0ssZ0JBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDakMsZ0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGdCQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixnQkFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7O0FBRXpCLGdCQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7V0FDcEI7OztpQkFFRSxhQUFDLElBQUksRUFBRTtBQUNSLGdCQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkIsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDOztBQUVqRCxtQkFBTyxJQUFJLENBQUM7V0FDYjs7O2lCQUVVLHVCQUFHO0FBR1osZ0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFHNUQsZ0JBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7O0FBSXBGLGdCQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDOztBQUduRCxnQkFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7O0FBR3hELGdCQUFJLGVBQWUsR0FBRyxDQUFDLEVBQ3JCLGVBQWUsR0FBRyxDQUFDLENBQUM7O0FBSXRCLGdCQUFJLGNBQWMsR0FBRyxlQUFlLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQzs7QUFJdkQsZ0JBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDbkMsa0JBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDOztBQUUxQyw2QkFBZSxJQUFJLEdBQUcsQ0FBQztBQUN2Qiw0QkFBYyxJQUFJLEdBQUcsQ0FBQzthQUN2Qjs7QUFFRCxnQkFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDOztBQUVmLGlCQUFLLElBQUksQ0FBQyxHQUFHLGVBQWUsRUFBRSxDQUFDLElBQUksY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3RELG1CQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2Y7QUFDRCxhQUFDOztBQUVELGdCQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7QUFFbkIsZ0JBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztXQUN0Qjs7O2lCQUVZLHlCQUFHO0FBQ2QsZ0JBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ2pELGdCQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDO1dBQ3JDOzs7aUJBRUcsZ0JBQUc7QUFDTCxnQkFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQ2hDOzs7aUJBRU8sb0JBQUc7QUFDVCxnQkFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztXQUM3Qzs7O2lCQUVHLGdCQUFHO0FBQ0wsZ0JBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztXQUNoQzs7O2lCQUVPLG9CQUFHO0FBQ1QsZ0JBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7V0FDN0M7OztpQkFFSSxpQkFBRztBQUNOLGdCQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1dBQ3BCOzs7aUJBRUcsZ0JBQUc7QUFDTCxnQkFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7V0FDakM7Ozt1QkFySEEsUUFBUTs7Ozs7dUJBR1IsUUFBUTs7bUJBQWEsQ0FBQzs7Ozs7dUJBT3RCLFFBQVE7O21CQUF3QixJQUFJOzs7Ozt1QkFDcEMsUUFBUTs7bUJBQW1CLElBQUk7Ozs7O3FCQWRyQixLQUFLO0FBQUwsYUFBSyxHQURqQixhQUFhLENBQUMsT0FBTyxDQUFDLENBQ1YsS0FBSyxLQUFMLEtBQUs7ZUFBTCxLQUFLIiwiZmlsZSI6InBhZ2VyL3BhZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUVsZW1lbnQoJ3BhZ2VyJylcbmV4cG9ydCBjbGFzcyBQYWdlciB7XG5cbiAgLy8gQ2FsbGVkIHdoZW4gdGhlIHNlbGVjdGVkIHBhZ2UgY2hhbmdlc1xuICBAYmluZGFibGUgb25QYWdlQ2hhbmdlZDtcblxuICAvLyBNYXggbnVtIHBhZ2VzIHRvIHNob3dcbiAgQGJpbmRhYmxlIG51bVRvU2hvdyA9IDU7XG5cbiAgLy8gRGlzYWJsZS9lbmFibGVcbiAgbmV4dERpc2FibGVkID0gZmFsc2U7XG4gIHByZXZEaXNhYmxlZCA9IGZhbHNlO1xuXG4gIC8vIFBhZ2VyIGJ1dHRvbiBvcHRpb25zXG4gIEBiaW5kYWJsZSBzaG93Rmlyc3RMYXN0QnV0dG9ucyA9IHRydWU7XG4gIEBiaW5kYWJsZSBzaG93SnVtcEJ1dHRvbnMgPSB0cnVlO1xuXG4gIC8vIFRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgZGF0YXNldFxuICBwYWdlID0gMTtcbiAgcGFnZUNvdW50ID0gMDtcblxuICBwYWdlcyA9IFtdO1xuXG4gIGNoYW5nZVBhZ2UocGFnZSkge1xuXG4gICAgdmFyIG9sZFBhZ2UgPSB0aGlzLnBhZ2U7XG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLmNhcChwYWdlKTtcblxuICAgIGlmIChvbGRQYWdlICE9PSB0aGlzLnBhZ2UpIHtcbiAgICAgIHRoaXMub25QYWdlQ2hhbmdlZCh0aGlzLnBhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENhbGxlZCB3aGVuIHRoZSBkYXRhIHNvdXJjZSBjaGFuZ2VzXG4gIHVwZGF0ZShwYWdlLCBwYWdlc2l6ZSwgdG90YWxJdGVtcykge1xuICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgdGhpcy50b3RhbEl0ZW1zID0gdG90YWxJdGVtcztcbiAgICB0aGlzLnBhZ2VTaXplID0gcGFnZXNpemU7XG5cbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKCk7XG4gIH1cblxuICBjYXAocGFnZSkge1xuICAgIGlmIChwYWdlIDwgMSkgcmV0dXJuIDE7XG4gICAgaWYgKHBhZ2UgPiB0aGlzLnBhZ2VDb3VudCkgcmV0dXJuIHRoaXMucGFnZUNvdW50O1xuXG4gICAgcmV0dXJuIHBhZ2U7XG4gIH1cblxuICBjcmVhdGVQYWdlcygpIHtcblxuICAgIC8vIENhbGMgdGhlIG1heCBwYWdlIG51bWJlclxuICAgIHRoaXMucGFnZUNvdW50ID0gTWF0aC5jZWlsKHRoaXMudG90YWxJdGVtcyAvIHRoaXMucGFnZVNpemUpO1xuXG4gICAgLy8gQ2FwIHRoZSBudW1iZXIgb2YgcGFnZXMgdG8gcmVuZGVyIGlmIHRoZSBjb3VudCBpcyBsZXNzIHRoYW4gbnVtYmVyIHRvIHNob3cgYXQgb25jZVxuICAgIHZhciBudW1Ub1JlbmRlciA9IHRoaXMucGFnZUNvdW50IDwgdGhpcy5udW1Ub1Nob3cgPyB0aGlzLnBhZ2VDb3VudCA6IHRoaXMubnVtVG9TaG93O1xuXG4gICAgLy8gVGhlIGN1cnJlbnQgcGFnZSBzaG91bGQgdHJ5IHRvIGFwcGVhciBpbiB0aGUgbWlkZGxlLCBzbyBnZXQgdGhlIG1lZGlhblxuICAgIC8vIG9mIHRoZSBudW1iZXIgb2YgcGFnZXMgdG8gc2hvdyBhdCBvbmNlIC0gdGhpcyB3aWxsIGJlIG91ciBhZGp1c3RtZW50IGZhY3RvclxuICAgIHZhciBpbmRpY2F0b3JQb3NpdGlvbiA9IE1hdGguY2VpbChudW1Ub1JlbmRlciAvIDIpO1xuXG4gICAgLy8gU3VidHJhY3QgdGhlIHBvcyBmcm9tIHRoZSBjdXJyZW50IHBhZ2UgdG8gZ2V0IHRoZSBmaXJzdCBwYWdlIG5vXG4gICAgdmFyIGZpcnN0UGFnZU51bWJlciA9IHRoaXMucGFnZSAtIGluZGljYXRvclBvc2l0aW9uICsgMTtcblxuICAgIC8vIElmIHRoZSBmaXJzdCBwYWdlIGlzIGxlc3MgdGhhbiAxLCBtYWtlIGl0IDFcbiAgICBpZiAoZmlyc3RQYWdlTnVtYmVyIDwgMSlcbiAgICAgIGZpcnN0UGFnZU51bWJlciA9IDE7XG5cbiAgICAvLyBBZGQgdGhlIG51bWJlciBvZiBwYWdlcyB0byByZW5kZXJcbiAgICAvLyByZW1lbWJlciB0byBzdWJ0cmFjdCAxIGFzIHRoaXMgcmVwcmVzZW50cyB0aGUgZmlyc3QgcGFnZSBudW1iZXJcbiAgICB2YXIgbGFzdFBhZ2VOdW1iZXIgPSBmaXJzdFBhZ2VOdW1iZXIgKyBudW1Ub1JlbmRlciAtIDE7XG5cbiAgICAvLyBJZiB0aGUgbGFzdCBwYWdlIGlzIGdyZWF0ZXIgdGhhbiB0aGUgcGFnZSBjb3VudFxuICAgIC8vIGFkZCB0aGUgZGlmZmVyZW5jZSB0byB0aGUgZmlyc3QvbGFzdCBwYWdlXG4gICAgaWYgKGxhc3RQYWdlTnVtYmVyID4gdGhpcy5wYWdlQ291bnQpIHtcbiAgICAgIHZhciBkaWYgPSB0aGlzLnBhZ2VDb3VudCAtIGxhc3RQYWdlTnVtYmVyO1xuXG4gICAgICBmaXJzdFBhZ2VOdW1iZXIgKz0gZGlmO1xuICAgICAgbGFzdFBhZ2VOdW1iZXIgKz0gZGlmO1xuICAgIH1cblxuICAgIHZhciBwYWdlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IGZpcnN0UGFnZU51bWJlcjsgaSA8PSBsYXN0UGFnZU51bWJlcjsgaSsrKSB7XG4gICAgICBwYWdlcy5wdXNoKGkpO1xuICAgIH1cbiAgICA7XG5cbiAgICB0aGlzLnBhZ2VzID0gcGFnZXM7XG5cbiAgICB0aGlzLnVwZGF0ZUJ1dHRvbnMoKTtcbiAgfVxuXG4gIHVwZGF0ZUJ1dHRvbnMoKSB7XG4gICAgdGhpcy5uZXh0RGlzYWJsZWQgPSB0aGlzLnBhZ2UgPT09IHRoaXMucGFnZUNvdW50O1xuICAgIHRoaXMucHJldkRpc2FibGVkID0gdGhpcy5wYWdlID09PSAxO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICB0aGlzLmNoYW5nZVBhZ2UodGhpcy5wYWdlICsgMSk7XG4gIH1cblxuICBuZXh0SnVtcCgpIHtcbiAgICB0aGlzLmNoYW5nZVBhZ2UodGhpcy5wYWdlICsgdGhpcy5udW1Ub1Nob3cpO1xuICB9XG5cbiAgcHJldigpIHtcbiAgICB0aGlzLmNoYW5nZVBhZ2UodGhpcy5wYWdlIC0gMSk7XG4gIH1cblxuICBwcmV2SnVtcCgpIHtcbiAgICB0aGlzLmNoYW5nZVBhZ2UodGhpcy5wYWdlIC0gdGhpcy5udW1Ub1Nob3cpO1xuICB9XG5cbiAgZmlyc3QoKSB7XG4gICAgdGhpcy5jaGFuZ2VQYWdlKDEpO1xuICB9XG5cbiAgbGFzdCgpIHtcbiAgICB0aGlzLmNoYW5nZVBhZ2UodGhpcy5wYWdlQ291bnQpO1xuICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9