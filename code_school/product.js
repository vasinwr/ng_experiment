(function(){
  var app = angular.module('store-product',[]);


  app.directive('productDescription', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-description.html'
    };
  })

  app.directive('productPanel', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-panel.html',
      controller: function(){
                    this.tab = 1;
                    this.selectTab = function(selectedTab) {
                      this.tab = selectedTab;
                    };
                    this.isSelected = function(tab) {
                      return this.tab === tab;
                    };
                  },
      controllerAs: 'panel'
    };
  });
})();
