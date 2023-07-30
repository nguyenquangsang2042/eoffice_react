import {Status} from './status'; // Assuming 'status.ts' contains the TypeScript classes for Status and Mess

class ApiList<T> extends Status {
  data: T[] = [];

  constructor() {
    super(); // Call the constructor of the base class 'Status'
  }
}

export default ApiList;
