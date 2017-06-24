app.config(function ($stateProvider) {
    $stateProvider.state('signup', {
        url: '/signup?editing',
        templateUrl: 'js/signup/signup.html',
        controller: 'SignupController',
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