/// <reference path="./disposables/disposable.ts" />
/// <reference path="./checkedobserver.ts" />
/// <reference path="./notification.ts" />
(function () {
    var observer;
    var n = observer.toNotifier();
    var o = observer.asObserver();
    var c = observer.checked();
    o = observer.notifyOn(Rx.Scheduler.immediate);
    var so = Rx.Observer.fromNotifier(function (n) {
        // Handle next calls
        if (n.kind === 'N') {
            console.log('Next: ' + n.value);
        }
        // Handle error calls
        if (n.kind === 'E') {
            console.log('Error: ' + n.exception);
        }
        // Handle completed
        if (n.kind === 'C') {
            console.log('Completed');
        }
    });
});
//# sourceMappingURL=observer-extras.js.map