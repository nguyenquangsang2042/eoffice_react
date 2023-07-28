class Status {
    status?: string;
    mess?: Mess;
    dateNow?: Date;
    constructor() {}
  }
  
  class Mess {
    key?: string;
    value?: string;
    constructor() {}
  }
  
  export { Status, Mess };