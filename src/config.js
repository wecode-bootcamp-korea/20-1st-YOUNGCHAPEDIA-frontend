const BASE_URL = 'http://192.168.25.28:8000';
const API_URLS = {
  MAIN_BOX_OFFICE: `${BASE_URL}/movies/movies?ranking=box-office`,
  MAIN_YOUNGCHA: `${BASE_URL}movies/movies?provider=watcha`,
  MAIN_NETFLIX: `${BASE_URL}/movies/movies?provider=netflix`,
  DETAIL: `${BASE_URL}/movies`,
  COMMENT_LIKE: `${BASE_URL}/movies/comment/like`,
  SIGNUP: `${BASE_URL}/users/signup`,
  LOGIN: `${BASE_URL}/users/signin`,
  REVIEW: `${BASE_URL}/users/review`,
  MYPAGE: `${BASE_URL}/users/mypage`,
  MYTEST_STAR: `${BASE_URL}/users/analysis`,
  MYTEST_GENRE: `${BASE_URL}/users/favorite`,
};

export default API_URLS;
