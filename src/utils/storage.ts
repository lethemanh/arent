// get
const getUserInfo = () => JSON.parse(localStorage.getItem('user-info') || '{}');

// set
const setUserInfo = data => {
  localStorage.setItem('user-info', JSON.stringify(data));
};

export { getUserInfo, setUserInfo };
