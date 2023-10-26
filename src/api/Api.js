import axios from 'axios';

export const getCategoriesData = () => {
  var config = {
    method: 'get',
    url: 'https://dummy-api-jtg6bessta-ey.a.run.app/getCategories',
  };
  const response = axios(config)
    .then(function (res) {
      return res.data;
    })
    .catch(error => {
      console.log(error);
    });
  return response;
};

export const getQuenstionData = () => {
  var config = {
    method: 'get',
    url: 'https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions',
  };
  const response = axios(config)
    .then(function (res) {
      return res;
    })
    .catch(error => {
      console.log(error);
    });
  return response;
};
