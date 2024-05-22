const url = "https://api.persuratankantah.xyz/api";

export const GetDashboard = async () => {
  const response = await fetch(url + "/show-dashboard", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  });
  const json = await response.json();
  return json;
};
