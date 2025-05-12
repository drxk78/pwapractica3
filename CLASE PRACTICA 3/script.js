// Definir los productos (simulados como en el ejemplo)
const productos = [
    {
        id: 1,
        nombre: 'The Witcher 3',
        descripcion: 'Un juego de rol en un mundo abierto lleno de aventuras épicas.',
        precio: 50,
        imagen: 'producto1.jpg'
    },
    {
        id: 2,
        nombre: 'Red Dead Redemption 2',
        descripcion: 'Un juego de acción y aventura en un entorno del viejo oeste.',
        precio: 60,
        imagen: 'producto2.jpg'
    },
    {
        id: 3,
        nombre: 'Cyberpunk 2077',
        descripcion: 'Un juego futurista de rol con una historia inmersiva y un mundo abierto.',
        precio: 70,
        imagen: 'producto3.jpg'
    }
];

// Función para cargar los productos en la página
function cargarProductos() {
    const container = document.getElementById('productos-container');
    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        productoDiv.innerHTML = `
            <img src="images/${producto.imagen}" alt="${producto.nombre}" class="producto-img">
            <div class="producto-info">
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <p><strong>Precio: $${producto.precio}</strong></p>
                <button class="agregar-carrito" data-id="${producto.id}">Agregar al carrito</button>
            </div>
        `;

        container.appendChild(productoDiv);
    });

    // Agregar eventos a los botones de "Agregar al carrito"
    document.querySelectorAll('.agregar-carrito').forEach(button => {
        button.addEventListener('click', agregarAlCarrito);
    });
}

// Función para agregar productos al carrito usando localStorage
function agregarAlCarrito(event) {
    const id = event.target.getAttribute('data-id');
    const producto = productos.find(p => p.id === parseInt(id));

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    actualizarCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem('carrito');
    actualizarCarrito();
}

// Función para actualizar el carrito
function actualizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoLista = document.getElementById('carrito-lista');
    const totalElement = document.getElementById('total');

    // Limpiar la lista del carrito
    carritoLista.innerHTML = '';

    let total = 0;
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        carritoLista.appendChild(li);
        total += item.precio;
    });

    totalElement.textContent = total;

    // Mostrar el botón de vaciar el carrito
    const vaciarBtn = document.getElementById('vaciar-carrito');
    vaciarBtn.style.display = carrito.length > 0 ? 'block' : 'none';
}

// Cargar los productos y el carrito cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
    actualizarCarrito();

    // Evento para vaciar el carrito
    document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);
});
