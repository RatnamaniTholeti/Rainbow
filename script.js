const button = document.querySelector("button");
const body = document.querySelector("body");
const color=['violet','indigo','blue','green','yellow','orange','red'];
body.style.backgroundColor="white";
document.addEventListener('click',function()
{
    const colorIndex=parseInt(Math.random()*color.length); 
    // document.write(colorIndex);
    body.style.backgroundColor=color[colorIndex];
});