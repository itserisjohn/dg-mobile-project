import * as SecureStore from "expo-secure-store";

export async function saveGlobal(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export async function getGlobal(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    console.log("Here's your value:" + result);
  } else {
    console.log("No values stored under that key.");
  }
  return result;
}
