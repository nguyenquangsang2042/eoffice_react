// DbController.ts
import { Connection } from 'typeorm/browser';
import { Database } from '../services/Database';
import { BanLanhDao } from '../models/app/BanLanhDao';
import { BanLanhDaoRepository } from '../models/app/BanLanhDaoRepository';
import { DBVariableRepository } from '../models/app/DBVariableRepository';

export class DbController {
  private static instance: DbController | null = null;
  private connection: any;
  private banLanhDaoRepository: BanLanhDaoRepository | null = null;
  private dbVariableRepository: DBVariableRepository | null = null;

  private constructor() {}

  public static getInstance(): DbController {
    if (!DbController.instance) {
      DbController.instance = new DbController();
    }
    return DbController.instance;
  }

  public async initialize(): Promise<void> {
    if (!this.connection) {
      this.connection = await Database.getDb();
      this.banLanhDaoRepository = this.connection.getCustomRepository(BanLanhDaoRepository);
      this.dbVariableRepository = this.connection.getCustomRepository(DBVariableRepository);
    }
  }

  public async close(): Promise<void> {
    if (this.connection) {
      await Database.closeDb();
      this.connection = null;
      this.banLanhDaoRepository = null;
      this.dbVariableRepository = this.connection.getCustomRepository(DBVariableRepository);
    }
  }

  public getBanLanhDaoRepository(): BanLanhDaoRepository {
    if (!this.banLanhDaoRepository) {
      throw new Error('DbController not initialized. Call initialize() first.');
    }
    return this.banLanhDaoRepository;
  }
}
