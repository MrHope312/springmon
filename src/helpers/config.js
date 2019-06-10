let config = {};

if (process.env.REACT_APP_API_ENDPOINT) {
  config = {
    apiEndpoint: process.env.REACT_APP_API_ENDPOINT
  };
} else {
  config = {
    apiEndpoint: "http://springboot.actuator.demo.appngeek.com:8080/actuator"
  };
}

export const appConfig = {
  ...config
};
