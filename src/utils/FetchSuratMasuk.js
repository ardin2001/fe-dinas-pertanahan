const url = 'https://monitoringpersuratan-production.up.railway.app/api'
const GetSuratMasuk = async() => {
    const response = await fetch(url+'/show-admin-letters',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    });
    const json = await response.json();
    return json
}

const DeleteSuratMasuk = async(id) => {
    const response = await fetch(url+'/delete-letter/'+id,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    });
    const json = await response.json();
    return json
}

export {GetSuratMasuk,DeleteSuratMasuk}