export const fetchRandomDogImage = () => {
    return fetch(`https://dog.ceo/api/breeds/image/random/3`)
        .then(response => response.json())
        .then(json => json.message)
        .catch(error => console.log(error))
}