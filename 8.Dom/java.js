function cambiarboton(){
    let i=document.getElementById("boton").value = "He sido clickeado";

}


//*Averiguar sobre DOM*//
/*
Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML 
está formada por múltiples etiquetas HTML, anidadas una dentro de otra, 
formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM).

Es una interfaz de programación que nos permite crear, cambiar o remover elementos del documento. También podemos agregar eventos a esos elementos para hacer nuestra página más dinámica.

Puedes seleccionar elementos en JavaScript usando métodos como:
1.getElementById()
2.querySelector()
3.querySelectorAll().

Si quieres agregar nuevos elementos al documento puedes hacerlo con  document.createElement().

También puedes cambiar los estilos en línea de CSS   de los elementos usando la propiedad  style.

Si deseas agregar eventos a elementos como botones, puedes usar el addEventListener().

Espero hayas disfrutado este artículo y te deseo las mejores de las suertes en tu viaje
de aprendizaje de JavaScript.*/

/*Hijos: childNodes, firstChild, lastChild
Existen dos términos que vamos a utilizar de ahora en adelante:

Nodos hijos (childNodes) – elementos que son hijos directos, es decir sus descendientes inmediatos. Por ejemplo, <head> y <body> son hijos del elemento <html>.
Descendientes – todos los elementos anidados de un elemento dado, incluyendo los hijos, sus hijos y así sucesivamente.*/

<html>
<body>
  <div>Begin</div>

  <ul>
    <li>
      <b>Information</b>
    </li>
  </ul>
</body>
</html>