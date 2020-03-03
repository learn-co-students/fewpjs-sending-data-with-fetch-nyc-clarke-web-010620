function submitData(username, useremail){
    let objectBody =
        {
            name: username,
            email: useremail
        }
    configObj.body = JSON.stringify(objectBody)
    return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(json => append(json))
    .catch(function(error) {
        alert("There has been an error");
        let div = document.createElement('div')
        div.innerHTML = `${error}`
        document.body.append(div)})
}

let configObj = {
    method: "POST",
    headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
    }
}

function append(json){
    let div = document.createElement('div')
    div.innerHTML = `
    <p>username: ${json.name}</p>
    <p>user email: ${json.email}</p>
    `
    document.body.append(div)
}