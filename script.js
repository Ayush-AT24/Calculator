var operand1=null;
var operand2=null;
var operator=null;
var bu= document.getElementsByClassName("butt");
var di= document.getElementById("display");

for(var i=0;i<bu.length;i++)
{
    bu[i].addEventListener('click', function(){
        var  temp= this.getAttribute('data-value');
        if(temp=='+')
        {
            operator='+';
            operand1=parseFloat(di.textContent);
            di.innerText="";
        }
        else if(temp=='-')
        {
            operator='-';
            operand1=parseFloat(di.textContent);
            di.innerText="";
        }
        else if(temp=='÷')
        {
            operator='/';
            operand1=parseFloat(di.textContent);
            di.innerText="";
        }
        else if(temp=='×')
        {
            operator='*';
            operand1=parseFloat(di.textContent);
            di.innerText="";
        }
        else if(temp=="Back")
        {
            di.innerText=di.innerText.substring(0,di.innerText.length - 1);
        }
        else if(temp=='×')
        {
            operator='*';
            operand1=parseFloat(di.textContent);
            di.innerText="";
        }
        else if(temp=="+/-")
        {
            if(di.innerText[0]=='-')
            {
                di.innerText=di.innerText.substring(1,di.innerText.length);
            }
            else{
                var minus="-";
                di.innerText=minus.concat(di.innerText);

            }
        }
        else if(temp=='%')
        {
            operator='*';
            operand1=(parseFloat(di.textContent)/100);
            di.innerText="";
        }
        
        else if(temp=='='){
            operand2=parseFloat(di.textContent);
            di.innerText="";
            var res=eval(operand1 +" "+ operator +" "+ operand2);
            di.innerText+= res.toString();
            
        }
        else if(temp=="AC")
        {
            di.innerText="";
            operator=null;
            operand1=null;
            operand2=null;
        }
        else
        {
            di.innerText += temp;
        }
    })
}