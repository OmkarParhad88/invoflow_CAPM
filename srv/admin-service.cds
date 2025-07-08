using com.sap.test1 as db from '../db/schema';

service AdminService {

  entity Books as projection on db.Books;
  entity Authors as projection on db.Authors;

}
