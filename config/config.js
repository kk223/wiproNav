const config={
		GOOGLE_AUTH: {
									clientID:"479564436864-j69mgl5d3804ckgc1fqosq8i6vssmohd.apps.googleusercontent.com",
									clientSecret:"XuqAWSmtwW4kKTKpRxTMDJIe",
									callbackURL: "http://127.0.0.1:8080/auth/google/callback"
								 },
			 JWT_AUTH: {
        					secret: 'wiproNavigator'
    						 },
					MONGO: {
		     				URL: 'mongodb://localhost:27017/wiproNavigator'
							},
		GOOGLE_MAP: {
							API_KEY: 'AIzaSyBaZXWMI0YyLELs8ttMy11N_ZqQZoC29mY'
								}
					};
module.exports = config;
