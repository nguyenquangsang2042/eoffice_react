class ApiConfig {
  private static BASE_URL: string = 'https://petrolimex.vuthao.com'; //dev
  //private static BASE_URL: string = 'https://daotaoeoffice.petrolimex.com.vn'; //dev
  //private static BASE_URL: string = 'https://eoffice.petrolimex.com.vn'; //dev

  static getBaseUrl(): string {
    return ApiConfig.BASE_URL;
  }

  static setBaseUrl(newBaseUrl: string): void {
    ApiConfig.BASE_URL = newBaseUrl;
  }

  private static SUBSITE: string = '';
  static getSubSite(): string {
    return ApiConfig.SUBSITE;
  }

  static setSubSite(newSubsite: string): void {
    ApiConfig.SUBSITE = newSubsite;
  }
}
export default ApiConfig;
