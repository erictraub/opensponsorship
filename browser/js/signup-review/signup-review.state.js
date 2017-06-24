app.config(function ($stateProvider) {
    $stateProvider.state('signup-review', {
        url: '/signup-review',
        templateUrl: 'js/signup-review/signup-review.html',
        controller: 'SignupReviewController',
        resolve: {
        	sports: function(SignupFactory) {
        		return SignupFactory.fetchAllSports()
        		.then(function(response) {
        			return response.data;
        		});
        	}
        }
    });
});