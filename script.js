var info = {
  name: "",
  surname: "",
  mail: "",
  recovered: "",
  antiTest: "",
  testResult: "",
  testDate: "",
  covidDate: "",
  vacinated: "",
  vacineDose: "",
  notVaccinatedReason: "",
  recomendationsOnlineMeeting: "",
  recomendationsofficeDay: "",
  onlineMeetingOpinion: "",
  environmentOpinion: "",
};

var nameAnswer;
var surnameAnswer;
var mailAnswer;

var name = document.querySelector("#name");
var surname = document.querySelector("#surname");
var email = document.querySelector("#email");
var identification = document.querySelector("#identification");
var introduction = document.querySelector("#introduction");
var introButton = document.querySelector("#introButton");
var recomendations = document.getElementById("recomendations");
var vaccinatedButton = document.getElementById("vaccinatedButton");
var vaccinatedPrevius = document.getElementById("vaccinatedPrevius");
var bookingMoh1 = document.getElementById("bookingMoh1");
var bookingMoh2 = document.getElementById("bookingMoh2");
var recomendationsButton = document.getElementById("recomendationsButton");
var thanks = document.getElementById("thanks");
var recomendationsPrevius = document.getElementById("recomendationsPrevius");
var booking = document.getElementById("booking");
var covid19 = document.querySelector("#covid19");
var identificationButton = document.querySelector("#identificationButton");
var identificationNext = document.querySelector("#identificationNext");
var name1 = document.getElementById("name1");
var surname = document.getElementById("surname");
var imail = document.getElementById("imail");
var nameError = document.getElementById("nameError");
var surnameError = document.getElementById("surnameError");
var imailError = document.getElementById("imailError");
var identificationForm = document.getElementById("identificationForm");
var dateB = document.getElementById("dateB");

var covid19Previus = document.getElementById("covid19Previus");
var vaccinated = document.getElementById("vaccinated");

introButton.addEventListener("click", function () {
  introduction.style.display = "none";
  identification.style.display = "inline-block";
  $(".imgInmate").css({ width: 0.0 }).animate({ width: 753 }, 250);
});

var regexName = /^[ა-ჰa-zA-Z]+$/gi;
name1.addEventListener("focusout", function () {
  if (
    name1.value.length >= 3 &&
    name1.value.length <= 256 &&
    regexName.test(name1.value)
  ) {
    nameError.setAttribute("data-errorName", "");
  } else if (name1.value.length == 0) {
    nameError.setAttribute("data-errorName", "სახელის ველი სავალდებულოა");
  } else if (name1.value.length < 3) {
    nameError.setAttribute(
      "data-errorName",
      "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან"
    );
  } else if (name1.value.length > 256) {
    nameError.setAttribute(
      "data-errorName",
      "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 256 სიმბოლოსგან"
    );
  } else if (!regexName.test(name1.value)) {
    nameError.setAttribute(
      "data-errorName",
      "სახელის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს(ა-ჰ, a-z, A-Z)"
    );
  }
});

surname.addEventListener("focusout", function () {
  if (
    surname.value.length >= 3 &&
    surname.value.length <= 256 &&
    /^[ა-ჰa-zA-Z]+$/gi.test(surname.value)
  ) {
    document.getElementById("surnameError").setAttribute("data-errorName", "");
  } else if (surname.value.length == 0) {
    surnameError.setAttribute("data-errorName", "გვარის ველი სავალდებულოა");
  } else if (surname.value.length < 3) {
    surnameError.setAttribute(
      "data-errorName",
      "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან"
    );
  } else if (surname.value.length > 256) {
    surnameError.setAttribute(
      "data-errorName",
      "გვარის ველი უნდა შედგებოდეს მაქსიმუმ 256 სიმბოლოსგან"
    );
  } else if (!regexName.test(surname.value)) {
    surnameError.setAttribute(
      "data-errorName",
      "გვარის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს(ა-ჰ, a-z, A-Z)"
    );
  }
});

var redberryRegex = /@redberry.ge$/;

