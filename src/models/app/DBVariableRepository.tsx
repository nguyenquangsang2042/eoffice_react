// DBVariableRepository.ts
import {EntityRepository, Repository} from 'typeorm';
import {DBVariable} from './DBVariable';

@EntityRepository(DBVariable)
export class DBVariableRepository extends Repository<DBVariable> {
  async insertAll(dbVariables: DBVariable[]): Promise<DBVariable[]> {
    return await this.save(dbVariables);
  }

  async deleteAll(): Promise<void> {
    await this.delete({});
  }

  async findById(id: string): Promise<DBVariable | undefined> {
    const query = `SELECT * FROM db_variable WHERE id = ?`;
    const params = [id];
    return await this.query(query, params);
  }
}
