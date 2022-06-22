// import { userService } from '../services/user.service';
// import isJwtTokenExpired from "jwt-check-expiry";

// const { publicRuntimeConfig } = getConfig();
const baseUrl = `https://asp-noc-dev-win.azurewebsites.net`;

let newToken = "";

export const fetchWrapper = {
  get,
  post,
  put,
  getPublic,
  postPublic,
  postFormData,
  delete: _delete,
};

function get(url: string, body: any) {
  const requestOptions: any = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      ...authHeader(url, body),
    },
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function getPublic(url: string, body: any) {
  const requestOptions: any = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  return fetch(url, requestOptions).then(handleResponsePublic);
}

function post(url: string, body: any) {
  const requestOptions: any = {
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

function postFormData(url: string, body: any) {
  const requestOptions: any = {
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

function postPublic(url: string, body: any) {
  const requestOptions: any = {
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

function put(url: string, body: any) {
  const requestOptions: any = {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeader(url, body) },
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url: string, body: any) {
  const requestOptions: any = {
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

// export function authHeader(url: string, body: any) {
//   // return auth header with basic auth credentials if user is logged in and request is to the api url
//   const user = userService.userValue;
//   const isLoggedIn = user;
//   const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);

//   if (!isLoggedIn && isApiUrl) {
//     return {
//       Authorization: `Basic ${window.btoa(body.username + ':' + body.password)}`,
//     };
//   } else {
//     if (isJwtTokenExpired(user.Authorization)) {
//       const isRefreshed = refreshAccessToken(user.Refresh);
//       if (isRefreshed) {
//         return {
//           Authorization: newToken,
//         };
//       }
//     } else {
//       return {
//         Authorization: user.Authorization,
//       };
//     }
//   }
// }

function handleResponse(response: any) {
  return response.text().then((text: string) => {
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

function handleResponsePublic(response: any) {
  return response.text().then((text: string) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export function refreshAccessToken(refreshToken: any) {
  try {
    // Get a new set of tokens with a refreshToken
    const requestOptions: any = {
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
    data.then((data: any) => {
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
