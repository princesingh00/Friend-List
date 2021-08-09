
export default class Employee {

    constructor(name) {
        this.name = name;
        this.favourite = false;
    }

    setFavourite(fav) {
        this.favourite = fav;
    }

    getFavourite() {
        return this.favourite;
    }
}

