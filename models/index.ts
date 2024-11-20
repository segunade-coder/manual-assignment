import db from "../utils/mysqlApi";

(async () => {
  await db.createTable(
    "students",
    {
      columnName: "name",
      dataType: "varchar",
      condition: "NOT NULL",
      dataTypeLength: "250",
    },
    {
      columnName: "adm",
      dataType: "varchar",
      condition: "NOT NULL",
      dataTypeLength: "250",
    },
    {
      columnName: "phone",
      dataType: "varchar",
      condition: "NOT NULL",
      dataTypeLength: "250",
    },
    {
      columnName: "program",
      dataType: "varchar",
      condition: "NOT NULL",
      dataTypeLength: "250",
    },
    {
      columnName: "ref",
      dataType: "varchar",
      condition: "NOT NULL",
      dataTypeLength: "250",
    }
  );
})();
