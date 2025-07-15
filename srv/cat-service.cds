using com.sap.test1 as db from '../db/schema';

service CatalogService {
  entity books   as
    projection on db.books {
      ID,
      title,
      author.name as writer,
      price.amount,
      price.currency,
      stock,
      author

    };

  entity authors as
    projection on db.authors {
      *,
      epc.name as authorsName
    }
    excluding {
      createdAt,
      createdBy,
      modifyAt,
      modifyBy
    };

  action submitOrder(book : db.books:ID, quantity : Integer) returns {
    stock : db.books:stock
  };

}
