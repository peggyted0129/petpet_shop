"use strict";

$(function () {
  console.log('Hello Bootstrap4');
}); // AOS 動畫

AOS.init({
  offset: 200,
  delay: 0,
  duration: 1000,
  once: true
});
$(document).ready(function () {
  console.log('HesSchool Hello!'); // RWD navbar 首頁

  $(".navbar-icon").on('click', function () {
    $(".toggler-bar-top").toggleClass("toggler-bar-top-rotate");
    $(".toggler-bar-middle").toggleClass("d-none");
    $(".toggler-bar-bottom").toggleClass("toggler-bar-bottom-rotate");
  }); // member 首頁

  $('.js-arrow').click(function () {
    $(this).toggleClass('rotatearrow');
  }); // detail_pic change

  $(".carousel__inner a").click(function () {
    $(".carousel__item--active img").attr("src", $(this).attr('href'));
    return false;
  }); // detail_modal 下一步btn

  $("#modal-btn1").click(function () {
    $('#reserveData').modal('show');
    $('#reserveStep').modal('hide');
  }); // detail_modal2 下一步btn

  $("#modal-btn2").click(function () {
    $('#reservePay').modal('show');
    $('#reserveData').modal('hide');
  }); // detail_modal3 下一步btn

  $("#modal-btn3").click(function () {
    $('#reserveSuccess').modal('show');
    $('#reservePay').modal('hide');
  }); // detail_moda2 返回btn

  $("#modal-back2").click(function () {
    $('#reserveStep').modal('show');
    $('#reserveData').modal('hide');
  }); // detail_moda3 返回btn

  $("#modal-back3").click(function () {
    $('#reserveData').modal('show');
    $('#reservePay').modal('hide');
  });
}), // 表單驗證
function () {
  'use strict';

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation'); // Loop over them and prevent submission

    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  }, false);
}(); // swiper

var swiper = new Swiper('.swiper-container', {
  speed: 1200,
  loop: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
//# sourceMappingURL=all.js.map
