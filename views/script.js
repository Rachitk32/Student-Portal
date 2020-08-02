//login element
var temp=document.getElementById('element'); 

//added an event listener to body and password element
document.getElementById('pwd').addEventListener('focus',pfn)
document.getElementById('body').addEventListener('click',efn); 

//focus on password when clicked on password input space
function pfn()
{
  
   temp.style.animationDuration="0s" ;
   document.getElementById('pwd').focus();
   document.getElementById('body').removeEventListener('click',efn);
   
}

//focus on email on clicking anwhere except on password space
function efn()
{
   temp.style.animationDuration="0s" ;
   document.getElementById('email').focus();
   document.getElementById('body').removeEventListener('click',efn); 
};