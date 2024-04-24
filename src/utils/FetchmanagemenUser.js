const url = 'https://monitoringpersuratan-production.up.railway.app/api'
const GetData = async() => {
    const response = await fetch(url+'/users');
    const json = await response.json();
    return json
}

export {GetData}