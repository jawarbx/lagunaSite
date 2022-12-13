original_text = "¡Pon el cursor en las imágenes para más información!";

function highlightDiv1(){
	if (document.getElementById("magicians-code").className === "magic-box"){
 	   document.getElementById("magicians-code").className = "magic-box otherDivHighlighted";
     document.getElementById("magicians-code").innerHTML = "Primero, las personas pueden tomar el agua del océano. El 70 por ciento de la tierra es de agua. Las personas solamente tienen que sacar la sal del agua de mar.";
  } else {
   	 document.getElementById("magicians-code").className = "magic-box";
     document.getElementById("magicians-code").innerHTML = " "; 
     document.getElementById("magicians-code").innerHTML = original_text;
  }
}

function highlightDiv2(){
	if (document.getElementById("magicians-code").className === "magic-box"){
 	 document.getElementById("magicians-code").className = "magic-box otherDivHighlighted";
     document.getElementById("magicians-code").innerHTML = "Segundo, nosotros necesitamos plantar más árboles. Los árboles son grandes y obstruyen el sol. Los árboles pueden parar la evaporación del agua. Entonces, los árboles pueden tomar agua de la tierra en su cuerpo. Después de muchas reacciones químicas, el agua de los árboles puede bajar la temperatura y reducir la evaporación.";
  } else {
   	 document.getElementById("magicians-code").className = "magic-box";
     document.getElementById("magicians-code").innerHTML = " "; 
     document.getElementById("magicians-code").innerHTML = original_text;
  }
}

function highlightDiv3(){
	if (document.getElementById("magicians-code").className === "magic-box"){
 	   document.getElementById("magicians-code").className = "magic-box otherDivHighlighted";
     document.getElementById("magicians-code").innerHTML = "Además, las personas también pueden tomar agua de lluvia directamente. Muchas tierras de agricultura utilizan este método para las plantas. Pero es muy difícil recoger suficiente agua para todas las lagunas.";
  } else {
   	 document.getElementById("magicians-code").className = "magic-box"
     document.getElementById("magicians-code").innerHTML = " "; 
     document.getElementById("magicians-code").innerHTML = original_text;
  }
}

function highlightDiv4(){
	if (document.getElementById("magicians-code").className === "magic-box"){
 	   document.getElementById("magicians-code").className = "magic-box otherDivHighlighted";
     document.getElementById("magicians-code").innerHTML = "Finalmente, es necesario que haya nuevas regulaciones para los agricultores.";
  } else {
   	 document.getElementById("magicians-code").className = "magic-box";
     document.getElementById("magicians-code").innerHTML = " "; 
     document.getElementById("magicians-code").innerHTML = original_text;
  }
}