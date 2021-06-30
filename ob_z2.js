(function () {
    // This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
    // var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

    //prefixes of implementation that we want to test
    window.indexedDB = window.indexedDB || window.mozIndexedDB ||
        window.webkitIndexedDB || window.msIndexedDB;

    //prefixes of window.IDB objects
    window.IDBTransaction = window.IDBTransaction ||
        window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange ||
        window.msIDBKeyRange


    'use strict';
    if (!('indexedDB' in window)) {
        alert('This browser doesn\'t support IndexedDB');
        return;
    }
    /* else {
        alert('This browser supports IndexedDB');
    } */

    // Open ie connect to (or create) the database
    var openRequest = indexedDB.open("MyDatabase", 1);

    //
    openRequest.onerror = function () {
        Alert('Error', openRequest.error);
    };

    // Create the schema
    openRequest.onupgradeneeded = function () {
        var db = openRequest.result;
        var store = db.createObjectStore("MyObjectStore", { keyPath: "id" });
        var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
        alert('onupgradeneeded');
    };

    openRequest.onsuccess = function () {
        // Start a new transaction
        var db = openRequest.result;
        var tx = db.transaction("MyObjectStore", "readwrite");
        var store = tx.objectStore("MyObjectStore");
        var index = store.index("NameIndex");

        // Add some data
        store.put({ id: 12345, name: { first: "John", last: "Doe" }, age: 42 });
        store.put({ id: 67890, name: { first: "Bob", last: "Smith" }, age: 35 });

        // Query the data
        var getJohn = store.get(12345);
        var getBob = index.get(["Smith", "Bob"]);

        getJohn.onsuccess = function () {
            alert(getJohn.result.name.first);
        };

        getBob.onsuccess = function () {
            alert(getBob.result.name.first);

        };

        // Close the db when the transaction is done
        tx.oncomplete = function () {
            db.close();
        };

        alert('onsuccess');
    };

    DeleteDatabase = function () {
        let deleteRequest = indexedDB.deleteDatabase("MyDatabase")
        deleteRequest.onsuccess = function () {
            alert("Deleted Database");
        };
        deleteRequest.onerror = function () {
            alert("Could not delete database");
        };
        deleteRequest.onblocked = function () {
            alert("Couldn't delete database due to the operation being blocked");
        };
    }

    /*  ReadDatabase = function () {
         var transaction = db.transaction(["MyObjectStore"]);
         var objectStore = transaction.objectStore("MyObjectStore");
         var request = objectStore.get("12345");
         request.onsuccess = function(event) {
             
             alert('read');
           };
         
 
         alert('read');
     }; */




})();



