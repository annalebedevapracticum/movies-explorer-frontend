import React from "react";

export const request = (url, params) => fetch(url, {
  ...params,
   headers: {
    'Content-Type': 'application/json',
    authorization: localStorage.getItem('token'),
  }
})
  .then(async res => {
    const data = await res.json();
    if (res.ok) {
      return data;
    }
    return Promise.reject(data);
  });


export const CurrentUserContext = React.createContext();