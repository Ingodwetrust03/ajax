'use strict'


const getData = fetch('https://test-a02e8-default-rtdb.firebaseio.com/db.json')
    .then(response => response.json())
    .then((json) => {
        let jsonFormat = json
        const user = {
            age: jsonFormat.age,
            role: jsonFormat.role,
            user: jsonFormat.user,
        }
        console.log(user)

        const sendData = fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response => response.json())
            .catch(error => {
                console.log('error')
            })
    })
    .catch(error => {
        console.log('error')
    })