 player1 = localStorage.getItem("User1");
 player2 = localStorage.getItem("User2");


var question_turn= "player1";
var answer_turn = "player2";



function send(){
    var N1 = document.getElementById("N1").value;
    var N2 = document.getElementById("N2").value;
    actual_answer = parseInt(N1) * parseInt(N2);
    var question_number = "<h4>" + N1 + " X "+ N2 +"</h4>";
    var input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    
    var check_button = "<br><br><button class='btn btn-info'"+"onclick="+"check()"+">Check</button>"
    var row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById(N1).value = "";
    document.getElementById(N2).value = "";

    console.log(N1);
    
}



function check(){

    
    
    
    

    var score1 = 0;
    var score2 = 0;



    var get_answer = document.getElementById("input_check_box").value;

    if(question_turn == "player1"){
        question_turn = "player2"
        document.getElementById("question_turn").innerHTML = "Question Turn - " + player2;
        answer_turn = "player1"
        document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player1;
       }
       else{
        question_turn = "player1"
        document.getElementById("question_turn").innerHTML = "Question Turn - " + player1;
        answer_turn = "player2"
        document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player2;
       }

       
   if(get_answer == actual_answer){
    if(answer_turn == "player1"){
        update_player1_score = score1+1;
        document.getElementById("score1").innerHTML = update_player1_score;
    }
    else{
        update_player2_score = score2+1;
        document.getElementById("score2").innerHTML = update_player2_score;
    }
   }

  
}

