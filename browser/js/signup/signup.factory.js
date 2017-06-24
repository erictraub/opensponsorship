app.factory('SignupFactory', function($http) {
	var SignupFactory = {};

	SignupFactory.signupInfo = {};
	SignupFactory.signupInfo = {
	  "basicInfo": {
	    "firstName": "Eric",
	    "lastName": "Traub",
	    "gender": "male",
	    "nationality": "White",
	    "dateOfBirth": "2017-06-08T04:00:00.000Z",
	    "sports": [ "594c91aba5a7c09003750f0a", "594c91aba5a7c09003750f0b", "594c91aba5a7c09003750f0c", "594c91aba5a7c09003750f0f" ]
	  },
	  "aboutYou": {
	    "city": "Torrington",
	    "state": "conn",
	    "association": "nfl",
	    "team": "lasers",
	    "interests": [ "food", "wake", "lake" ],
	    "charities": [ "kids", "education", "food" ]
	  },
	  "socialMedia": {
	    "instagram": "eInsta",
	    "twitter": "eTwitter",
	    "snapchat": "eSnapchat",
	    "Facebook": "eFacebook",
	    "profileImage": "https://et-opensponsorship.s3.amazonaws.com/uploads/athlete-photos/Screen%20Shot%202017-03-20%20at%2010.30.13%20PM.png1498187458579"
	  }
	};

	SignupFactory.camelCaseToNormalFormat = function (string) {
		return string.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
	};

	SignupFactory.formatObjectForView = function (infoObj) {
		var infoArr = [];
		for (var key in infoObj) {
			var data = {};
			data.title = SignupFactory.camelCaseToNormalFormat(key);
			data.value = infoObj[key];
			if (key === 'dateOfBirth') data.value = data.value.substring(0, 10);
			if (key !== 'profileImage') infoArr.push(data);
		};
		return infoArr;
	};

    SignupFactory.fetchAllSports = function(){
        return $http.get('/api/signup/sport')
        .then(function(users){
            return users;
        });
    };

    SignupFactory.createAthlete = function(body){
        return $http.post('/api/signup/athlete', body)
        .then(function(athlete){
            return athlete;
        });
    };

    SignupFactory.formatDataForPost = function (athleteInfo) {
    	var postObj = {};
    	for (var key in athleteInfo) {
    		var dataObj = athleteInfo[key];
    		for (var prop in dataObj) {
    			postObj[prop] = dataObj[prop]
    		};
    	};
    	return postObj;
    };

    SignupFactory.formatSportsById = function (sportsArr) {
    	var obj = {};
    	sportsArr.forEach(sport => {
    		obj[sport._id] = sport['name'];
    	});
    	return obj;
    };

    SignupFactory.formatSportsByName = function (sportsArr) {
    	var obj = {};
    	sportsArr.forEach(sport => {
    		obj[sport.name] = sport['_id'];
    	});
    	return obj;
    };

	return SignupFactory;
});

