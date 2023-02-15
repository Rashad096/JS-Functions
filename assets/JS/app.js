
let btn= document.getElementById("btn");
let inp=document.getElementById("inp");

let groupID=document.getElementById("inp").value;

btn.onclick=function() 
 {
    
       if(groupID+"".slice(1,2)=== "A")
       {
        alert(`Hello ${groupID}`)

       }
    
}
    
