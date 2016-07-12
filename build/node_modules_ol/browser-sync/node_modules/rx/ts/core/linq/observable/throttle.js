/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o.throttle(100);
    o.throttle(100, Rx.Scheduler.async);
});
//# sourceMappingURL=throttle.js.map