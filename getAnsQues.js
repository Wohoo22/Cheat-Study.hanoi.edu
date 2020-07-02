ans =[];
dapAn = document.getElementsByClassName("text-success");
for(i=2;i<dapAn.length;i+=3){
    	var cauHoi =  dapAn[i-1].parentNode.nextElementSibling.innerText.replace(/(\n| |\$|\t)/gm, "").trim();
	var answer =  dapAn[i].parentNode.nextElementSibling.innerText.replace(/(\n| |\$|\t)/gm, "").trim();
    	ans.push(cauHoi);
	ans.push(answer); 
}
localStorage.setItem("ans",JSON.stringify(ans));
