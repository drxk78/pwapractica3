<?php
// Crear un arreglo con los datos de los productos
$productos = [
    [
        'id' => 1,
        'nombre' => 'DTA VI',
        'descripcion' => 'Un juego de rol en un mundo abierto lleno de aventuras épicas.',
        'precio' => 50,
        'imagen' => 'producto1.jpg' // Asegúrate de tener esta imagen en la carpeta adecuada
    ],
    [
        'id' => 2,
        'nombre' => 'CALL OF DUTY: BLACK OPS COLD WAR',
        'descripcion' => 'Un juego de acción y shooters.',
        'precio' => 60,
        'imagen' => 'producto2.jpg' // Asegúrate de tener esta imagen en la carpeta adecuada
    ],
    [
        'id' => 3,
        'nombre' => 'Cyberpunk 2077',
        'descripcion' => 'Un juego futurista de rol con una historia inmersiva y un mundo abierto.',
        'precio' => 70,
        'imagen' => 'producto3.jpg' // Asegúrate de tener esta imagen en la carpeta adecuada
    ]
];

// Puedes imprimir el arreglo para verificar si se creó correctamente
echo '<pre>';
print_r($productos);
echo '</pre>';
?>
