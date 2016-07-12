/// <reference path="./disposable.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var cd = new Rx.CompositeDisposable();
    var cd = new Rx.CompositeDisposable(Rx.Disposable.create(function () { }));
    var cd = new Rx.CompositeDisposable([Rx.Disposable.create(function () { })]);
    cd.add(Rx.Disposable.create(function () { }));
    cd.remove(Rx.Disposable.create(function () { }));
    cd.dispose();
    cd.isDisposed;
});
//# sourceMappingURL=compositedisposable.js.map