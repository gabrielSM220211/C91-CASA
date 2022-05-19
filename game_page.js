function send() {
	número_1 = document.getElementById("número 1").value;
	número_2 = document.getElementById("número 2").value;
	actual_answer = parseInt(number1) * parseInt(número_2);
    question_number = "<h4>" + número_1 + " X "+ número_2 +"</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("número 1").value = "";
    document.getElementById("número 2").value = "";
}


questionTurn = "player1";
answerTurn = "player2";


function check()
{
	getAnswer = document.getElementById("inputCheckBox").value;
	answer = getAnswer.toLowerCase();
	console.log("resposta em caixa baixa - " + answer);
	if(answer == word)	
	{
		if(answerTurn == "player1")
		{
			player1Score = player1Score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2Score = player2Score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	if(questionTurn == "player1")
	{
		questionTurn = "player2"
		document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player2_name ;
	}
	else 
	{
		questionTurn = "player1"
		document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1_name ;
	}

	if(answerTurn == "player1")
	{
		answerTurn = "player2"
		document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2_name ;
	}
	else 
	{
		answerTurn = "player1"
		document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}