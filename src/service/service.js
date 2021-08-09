export function getData() {
    let data = JSON.parse(localStorage.getItem("data"));
    return data == null ? [] : data;
}

export function addFavourite(name) {
    let data = JSON.parse(localStorage.getItem("data"));
    let objIndex = data.findIndex((obj => obj.name === name));
    data[objIndex].fav = !data[objIndex].fav;
    localStorage.setItem("data", JSON.stringify(data));
}

export function addFriend(name) {
    let friends = [];
    let obj = {
        name: name,
        fav: false
    }
    friends.push(obj);

    let data = JSON.parse(localStorage.getItem("data"));

    if (data === null)
        localStorage.setItem("data", JSON.stringify(friends));
    else {
        data.push(obj);
        localStorage.setItem("data", JSON.stringify(data));
    }
}