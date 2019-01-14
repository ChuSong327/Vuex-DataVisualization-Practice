export const get = (url) => {
    return fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        return res.json()
    })
};