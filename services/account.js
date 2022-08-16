import { fetchWrapper } from "../helpers/fetch-wrapper";

const baseUrl = `https://asp-noc-dev-win.azurewebsites.net/api`;

export function getAccount(id) {
  return fetchWrapper.get(`${baseUrl}/accounts/${id}`, {}).then((data) => {
    if (data) {
      if (data.payload) {
        if (data.payload.account) {
          return data.payload.account;
        }
      }
    }
    return null;
  });
}

export function createAccount(payload) {
  return fetchWrapper
    .postPublic(`${baseUrl}/accounts`, payload)
    .then((data) => {
      if (data) {
        return data;
      }
      return true;
    });
}

export function createCareRecipient(payload) {
  return fetchWrapper
    .postPublic(`${baseUrl}/accounts/care-recipient`, payload)
    .then((data) => {
      console.log(data);
      if (data) {
        return data;
      }
      return true;
    });
}

export function saveCreditCard(payload) {
  return fetchWrapper
    .postPublic(`${baseUrl}/accounts/payment-info`, payload)
    .then((data) => {
      console.log(data);
      if (data) {
        return data;
      }
      return true;
    });
}

export function saveOtherInfo(payload) {
  return fetchWrapper
    .putPublic(`${baseUrl}/accounts/other-info`, payload)
    .then((data) => {
      console.log(data);
      if (data) {
        return data;
      }
      return true;
    });
}

export function getAccountCheckList() {
  return fetchWrapper
    .getPublic(`${baseUrl}/accounts/account-checklist/1`, {})
    .then((data) => {
      return data;
    });
}

export function getCreditCardList(id) {
  return fetchWrapper
    .getPublic(`${baseUrl}/accounts/payment-info-list?accountId=${id}`, {})
    .then((data) => {
      return data;
    });
}
