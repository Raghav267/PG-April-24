const url = "https://api.hostelduniya.com/api/hostel/rooms?hostel_id=1";

axios.get(url)
    .then((res) => {
        console.log(res.data.data.hostel[0].name);
    })
    .catch((err) => {
        console.log(err);
    })