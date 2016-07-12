/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var open;
    var so = o.window(open);
    so = o.window(function () { return Rx.Observable.timer(100); });
    so = o.window(open, function () { return Rx.Observable.timer(100); });
});
//# sourceMappingURL=window.js.map