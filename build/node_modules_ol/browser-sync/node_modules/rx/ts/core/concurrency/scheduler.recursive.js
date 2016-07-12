/// <reference path="../disposables/disposable.ts" />
(function () {
    var s;
    var d = s.scheduleRecursive('state', function (s, a) { return Rx.Disposable.empty; });
    var d = s.scheduleRecursiveFuture('state', 100, function (s, a) { return Rx.Disposable.empty; });
});
//# sourceMappingURL=scheduler.recursive.js.map