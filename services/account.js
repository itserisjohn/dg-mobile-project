import { fetchWrapper } from "../helpers/fetch-wrapper";

const baseUrl = `https://asp-noc-dev-win.azurewebsites.net/api`;

export function getAccountList() {
  return fetchWrapper.get(`${baseUrl}/account/0/100`, {}).then((data) => {
    if (data) {
      if (data.payload) {
        return data.payload.companies;
      }
    }
    return data;
  });
}

export function searchAccountList(searchString) {
  return fetchWrapper
    .get(`${baseUrl}/account/search/0/100/${searchString}`, {})
    .then((data) => {
      if (data) {
        if (data.payload) {
          return data.payload.companies;
        }
      }
      return data;
    });
}

export function getAccount(id) {
  return fetchWrapper.get(`${baseUrl}/account/${id}`, {}).then((data) => {
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

export function updateAccount(payload) {
  return fetchWrapper.patch(`${baseUrl}/account`, payload).then((data) => {
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

export function deleteAccount(id) {
  return fetchWrapper.delete(`${baseUrl}/account/${id}`, {}).then((data) => {
    return data;
  });
}

export function saveAccountLogo(image, accountId) {
  let formData = new FormData();
  formData.append("logoSquare", image);
  formData.append("account_id", accountId);
  return fetchWrapper
    .postFormDataPublic(`${baseUrl}/accounts/UploadProfilePhoto`, formData)
    .then((data) => {
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
