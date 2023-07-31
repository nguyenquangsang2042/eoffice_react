import ApiList from '../models/ApiList';
import {BanLanhDao} from '../models/app/BanLanhDao';
import LoginResponse from '../models/LoginResponse';
import ApiService from '../services/ApiService';
import {performSOAPAuthentication} from '../utils/SoapUtils';
import {DbController} from './DBController';
export const loginUser = async (username: string, password: string) => {
  return new Promise<LoginResponse>(async (resolve, reject) => {
    if (await performSOAPAuthentication(username, password)) {
      ApiService.get<ApiList<BanLanhDao>>(BanLanhDao.GetServerUrl()).then(
        (data: ApiList<BanLanhDao>) => {
          const banLanhDaoEntities: BanLanhDao[] = data.data.map(
            (item: any) => {
              // Create a new instance of BanLanhDao and map the properties from the API response
              const banLanhDaoEntity = new BanLanhDao();
              banLanhDaoEntity.ID = item.ID;
              banLanhDaoEntity.Title = item.Title;
              banLanhDaoEntity.DonVi = item.DonVi;
              banLanhDaoEntity.Modified = new Date(item.Modified);
              banLanhDaoEntity.Created = new Date(item.Created);
              banLanhDaoEntity.LanhDao = item.LanhDao;
              banLanhDaoEntity.UyQuyen = item.UyQuyen;
              banLanhDaoEntity.Orders = item.Orders;
              banLanhDaoEntity.Group = item.Group;
              banLanhDaoEntity.OneAssign = item.OneAssign;
              banLanhDaoEntity.ThayThe = item.ThayThe;
              banLanhDaoEntity.IsSelected = item.IsSelected;
              banLanhDaoEntity.IsLoadImage = item.IsLoadImage;
              return banLanhDaoEntity;
            },
          );
          DbController.getInstance()
            .getBanLanhDaoRepository()
            .insertAll(banLanhDaoEntities);
        },
      );
      resolve({success: true, message: 'Login successful!'});
    } else {
      reject({
        success: false,
        message: 'Invalid credentials. Please try again.',
      });
    }
  });
};
