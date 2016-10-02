(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

	$scope.CheckFood = function () {
		// $scope.Message = "What's Up"
		// $scope.Message = $scope.FoodList
		var message = '';
		var highlight_state = 'has-success';
		if (!$scope.FoodList) {
			message = "Please enter data first";
			highlight_state = "has-error";

		} else {
			var clean_list = cleanArray($scope.FoodList.split(','));
			var food_list_length = calculateFoodItemsLength(clean_list);
			// console.log(food_list_length);
			if (food_list_length > 3) {
				message = "To MUCH!";
			} else {
				message = "Enjoy!";
			}
		}
		
		$scope.Message = message
		$scope.HighlightState = highlight_state
	};

	function calculateFoodItemsLength(food_list) {
		// return food_list.split(',').length
		return food_list.length
	};

	function cleanArray(source_array) {
		var clean_array = new Array();
		for (var idx=0; idx < source_array.length; idx++) {
			if (source_array[idx].trim()) {
				clean_array.push(source_array[idx])
			}
		}
		return clean_array
	}
		
}

})();

// (function () {
// 	'use strict';

// 	angular.module('LunchCheck', [])
// 	.controller('LunchCheckController', LunchCheckController);

// 	LunchCheckController.$inject = ['$scope'];
// 	function LunchCheckController($scope) {
// 		$scope.Message = "I'm new!"

// 		$scope.CheckFood = function () {
// 			// $scope.Message = calculateFoodItemsLength($scope.FoodList)
// 			// return $scope.Message = "What's Up!"
// 			var food_count = calculateFoodItemsLength(cleanArray($scope.FoodList))
// 			// var food_count = cleanArray($scope.FoodList.split(','))

// 			// if (food_count <= 3) {
// 			// 	$scope.Message = "Enjoy!"
// 			// } else {
// 			// 	$scope.Message = "Too Much!"
// 			// }
// 			// $scope.Message = food_count
// 		};

// 		function cleanArray(source_array) {
// 			var clean_array = new Array();
// 			for (var idx=0; idx < source_array.length; idx++) {
// 				if (source_array[idx].trim()) {
// 					clean_array.push(source_array[idx])
// 				}
// 			}
// 			return clean_array
// 		}

// 		function calculateFoodItemsLength(food_list) {
// 			return food_list
// 			// return food_list.split(',').length
// 		}
// 	}

// })();