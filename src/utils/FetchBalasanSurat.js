const url = 'https://monitoringpersuratan-production.up.railway.app/api'
const GetBalasanSurat = async() => {
    const response = await fetch(url+'/showOutgoingLetters',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    });
    const json = await response.json();
    return json
}

export {GetBalasanSurat}