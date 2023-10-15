import mongoose from 'mongoose';
import { config } from './config';
import Logger from 'bunyan';

const log: Logger = config.createLogger('setupDatabase');

export default () => {
  const connect = () => {
    mongoose
      .connect('mongodb://localhost:27017/<chatty-backend>')
      .then(() => {
        log.info('success connection to mongodb');
      })
      .catch((error) => {
        log.error('error in connection with mongodb');
        return process.exit(1);
      });
  };
  connect();
};
