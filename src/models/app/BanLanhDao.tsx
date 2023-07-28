import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';
import ApiConfig from '../../services/AppConfig';
import 'reflect-metadata';
@Entity()
export class BanLanhDao {
  @PrimaryColumn({type:'int'})
  ID!: number;
  @Column({ type: 'varchar' })
  Title!: string;

  @Column({ type: 'varchar', nullable: true })
  DonVi!: string | null;

  @Column({ type: 'datetime' })
  Modified!: Date;

  @Column({ type: 'datetime' })
  Created!: Date;

  @Column({ type: 'varchar' })
  LanhDao!: string;

  @Column({ type: 'varchar' })
  UyQuyen!: string;

  @Column({ type: 'int' })
  Orders!: number;

  @Column({ type: 'varchar' })
  Group!: string;

  @Column({ type: 'boolean', nullable: true })
  OneAssign!: boolean | null;

  @Column({ type: 'varchar' })
  ThayThe!: string;
  IsSelected!: boolean;
  IsLoadImage!: boolean;
  public static GetServerUrl(): string {
    const serverUrl =`${ApiConfig.getSubSite()}/_layouts/15/VuThao.Petrolimex.API/ApiMobilePublic.ashx?func=getV2&type=1&lname=Ban lãnh Đạo&cols=["ID", "Title", "DonVi", "Modified", "Created", "LanhDao", "UyQuyen", "Orders", "Group", "OneAssign", "ThayThe"]&wname=vanban`;
    return encodeURI(serverUrl);
  }
}

