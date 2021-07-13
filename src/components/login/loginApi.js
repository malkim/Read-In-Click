
export const signUpApi = (user) => {
    return fetch(`http://localhost:3002/users/createUser`, {
        method: "POST",
        body: JSON.stringify(user),
    })
        .then(response => {
            if (response.ok) {
                response.json()
                    .then(() => {
                        alert("hello" + " " + user.name);
                    })
            } else {
                response.json()
                    .then(() => error1 => { alert(JSON.stringify(error1.errors)) }).catch(error => { console.log(error); });
            }
        })
}

export const signInApi = (user) => {
    console.log("user", user);
    return fetch(`http://localhost:3002/signIn`, {
        method: "POST",
        body: JSON.stringify(user),
    })
        .then(response => {
            if (response.ok) {
                response.json()
                    .then(() => {
                        alert("hello" + " " + user.name);
                    })
            } else {
                response.json()
                    .then(() => error1 => { alert(JSON.stringify(error1.errors)) }).catch(error => { console.log(error); });
            }
        })
}



