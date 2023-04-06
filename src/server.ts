import { app } from './app';
import { env } from './env';

app.listen({
  host: '0.0.0.0', //Tona possível o acesso a aplicação
  port: env.PORT,
}).then(() => {console.log('HTTP server running');});
