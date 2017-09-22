const config={
		GOOGLE_AUTH: {
									clientID:'479564436864-m3dl96psurs8hd577maoppbg7utqdqiq.apps.googleusercontent.com ',
									clientSecret: "iqMrd8WkkZ8ycMTK_qDGg5Bn",
									callbackURL: '/auth/google/callback'
								 },
			 JWT_AUTH: {
        					secret: 'wiproNavigator'
    						 },
					MONGO: {
		     				URL: 'mongodb://localhost:27017/'
		   					 }
		 				};
module.exports = config;
