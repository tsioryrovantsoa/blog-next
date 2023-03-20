import React from "react";
import Table from "react-bootstrap/Table";

export default function index({ users }) {
  const displaydata = users.map((item) => {
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.address.street}</td>
      </tr>
    );
  });

  return (
    <div className="pd-top-80 pd-bottom-50" id="grid">
      <div className="container">
        <div className="section-title">
          <h6 className="title">Membres</h6>
        </div>
        <div className="row">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Username</th>
                <th>E-mail</th>
                <th>Phone</th>
                <th>Addresse</th>
              </tr>
            </thead>
            <tbody>{displaydata}</tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  return {
    props: {
      users,
    },
  };
}
