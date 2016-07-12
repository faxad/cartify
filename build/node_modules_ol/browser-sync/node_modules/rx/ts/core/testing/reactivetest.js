/// <reference path="./subscription.ts" />
/// <reference path="./recorded.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var n = Rx.ReactiveTest.created;
    var n = Rx.ReactiveTest.subscribed;
    var n = Rx.ReactiveTest.disposed;
    var r = Rx.ReactiveTest.onNext(100, 'abc');
    var r = Rx.ReactiveTest.onNext(100, function (v) { return false; });
    var r = Rx.ReactiveTest.onError(100, new Error('abc'));
    var r = Rx.ReactiveTest.onError(100, function (v) { return true; });
    var r = Rx.ReactiveTest.onCompleted(100);
    var s = Rx.ReactiveTest.subscribe(100);
    var s = Rx.ReactiveTest.subscribe(100, 200);
});
//# sourceMappingURL=reactivetest.js.map