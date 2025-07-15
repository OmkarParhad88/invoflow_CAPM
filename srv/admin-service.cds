using com.sap.test1 as db from '../db/schema';

service AdminService {

  entity books as projection on db.books;
  entity authors as projection on db.authors;

}
