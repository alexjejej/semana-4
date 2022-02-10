//node app.js
var express = require("express"), cors=require('cors');
var app = express();
app.use(express.json());
app.use(cors());
app.listen(3000, () => console.log("Server running on port 3000"));

var people = [
		{
			cargo: 'Director',
			name: 'Ricardo Villanueva',
			image: 'res://director',
			descripcion: 'Director de la Universidad',
			},
		{
		cargo: 'Estudiante',
		name: 'Alejandro Garcia Arana',
		image: 'res://alejandro',
		descripcion: 'Estudiante de la carrera Ingenieria en nanotecnología',
		},
		{
		cargo: 'Servicio de limpieza',
		name: 'Pedro Torres',
		image: 'res://pedro',
		descripcion: 'Trabajor del turno matutino',
		},
		{
		cargo: 'Profesora',
		name: 'Raquel Lara',
		image: 'res://raquel',
		descripcion: 'Profesora de la materia de nanoelectronica',
		}
	]
app.get("/get", (req, res, next)=>
    res.json(people.filter((c)=> c.cargo.toLowerCase().indexOf(req.query.q.toString().toLowerCase()) > -1)));

var profesores = [];
app.get("/profs", (req, res, next) => res.json(profesores));
app.post("/profs", (req, res, next) => {
    console.log(req.body);
    profesores.push(req.body.nuevo);
    res.json(profesores);
});