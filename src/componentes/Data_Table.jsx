import React, { useState } from "react";
import DataTable from "react-data-table-component";

const Data_Table = () => {
  const colloms = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
  ];
  const data = [
    {
      name: "John",
      email: "john@example.com",
      age: 19,
    },
    {
      name: "Joy",
      email: "joy@example.com",
      age: 25,
    },
    {
      name: "Anik",
      email: "anik@example.com",
      age: 30,
    },
    {
      name: "Somiron",
      email: "somiron@example.com",
      age: 60,
    },
    {
      name: "Lipon",
      email: "lipon@example.com",
      age: 30,
    },
    {
      name: "Masud",
      email: "masud@example.com",
      age: 35,
    },
    {
      name: "Avi",
      email: "avi@example.com",
      age: 33,
    },
    {
      name: "Anik",
      email: "anik@example.com",
      age: 30,
    },
    {
      name: "Samir",
      email: "samir@example.com",
      age: 32,
    },
    {
      name: "Hamid",
      email: "hamid@example.com",
      age: 50,
    },
    {
      name: "bz",
      email: "ns@example.com",
      age: 30,
    },
    {
      name: "naj",
      email: "bha@example.com",
      age: 80,
    },
    {
      name: "ndsj",
      email: "nsjd@example.com",
      age: 30,
    },
    {
      name: "Kabbo",
      email: "kabbo@example.com",
      age: 20,
    },
    {
      name: "Pritam",
      email: "pritam@example.com",
      age: 70,
    },
    {
      name: "Nayon",
      email: "nayon@example.com",
      age: 90,
    },
    {
      name: "Anik",
      email: "anik@example.com",
      age: 30,
    },
    {
      name: "Alip",
      email: "alip@example.com",
      age: 10,
    },
  ];
  const [records, setRecords] = useState(data);
  function handleFilter(e) {
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(newData);
  }
  return (
    <div className="container">
      <div className="text-end">
        <input type="text" onChange={handleFilter} />
      </div>
      <DataTable
        columns={colloms}
        data={records}
        selectableRows
        fixedHeader
        pagination
      ></DataTable>
    </div>
  );
};

export default Data_Table;
