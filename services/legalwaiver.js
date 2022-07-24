import { fetchWrapper } from "../helpers/fetch-wrapper";

const baseUrl = `https://asp-noc-dev-win.azurewebsites.net/api`;

export function getLegalWaiver() {
  return fetchWrapper
    .getPublic(`${baseUrl}/accountlegalwaivers`, {})
    .then((data) => {
      return data[0];
    });
}

export function getLegalWaiverProvider() {
  return fetchWrapper
    .getPublic(`${baseUrl}/providerlegalwaivers`, {})
    .then((data) => {
      return data[0];
    });
}
