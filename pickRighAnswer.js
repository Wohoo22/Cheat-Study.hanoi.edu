var buttons = document.querySelectorAll('input[type="radio"]');
ans = JSON.parse(localStorage.getItem("ans"));
for(i=0;i<buttons.length;i++){
   for(i2=0;i2<ans.length; i2++){
      if(buttons[i].parentNode.parentNode.parentNode.lastElementChild.innerText == ans[i2]){
         buttons[i].onclick();
      }
   }
}
