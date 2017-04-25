import { Injectable } from "@angular/core"
import * as CryptoJS from 'crypto-js'

@Injectable()
export class DataCryptoService {
  constructor() {

  }

  encrypt(key:string, data:string):string {
    return CryptoJS.AES.encrypt(data, key).ciphertext
  }

  decrypt(key:string, data:string):string {
    return CryptoJS.AES.decrypt(data, key).toString()
  }

  sha256(input:string):string {
    return CryptoJS.SHA256(input)
  }
}
