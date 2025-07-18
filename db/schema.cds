// using { Currency, cuid, localized } from '@sap/cds/common';
namespace com.sap.test1;

entity authors {
  key ID          : UUID;
      books       : Association to many books
                      on books.author = $self;
      name        : String @mandatory;
      dateOfBirth : Date;
      dateOfDeath : Date;
      epc         : Association to Epc;
}

entity Epc {
  key ID   : Integer;
      name : String(255);
}

extend authors with {
  newField : String;
}


entity books {
  key ID     : UUID;
      title  : String(255);
      author : Association to authors;
      stock  : noOfBooks;
      price  : Price;
      genre  : Genre;
}

type noOfBooks : Integer;

type Price     : {
  amount   : Decimal;
  currency : String(3);
}

type Genre     : Integer enum {
  fiction = 1;
  no_fiction = 2;
}

aspect ManagedObjet {
  createdAt : Timestamp  @cds.on.insert: $now;
  createdBy : User       @cds.on.insert: $user;
  modifyAt  : Timestamp  @cds.on.insert: $now   @cds.on.update: $now;
  modifyBy  : User       @cds.on.insert: $user  @cds.on.update: $user;
}

type User      : String(255);

extend books with ManagedObjet;
extend authors with ManagedObjet;


annotate authors with {
  modifyAt @odata.etag;
}

annotate books with {
  modifyAt @odata.etag;
}
