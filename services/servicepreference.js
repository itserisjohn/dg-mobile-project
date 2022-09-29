import { fetchWrapper } from "../helpers/fetch-wrapper";

const baseUrl = `https://asp-noc-dev-win.azurewebsites.net/api`;


export function getServicePreference() {
    return fetchWrapper
      .getPublic(`${baseUrl}/preference`, {})
      .then((data) => {
        return data;
      });
  }


