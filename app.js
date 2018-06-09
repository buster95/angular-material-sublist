var app = angular.module('myapp', ['ngMaterial', 'mdSublist']);

app.config(['$mdIconProvider', function ($mdIconProvider) {
    $mdIconProvider
        .defaultIconSet('index-icons.svg', 24)
}]);