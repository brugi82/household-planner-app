export default class BaseApi {
    static handleErrors(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      };
}