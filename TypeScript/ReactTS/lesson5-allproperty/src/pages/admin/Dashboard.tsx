import { Button } from "react-bootstrap";
import React from "react";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import DashboardItem from "../../components/DashboardItem";
import { LinkContainer } from "react-router-bootstrap";
const Dashboard = (props:any) => {
  return (
    <>
      <h1 className="text-center my-5">Admin Panel</h1>
      <LinkContainer to="/add">
      <Button variant="primary" className="mb-4">Add</Button>
      </LinkContainer>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {props.pvalue.map((item:any, i:number) => {
           return <DashboardItem
              key={i}
              title={item.title}
              desc={item.desc}
              photo={item.img}
              count={i}
              id={item.id}
            />;
          })}
        </tbody>
      </Table>
    </>
  );
};

const mapStateToProps = (state:string[]) => {
  return {
    pvalue: state,
  };
};

export default connect(mapStateToProps)(Dashboard);
