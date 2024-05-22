const url = "https://api.persuratankantah.xyz/api";

export const GetRekapSurat = async() => {
    const response = await fetch(url+'/show-letters',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
        },
    });
    const json = await response.json();
    return json
}