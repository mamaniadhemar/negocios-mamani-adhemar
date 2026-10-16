const resultado = document.getElementById('resultado');

async function buscarPokemon() {
  const nombre = document.getElementById('nombre').value.trim().toLowerCase();
  if (!nombre) {
    resultado.textContent = 'Escribe el nombre de un pokémon';
    return;
  }
  resultado.textContent = 'Cargando...';
  try {
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/${nombre}');
    if (!respuesta.ok) {
      throw new Error('El pokémon no existe');
    }
    const datos = await respuesta.json();
    mostrarPokemon(datos);
  } catch (error) {
    resultado.textContent = error.message;
  }
}

document.getElementById('buscar').addEventListener('click', buscarPokemon);