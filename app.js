let count = 0;
async function getRandomTrivia() {
  const res = await axios.get("http://jservice.io/api/random");
  console.log(res);
  console.log(res.data);
  console.log(res.data[0]);
  console.log(`Category: ${res.data[0].category.title}`);
  console.log(`Question: ${res.data[0].question}`);
  console.log(`Answer: ${res.data[0].answer}`);
  let C = `Category: ${res.data[0].category.title}`;
  let Q = ` ${res.data[0].question}`;
  let A = `Answer: ${res.data[0].answer}`;

  $("#category").text(C);
  $("#question").text(Q);
  $("#answer").text(A);
}

const form = document.querySelector("#start");

form.addEventListener("click", function (e) {
  e.preventDefault();
  if ($("#start").hasClass("debloqueado")) {
    return;
  } else {
    $("#spin-container").removeClass("d-none");
    $("#start").addClass("debloqueado");
    $("#start").addClass("d-none");
    $("#flash").addClass("d-none");
    setTimeout(function () {
      $("#re").removeClass("d-none");
      $("#start").removeClass("d-none");
      $("#count").removeClass("d-none");
      $("#spin-container").addClass("d-none");
    }, 500);
    setTimeout(function () {
      $("#flash").removeClass("d-none");
    }, 1000);

    getRandomTrivia();
  }
});

const conteo = document.querySelector("#count");
conteo.addEventListener("click", function (e) {
  e.preventDefault();
});

const question = document.querySelector("#caja");

question.addEventListener("click", function (e) {
  e.preventDefault();
  if (!$("#start").hasClass("debloqueado")) {
    return;
  }
  if ($("#answer").hasClass("d-none")) {
    $("#answer").toggleClass("d-none");
  } else {
    getRandomTrivia();
    $("#flash").addClass("d-none");
    $("#answer").addClass("d-none");
    $("#spin-container").removeClass("d-none");
    setTimeout(function () {
      $("#flash").removeClass("d-none");
      $("#spin-container").addClass("d-none");
    }, 1000);

    count++;
    $("#count").text(count);
    contador();
    console.log(count);
  }
  //   $("#answer").toggleClass("d-none");
});

/////This fuction set the alert and clears the Screen
function contador() {
  if (count == 6) {
    $("#spin-container").removeClass("d-none");
    count = 0;
    setTimeout(function () {
      alert("Game over!");
      $("#category").text("Thanks for Playing");
      $("#question").text(`Please "Restart"???`);
      $("#start").removeClass("debloqueado");
      $("#spin-container").addClass("d-none");
      $("#count").text(`^_^`);
    }, 1000);

    count = 0;
  }
}
