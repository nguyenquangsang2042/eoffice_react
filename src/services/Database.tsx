// Database.ts
import { getConnectionManager, Connection } from 'typeorm/browser';
import { BanLanhDao } from '../models/app/BanLanhDao';

export class Database {
  private static db: Promise<Connection | null> | null = null;

    static async initializeDatabase(): Promise<void> {
    if (!Database.db) {
      const connectionManager = getConnectionManager();
      Database.db = connectionManager.create({
        type: 'react-native',
        database: 'your-database-name.db',
        location: 'default',
        synchronize: true,
        logging: true,
        entities: [BanLanhDao],
      }).connect();
    }

    await Database.db;
  }

  private static async closeConnection(): Promise<void> {
    if (Database.db) {
      const connection = await Database.db;
      await connection?.close();
      Database.db = null;
    }
  }

  public static async getDb(): Promise<Connection | null> {
    if (!Database.db) {
      await Database.initializeDatabase();
    }

    return Database.db;
  }

  public static async closeDb(): Promise<void> {
    await Database.closeConnection();
  }
}