imail.addEventListener("focusout", function () {
  if (redberryRegex.test(imail.value)) {
    imailError.setAttribute("data-errorName", "");
  } else if (imail.value.length == 0) {
    imailError.setAttribute("data-errorName", "მეილის ველი სავალდებულოა");
  } else if (!regexName.test(imail.value)) {
    imailError.setAttribute(
      "data-errorName",
      "გთხოვთ დარეგისტრირდეთ რედბერის მეილით(youremail@redberry.ge)"
    );
  }
});

identificationNext.addEventListener("click", function () {
  if (
    imailError.getAttribute("data-errorName") == "" &&
    surnameError.getAttribute("data-errorName") == "" &&
    nameError.getAttribute("data-errorName") == ""
  ) {
    info.name = name1.value;
    info.mail = imail.value;
    info.surname = surname.value;
    identification.style.display = "none";
    covid19.style.display = "inline-block";
    $(".imgInmate").css({ width: 0.0 }).animate({ width: 753 }, 250);
    $(".circle")
      .css({ width: 0.0, height: 0.0 })
      .animate({ width: 200, height: 200 }, 250);
  }
});

var test = document.getElementById("test");
var anti = document.getElementById("anti");
var covid19Form = document.getElementById("covid19Form");

$("#yes").click(function () {
  if ($("#yes").is(":checked")) {
    info.recovered = "გადატანილი აქვს";
    test.style.display = "inline-block";
    anti.style.display = "none";
    covid19Button.disabled = true;
  }
});
$("#no").click(function () {
  if ($("#no").is(":checked")) {
    info.recovered = "არ აქვს გადატანილი";
    info.antiTest = "";
    info.testResult = "";
    info.testDate = "";
    info.covidDate = "";
    test.style.display = "none";
    anti.style.display = "none";
    testResults.style.display = "none";
    covid19Button.disabled = false;
  }
});
$("#now").click(function () {
  if ($("#now").is(":checked")) {
    info.recovered = "ახლა აქვს კოვიდი";
    info.antiTest = "";
    info.testResult = "";
    info.testDate = "";
    info.covidDate = "მიმდინარე";
    test.style.display = "none";
    anti.style.display = "none";
    testResults.style.display = "none";
    covid19Button.disabled = false;
  }
});

var testResults = document.getElementById("testResults");

$("#tYes").click(function () {
  if ($("#tYes").is(":checked")) {
    info.antiTest = "დიახ";
    anti.style.display = "none";
    testResults.style.display = "inline-block";
    covid19Button.disabled = true;
  }
});
$("#tNo").click(function () {
  if ($("#tNo").is(":checked")) {
    info.antiTest = "არა";
    info.testDate = "";
    info.testResult = "";
    anti.style.display = "inline-block";
    testResults.style.display = "none";
  }
});

var testResultsButton = document.getElementById("testResultsButton");

var dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{2}$/;
var numberRegex = /[0-9]/;

var dateA = document.getElementById("dateA");
var dateAError = document.getElementById("dateAError");
var numberA = document.getElementById("numberA");
var numberAError = document.getElementById("numberAError");

dateA.addEventListener("focusout", function () {
  if (
    dateBError.getAttribute("data-errorName") == "" &&
    numberAError.getAttribute("data-errorName") == "" &&
    dateRegex.test(dateA.value)
  ) {
    info.testResult = numberA.value;
    info.testDate = dateA.value;
    dateAError.setAttribute("data-errorName", "");
    covid19Button.disabled = false;
    anti.style.display = "inline-block";
  } else if (
    numberAError.getAttribute("data-errorName") == "" &&
    dateRegex.test(dateA.value)
  ) {
    dateAError.setAttribute("data-errorName", "");
    info.testResult = numberA.value;
    info.testDate = dateA.value;
    anti.style.display = "inline-block";
  } else if (!dateRegex.test(dateA.value)) {
    dateAError.setAttribute("data-errorName", "მიუთითეთ სწორი თარიღი დდ/თთ/წწ");
    covid19Button.disabled = true;
    anti.style.display = "none";
  } else if (dateRegex.test(dateA.value)) {
    dateAError.setAttribute("data-errorName", "");
  }
});

