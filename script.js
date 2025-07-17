document.querySelectorAll('.materia').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    updateMaterias();
  });
});

function updateMaterias() {
  const aprobadas = Array.from(document.querySelectorAll('.materia.active')).map(b => b.dataset.id);

  document.querySelectorAll('.materia').forEach(button => {
    const correlativas = button.dataset.correlativas.split(',').filter(Boolean);
    const puedeCursar = correlativas.every(id => aprobadas.includes(id));

    if (!button.classList.contains('active') && correlativas.length > 0) {
      button.disabled = !puedeCursar;
      button.style.cursor = puedeCursar ? 'pointer' : 'not-allowed';
      button.style.color = puedeCursar ? 'white' : '#aaa';
      button.style.backgroundColor = puedeCursar ? '#333' : '#555';
    }
  });
}

updateMaterias();
