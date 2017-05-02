$(function () {
  //Ajax func - Delete product
  $('#tb-products #bt-delete').click(function (e) {
    e.preventDefault();
    var el = $(this);
    var id = el.parent().parent().find('#id_product').text();
    var confirmar = confirm('do you want to delete this product?');

    if (confirmar){
      $.ajax({
        url: 'http://localhost:3000/deleteproduct',
        method: 'post',
        data: { id: id },
        success: function (res) {
          if (res.res){
            el.parent().parent().remove();
          }
        }
      });
    }
  });
});