"use strict"

  button.addEventListener("click", () => alert("1"));
  button.removeEventListener("click", () => alert("1"));
  button.onclick = () => alert(2);
  
  // Salen los dos mensajes, ya que la función que le estamos quitando al handler no es la que le pusimos antes.
  // Aunque es idéntica, es una nueva función
  // La forma correcta de hacerlo sería:
  function handler(){alert(1)}{
  correcto.addEventListener("click", handler);
  correcto.removeEventListener("click", handler);
  correcto.onclick = () => alert(2);
    
  }