/// <reference path="./multicast.ts" />
(function () {
    var o;
    var oc;
    var is;
    var s;
    var a;
    o = o.shareReplay();
    o = o.shareReplay(1);
    o = o.shareReplay(1, 2);
    o = o.shareReplay(1, 2, Rx.Scheduler.default);
});
//# sourceMappingURL=sharereplay.js.map