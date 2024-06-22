fetch("https://api.hostelduniya.com/api/hostel/rooms?hostel_id=1")
    .then((res) => {
        // console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })