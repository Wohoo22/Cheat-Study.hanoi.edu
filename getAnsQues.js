dapAn = document.getElementsByClassName("text-success");
cauHoi = document.getElementsByClassName("col-11 question-box-title");
ans = [];
for(i=2;i<dapAn.length;i++){
	var question = cauHoi[i-2].innerText; 
	var answer =  dapAn[i].parentNode.nextElementSibling.innerText;
	ans.push(question);
	ans.push(answer); 
}
localStorage.setItem("ans",JSON.stringify(ans));
