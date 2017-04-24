/// <reference types='cordova-plugin-file'/>
import { Injectable } from '@angular/core'

@Injectable()
export class PasswordModelService {

  constructor() {
  }

  verify_password(uid:string, pwd:string) {
    window.requestFileSystem(
      LocalFileSystem.PERSISTENT,
      50*1024*1024,
      (fs) => {
        
      },
      (err) => console.error(err)
    )
  }

  fs_geted(fs: FileSystem): void {
  }
}
