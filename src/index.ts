import { server } from './server/server';


const port = process.env.PORT;

server.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});