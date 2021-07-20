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

const questionsData = [
    { id: "age35", status: "checked", text: "35 or older" },
    { id: "bmi30", status: "", text: "BMI over 30" }
];

var db;
var request = window.indexedDB.open("newDatabase", 1);

request.onerror = function (event) {
    alert("error opening newDatabase");
};

request.onsuccess = function (event) {
    db = request.result;
    // alert("success: " + db);
};

request.onupgradeneeded = function (event) {
    alert("upgrade");
    var db = event.target.result;
    var objectStore = db.createObjectStore("employee", { keyPath: "id" });
    // var objectStore = db.createObjectStore("employee", { keyPath: "name" });

    for (var i in employeeData) {
        objectStore.add(employeeData[i]);
    }

    ////////////////////////
    var objectstore_questions = db.createObjectStore("questions", { keyPath: "id" });
    for (var ii in questionsData) {
        alert(questionsData[ii]);
        objectstore_questions.add(questionsData[ii]);
        alert("www");
    }

}

function initiate() {
    alert("initiate");
}

function read() {
    // var transaction = db.transaction(["employee"]);
    var transaction = db.transaction("employee", "readonly");
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


    // var transaction2 = db.transaction(["questions"]);
    var transaction2 = db.transaction("questions", "readonly");
    var objectStore2 = transaction2.objectStore("questions");
    var request2 = objectStore2.get("age35");
    request2.onerror = function (event) {
        alert("Unable to retrieve questions from database!");
    };
    request2.onsuccess = function (event) {
        if (request2.result) {
            alert("Question: " + request2.result.id + ", Status: " + request2.result.status + ", Text: " + request2.result.text);
        } else {
            alert("Question couldn't be found in your database!");
        }
    };
    //  alert("the end");
}

function readAll() {
    var objectStore = db.transaction("employee", "readonly").objectStore("employee");

    objectStore.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;

        if (cursor) {
            alert("Name for id " + cursor.key + " is " + cursor.value.name + ", Age: " + cursor.value.age + ", Email: " + cursor.value.email);
            cursor.continue();
        } else {
            alert("No more entries!");
        }
    };


    // var transaction2 = db.transaction(["questions"]);
    // var objectStore2 = transaction2.objectStore("questions");
    var objectStore2 = db.transaction("questions","readonly").objectStore("questions");
    objectStore2.openCursor().onsuccess = function (event) {

        var cursor2 = event.target.result;
        // alert("herey");
        if (cursor2) {
            // alert("herey2");
            alert("Question: " + cursor2.key + ", Status: " + cursor2.value.status + ", Text: " + cursor2.value.text);
            cursor2.continue();
        } else {
            alert("No more questions!");
        }
    };
}


var idKenny = "Kenny";
function add() {
    // var request = db.transaction(["employee"], "readwrite")
    var request = db.transaction("employee", "readwrite")
        .objectStore("employee")
        // .put({ id: "Kenny", name: "Kenny", age: 19, email: "kenny@planet.org" });
        .put({ id: idKenny, name: "Kenny", age: 19, email: "kenny@planet.org" });

    request.onsuccess = function (event) {
        alert("Kenny has been added to your database.");
    };

    request.onerror = function (event) {
        alert("Unable to add data\r\nKenny is aready exist in your database! ");
    }
}

function remove() {
    // var request = db.transaction(["employee"], "readwrite")
    var request = db.transaction("employee", "readwrite")
        .objectStore("employee")
        // .delete("00-03");
        .delete("Kenny");


    request.onsuccess = function (event) {
        alert("Kenny's entry has been removed from your database.");
    };
}

// var DBDeleteRequest
function deleteDatabase() {
    db.close();
    var DBDeleteRequest = window.indexedDB.deleteDatabase("newDatabase");
    alert("delete database");

    DBDeleteRequest.onerror = function (event) {
        alert("Error deleting database.");
    };
    DBDeleteRequest.onsuccess = function (event) {
        alert("Database deleted successfully");
    };
    DBDeleteRequest.onblocked = function () {
        console.log("Couldn't delete database due to the operation being blocked");
    };

}

function handleClick(myRadio) {
    var selectedValue = myRadio.value;
    if (selectedValue == 0) {
        document.getElementById("txtComments").style.display = "";
        //Show textbox
        var request = db.transaction("questions", "readwrite")
            .objectStore("questions")
            .put({ id: "age35", status: "checked", text: "over 35" });
        request.onsuccess = function (event) {
            alert("Yes has been added to your database.");
        };

        request.onerror = function (event) {
            alert("Unable to add Yes to your database! ");
        }
    }
    else {
        document.getElementById("txtComments").style.display = 'none';
        //Hide textbox.
        var request = db.transaction("questions", "readwrite")
        .objectStore("questions")
        .put({ id: "age35", status: "unchecked", text: "under 35" });
    request.onsuccess = function (event) {
        alert("No has been added to your database.");
    };

    request.onerror = function (event) {
        alert("Unable to add No to your database! ");
    }
    }
}


//---------------------------------------------SPEECH TO TEXT

// const speakButton;
var synth = window.speechSynthesis;

if ('speechSynthesis' in window) {
    synth.cancel();
    // alert("reload");
    document.getElementById("speak").disabled = false;
    if (synth.speaking) { /* stop narration */
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
    synth.resume();    //https://stackoverflow.com/questions/58953882/resuming-a-paused-speech-using-speechsynthesis-resume-on-chrome-android-doesn
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