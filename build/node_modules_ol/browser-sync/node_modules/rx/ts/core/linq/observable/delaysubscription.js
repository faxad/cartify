/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o.delaySubscription(1000);
    o.delaySubscription(1000, Rx.Scheduler.async);
});
//# sourceMappingURL=delaysubscription.js.map