/// <reference path="./disposable.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var d = Rx.Disposable.create(function () { });
    var rcd = new Rx.RefCountDisposable(d);
    d = rcd.getDisposable();
    rcd.dispose();
    rcd.isDisposed;
});
//# sourceMappingURL=refcountdisposable.js.map