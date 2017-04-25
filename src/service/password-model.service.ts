import { Injectable } from '@angular/core'

import { DataPersistenceService } from './data-persistence.service'
import { DataCryptoService } from './data-crypto.service'

interface SafePasswordDatabase {
  owner: string
  createDate: Date,
  updateDate: Date,
  passwords: Array<[string, string]>
}

const persistName = "password.db"

@Injectable()
export class PasswordModelService {
  crypt_key: string
  userId: string
  passwordDatabase: SafePasswordDatabase

  constructor(
    public cryptoService: DataCryptoService,
    public persistService: DataPersistenceService
  ) {
  }

  get_password(key:string):string {
    let pwd: string = null
    this.passwordDatabase.passwords.forEach(
      (item) => {
        if (item[0] == key) {
          pwd = item[1]
        }
      }
    )
    return pwd
  }

  set_password(key:string, pwd:string):void {
    let finded = false;

    this.passwordDatabase.passwords.forEach(
      (item) => {
        if (item[0] == key) {
          item[1] = pwd
          finded = true
        }
      }
    )
    if (!finded) {
      this.passwordDatabase.passwords.push([key, pwd])
    }
  }

  verify_password(uid:string, pwd:string) {
    this.userId = uid
    this.crypt_key = this.cryptoService.sha256(uid + pwd)

    this.persistService.readText(persistName).then(
      (content) => {
        const json = this.cryptoService.decrypt(this.crypt_key, content)
        const data: SafePasswordDatabase = JSON.parse(json)
        if (data.owner != this.userId) {
          throw "Incorrectly user id"
        } else {
          this.passwordDatabase = data
        }
      }
    ).catch(
      (err) => {
        this.passwordDatabase = {
          owner: uid,
          createDate: new Date(Date.now()),
          updateDate: new Date(Date.now()),
          passwords: []
        }
      }
    )
  }

  save_password() {
    this.passwordDatabase.updateDate = new Date(Date.now())
    const json = JSON.stringify(this.passwordDatabase)
    const content = this.cryptoService.encrypt(this.crypt_key, json)
    this.persistService.writeText(persistName, content).then(
      (content) => {
        alert("Saved")
      }
    )
  }
}
