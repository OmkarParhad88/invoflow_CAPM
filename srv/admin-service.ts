import { Request } from "@sap/cds"
import cds from "@sap/cds"
// const { authors } = cds.entities('authors')

export class AdminService extends cds.ApplicationService {
  init() {
    const { authors } = this.entities;
    // const { authors } = require('#cds-models/sap/capire/authors')
    // const { authors } = cds.entities('authors')

    this.before(['CREATE', 'UPDATE'], authors, this.validateLifeDate);

    return super.init();
  }

  validateLifeDate(req: Request) {
    const { dateOfBirth, dateOfDeath } = req.data;
    if (!dateOfBirth || !dateOfDeath) {
      return;
    }
    const dob = new Date(dateOfBirth);
    const dod = new Date(dateOfDeath);
    if (dod < dob) {
      req.error('dateOfDeath must be greater than dateOfBirth');
    }
  }

}