dapAn = document.getElementsByClassName("text-success");
cauHoi = document.getElementsByClassName("col-11 question-box-title");
ans = [];
for(i=2;i<dapAn.length;i++){
	var question = cauHoi[i-2].innerText; 
	var answer =  dapAn[i].parentNode.nextElementSibling.innerText;
	question = question.replace(/(\r\n|\n|\r)/gm,"");
	answer = answer.replace(/(\r\n|\n|\r)/gm,"");
	ans.push(question);
	ans.push(answer);
}
localStorage.setItem("ans",JSON.stringify(ans));
