// Quest-Daten
const quests = {
    1: { frage: "Wie viele Fraktionen gibt es in World of Warcraft?", antwort: "2" },
    2: { frage: "Wie heißt die Hauptstadt der Horde?", antwort: "Orgrimmar" },
    3: { frage: "Welche Klasse kann Schurken aufspüren?", antwort: "Druide" }
};
let currentQuest = null;
// Sound-Funktion
function playSound(soundId) {
    document.getElementById(soundId).play();
}
// Quest starten
function startQuest(questId) {
    playSound("sound-click");
    currentQuest = questId;
    document.getElementById("quest-text").innerText = quests[questId].frage;
    document.getElementById("quest-modal").style.display = "block";
}
// Antwort prüfen
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    if (userAnswer.toLowerCase() === quests[currentQuest].antwort.toLowerCase()) {
        playSound("sound-correct");
        alert("Richtig! Du hast die Quest bestanden.");
        document.querySelector(`img[onclick="startQuest(${currentQuest})"]`).style.filter = "grayscale(100%)";
    } else {
        playSound("sound-wrong");
        alert("Falsch! Versuche es nochmal.");
    }
}
// Modal schließen
function closeModal() {
    document.getElementById("quest-modal").style.display = "none";
    document.getElementById("answer").value = "";
}