var index=0,index,board,qus,correct=0,f=0,answer;
var questions = [
	{"question":"200+100","optionA":"300","optionB":"301","optionC":"302","correctAnswer":"optionA" },
	{"question":"100/10","optionA":"11","optionB":"10","optionC":"12","correctAnswer":"optionB" },
	{"question":"20-10","optionA":"11","optionB":"12","optionC":"10","correctAnswer":"optionC" },
	{"question":"11+100","optionA":"111","optionB":"11","optionC":"12","correctAnswer":"optionA" }
]

function display() {
	board = document.getElementById("board");
	if(index>=questions.length) {
		
		board.innerHTML="<h2>You Got "+correct+" of "+Object.keys(questions).length+"</h2>"
		document.getElementById("status").innerHTML="Quiz completed";
		index=0;
		correct=0;
		return false;
	}
	document.getElementById("status").innerHTML="Questions "+(index+1)+" of "+Object.keys(questions).length+"";
	
	board.innerHTML="<h3>"+questions[index].question+"</h3>";
	board.innerHTML+="<label> <input type='radio' name='choice' value='optionA'>"+questions[index].optionA+"</label>";
	board.innerHTML+="<label> <input type='radio' name='choice' value='optionB'>"+questions[index].optionB+"</label>";
	board.innerHTML+="<label> <input type='radio' name='choice' value='optionC'>"+questions[index].optionC+"</label>";
	board.innerHTML+="<button onclick='checkAnswer()'>submit</button>";



}

function checkAnswer() {
	choice=document.getElementsByName("choice");
	for(var j=0;j<choice.length;j++) {
		if(choice[j].checked) {
			answer=choice[j].value;		
		}
	}
	if (answer == questions[index].correctAnswer) {
		correct++;
	}
index++;
display();

}
