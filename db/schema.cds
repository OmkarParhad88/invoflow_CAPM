namespace com.sap.test1;

entity Authors {
  key ID            : UUID;
      name          : String;
      dateOfBirth   : Date;
      dateOfDeath   : Date;
}

entity Books {
  key ID     : UUID;
      author : Association to Authors;
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
  no_fiction = 2
}
