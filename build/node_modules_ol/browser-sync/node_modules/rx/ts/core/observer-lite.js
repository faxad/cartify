/// <reference path="./disposables/disposable.ts" />
/// <reference path="./checkedobserver.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var iobserver;
    var observer;
    iobserver.onNext(false);
    iobserver.onError(new Error('a'));
    iobserver.onCompleted();
    observer.onNext(false);
    observer.onError(new Error('a'));
    observer.onCompleted();
    var so = Rx.Observer.create(function (v) { return 1; });
    so = Rx.Observer.create(function (v) { return 1; }, function (e) { });
    so = Rx.Observer.create(function (v) { return 1; }, function (e) { }, function () { });
});
//# sourceMappingURL=observer-lite.js.map