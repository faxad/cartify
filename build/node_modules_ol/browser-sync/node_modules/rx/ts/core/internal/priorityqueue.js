/// <reference path="../concurrency/scheduleditem.ts" />
var Rx;
(function (Rx) {
    var internals;
    (function (internals) {
    })(internals = Rx.internals || (Rx.internals = {}));
})(Rx || (Rx = {}));
(function () {
    var queue = new Rx.internals.PriorityQueue(100);
    var n = queue.length;
    var b = queue.isHigherPriority(1, 100);
    queue.percolate(100);
    queue.heapify(100);
    var item = queue.peek();
    queue.removeAt(100);
    var item = queue.dequeue();
    queue.enqueue(item);
    b = queue.remove(item);
    n = Rx.internals.PriorityQueue.count;
});
//# sourceMappingURL=priorityqueue.js.map