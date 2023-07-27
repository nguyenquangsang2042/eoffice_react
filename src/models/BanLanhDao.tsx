
export class BanLanhDao {
  id: number;

  title:string;

  donVi: string | null;

  modified: string;

  created: string;

  lanhDao: string;

  uyQuyen: string;

  orders: number;

  group: string;

  oneAssign: boolean | null;

  thayThe: string;

  isSelected: boolean;
  isLoadImage: boolean;
  constructor(
    id: number,
    title: string,
    donVi: string | null,
    modified: string,
    created: string,
    lanhDao: string,
    uyQuyen: string,
    orders: number,
    group: string,
    oneAssign: boolean | null,
    thayThe: string
  ) {
    this.id = id;
    this.title = title;
    this.donVi = donVi;
    this.modified = modified;
    this.created = created;
    this.lanhDao = lanhDao;
    this.uyQuyen = uyQuyen;
    this.orders = orders;
    this.group = group;
    this.oneAssign = oneAssign;
    this.thayThe = thayThe;

    // These properties don't need to be initialized via the constructor.
    // You can set them to their default values if needed.
    this.isSelected = false;
    this.isLoadImage = false;
  }
}
