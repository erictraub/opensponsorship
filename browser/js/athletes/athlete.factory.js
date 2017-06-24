app.factory('AthleteFactory', function($http) {
	var AthleteFactory = {};

	AthleteFactory.fetchAllAthletes = function () {
        return $http.get('/api/athlete/')
        .then(function(users){
            return users;
        });
	};

	return AthleteFactory;
});

