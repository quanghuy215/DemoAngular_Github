export class Zipcode {
  address1: String;
  address2: String;
  address3: String;
  kana1: String;
  kana2: String;
  kana3: String;
  prefcode: String;
  zipcode: String;

  constructor(zipcode) {
    {
      this.address1 = zipcode.address1 || '';
      this.address2 = zipcode.address2 || '';
      this.address3 = zipcode.address3 || '';
      this.kana1 = zipcode.kana1 || '';
      this.kana2 = zipcode.kana2 || '';
      this.kana3 = zipcode.kana3 || '';
      this.prefcode = zipcode.prefcode || '';
      this.zipcode = zipcode.zipcode || '';
    }
  }
}
