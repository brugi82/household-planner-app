import BaseApi from './baseApi';

class AccountApi extends BaseApi{
    static registerUser(user){
        return postData('https://localhost:5001/accounts/RegisterUser', user)
            .then(handleErrors);
    }

    static handleErrors(response) {
        if (!response.ok) {
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
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(response => response.json()); // parses response to JSON
    }
}