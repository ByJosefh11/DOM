"use strict"

alert(table); // la tabla, tal como debería ser
table.remove();
// ¿Por qué aún está "aaa" en el documento?

// Cuando inspeccionamos el documento se puede ver que el texto aparece antes de la tabla y no dentro,
// así que al borrar la tabla el texto de fuera permanece