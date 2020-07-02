cauHoi = document.getElementsByClassName("col-md-11 col-10 question-box-title");
ans = JSON.parse(localStorage.getItem("ans"));
var buttons = document.querySelectorAll('input[type="radio"]');
pickCount=0;
for(i=0;i<cauHoi.length;i++){
	for(i2=0; i2<ans.length; i2++){
		if(cauHoi[i].innerText.replace(/(\n| |\$|\t)/gm, "").trim() == ans[i2]){
			for(i3=i*4; i3<i*4+4; i3++){
				if(buttons[i3].parentNode.parentNode.parentNode.lastElementChild.innerText.replace(/(\n| |\$|\t)/gm, "").trim() == ans[i2+1]){
					buttons[i3].click();
					buttons[i3].parentNode.parentNode.parentNode.lastElementChild.style.color="red";
					pickCount++;
				}
			}
		}
	}
}
alert("Ấn OK để chọn "+pickCount+"/"+cauHoi.length+" câu ("
      +10/cauHoi.length+" điểm 1 câu), các câu đúng sẽ chuyển thành màu đỏ, bạn có thể chọn lại để điểm thấp hơn.");
