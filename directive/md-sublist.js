import myView from './md-sublist-template.html';
import myStyle from './md-sublist-style.css';

angular.module('mdSublist', ['ngMaterial'])
    .directive('mdSublist', ['$templateCache', function ($templateCache) {
        $templateCache.put('myViewFromCache', myView);
        return {
            restrict: 'E',
            templateUrl: 'myViewFromCache',
            transclude: true,
            scope: {
                "text": "@",
                "svgIcon": "@",
                "svgIconPath": "@"
            },
            link: function ($scope, $element) {
                $scope.toggle = function () {
                    var menu = angular.element($element[0]);
                    menu.toggleClass('active');
                };
                if ($scope.svgIcon == undefined) {
                    $scope.svgIcon = '';
                }
            }
        }
    }]);