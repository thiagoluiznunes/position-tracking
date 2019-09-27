import mongoose from 'mongoose';
import { NODE_ENV, DB_NAME, DB_USER, DB_USER_PASSWORD } from 'babel-dotenv';

const initConnection = async () => {
  if (NODE_ENV === 'dev') {
    mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, {
      useNewUrlParser: true,
      auth: {
        user: DB_USER,
        password: DB_USER_PASSWORD
      },
    });
  } else {
    const uri = `mongodb://@ds239128.mlab.com:39128/${DB_NAME}`;
    mongoose.connect(uri, {
      useNewUrlParser: true,
      auth: {
        user: DB_USER,
        password: DB_USER_PASSWORD
      },
      server: {
        socketOptions: { keepAlive: 1 }
      }
    });
  }

  const connection = mongoose.connection;
  connection.on('connected', () => {
    console.log('Connected to db');
  });

  connection.on('disconnected', () => {
    console.log('Disconnected to db');
  });

  connection.on('error', (error) => {
    console.log('Db connection error ', error);
    process.exit(1);
  });
}

export default { initConnection };


