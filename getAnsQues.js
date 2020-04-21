//doi class cua text-success thanh primary
var test = document.getElementsByClassName("text-success");
for(i=2; i<test.length; i+=3){
	test[i].className = "text-primary";
}
//Code lay cau hoi va dap an tung cau cho vao json
dapAn = document.getElementsByClassName("text-primary");
cauHoi = document.getElementsByClassName("col-11 question-box-title");
ans = [];
for(i=1;i<dapAn.length;i++){
	var question = cauHoi[i-1].innerText; 
	var answer =  dapAn[i].parentNode.nextElementSibling.innerText;
	question = question.replace(/(\r\n|\n|\r)/gm,"");
	ans.push(question)
	ans.push(answer);
}
localStorage.setItem("ans",JSON.stringify(ans));
