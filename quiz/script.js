var pos=0,board,qus,choice,a,b,c,cor=0,ct;
var questions=[	
		["230-30","45","23","30","c"],
		["200+100","300","301","302","a"],
		["100/10","11","10","12","b"],
		["20-10","11","12","10","c"],
		["10+100","110","11","12","a"]
];
function display()
{
	board=document.getElementById("board");
	if(pos>=questions.length)
	{
		board.innerHTML="<h2>You Got "+cor+" of "+questions.length+"</h2>"
		document.getElementById("status").innerHTML="Quiz completed";
		pos=0;
		cor=0;
		return false;
	}
	document.getElementById("status").innerHTML="Questions "+(pos+1)+" of "+questions.length+" ";
	qus=questions[pos][0];
	a=questions[pos][1];
	b=questions[pos][2];
	c=questions[pos][3];
	board.innerHTML="<h3>"+qus+"</h3>";
	board.innerHTML+="<label> <input type='radio' name='choice' value='a'>"+a+"</label>";
	board.innerHTML+="<label> <input type='radio' name='choice' value='b'>"+b+"</label>";
	board.innerHTML+="<label> <input type='radio' name='choice' value='c'>"+c+"</label>";
	board.innerHTML+="<button onclick='checka()'>submit</button>";
}
function checka(){
	choice=document.getElementsByName("choice");
	for(var i=0;i<choice.length;i++)
	{
		if(choice[i].checked)
		{
			ct=choice[i].value;		}
	}
	if (ct==questions[pos][4]) {
		cor++;
	}
pos++;
display();
}