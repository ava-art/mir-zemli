//Slider price
$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 900000,
    step: 50000,
    values: [0, 550000],
    slide: function (event, ui) {
      $("#amount").val(ui.values[0]);
      $("#amount2").val(ui.values[1]);
    }

  });
  $("#amount").val($("#slider-range").slider("values", 0));
  $("#amount2").val($("#slider-range").slider("values", 1));
});

$(function () {
  $("#amount").on('blur', (event) => {
    $("#slider-range").slider("values", [
      event.target.value, 
      $("#slider-range").slider("values")[1]
    ]);
  })
});

$(function () {
  $("#amount2").on('blur', (event) => {
    $("#slider-range").slider("values", [
      $("#slider-range").slider("values")[0],
      event.target.value
    ]);
  })
});

//Slider square

$(function () {
  $("#slider-range-square").slider({
    range: true,
    min: 0,
    max: 1800,
    step: 10,
    values: [0, 1000],
    slide: function (event, ui) {
      $("#input-square").val(ui.values[0]);
      $("#input-square2").val(ui.values[1]);
    }
  });

  $("#input-square").val($("#slider-range-square").slider("values", 0));
  $("#input-square2").val($("#slider-range-square").slider("values", 1));
});

$(function () {
  $("#input-square").on('blur', (event) => {
    $("#slider-range-square").slider("values", [
      event.target.value, 
      $("#slider-range-square").slider("values")[1]
    ]);
  })
});

$(function () {
  $("#input-square2").on('blur', (event) => {
    $("#slider-range-square").slider("values", [
      $("#slider-range-square").slider("values")[0],
      event.target.value
    ]);
  })
});


// Mobile filter

//Slider price
$(function () {
  $("#slider-range-mobile").slider({
    range: true,
    min: 0,
    max: 900000,
    step: 50000,
    values: [0, 550000],
    slide: function (event, ui) {
      $("#amount-mobile").val(ui.values[0]);
      $("#amount2-mobile").val(ui.values[1]);
    }

  });
  $("#amount-mobile").val($("#slider-range-mobile").slider("values", 0));
  $("#amount2-mobile").val($("#slider-range-mobile").slider("values", 1));
});

$(function () {
  $("#amount-mobile").on('blur', (event) => {
    $("#slider-range-mobile").slider("values", [
      event.target.value, 
      $("#slider-range-mobile").slider("values")[1]
    ]);
  })
});

$(function () {
  $("#amount2-mobile").on('blur', (event) => {
    $("#slider-range-mobile").slider("values", [
      $("#slider-range-mobile").slider("values")[0],
      event.target.value
    ]);
  })
});


//Slider square

$(function () {
  $("#slider-range-square-mobile").slider({
    range: true,
    min: 0,
    max: 1800,
    step: 10,
    values: [0, 1000],
    slide: function (event, ui) {
      $("#input-square-mobile").val(ui.values[0]);
      $("#input-square2-mobile").val(ui.values[1]);
    }

  });
  $("#input-square-mobile").val($("#slider-range-square-mobile").slider("values", 0));
  $("#input-square2-mobile").val($("#slider-range-square-mobile").slider("values", 1));
});

$(function () {
  $("#input-square-mobile").on('blur', (event) => {
    $("#slider-range-square-mobile").slider("values", [
      event.target.value, 
      $("#slider-range-square-mobile").slider("values")[1]
    ]);
  })
});

$(function () {
  $("#input-square2-mobile").on('blur', (event) => {
    $("#slider-range-square-mobile").slider("values", [
      $("#slider-range-square-mobile").slider("values")[0],
      event.target.value
    ]);
  })
});