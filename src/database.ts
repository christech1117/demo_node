import { MongoClient } from 'mongodb';

let database: MongoClient;

export function connect(): Promise<MongoClient> {
  return new Promise((resolve, reject) => {
    MongoClient.connect(process.env.DB_URI, (err, db) => {
      if (err) {
        reject(err);
        return;
      }

      database = db;
      resolve(db);
    });
  });
}

export function DB(): MongoClient {
  return database;
}
