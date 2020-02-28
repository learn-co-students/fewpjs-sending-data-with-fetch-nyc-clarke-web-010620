
submitData()

function submitData(userName, userMail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
            'name': `${userName}`,
            'email': `${userMail}` 
        }),
        })
        .then(resp => resp.json())
        .then(user => showUser(user))
        .catch(function(error) {
            alert("Bad things! Ragnarők!");
            console.log(error.message);
            document.body.innerHTML += error.message
          });
}

function showUser(user) {
    document.body.innerHTML = user.id
    console.dir(user)

}