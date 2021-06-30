//prefixes of implementation that we want to test
window.indexedDB = window.indexedDB || window.mozIndexedDB ||
    window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction ||
    window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange ||
    window.webkitIDBKeyRange || window.msIDBKeyRange


function Initiate() {
    if (!('indexedDB' in window)) {
        alert('This browser doesn\'t support IndexedDB');
        return;
    }

    const rfData = [
        { id: "0001", name: "age", present: "yes" },
        { id: "0002", name: "obesity", present: "no" }
    ];

    var rfdb;
    var request = indexedDB.open("rfDatabase", 1);

    request.onerror = function (event) {
        alert('error opening rfDatabase');
    };
    request.onsuccess = function (event) {
        rfdb = request.result;
        alert('opened rfDatabase');
    };
    request.onupgradeneeded = function (event) {
        var rfdb = event.target.result;
        var rfStore = rfdb.createObjectStore("riskFactor", { keyPath: "id" });
        for (var i in rfData) {
            rfStore.add(rfData[i]);
        }
        alert('created rfDatabse');
    }
    // alert('here2');
}


function ReadItem() {
    alert('here1');
    var transaction = rfdb.transaction(["riskfactor"]);
    var rfStore = transaction.objectStore("riskfactor");
    var request = rfStore.get("0001");
    request.onerror = function (event) {
        alert("Unable to retrieve daa from database!");
    };
    alert('here2');
}


// https://www.tutorialspoint.com/html5/html5_indexeddb.htm