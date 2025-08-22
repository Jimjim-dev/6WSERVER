const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const movies = 
[{id: 1, title:'Superman'},{id: 2, title:'Thor'},{id: 3, title:'Ironman'}];

app.get('/', (req, res) => {
    res.send('Welcome to the Movie API');
}
);

app.get('/api/movies', (req, res) => {
    res.send(movies);
}
);

app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(h => h.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    res.send(movie);
}
);
app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    };
    movies.push(movie);
    res.send(movie);
}
);
app.listen(4000, () => {
    console.log('Server is running on port 4000');
}
);
