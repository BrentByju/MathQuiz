function addUser(){
    var Player1Name = document.getElementById("player1_name_input").value;
    var Player2Name = document.getElementById("player2_name_input").value;

    localStorage.setItem("User1",Player1Name);
    localStorage.setItem("User2",Player2Name);

    window.location = "quiz.html";
    console.log("Hello World");
}

