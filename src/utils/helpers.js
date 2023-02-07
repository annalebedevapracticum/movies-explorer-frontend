export const request = (url, params) => fetch(url, {
  ...params, headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });