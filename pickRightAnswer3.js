cauHoi = document.getElementsByClassName("col-11 question-box-title");
ans = JSON.parse(localStorage.getItem("ans"));
var buttons = document.querySelectorAll('input[type="radio"]');
for(i=0;i<cauHoi.length;i++){
	for(i2=0; i2<ans.length; i2++){
		x=cauHoi[i].innerText.replace(/(\r\n|\n|\r)/gm,"");
		if(x == ans[i2]){
			for(i3=i*4; i3<i*4+4; i3++){
				y=buttons[i3].parentNode.nextElementSibling.innerText.replace(/(\r\n|\n|\r)/gm,"");
				if(y == ans[i2+1]){
					buttons[i3].onclick();
				}
			}
		}
	}
}
