app.controller('SignupReviewController', function($scope, SignupFactory, sports, $state) {
	$scope.sportsById = SignupFactory.formatSportsById(sports);
	$scope.athleteInfo = SignupFactory.signupInfo;
	$scope.basicInfo = SignupFactory.formatObjectForView(SignupFactory.signupInfo.basicInfo);
	$scope.aboutYou = SignupFactory.formatObjectForView(SignupFactory.signupInfo.aboutYou);
	$scope.socialMedia = SignupFactory.formatObjectForView(SignupFactory.signupInfo.socialMedia);

	$scope.onComplete = function () {
		var postObj = SignupFactory.formatDataForPost($scope.athleteInfo);
		SignupFactory.createAthlete(postObj)
		.then(newAthlete => {
			console.log(newAthlete)
			$state.go('athletes');
		});
	};

    $scope.onEditAnswers = function () {
        $state.go('signup', { editing: true });
    };

	$scope.getType = function (data) {
		if (Array.isArray(data)) return 'array';
		return typeof data;
	};

});