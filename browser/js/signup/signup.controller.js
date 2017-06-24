app.controller('SignupController', function($scope, Upload, $log, SignupFactory, sports, $stateParams, $state) {
    $scope.currentStep = 'Basic Info';
    $scope.basicInfo = {};
    $scope.aboutYou = {};
    $scope.socialMedia = {};
    setStateForEditing();
    $scope.files = [];
    $scope.sports = sports;
    $scope.states = SignupFactory.allStates;
    $scope.uploadedImg;

	// $scope.busy = true;
	// $scope.ready = false;

	$scope.onNext = function (form) {
		if ($scope.currentStep === 'Basic Info') {
            $scope.currentStep = 'About You';
            updateProgressBar(66);
        }
		else if ($scope.currentStep === 'About You') {
            $scope.currentStep = 'Social Media';
            updateProgressBar(100);
        }
	};

	$scope.onPrev = function (form) {
		if ($scope.currentStep === 'About You') {
            $scope.currentStep = 'Basic Info';
            updateProgressBar(33);
        }
		else if ($scope.currentStep === 'Social Media') {
            $scope.currentStep = 'About You';
            updateProgressBar(66);
        }
	};

    $scope.onReview = function(form) {
    	SignupFactory.signupInfo['basicInfo'] = $scope.basicInfo;
    	if (Array.isArray($scope.aboutYou.interests)) $scope.aboutYou.interests = $scope.aboutYou.interests.split(', ');
    	if (Array.isArray($scope.aboutYou.charities)) $scope.aboutYou.charities = $scope.aboutYou.charities.split(', ');
    	SignupFactory.signupInfo['aboutYou'] = $scope.aboutYou;
    	SignupFactory.signupInfo['socialMedia'] = $scope.socialMedia;
    	$scope.all = SignupFactory.signupInfo;
        $state.go('signup-review');
    };

	$scope.$watch('files', function () {
		$scope.upload($scope.files);
	});

	// for image upload
  	$scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                Upload.upload({
                    url: '/api/signup/profile-image',
                    fields: { 'filecontext': 'product' },
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                }).success(function (data, status, headers, config) {
                	$scope.socialMedia['profileImage'] = data.imageUrl;
                });
            }
        }
    };

    function setStateForEditing() {
        if ($stateParams.editing) {
            $scope.aboutYou = SignupFactory.signupInfo.aboutYou;
            $scope.basicInfo = SignupFactory.signupInfo.basicInfo;
            $scope.socialMedia = SignupFactory.signupInfo.socialMedia;
        }
    };

    function updateProgressBar (percentNum) {
        percentNum = percentNum + '%';
        $('.progress-bar').css('width', percentNum);
    };


});