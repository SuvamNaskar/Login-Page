let x;
let user, pass, result = 0;

let users = ["suvam", "admin", "github"];
let passes = ["1234", "admin", "login"];

function login()
{
    input();
    validate();
    output();
}

function input()
{
    x = document.getElementById("frm1");
    user = x.elements[0].value;
    pass = x.elements[1].value;
}

function validate()
{
    let i;
    for(i = 0; i < users.length; i++)
    {
        if(user == users[i])
        {
            console.log(i);
            result = 0;
            break;
        }
    }
    if(result == -1)
    {
        alert("Wrong username or password!");
    }
    else
    {
        if(pass == passes[i])
            result = 1;
        else
            result = 0;
    }
}

function output()
{
    if(result)
        alert("Welcome " + user + ", You have successfully validated.");
    else
        alert("Wrong username or password!");
}