/// <reference path="../../observable.ts" />
(function () {
    var o;
    var open;
    var so = o.buffer(open);
    so = o.buffer(function () { return Rx.Observable.timer(100); });
    so = o.buffer(open, function () { return Rx.Observable.timer(100); });
});
//# sourceMappingURL=buffer.js.map