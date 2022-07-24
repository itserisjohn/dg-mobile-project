import { fetchWrapper } from "../helpers/fetch-wrapper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = `https://asp-noc-dev-win.azurewebsites.net/api`;

export const userService = {
  login,
  logout,
  getAll,
};

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

// function login(username, password) {
//   console.log("test " + username + " " + password);
//   return fetchWrapper
//     .post(`${baseUrl}/login`, { Username: username, Password: password })
//     .then((user) => {
//       // publish user with basic auth credentials to subscribers and store in
//       // local storage to stay logged in between page refreshes
//       user.payload.authdata = window.btoa(username + ":" + password);
//       AsyncStorage.setItem("user", JSON.stringify(user.payload));
//       console.log(JSON.stringify(user));
//       return user;
//     });
// }

function login(payload) {
  return fetchWrapper.postPublic(`${baseUrl}/login`, payload).then((user) => {
    if (user) {
      //   user.payload.authdata = Base64.btoa(
      //     payload.Username + ":" + payload.Password
      //   );
      AsyncStorage.setItem("user", JSON.stringify(user));

      return user;
    }
    return false;
  });
}

function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  AsyncStorage.removeItem("user");
}

function getAll() {
  return fetchWrapper.get(baseUrl, null);
}
