import {
  GoogleSpreadsheet,
  GoogleSpreadsheetRow,
  GoogleSpreadsheetWorksheet
} from "google-spreadsheet";

export interface SpreadsheetResponse {
  logo?: string;
  name?: string;
  value?: number;
}

class SpreadsheetServices {
  private doc: GoogleSpreadsheet;

  constructor(private urlId: string) {
    this.doc = new GoogleSpreadsheet(urlId);
  }

  public async getData(): Promise<SpreadsheetResponse[]> {
    const cred = await import("./cred.json");
    await this.doc.useServiceAccountAuth(cred);
    await this.doc.loadInfo();
    const sheet = this.doc.sheetsByIndex[0];
    const data: SpreadsheetResponse[] = (await sheet.getRows()).map(doc => ({
      name: doc.name,
      value: doc.value,
      logo: doc.logo
    }));
    return data;
  }
}

export default new SpreadsheetServices(
  "1HZ5G0KfBEKWg6zsjyui16PAiJbK--ui_RrplyLTK5f0"
);
