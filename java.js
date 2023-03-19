//java script
var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomimagesource = "dice"+randomnumber1+".png";
 var image1 = document.querySelectorAll("img")[0]
 image1.setAttribute("src",randomimagesource);

var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomimagesource2="dice"+randomnumber2+".png";
var image2 =document.querySelectorAll("img")[1]
image2.setAttribute("src",randomimagesource2);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Arun wins";
}
else
{
    document.querySelector("h1").innerHTML="Anu wins";
}
if(randomnumber1==randomnumber2)
{
    document.querySelector("h1").innerHTML="Draw both of you wins";
}
