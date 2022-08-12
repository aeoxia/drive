const users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
    ];

//["Susan Steward", "Daniel Longbottom", "Jacob Black"]
//Hint: map

const fullNameList = users.map( user => {
    return user.firstName + " " + user.lastName
}
)

console.log(fullNameList)