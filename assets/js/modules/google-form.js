const googleForm = () => {
  $(function() {
    $(".g-form").submit(function (event) {
      event.preventDefault();

      let appLink = "https://script.google.com/macros/s/AKfycbwhUavZrxmWiYmuxGe7iGbdCPjkyHcMydcxMT3TH8ZKTDslz8U9uE3n8IdPwDhbYHkIkA/exec";

      const errorRespond = 'Не удалось отправить заявку. Cвяжитесь с администратором сайта по адресу: gudrin.online@gmail.com';
      // const successRespond = 'Заявка успешно отправлена. В случае ошибки, обратитесь по адресу: gudrin.online@gmail.com';

      // Id текущей формы
      let form = $('#' + $(this).attr('id'))[0];
      let fd = new FormData(form);

      $.ajax({
        url: appLink,
        type: "POST",
        data: fd,
        processData: false,
        contentType: false,
        beforeSend: function(){
        document.querySelector('.modal__btn').setAttribute('disabled', '')
      },
    }).done(function(res, textStatus, jqXHR) {
      if(jqXHR.readyState === 4 && jqXHR.status === 200) {
        form.reset();
        document.querySelector('.modal').classList.remove('active')
        document.querySelector('.modal__btn').removeAttribute('disabled', '')
      }
    }).fail(function(res, textStatus, jqXHR) {
      alert(errorRespond)
    });
  });
  }(jQuery));
}

export default googleForm;