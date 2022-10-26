function totalPago () {
   var categoria= document.getElementById ('categoria').value;
   var cantidad= document.getElementById ('cantidad').value;
   var ticket= 200;
   var pretotal= ticket* cantidad
   var descuento= pretotal* categoria
   var resultado= pretotal- descuento
   document.getElementById('result').innerHTML= resultado
}