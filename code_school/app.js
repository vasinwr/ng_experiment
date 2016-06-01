(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    { name: 'Azurite',
      price: 110.50,
      canPurchase: false,
      soldOut: true
    },
    { name: 'Bloodstone',
      price: 110.50,
      canPurchase: false,
      soldOut: true
    }
  ];
})();
