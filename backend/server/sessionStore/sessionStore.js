import { existsSync, mkdirSync, readdirSync, readFileSync, unlinkSync, writeFileSync, writeFile } from "fs";
import path from "path";
import { v4 as uuidv4 } from 'uuid';
import { getDirName } from "../utils/getDirName.js";

// const sessionDir = path.join(__dirname, "sessions");
// const sessionDir = path.join(getDirName(import.meta.url), "sessions");

// if (!existsSync(sessionDir)) {
//   console.log("---------------------------------")
//   console.log("creating this dir")
//   console.log(sessionDir);
//   console.log("---------------------------------")
//   mkdirSync(sessionDir);
// }

export class SessionStore {
  constructor (pathLocation) {
    const sessionDir = path.join(getDirName(pathLocation), "sessions");
    if (!existsSync(sessionDir)) {
      mkdirSync(sessionDir);
    }
    this.sessionDir = sessionDir;
    this.cleanUpInterval = 3600 * 24 * 1000;
    this.expirationDate = 3600 * 4 * 1000;
    this.startCleanUp();
  }
  startCleanUp () {
    setInterval(() => {
      const files = readdirSync(this.sessionDir);

      files.forEach((file) => {
        const sessionID = file.split('.')[0];
        const sessionBody = this.loadSession(sessionID);
        if (!sessionBody) {
          this.deleteSession(sessionID);
        }
      })
    }, this.cleanUpInterval)
  }
  generateSessionID() {
    return uuidv4();
  }

  saveSession(sessionID, sessionData) {
    const sessionPath = path.join(this.sessionDir, `${sessionID}.json`);
    const sessionBody = {
      ...sessionData,
      expires: Date.now() + this.expirationDate
    }
    writeFileSync(sessionPath, JSON.stringify(sessionBody, null, 2));
  }

  deleteSession(sessionID) {
    const sessionPath = path.join(this.sessionDir, `${sessionID}.json`);
    if (existsSync(sessionPath)) {
      unlinkSync(sessionPath);
    }
  }

  loadSession(sessionID) {
    const sessionPath = path.join(this.sessionDir, `${sessionID}.json`);
    if (existsSync(sessionPath)) {
      const sessionBody = JSON.parse(readFileSync(sessionPath, 'utf-8'));
      if (sessionBody.expires > Date.now()) {
        return sessionBody;
      } else {
        this.deleteSession(sessionID);
      }
    }
  }

}