class Status {
    status?: string;
    mess?: Mess;
    dateNow?: string;
    constructor() {}
  }
  
  class Mess {
    key?: string;
    value?: string;
    constructor() {}
  }
  
  export { Status, Mess };