numberA.addEventListener("focusout", function () {
  if (
    dateBError.getAttribute("data-errorName") == "" &&
    dateAError.getAttribute("data-errorName") == "" &&
    numberRegex.test(numberA.value)
  ) {
    info.testResult = numberA.value;
    info.testDate = dateA.value;
    numberAError.setAttribute("data-errorName", "");
    covid19Button.disabled = false;
    anti.style.display = "inline-block";
  } else if (
    dateAError.getAttribute("data-errorName") == "" &&
    numberRegex.test(numberA.value)
  ) {
    numberAError.setAttribute("data-errorName", "");
    info.testResult = numberA.value;
    info.testDate = dateA.value;
    anti.style.display = "inline-block";
  } else if (!numberRegex.test(numberA.value)) {
    numberAError.setAttribute("data-errorName", "გთხოვთ მიუთითეთ რიცხვი");
    anti.style.display = "none";
    covid19Button.disabled = true;
  } else if (numberRegex.test(numberA.value)) {
    numberAError.setAttribute("data-errorName", "");
  }
});

var dateBError = document.getElementById("dateBError");

dateB.addEventListener("focusout", function () {
  if (dateRegex.test(dateB.value) && $("#tNo").is(":checked")) {
    dateBError.setAttribute("data-errorName", "");
    info.covidDate = dateB.value;
    covid19Button.disabled = false;
  } else if (dateRegex.test(dateB.value)) {
    dateBError.setAttribute("data-errorName", "");
    info.covidDate = dateB.value;
    covid19Button.disabled = false;
  } else if (!dateRegex.test(dateB.value)) {
    dateBError.setAttribute("data-errorName", "მიუთითეთ სწორი თარიღი დდ/თთ/წწ");
    covid19Button.disabled = true;
  }
});

numberA.addEventListener("focusout", function () {
  if (
    dateAError.getAttribute("data-errorName") == "" &&
    numberRegex.test(numberA.value)
  ) {
    info.testResult = numberA.value;
    info.testDate = dateA.value;
    anti.style.display = "inline-block";
  } else if (!numberRegex.test(numberA.value)) {
    numberAError.setAttribute("data-errorName", "გთხოვთ მიუთითეთ რიცხვი");
    covid19Button.disabled = true;
  } else if (numberRegex.test(numberA.value)) {
    numberAError.setAttribute("data-errorName", "");
  }
});

covid19Button.addEventListener("click", function (evt) {
  evt.preventDefault();
  covid19.style.display = "none";
  vaccinated.style.display = "inline-block";
  $(".imgInmate").css({ width: 0.0 }).animate({ width: 753 }, 250);
});

covid19Previus.addEventListener("click", function (evt) {
  evt.preventDefault();
  covid19.style.display = "none";
  identification.style.display = "inline-block";
  $(".imgInmate").css({ width: 0.0 }).animate({ width: 753 }, 250);
});

var vaccinatedNumber = document.getElementById("vaccinatedNumber");
var notVaccinated = document.getElementById("notVaccinated");

$("#vYes").click(function () {
  if ($("#vYes").is(":checked")) {
    info.vacinated = "ვაქცინირებულია";
    info.notVaccinatedReason = "";
    vaccinatedNumber.style.display = "inline-block";
    notVaccinated.style.display = "none";
    vaccinatedButton.disabled = true;
    bookingMoh2.style.display = "none";
  }
});
$("#vNo").click(function () {
  if ($("#vNo").is(":checked")) {
    info.vacinated = "არ არის ვაქცინირებული";
    info.vacineDose = "";
    vaccinatedNumber.style.display = "none";
    notVaccinated.style.display = "inline-block";
    vaccinatedButton.disabled = true;
  }
});

$("#first").click(function () {
  if ($("#first").is(":checked")) {
    info.vacineDose = "პირველი დოზა და არ დარეგისტრირებულა მეორეზე";
    booking.style.display = "inline-block";
    vaccinatedButton.disabled = false;
  }
});
$("#firstSecond").click(function () {
  if ($("#firstSecond").is(":checked")) {
    info.vacineDose = "დარეგისტრირებულია მეორე დოზისთვის";
    booking.style.display = "none";
    vaccinatedButton.disabled = false;
  }
});
$("#both").click(function () {
  if ($("#both").is(":checked")) {
    info.vacineDose = "სრულად ვაქცინირებულია";
    booking.style.display = "none";
    vaccinatedButton.disabled = false;
  }
});

