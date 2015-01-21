var SimpleCtrl = function ($location, $window) {
  var _this = this;

  _this.navigate1 = function () {
    $location.path('/some/where');
  };

  _this.navigate2 = function () {
    $location.path('/some/where/else');
  };
};

angular.module('notesApp', [])
  .controller('SimpleCtrl', ['$location', '$window', SimpleCtrl]);
