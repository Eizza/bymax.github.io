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


    $(function(){
        var $el = $("p, h1, h2, h3, h4, h5, h6");

        $(window).on("scroll", function(){

          var wBottom = $(this).scrollTop() + $(this).height() + 500;
          $el.each(function(i){
            if($(this).data("a")) return;
            if(wBottom > $(this).offset().top){
              $(this).data("a",1);
              TweenMax.fromTo(this, 1,
                {x:-120, opacity:0},
                {x:0, opacity:1, delay:i*0.15, ease:Circ.easeOut
              }
              );
            }
          });
        });

      });
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

