/// <reference path="./disposables/disposable.ts" />
/// <reference path="./concurrency/scheduler.ts" />
/// <reference path="./observable.ts" />
/// <reference path="./observer-lite.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var notification = new Rx.Notification(undefined, undefined, undefined, undefined, undefined, undefined);
    var observer;
    notification.accept(observer);
    notification.accept(function (n) { return n.toString(); }, function (e) { return e; }, function () { return false.toString(); });
    var observable = notification.toObservable();
    var observable = notification.toObservable(Rx.Scheduler.currentThread);
    Rx.Notification.createOnNext(function () { return true; });
    Rx.Notification.createOnError(new Error('a'));
    Rx.Notification.createOnCompleted();
});
//# sourceMappingURL=notification.js.map