
$(document).ready(function() {
  /* ---------- Menu responsivo ---------- */
  $('#navToggle').on('click', function(){
    $('#nav ul').slideToggle();
  });

  /* ---------- Validação do formulário de contato ---------- */
  $('#contactForm').on('submit', function(e){
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const message = $('#message').val().trim();
    let valid = true;

    // remove erros anteriores
    $('.error').remove();

    // regra: nome >= 3 caracteres
    if (name.length < 3) {
      $('#name').after('<span class="error">Nome deve ter pelo menos 3 caracteres.</span>');
      valid = false;
    }

    // regex simples para e‑mail
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      $('#email').after('<span class="error">E‑mail inválido.</span>');
      valid = false;
    }

    // regra: mensagem >= 10 caracteres
    if (message.length < 10) {
      $('#message').after('<span class="error">Mensagem muito curta.</span>');
      valid = false;
    }

    // se algo inválido, evita submit
    if (!valid) {
      e.preventDefault();
    }
  });

  /* ---------- Filtro de projetos ---------- */
  $('.filter-btn').on('click', function(){
    const category = $(this).data('category');
    if (category === 'all') {
      $('.project-card').fadeIn();
    } else {
      $('.project-card').hide();
      $(`.project-card[data-category="${category}"]`).fadeIn();
    }
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');
  });
});
