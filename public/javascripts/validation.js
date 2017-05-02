$(function () {
  $('.form-newproduct form').form({
    name: {
      identifier: 'name',
      rules: [
        {
          type: 'empty',
          prompt: 'Please type a name!'
        }
      ]
    },
    price: {
      identifier: 'price',
      rules: [
        {
          type: 'empty',
          prompt: 'Please type a price!'
        },
        {
          type: 'number',
          prompt: 'Price must be numeric!'
        }
      ]
    },
    stock: {
      identifier: 'stock',
      rules: [
        {
          type: 'empty',
          prompt: 'Please type a stock!'
        },
        {
          type: 'integer',
          prompt: 'Price must be a integer!'
        }
      ]
    }
  })
});