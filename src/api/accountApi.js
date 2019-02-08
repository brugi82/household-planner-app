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

    static loginUser(loginInfo){
        return new Promise((resolve, reject) => {
            AccountApi.postData('https://localhost:44318/api/accounts/Login', loginInfo)
                .then(response => {
                    AccountApi.handleErrors(response);
                    resolve(response.json());
                }).catch(err => reject(err));
        })
    }

    static registerUser(user){
        return new Promise((resolve, reject) => {
            AccountApi.postData('https://localhost:44318/api/accounts/RegisterUser', user)
            .then(response =>{
                AccountApi.handleErrors(response);
                resolve(true);
            }).catch(err => reject(err));
        });
    }

    static confirmEmail = (userId, token) => {
        return new Promise((resolve, reject) => {
            AccountApi.postData(`https://localhost:44318/api/accounts/ConfirmEmail?i=${userId}&o=${token}`)
                .then(response => {
                    AccountApi.handleErrors(response);
                    resolve(true);
                }).catch(error => reject(error));
        });
    }

    static handleErrors(response) {
        if (!response.ok) {
            // console.log(response);
            // console.log(response.error);
            throw Error(response.statusText);
        }
        return response;
    };

    static postData(url = ``, data = {}) {
    // Default options are marked with *
        return fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            body: JSON.stringify(data),
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
             // body data type must match "Content-Type" header
        }); // parses response to JSON
    }
}