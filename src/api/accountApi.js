import BaseApi from './baseApi';

export default class AccountApi extends BaseApi{
    static registerUserTest(userInfo) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
              console.log('REGISTER USER TEST RESOLVED');
            resolve();
          }, 3000);
        });
      }

    static registerUser(user){
        return new Promise((resolve, reject) => {
            AccountApi.postData('https://localhost:5001/accounts/RegisterUser', user)
            .then(response =>{
                resolve(AccountApi.handleErrors(response));
            }).catch(err => reject(err));
        });
    }

    static handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    };

    static postData(url = ``, data = {}) {
    // Default options are marked with *
        return fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        }); // parses response to JSON
    }
}