export const listClientsVM = () => {
    fetch("http/localhost:4000/api/clients")
        .then(data => {
            return data.json()
        })
}