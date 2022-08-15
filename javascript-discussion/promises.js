
class UserResponse {
    constructor(name, email, token) {
        this.name = name
        this.email = email
        this.token = token
    }
}

function loginUser(userName, password) {
    const correctPassword = "ABCDEF"
    if(password != correctPassword) return null
    return new UserResponse(
        name = userName,
        email = userName + "@email.com",
        token = "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
    )
}

const actionBlock = function (success, fail) {
    const delayInMilliseconds = 3000; //3 seconds
    setTimeout(function() {
        const result = loginUser("Sonny", "ABCDEF")  
        if (result == null) {
            fail("invalid credentials")
        }
        else {
            success(result)
        }
     }, delayInMilliseconds)
}

const loadUserInfo = new Promise(actionBlock);

loadUserInfo.then(function (user) {
    console.log(`Welcome MR. ${user.name}`)
}).catch(function (errorMessage) {
    console.log(errorMessage)
})