window.onload = function(){

    $("#btn").click(function(){
        if (music.paused) {
    music.play();
    music.volume = 0;
    btnimg.src = "img/pause.png";

    TweenMax.to(music, 3, {
      volume: 1,
      ease: Power1.easeInOut
    });

  } else {
    TweenMax.to(music, 1, {
      volume: 0,
      onComplete: () => music.pause()
    });

    btnimg.src = "img/play.png";
  }
    });

// ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы

    $(function () {
  var $el = $("p, h1, h2, h3, h4, h5, h6");
  var activated = false;

  function inView($x) {
    var top = $x.offset().top;
    var wTop = $(window).scrollTop();
    var wBottom = wTop + $(window).height();
    return wBottom > top + 50 && wTop < top + $x.outerHeight();
  }

  function revealVisible() {
    var delay = 0;

    $el.each(function () {
      var $x = $(this);
      if ($x.data("a")) return;
      if (!inView($x)) return;

      $x.data("a", 1);
      TweenMax.fromTo(this, 1,
        { x: -120, opacity: 0 },
        { x: 0, opacity: 1, ease: Power3.easeOut, delay: delay }
      );
      delay += 0.15; // “волной” после нажатия
    });
  }

  // 1) старт по нажатию на экран (первый раз)
  $(document).one("click touchstart", function () {
    activated = true;
    revealVisible();
  });

  // 2) при скролле показываем остальные (если уже был клик)
  $(window).on("scroll", function () {
    if (!activated) return;
    revealVisible();
  });
});

    

// ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы
}

// ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы
// https://script.google.com/macros/s/AKfycbymWzaZHU9ZZ31pmTDznaOw_iTV14hfD3DUyCilFrA-uVJDRYYDPymuOtFD6nVLtukN/exec

window.sendData = function () {
  const name = document.getElementById("name").value.trim();
  const selected = document.querySelector('input[name="attendance"]:checked');
  if (!name) return alert("Введите имя");
  if (!selected) return alert("Выберите вариант");

  const formData = new FormData();
  formData.append("name", name);
  formData.append("answer", selected.value);

  // блокируем кнопку на 1.2 сек
  const btn = document.querySelector("#rsvpForm button[type='submit']");
  btn.disabled = true;
  btn.textContent = "Отправляю...";

  fetch("https://script.google.com/macros/s/AKfycbymWzaZHU9ZZ31pmTDznaOw_iTV14hfD3DUyCilFrA-uVJDRYYDPymuOtFD6nVLtukN/exec", { method: "POST", mode: "no-cors", body: formData })
    .finally(() => {
      setTimeout(() => {
        alert("Спасибо 💌");
        document.getElementById("rsvpForm").reset();
        btn.disabled = false;
        btn.textContent = "Отправить";
      }, 1200);
    });
};

// ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы

