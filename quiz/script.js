var index=0,index,board,qus,correct=0,f=1;
var questions = {
	1:{	"question":"230-30","optionA":"45","optionB":"23","optionC":"30","correctAnswer":"c" },
	2:{	"question":"200+100","optionA":"300","optionB":"301","optionC":"302","correctAnswer":"a" },
	3:{	"question":"100/10","optionA":"11","optionB":"10","optionC":"12","correctAnswer":"b" },
	4:{	"question":"20-10","optionA":"11","optionB":"12","optionC":"10","correctAnswer":"c" },
	5:{	"question":"10+100","optionA":"110","optionB":"11","optionC":"12","correctAnswer":"a" },
}

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
	board.innerHTML="<h3>"+questions[f].question+"</h3>";
	board.innerHTML+="<label> <input type='radio' name='choice' checked='checked' value='optionA'>"+question[f].optionA+"</label>";
	board.innerHTML+="<label> <input type='radio' name='choice' value='optionB'>"+question[index].optionB+"</label>";
	board.innerHTML+="<label> <input type='radio' name='choice' value='optionC'>"+question[index].optionC+"</label>";
	board.innerHTML+="<button onclick='checkAnswer()'>submit</button>";

}

function checkAnswer() {
	choice=document.getElementsByName("choice");
	for(var i=0;i<choice.length;i++) {
		if(choice[i].checked) {
			answer=choice[i].value;		
		}
	}
	if (answer == questions[index].correctAnswer) {
		correct++;
	}
index++;
display();
}
