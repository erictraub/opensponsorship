app.config(function ($stateProvider) {
    $stateProvider.state('athletes', {
        url: '/athletes',
        templateUrl: 'js/athletes/athletes.html',
        controller: 'AthletesController',
        resolve: {
        	athletes: function(AthleteFactory) {
        		return AthleteFactory.fetchAllAthletes()
        		.then(function(response) {
        			return response.data;
        		});
        	}
        }
    });
});