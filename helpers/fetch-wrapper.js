// import { userService } from '../services/user.service';
// import isJwtTokenExpired from "jwt-check-expiry";

// const { publicRuntimeConfig } = getConfig();
const baseUrl = `https://asp-noc-dev-win.azurewebsites.net`;
import AsyncStorage from "@react-native-async-storage/async-storage";

let newToken = "";

export const fetchWrapper = {
  get,
  post,
  put,
  putPublic,
  getPublic,
  postPublic,
  postFormData,
  postFormDataPublic,
  postPublicLogin,
  delete: _delete,
};

function get(url, body) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      ...authHeader(url, body),
    },
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function getPublic(url, body) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  return fetch(url, requestOptions).then(handleResponsePublic);
}

function post(url, body) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      ...authHeader(url, body),
    },
    body: JSON.stringify(body),
    credentials: "include",
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function postFormData(url, body) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      ...authHeader(url, body),
    },
    body: body,
    credentials: "include",
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function postFormDataPublic(url, body) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: body,
    credentials: "include",
  };
  return fetch(url, requestOptions).then(handleResponsePublic);
}

function postPublic(url, body) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body),
    credentials: "include",
  };
  return fetch(url, requestOptions).then(handleResponsePublic);
}

function postPublicLogin(url, body) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body),
    credentials: "include",
  };
  return fetch(url, requestOptions).then(handleResponsePublicLogin);
}

function put(url, body) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeader(url, body) },
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function putPublic(url, body) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body),
    credentials: "include",
  };
  return fetch(url, requestOptions).then(handleResponsePublic);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url, body) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      ...authHeader(url, body),
    },
  };
  return fetch(url, requestOptions).then(handleResponse);
}

// helper functions

const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const Base64 = {
  btoa: (input = "") => {
    let str = input;
    let output = "";

    for (
      let block = 0, charCode, i = 0, map = chars;
      str.charAt(i | 0) || ((map = "="), i % 1);
      output += map.charAt(63 & (block >> (8 - (i % 1) * 8)))
    ) {
      charCode = str.charCodeAt((i += 3 / 4));

      if (charCode > 0xff) {
        throw new Error(
          "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
        );
      }

      block = (block << 8) | charCode;
    }

    return output;
  },

  atob: (input = "") => {
    let str = input.replace(/=+$/, "");
    let output = "";

    if (str.length % 4 == 1) {
      throw new Error(
        "'atob' failed: The string to be decoded is not correctly encoded."
      );
    }
    for (
      let bc = 0, bs = 0, buffer, i = 0;
      (buffer = str.charAt(i++));
      ~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4)
        ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
        : 0
    ) {
      buffer = chars.indexOf(buffer);
    }

    return output;
  },
};

export function authHeader(url, body) {
  // return auth header with basic auth credentials if user is logged in and request is to the api url
  const user = AsyncStorage.getItem("@storage_Key");

  if (user !== null) {
    return {
      Authorization: `Basic ${Base64.btoa(
        body.username + ":" + body.password
      )}`,
    };
  } else {
    // if (isJwtTokenExpired(user.Authorization)) {
    //   const isRefreshed = refreshAccessToken(user.Refresh);
    //   if (isRefreshed) {
    //     return {
    //       Authorization: newToken,
    //     };
    //   }
    // } else {
    //   return {
    //     Authorization: user.Authorization,
    //   };
    // }
  }
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      // if ([401, 403].includes(response.status) && userService.userValue) {
      //   // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      //   userService.logout();
      // }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function handleResponsePublic(response) {
  return response.text().then((text) => {
    // console.log(text);
    let data;
    try {
      data = text && JSON.parse(text);
    } catch (e) {
      return text;
    }

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      console.log("response: " + text);
      console.log("API Error: " + error);
      // return Promise.reject(error);
    }

    return data;
  });
}

function handleResponsePublicLogin(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      console.log("API Error: " + error);
      // return Promise.reject(error);
    }

    return data;
  });
}

export function refreshAccessToken(refreshToken) {
  try {
    // Get a new set of tokens with a refreshToken
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ refreshToken }),
    };
    const data = fetch(`${baseUrl}/auth/refresh`, requestOptions).then(
      handleResponse
    );
    data.then((data) => {
      if (data) {
        if (data.payload) {
          localStorage.setItem("user", JSON.stringify(data.payload));
          newToken = data.payload.Authorization;
          return true;
        }
      }
    });
  } catch (error) {
    return false;
  }
}
