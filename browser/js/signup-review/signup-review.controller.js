app.controller('SignupReviewController', function($scope, SignupFactory, sports) {
	$scope.sportsById = SignupFactory.formatSportsById(sports);
	$scope.athleteInfo = SignupFactory.signupInfo;
	$scope.basicInfo = SignupFactory.formatObjectForView(SignupFactory.signupInfo.basicInfo);
	$scope.aboutYou = SignupFactory.formatObjectForView(SignupFactory.signupInfo.aboutYou);
	$scope.socialMedia = SignupFactory.formatObjectForView(SignupFactory.signupInfo.socialMedia);
	console.log('ALL', $scope.athleteInfo);
	console.log('DATA: ', $scope.basicInfo);

	$scope.onComplete = function () {
		var postObj = SignupFactory.formatDataForPost($scope.athleteInfo);
		console.log('POST: ', postObj);
		SignupFactory.createAthlete(postObj)
		.then(newAthlete => {
			console.log(newAthlete)
		});
	};

	$scope.getType = function (data) {
		if (Array.isArray(data)) return 'array';
		return typeof data;
	};

});