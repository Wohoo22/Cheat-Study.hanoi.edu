ans=[4,2,4,3,3,1,2,3,4,4,2,3,4,2,3,2,3,4,4,4,4,4,2,3,4,1,4,4,1,4,2,3,3,2,3,2,4,2,3,4,2,1,4,4,2,1,1,2,1,3];
var buttons = document.querySelectorAll('input[type="radio"]');
z=0;
for(i=0;i<buttons.length;i+=4){
    z2=1;
    for(i2=i;i2<i+4;i2++){
        if(z2==ans[z]){
            buttons[i2].click();
        }
       z2++;
    }
z++;
}
