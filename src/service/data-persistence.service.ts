/// <reference types="cordova" />
/// <reference types="cordova-plugin-file" />

import { Injectable } from '@angular/core'

@Injectable()
export class DataPersistenceService {
  constructor() {
  }

  writeText(name:string, data:string):Promise<string> {
    return new Promise(
      (resolve, reject) => {
        window.resolveLocalFileSystemURL(
          window.cordova.file.dataDirectory,
          (entry) => {
            (<DirectoryEntry>entry).getFile(
              name,
              {
                create: true,
                exclusive: true
              },
              (fileEntry) => {
                fileEntry.createWriter(
                  (writer) => {
                    const blob = new Blob([data], {type: "text/plain"})
                    writer.onwriteend = (ev) => {
                      resolve(data)
                    }
                    writer.onerror = (ev) => {
                      reject(ev)
                    }
                    writer.write(blob)
                  }
                )
              },
              (err) => {
                reject(err)
              }
            )
          },
          (err) => {
            reject(err)
          }
        )
      }
    )
  }

  readText(name:string):Promise<string> {
    const rst = new Promise(
      (resolve, reject) => {
        window.resolveLocalFileSystemURL(
          window.cordova.file.dataDirectory,
          (entry) => {
            (<DirectoryEntry>entry).getFile(
              name,
              {
                create: false,
                exclusive: true
              },
              (fileEntry) => {
                fileEntry.file(
                  (file) => {
                    const reader = new FileReader()
                    reader.onloadend = (ev) => {
                      resolve(reader.result)
                    }
                    reader.readAsText(file)
                  }
                )
              },
              (err) => {
                reject(err)
              }
            )
          },
          (err) => {
            reject(err)
          }
        )
      }
    )
    return rst
  }
}
