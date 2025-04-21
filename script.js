// Quest-Daten
const quests = {
    1: {
        story: "Ein alter Kompass zeigt dir den Weg nach Norden. Die Karte, die du von einem bärtigen Wanderer erhalten hast, spricht von einem Land voller Fjorde, schroffer Küsten und endlosen Sommertagen, in denen die Sonne nie untergeht. „Wenn du das Reich der Trolle findest, wirst du Antworten auf deine nächste Reise erhalten“, flüstert der Mann.",
        frage: "Finde das Land, das sowohl von Mitternachtssonne als auch Polarlichtern erzählt. Ein Land, das wilde Natur mit Märchen und Mythen verbindet. Wo bist du gelandet?",
        antwort: "Norwegen"
    },
    2: {
        story: "Am Rande eines dunklen Sees triffst du auf eine Gestalt mit wettergegerbter Haut und einem langen Stock mit Haken. Er schweigt, zeigt dir nur auf das Wasser und sagt: „Die Kunst liegt nicht im Tun, sondern im Warten. Nur wer Geduld hat, wird belohnt.“",
        frage: "Welche alte Kunstform übst du aus, wenn du still am Wasser sitzt, auf einen Biss hoffst und deinen Fang schließlich an Land ziehst?",
        antwort: "Angeln"
    },
    3: {
        story: "In einer verborgenen Bucht findest du ein schlankes Boot, kaum breiter als du selbst. Daneben liegt ein Paddel. Eine Nachricht ist in Holz geritzt: „Nur wer lautlos reist, wird das Geheimnis der Wasserwege entdecken.“",
        frage: "Welches Gefährt benutzt du, wenn du leise, ohne Motor, allein durch ruhige Gewässer gleitest und jede Bewegung mit eigener Kraft steuerst?",
        antwort: "Kayak"
    },
    4: {
        story: "In einer eisigen Ebene entdeckst du eine runde Struktur aus Schnee und Glas. Es ist still. Eine Stimme erklingt: „Nur wer der Kälte vertraut, findet in ihr Schutz.“ Innen ist es warm – erstaunlich warm.",
        frage: "In welchem ungewöhnlichen Bauwerk verbringst du hier die Nacht, sicher und geschützt, obwohl es ringsum gefriert?",
        antwort: "Igloo"
    },
    5: {
        story: "Nach einem langen Marsch durch das unbekannte Land erreichst du ein Plateau. Kein Dach, kein Zelt, nur du, die Nacht und der Himmel. Am Horizont flackern Lichter, als würden Sterne tanzen. Ein alter Traum: unter freiem Himmel zu schlafen.",
        frage: "Wo verbringst du die Nacht, wenn du nur eine Decke hast – und die Milchstraße über dir?",
        antwort: "Unter den Sternen"
    },
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
    const quest = quests[questId];

    document.getElementById("quest-story").innerText = quest.story;
    document.getElementById("quest-text").innerText = quest.frage;
    document.getElementById("quest-modal").style.display = "block";
}

// Antwort prüfen
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const feedback = document.getElementById("quest-feedback");

    if (userAnswer.toLowerCase() === quests[currentQuest].antwort.toLowerCase()) {
        playSound("sound-correct");
        showFeedback("Richtig! Du hast die Quest bestanden.", true);
        document.querySelector(`img[onclick="startQuest(${currentQuest})"]`).style.filter = "grayscale(100%)";
    } else {
        playSound("sound-wrong");
        showFeedback("Falsch! Versuche es nochmal.", false);
    }
}

function showFeedback(message, isSuccess) {
    const feedback = document.getElementById("quest-feedback");
    feedback.innerText = message;

    feedback.classList.remove("hidden", "success", "error", "show");
    feedback.classList.add(isSuccess ? "success" : "error", "show");

    setTimeout(() => {
        feedback.classList.remove("show");
        setTimeout(() => feedback.classList.add("hidden"), 300);
    }, 2500);
}


// Modal schließen
function closeModal() {
    document.getElementById("quest-modal").style.display = "none";
    document.getElementById("answer").value = "";
}

function startAdventure() {
    const music = document.getElementById("bg-music");
    music.play().catch(err => console.log("Autoplay failed:", err));
    
    // Hide the button after it’s clicked
    document.getElementById("start-btn").style.display = "none";
}

function showBubble(message) {
    const bubble = document.getElementById("npc-bubble");
    bubble.innerText = message;
    bubble.classList.remove("hidden");

    // Hide after 3 seconds
    setTimeout(() => {
        bubble.classList.add("hidden");
    }, 3000);
}