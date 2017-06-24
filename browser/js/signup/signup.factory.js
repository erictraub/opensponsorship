app.factory('SignupFactory', function($http) {
	var SignupFactory = {};

	SignupFactory.signupInfo = {};

	// change camel-case to normal-format for view
	SignupFactory.camelCaseToNormalFormat = function (string) {
		return string.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
	};

	SignupFactory.formatObjectForView = function (infoObj) {
		var infoArr = [];
		for (var key in infoObj) {
			var data = {};
			data.title = SignupFactory.camelCaseToNormalFormat(key);
			data.value = infoObj[key];
			if (key === 'dateOfBirth') data.value = data.value.getMonth() + '/' + data.value.getDay() + '/' + data.value.getFullYear();
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
        return $http.post('/api/athlete', body)
        .then(function(response){
            return response.data;
        });
    };

    // format all data for creating athlete post
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

    SignupFactory.allStates = [
	    {
	        "name": "Alabama",
	        "abbrev": "AL"
	    },
	    {
	        "name": "Alaska",
	        "abbrev": "AK"
	    },
	    {
	        "name": "American Samoa",
	        "abbrev": "AS"
	    },
	    {
	        "name": "Arizona",
	        "abbrev": "AZ"
	    },
	    {
	        "name": "Arkansas",
	        "abbrev": "AR"
	    },
	    {
	        "name": "California",
	        "abbrev": "CA"
	    },
	    {
	        "name": "Colorado",
	        "abbrev": "CO"
	    },
	    {
	        "name": "Connecticut",
	        "abbrev": "CT"
	    },
	    {
	        "name": "Delaware",
	        "abbrev": "DE"
	    },
	    {
	        "name": "District Of Columbia",
	        "abbrev": "DC"
	    },
	    {
	        "name": "Federated States Of Micronesia",
	        "abbrev": "FM"
	    },
	    {
	        "name": "Florida",
	        "abbrev": "FL"
	    },
	    {
	        "name": "Georgia",
	        "abbrev": "GA"
	    },
	    {
	        "name": "Guam",
	        "abbrev": "GU"
	    },
	    {
	        "name": "Hawaii",
	        "abbrev": "HI"
	    },
	    {
	        "name": "Idaho",
	        "abbrev": "ID"
	    },
	    {
	        "name": "Illinois",
	        "abbrev": "IL"
	    },
	    {
	        "name": "Indiana",
	        "abbrev": "IN"
	    },
	    {
	        "name": "Iowa",
	        "abbrev": "IA"
	    },
	    {
	        "name": "Kansas",
	        "abbrev": "KS"
	    },
	    {
	        "name": "Kentucky",
	        "abbrev": "KY"
	    },
	    {
	        "name": "Louisiana",
	        "abbrev": "LA"
	    },
	    {
	        "name": "Maine",
	        "abbrev": "ME"
	    },
	    {
	        "name": "Marshall Islands",
	        "abbrev": "MH"
	    },
	    {
	        "name": "Maryland",
	        "abbrev": "MD"
	    },
	    {
	        "name": "Massachusetts",
	        "abbrev": "MA"
	    },
	    {
	        "name": "Michigan",
	        "abbrev": "MI"
	    },
	    {
	        "name": "Minnesota",
	        "abbrev": "MN"
	    },
	    {
	        "name": "Mississippi",
	        "abbrev": "MS"
	    },
	    {
	        "name": "Missouri",
	        "abbrev": "MO"
	    },
	    {
	        "name": "Montana",
	        "abbrev": "MT"
	    },
	    {
	        "name": "Nebraska",
	        "abbrev": "NE"
	    },
	    {
	        "name": "Nevada",
	        "abbrev": "NV"
	    },
	    {
	        "name": "New Hampshire",
	        "abbrev": "NH"
	    },
	    {
	        "name": "New Jersey",
	        "abbrev": "NJ"
	    },
	    {
	        "name": "New Mexico",
	        "abbrev": "NM"
	    },
	    {
	        "name": "New York",
	        "abbrev": "NY"
	    },
	    {
	        "name": "North Carolina",
	        "abbrev": "NC"
	    },
	    {
	        "name": "North Dakota",
	        "abbrev": "ND"
	    },
	    {
	        "name": "Northern Mariana Islands",
	        "abbrev": "MP"
	    },
	    {
	        "name": "Ohio",
	        "abbrev": "OH"
	    },
	    {
	        "name": "Oklahoma",
	        "abbrev": "OK"
	    },
	    {
	        "name": "Oregon",
	        "abbrev": "OR"
	    },
	    {
	        "name": "Palau",
	        "abbrev": "PW"
	    },
	    {
	        "name": "Pennsylvania",
	        "abbrev": "PA"
	    },
	    {
	        "name": "Puerto Rico",
	        "abbrev": "PR"
	    },
	    {
	        "name": "Rhode Island",
	        "abbrev": "RI"
	    },
	    {
	        "name": "South Carolina",
	        "abbrev": "SC"
	    },
	    {
	        "name": "South Dakota",
	        "abbrev": "SD"
	    },
	    {
	        "name": "Tennessee",
	        "abbrev": "TN"
	    },
	    {
	        "name": "Texas",
	        "abbrev": "TX"
	    },
	    {
	        "name": "Utah",
	        "abbrev": "UT"
	    },
	    {
	        "name": "Vermont",
	        "abbrev": "VT"
	    },
	    {
	        "name": "Virgin Islands",
	        "abbrev": "VI"
	    },
	    {
	        "name": "Virginia",
	        "abbrev": "VA"
	    },
	    {
	        "name": "Washington",
	        "abbrev": "WA"
	    },
	    {
	        "name": "West Virginia",
	        "abbrev": "WV"
	    },
	    {
	        "name": "Wisconsin",
	        "abbrev": "WI"
	    },
	    {
	        "name": "Wyoming",
	        "abbrev": "WY"
	    }
	];

	return SignupFactory;
});

