var myApp = angular.module('tabApp', [
]);

myApp.controller('homeController', ['$scope', function($scope) {
  $scope.greeting = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisl ligula. Aliquam laoreet elit et urna congue iaculis. Curabitur fermentum malesuada maximus. Donec dignissim nibh ipsum, ac luctus leo ullamcorper eget. Nulla ac posuere diam, iaculis vehicula urna. Nam mattis finibus eros quis suscipit. Nunc porta sit amet arcu eget auctor. Fusce tristique tellus vitae nulla imperdiet, quis venenatis neque fringilla. Nam faucibus, nunc vel aliquet suscipit, leo sem pretium tortor, ut consequat ex risus nec lectus. Pellentesque risus felis, interdum quis libero eget, ultricies ultrices sem. In vehicula nibh id odio convallis vestibulum. Aenean ligula nulla, eleifend pellentesque hendrerit sit amet, tristique quis arcu.';
}]);

myApp.controller('profileController', ['$scope', function($scope) {
  $scope.name = 'User Name';
  $scope.birthday = '01/01/1980';
  $scope.eyecolor = "Hazel";
  $scope.hometown = "New Jersey";
  $scope.bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisl ligula. Aliquam laoreet elit et urna congue iaculis. Curabitur fermentum malesuada maximus. Donec dignissim nibh ipsum, ac luctus leo ullamcorper eget.';
}]);

myApp.controller('messageController', ['$scope', function($scope) {
  $scope.messages = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisl ligula. Aliquam laoreet elit et urna congue iaculis. Curabitur fermentum malesuada maximus. Donec dignissim nibh ipsum, ac luctus leo ullamcorper eget.';
}]);
