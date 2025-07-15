import cds from "@sap/cds";
import { Request, Query } from "@sap/cds";
import { books, book } from '../@cds-models/CatalogService'
const { SELECT, INSERT, UPSERT, UPDATE, DELETE } = cds.ql;


export class CatalogService extends cds.ApplicationService {
  init() {
    // const { books } = this.entities;
    this.after('READ', books, this.grantDiscount);
    this.on('submitOrder', this.reduceStock);
    return super.init()
  }

  grantDiscount(results: book[], req: Request) {

    for (const book of results) {
      if (!book.stock) continue
      if (book.stock > 200) {
        book.title += ' -- 11% discount';
      }
    }
  }

  async reduceStock(req: Request) {

    const { book, quantity } = req.data;

    let query1: book | null = await SELECT.one.from(books).where({ ID: book }).columns(b => { b.stock });

    if (!query1) {
      return req.error('book not found');
    }
    let { stock } = query1;

    if (!stock || stock < quantity) {
      return req.error('not enough stock');
    }

    await UPDATE.entity(books).where({ ID: book }).with({ stock: { '-=': quantity } });
    return { stock: stock - quantity };

  }
}