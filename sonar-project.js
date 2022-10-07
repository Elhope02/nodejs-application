const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl:'http://172.31.27.43:9000/',
       options:{
	    'sonar.projectDescription':'This is a NodeJS application',
	    'sonar.projectName':'NodeJS Application - Sample',
	    'sonar.projectKey':'NodeJsLandmarkTechnologies',
	    'sonar.login':'a340bbcafb2ec4fceb9effe4f67c0234ef961eeb',
	    //'sonar.password':'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests':'specs',
          //'sonar.inclusions':'src/**'
       },
}, () => {});
