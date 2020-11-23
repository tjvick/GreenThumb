import Constants from "expo-constants";

const ENV = {
  dev: {
    firebaseConfig: {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
    }
  },
  anotherEnv: {
    firebaseConfig: {}
  },
  default: {
    firebaseConfig: {}
  }
}

function getEnvVars(env = Constants.manifest.releaseChannel) {
  if (__DEV__) {
    return ENV.dev;
  } else if (env === 'another-env') {
    return ENV.anotherEnv;
  }

  return ENV.default;
}

export default getEnvVars;