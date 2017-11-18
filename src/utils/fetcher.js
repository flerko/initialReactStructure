/**
 * File contains methods using function fetch.
 */
import fetch from 'isomorphic-fetch';
import { Promise } from 'es6-promise';


let responseCodes = {};
responseCodes[500] = '/500';
responseCodes[502] = '/502';



function checkStatus(response) {
    if (undefined !== responseCodes[response.status]) {
        window.location.href = responseCodes[response.status];
    }

    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }

    return Promise.reject(new Error(response.statusText));
}

function getResponseJson(response) {
    return response.json();
}

export function post(url, data) {
    return fetch(url, {
        credentials: "same-origin",
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data)
    })
        .then((response) => checkStatus(response))
        .then((json) => getResponseJson(json))
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
}

export function getFromMock(url, data) {
    return fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
    })
        .then((response) => checkStatus(response))
        .then((json) => getResponseJson(json))
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
}