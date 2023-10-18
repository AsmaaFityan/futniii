var show = document.querySelector("#show")
var btn = document.querySelector("#btn")


btn.onclick = function(){  
     document.getElementById("show").innerHTML = "copied",
     show.style.width ="70px";
     show.style.height ="30px";
     show.style.backgroundColor ="#003D7D";
     show.style.display="block";
     show.style.color="white";
     show.style.textAlign="center";
     show.style.borderRadius="8px";
     show.style.marginLeft="35px";
}





