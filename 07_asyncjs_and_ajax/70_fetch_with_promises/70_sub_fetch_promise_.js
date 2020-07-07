/**EasyHTTP Library
* Library for making HTTP requests

* @version 2.0.0
* @author Don Jude
* @license KSBC
**/

class EasyHTTP {
    //Make an HTTP GET  Request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve (data))
                .catch(err =>reject(err));

        })
    }

    //Make an HTTP POST Request
    post(url , data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve (data))
                .catch(err =>reject(err));
        })
    }


   //Make an HTTP PUT Request
    put(url , data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve (data))
                .catch(err =>reject(err));
        })
    }

    //Make an HTTP PUT Request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve ('Resources Deleted'))
                .catch(err =>reject(err));
        })
    }
}

