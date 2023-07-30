import {EntityRepository, Repository} from 'typeorm';
import {BanLanhDao} from './BanLanhDao';

@EntityRepository(BanLanhDao)
export class BanLanhDaoRepository extends Repository<BanLanhDao> {
  async findByTitle(title: string): Promise<BanLanhDao[]> {
    const queryString = `SELECT * FROM ban_lanh_dao WHERE title LIKE '%${title}%'`;
    return this.query(queryString);
  }
  async insertAll(banLanhDaoList: BanLanhDao[]): Promise<BanLanhDao[]> {
    try {
      const insertedEntities = await this.manager.save(banLanhDaoList);
      return insertedEntities;
    } catch (error) {
      // Handle the error appropriately (e.g., logging or throwing)
      console.error('Error inserting list of BanLanhDao:', error);
      throw error;
    }
  }
}
