import express, { request, response } from'express';
import { Server } from 'socket.io';
const PORT = 5050;

const app = express();
const httpServer = app.listen(PORT, () => {
    console.table(
        {
            'Controller:' : 'http://localhost:5050/controller',
            'Display:' : 'http://localhost:5050/display',
        }
    )
});
const ioServer = new Server(httpServer, { path: '/real-time' });

//const staticController = express.static('public-controller');
//const staticDisplay = express.static('public-display');

app.use('/controller', express.static('public-controller'));
app.use('/display', express.static('public-display'));
app.use(express.json());

/*___________________________________________

1) Create an endpoint to GET a validation message to test if the endpoint is working
_____________________________________________ */

app.post('/add-lead', (request, response) => {
    request.body //{name: 'juan}
    const bonnus = generateBonnus();
    response.send(bonnus)
})


/*___________________________________________

2) Create the socket methods to listen the events and emit a response
It should listen for directions and emit the incoming data.
_____________________________________________ */
/*
ioServer.on('connection', (socket) => {
    console.log(socket.id)

    socket.on('')

});
*/
ioServer.on('connection',(socket) =>{
    console.log(socket.id);
    socket.on('saludo',(message)=> {
        console.log(message);
        socket.broadcast.emit('display-saludo',message);
    });
});
ioServer.on('connection', function(socket) {
    socket.on('eventoDeClick', function(salta) {
      console.log("si salta");
      socket.broadcast.emit('display-salto', salta);
    });
  });

/*___________________________________________

3) Create an endpoint to POST user score and print it
_____________________________________________ */
