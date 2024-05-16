const url = "https://api.persuratankantah.xyz/api";

const GetBalasanSurat = async() => {
    const response = await fetch(url+'/show-reply',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    });
    const json = await response.json();
    return json
}

const DeleteBalasanSurat = async(id) => {
    const response = await fetch(url+'/delete-reply/'+id,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    });
    const json = await response.json();
    return json
}

const GetDetailBalasan = async(id) => {
    const response = await fetch(url+'/show-reply-detail/'+id,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    });
    const json = await response.json();
    return json
}

const PostBalasanSurat = async(id,data) => {
    console.log(id,data)
    const response = await fetch(url+'/add-reply/'+id,{
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: data
    });
    const json = await response.json();
    return json
}

const PutBalasanSurat = async(id,data) => {
    const response = await fetch(url+'/update-reply/'+id,{
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: data
    });
    const json = await response.json();
    return json
}

const getShowFileBalas = async (id) => {
  const response = await fetch(url + "/show-file-balas/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const blob = await response.blob();
  const objectUrl = window.URL.createObjectURL(blob);
  return objectUrl;
};

export {GetBalasanSurat,GetDetailBalasan,PostBalasanSurat,PutBalasanSurat,DeleteBalasanSurat, getShowFileBalas}