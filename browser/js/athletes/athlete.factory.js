app.factory('AthleteFactory', function($http) {
	var AthleteFactory = {};

	// fetch all athletes
	AthleteFactory.fetchAllAthletes = function () {
        return $http.get('/api/athlete/')
        .then(function(users){
            return users;
        });
	};

	return AthleteFactory;
});

