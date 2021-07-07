//prefixes of implementation that we want to test
window.indexedDB = window.indexedDB || window.mozIndexedDB ||
    window.webkitIndexedDB || window.msIndexedDB;

//prefixes of window.IDB objects
window.IDBTransaction = window.IDBTransaction ||
    window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange ||
    window.msIDBKeyRange

if (!window.indexedDB) {
    alert("Your browser doesn't support IndexedDB.");
}
/* else {
    alert("IndexeedDB supported");
} */

const employeeData = [
    { id: "00-01", name: "gopal", age: 35, email: "gopal@tutorialspoint.com" },
    { id: "00-02", name: "prasad", age: 32, email: "prasad@tutorialspoint.com" }
];
var db;
var request = window.indexedDB.open("newDatabase", 1);

request.onerror = function (event) {
    alert("error: ");
};

request.onsuccess = function (event) {
    db = request.result;
    // alert("success: " + db);
};

request.onupgradeneeded = function (event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore("employee", { keyPath: "id" });
    // var objectStore = db.createObjectStore("employee", { keyPath: "name" });

    for (var i in employeeData) {
        objectStore.add(employeeData[i]);
    }
}

function initiate() {
    alert("initiate");
}

function read() {
    var transaction = db.transaction(["employee"]);
    var objectStore = transaction.objectStore("employee");
    // var request = objectStore.get("00-03");
    var request = objectStore.get("Kenny");


    // var request = objectStore.get("Kenny");

    request.onerror = function (event) {
        alert("Unable to retrieve daa from database!");
    };

    request.onsuccess = function (event) {
        // Do something with the request.result!
        if (request.result) {
            alert("Name: " + request.result.name + ",Age: " + request.result.age + ", Email: " + request.result.email);
        } else {
            alert("Kenny couldn't be found in your database!");
        }
    };
}

function readAll() {
    var objectStore = db.transaction("employee").objectStore("employee");

    objectStore.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;

        if (cursor) {
            alert("Name for id " + cursor.key + " is " + cursor.value.name + ", Age: " + cursor.value.age + ", Email: " + cursor.value.email);
            cursor.continue();
        } else {
            alert("No more entries!");
        }
    };
}

function add() {
    var request = db.transaction(["employee"], "readwrite")
        .objectStore("employee")
        .put({ id: "Kenny", name: "Kenny", age: 19, email: "kenny@planet.org" });

    request.onsuccess = function (event) {
        alert("Kenny has been added to your database.");
    };

    request.onerror = function (event) {
        alert("Unable to add data\r\nKenny is aready exist in your database! ");
    }
}

function remove() {
    var request = db.transaction(["employee"], "readwrite")
        .objectStore("employee")
        // .delete("00-03");
        .delete("Kenny");

    request.onsuccess = function (event) {
        alert("Kenny's entry has been removed from your database.");
    };
}


//---------------------------------------------SPEECH TO TEXT

// const speakButton;
var synth = window.speechSynthesis;

if ('speechSynthesis' in window) {
    synth.cancel();
    // alert("reload");
    document.getElementById("speak").disabled = false;
    if(synth.speaking){ /* stop narration */
        /* for safari */
        // alert("reload2");
        synth.cancel();

    }
} else {
    document.getElementById("speak").disabled = true;
    alert("Text to sppech not supported on this browser");
}



function speak() {
    // alert("talk3");
    document.getElementById("speak").disabled = true;
    document.getElementById("pause").disabled = false;
    document.getElementById("resume").disabled = true;
    document.getElementById("stop").disabled = false;
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance("How about we say this now? This is quite a long sentence to say.");
    synth.speak(utterThis);

    utterThis.onend = function () {
        document.getElementById("speak").disabled = false;
        document.getElementById("pause").disabled = true;
        document.getElementById("stop").disabled = true;
        document.getElementById("resume").disabled = true;
    }

}

function pause() {
    if (synth.speaking && !synth.paused) {
        synth.pause();
        document.getElementById("pause").disabled = true;
        document.getElementById("resume").disabled = false;
        document.getElementById("stop").disabled = false;
    }

    // synth.pause(); 
    //   alert("pause");
}

function resume() {
    synth.resume();
    document.getElementById("pause").disabled = false;
    document.getElementById("resume").disabled = true;
    document.getElementById("stop").disabled = false;
}

function stop() {
    if (synth.speaking) {
        /* for safari */
        // flag = false; https://www.alebalweb-blog.com/85-text-to-speech-player-with-buttons-play-pause-stop-and-voice-choice.html
        synth.cancel();
        document.getElementById("pause").disabled = true;
        document.getElementById("resume").disabled = true;
        document.getElementById("stop").disabled = true;

    }
}