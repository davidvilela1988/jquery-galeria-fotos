$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });

  $("#button-cancel").click(function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (e) {
    e.preventDefault();
    const addressNewImage = $("#address-new-image").val();
    const newItem = $('<li style="display: none"></li>');
    $(`<img src="${addressNewImage}" />`).appendTo(newItem);
    $(
      `<div class="overlay-image-link"><a href="${addressNewImage}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a></div>`
    ).appendTo(newItem);
    $(newItem).appendTo("ul");
    $(newItem).fadeIn(1000);
    $("#address-new-image").val("");
  });
});
