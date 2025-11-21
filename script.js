document.addEventListener('DOMContentLoaded', () => {
  const btnReserva = document.getElementById('btn-reserva');

  if (btnReserva) { 
      btnReserva.addEventListener('click', (e) => {
        e.preventDefault();
        // Redireciona para outra página
        window.location.href = 'reserva.html';
      });
    }
});

const form = document.getElementById('form-reserva');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const pessoas = document.getElementById('pessoas').value;

    const msg = document.getElementById('mensagem');
    msg.textContent = `🍝 Reserva confirmada para ${nome} no dia ${data} para ${pessoas} pessoa(s)!`;
    msg.style.color = "#006400";
    msg.style.fontWeight = "bold";

    form.reset();
  });
}

