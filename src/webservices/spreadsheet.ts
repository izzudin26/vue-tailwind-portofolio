import { GoogleSpreadsheet } from "google-spreadsheet";

export interface SkillsModel {
  logo: string;
  name: string;
  value: number;
}

export interface ProjectsModel {
  name: string;
  platform: string;
  repository: string;
  link?: string;
  tag?: Array<string>;
}

class SpreadsheetServices {
  private doc: GoogleSpreadsheet;
  private cred = require("./cred.json");
  constructor(private urlId: string) {
    this.doc = new GoogleSpreadsheet(urlId);
  }

  public async getSkills(): Promise<SkillsModel[]> {
    await this.doc.useServiceAccountAuth(this.cred);
    await this.doc.loadInfo();
    const sheet = this.doc.sheetsByIndex[0];
    const data: SkillsModel[] = (await sheet.getRows()).map(doc => ({
      name: doc.name,
      value: doc.value,
      logo: doc.logo
    }));
    return data;
  }

  public async getProjects(): Promise<ProjectsModel[]> {
    await this.doc.useServiceAccountAuth(this.cred);
    await this.doc.loadInfo();
    const sheet = this.doc.sheetsByIndex[0];
    const data: ProjectsModel[] = (await sheet.getRows()).map(doc => ({
      name: doc.name,
      platform: doc.platform,
      repository: doc.repository,
      link: doc.link,
      tag: doc.tag.split(",")
    }));
    return data;
  }
}

export const skills = new SpreadsheetServices(
  "1HZ5G0KfBEKWg6zsjyui16PAiJbK--ui_RrplyLTK5f0"
);

export const projects = new SpreadsheetServices(
  "126EJnpshXAmna_IlD4XJWsuKM-Bqxw-MasWCo3Z5Nww"
);
