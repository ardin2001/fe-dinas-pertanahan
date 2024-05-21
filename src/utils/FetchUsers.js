const url = "https://api.persuratankantah.xyz/api"
const Login = async(email,password) => {
    const response = await fetch(url+'/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password})
    });
    const json = await response.json();
    return json
}

const GetProfile = async() => {
    const response = await fetch(url+'/profile',{
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    });
    const json = await response.json();
    return json
}

export {Login, GetProfile}