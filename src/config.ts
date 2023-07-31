interface Config {
  fakeUsername: string;
  fakePassword: string;
}

export default {
  fakeUsername: process.env.REACT_APP_FAKE_USERNAME as string,
  fakePassword: process.env.REACT_APP_FAKE_PASSWORD as string,
} as Config;