$("#notPlanning").click(function () {
  if ($("#notPlanning").is(":checked")) {
    info.notVaccinatedReason = "არ გეგმავს";
    bookingMoh1.style.display = "inline-block";
    bookingMoh2.style.display = "none";
    vaccinatedButton.disabled = false;
  }
});
$("#registered").click(function () {
  if ($("#registered").is(":checked")) {
    info.notVaccinatedReason = "დარეგისტრირებულია და ელოდება თარიღს";
    bookingMoh1.style.display = "none";
    bookingMoh2.style.display = "none";
    vaccinatedButton.disabled = false;
  }
});

$("#recovered").click(function () {
  if ($("#recovered").is(":checked")) {
    info.notVaccinatedReason = "გადატანილი აქვს და გეგმავს აცრას";
    bookingMoh1.style.display = "none";
    bookingMoh2.style.display = "inline-block";
    vaccinatedButton.disabled = false;
  }
});

vaccinatedPrevius.addEventListener("click", function (evt) {
  evt.preventDefault();
  covid19.style.display = "inline-block";
  vaccinated.style.display = "none";
  $(".imgInmate").css({ width: 0.0 }).animate({ width: 753 }, 250);
  $(".circle")
    .css({ width: 0.0, height: 0.0 })
    .animate({ width: 200, height: 200 }, 250);
});

vaccinatedButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  vaccinated.style.display = "none";
  recomendations.style.display = "inline-block";
  $(".imgInmate").css({ width: 0.0 }).animate({ width: 753 }, 250);
  $(".imgInmate1").css({ opacity: 0.0 }).animate({ opacity: 0.8 }, 250);
});

function clearValidity() {
  document.getElementById("twiceWeek").setCustomValidity("");
}

function clearValidity1() {
  document.getElementById("zeroOffice").setCustomValidity("");
}

$('input[name="onlineMeeting"]').click(function () {
  if ($("#twiceWeek").is(":checked")) {
    info.recomendationsOnlineMeeting = "კვირაში ორჯერ";
  } else if ($("#onceWeek").is(":checked")) {
    info.recomendationsOnlineMeeting = "კვირაში ერთხელ";
  } else if ($("#twoWeeks").is(":checked")) {
    info.recomendationsOnlineMeeting = "ორ კვირაში ერთხელ";
  } else if ($("#onceMonth").is(":checked")) {
    info.recomendationsOnlineMeeting = "თვეში ერთხელ";
  }
});

$('input[name="officeDay"]').click(function () {
  if ($("#zeroOffice").is(":checked")) {
    info.recomendationsofficeDay = "0";
  } else if ($("#onceOffice").is(":checked")) {
    info.recomendationsofficeDay = "1";
  }
  if ($("#twoOffice").is(":checked")) {
    info.recomendationsofficeDay = "2";
  } else if ($("#threeOffice").is(":checked")) {
    info.recomendationsofficeDay = "3";
  }
  if ($("#fourOffice").is(":checked")) {
    info.recomendationsofficeDay = "4";
  } else if ($("#fiveOffice").is(":checked")) {
    info.recomendationsofficeDay = "5";
  }
});

document
  .getElementById("recomendationsForm")
  .addEventListener("submit", function (evt) {
    evt.preventDefault();
    info.onlineMeetingOpinion = document.getElementById("meetings").value;
    info.environmentOpinion = document.getElementById("environment").value;
    console.log(info);
    recomendations.style.display = "none";
    thanks.style.display = "inline-block";
  });

recomendationsPrevius.addEventListener("click", function (evt) {
  evt.preventDefault();
  recomendations.style.display = "none";
  vaccinated.style.display = "inline-block";
  $(".imgInmate").css({ width: 0.0 }).animate({ width: 753 }, 250);
});
