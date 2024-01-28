class BaseModel {
    constructor(api) {
        this.api = api;
    }

    get(e) {
        axios
            .get(`${this.api}${this.endpoint}/${e ?? ""}`)
            .then((res) => {
                console.log(res);
            })

            .catch(function (error) {
                console.log("Error", error.message);
            });
    }
    delete(e) {
        axios
            .delete(`${this.api}${this.endpoint}/${e ?? ""}`)
            .then((res) => {
                console.log(res);
            })
            .catch(function (error) {
                console.log("Error", error.message);
            });
    }
    put(e, data) {
        axios
            .put(`${this.api}${this.endpoint}/${e ?? ""}`, data)
            .then((res) => {
                console.log(res);
            })
            .catch(function (error) {
                console.log("Error", error.message);
            });
    }
}

export default BaseModel;
