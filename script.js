
$(document).ready(function() {
  // Mobile nav toggle
  $('#navToggle').on('click', function(){
    $('#nav ul').slideToggle();
  });

  // Contact form validation
  $('#contactForm').on('submit', function(e){
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const message = $('#message').val().trim();
    let valid = true;

    $('.error').remove();

    if (name.length < 3) {
      $('#name').after('<span class="error">Nome deve ter pelo menos 3 caracteres.</span>');
      valid = false;
    }
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      $('#email').after('<span class="error">E‑mail inválido.</span>');
      valid = false;
    }
    if (message.length < 10) {
      $('#message').after('<span class="error">Mensagem muito curta.</span>');
      valid = false;
    }

    if (!valid) {
      e.preventDefault();
    }
  });

  // Projects filter buttons
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
