var lesson = 'Mathematique';
var test_1 = 20;
var test_2 = 20;
var interrogation = 10;
var totalNotes = test_1 + test_2 + interrogation;
var moyenne = totalNotes / 3;

var elLesson = document.getElementById('matiere');
 elLesson.textContent = lesson;

var elTest_1 = document.getElementById('quiz_1');
elTest_1.textContent = test_1;


var elTest_2 = document.getElementById('quiz_2');
elTest_2.textContent = test_1;

var elInterrogation = document.getElementById('interro');
elInterrogation.textContent = interrogation;

var elTotalNotes = document.getElementById('totalpoindere');
elTotalNotes.textContent = totalNotes;

var elMoyenne = document.getElementById('moyentri');
elMoyenne.textContent = moyenne.toFixed(2);



