function getAnswer(){
    const answers = [
        "i can tell you certainly, no",
        "sure, i literally couldn't care less",
        "no to the yes",
        "no???",
        "lol literally no",
        "No, you dingleberry",
        "that would be a DAMN NO",
        "sure, why not",
        "im an 8ball, not a deal with your sh*t ball",
        "is trump's skin orange?",
        "never, dumbass",
        "yes, idiot",
        "yes???",
        "BACK OFF. you know thats a no",
        "okay, whatever yes",
        "im not sure but ur def stupid",
        "yes!!!!",
        "ask again later when im less busy with ur mom",
        "can you not",
        "no!!!!!",
        "honestly i don't care",
        "when you grow a braincell, yes",
        "no lmfao",
    ];

    const question = document.getElementById("question").value;
    if (question.length === 0){
        alert("You need to ask a question first! DUMBASS");
        return;
    }

    const answer = answers[Math.floor(Math.random() * answers.length)];
    const answerDiv = document.getElementById("answer");
    answerDiv.innerHTML = answer;
}