import { fetchWrapper } from "../helpers/fetch-wrapper";

const baseUrl = `https://asp-noc-dev-win.azurewebsites.net`;

export function getLegalWaiver() {
  return fetchWrapper
    .getPublic(`${baseUrl}/legalwaiver`, {})
    .then((data: any) => {
      return data[0];
    });
}
