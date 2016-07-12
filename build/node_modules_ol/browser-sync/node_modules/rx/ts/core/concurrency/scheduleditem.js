/// <reference path="./scheduler.ts" />
/// <reference path="../disposables/booleandisposable.ts" />
var Rx;
(function (Rx) {
    var internals;
    (function (internals) {
    })(internals = Rx.internals || (Rx.internals = {}));
})(Rx || (Rx = {}));
(function () {
    var item = new Rx.internals.ScheduledItem(Rx.Scheduler.default, {}, function (sc, s) { return Rx.Disposable.create(function () { }); }, 100);
    var item = new Rx.internals.ScheduledItem(Rx.Scheduler.default, {}, function (sc, s) { return Rx.Disposable.create(function () { }); }, 100, function (x, y) { return 500; });
    item.scheduler;
    item.state;
    item.action;
    item.dueTime;
    item.comparer;
    item.disposable;
    item.invoke();
    var n = item.compareTo(item);
    var b = item.isCancelled();
    var d = item.invokeCore();
});
//# sourceMappingURL=scheduleditem.js.map