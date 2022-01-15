const API = "https://api.themoviedb.org/3";

export function get(path) {
   return fetch(API + path, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjIwZDgyOGM4ZjhlNmEwOGZlMDZiZjViYWZjMmM2OCIsInN1YiI6IjYxYjlmYzFhOWQ4OTM5MDA0MDQ1NDI4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MiOXQCeIpj83Je0QaSuOjos4WtDg4h5VhTV8QXaeMho",
                "Content-Type": " application/json;charset=utf-8",
            }
        })
        .then( (result) => result.json())

}