function Click()
  {
    

  

    let myelement = document.createElement("span") ;
      let mytext = document.createTextNode(document.getElementById("ff").value);

   myelement.appendChild(mytext);

      document.getElementById("f").appendChild(myelement).style.backgroundColor = "blueviolet";
      document.getElementById("f").appendChild(myelement).style.border = "1px solid black";
      document.getElementById("f").appendChild(myelement).style.textAlign = "center";

     }
