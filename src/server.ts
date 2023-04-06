import { app } from "./app";

app.listen({
  host: '0.0.0.0', //Tona possível o acesso a aplicação
  port: 3333,
}).then(() => {console.log('HTTP server running')})