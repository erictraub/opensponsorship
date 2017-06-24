app.controller('SignupReviewController', function($scope, SignupFactory) {
	$scope.athleteInfo = SignupFactory.signupInfo;
	$scope.basicInfo = SignupFactory.formatObjectForView(SignupFactory.signupInfo.basicInfo);
	$scope.aboutYou = SignupFactory.formatObjectForView(SignupFactory.signupInfo.aboutYou);
	$scope.socialMedia = SignupFactory.formatObjectForView(SignupFactory.signupInfo.socialMedia);
	console.log('ALL', $scope.athleteInfo);
	console.log('DATA: ', $scope.basicInfo);
});