/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var o2;
    o = o.skipUntilWithTime(new Date());
    o = o.skipUntilWithTime(new Date(), Rx.Scheduler.default);
    o = o.skipUntilWithTime(1000);
    o = o.skipUntilWithTime(1000, Rx.Scheduler.default);
});
//# sourceMappingURL=skipuntilwithtime.js.map