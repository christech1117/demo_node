import server from './routes';
import { connect } from './database';

(async () => {
  try {
    await connect();
    console.log('database is running!');

    const port = +process.env.PORT || 3000;
    await server.listen(port, '0.0.0.0');
  } catch (error) {
    console.error(error);
  }
})();
