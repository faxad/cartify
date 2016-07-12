/// <reference path="../observable.ts" />
/// <reference path="../observer-lite.ts" />
/// <reference path="../disposables/disposable.ts"/>
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var is = new Rx.Subject();
    var s = new Rx.Subject();
    is.hasObservers();
    s.hasObservers();
    s.isDisposed;
    var iob = s;
    var io = s;
    var ob = s;
    var o = s;
    var d = s;
    var ns = Rx.Subject.create(iob, io);
    var ns = Rx.Subject.create(ob, o);
});
//# sourceMappingURL=subject.js.map