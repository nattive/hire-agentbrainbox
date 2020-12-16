import React, { Component } from 'react'
import { connect } from 'react-redux'
import DataTable from "react-data-table-component";
const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];
const columns = [
  {
    name: "Agency",
    selector: "title",
    sortable: true,
  },
  {
    name: "Agent",
    selector: "Agent",
    sortable: true,
    right: true,
  },
  {
    name: "Reply",
    selector: "Reply",
    sortable: true,
    right: true,
  },
   {
    name: "Agent Status",
    selector: "Agent_status",
    sortable: true,
    right: true,
  },
  {
    name: "Date",
    selector: "Date",
    sortable: true,
    right: true,
  },
];
export const AllRequests = () => {
    return (
      <div className="container">
        <DataTable
          selectableRows // add for checkbox selection
          Clicked
          onRowClicked={() => console.log("satte")}
          title="Agency Availabily Reqiests"
          columns={columns}
          data={[]}
          pointerOnHover
          responsive
          striped
          highlightOnHover
        />
      </div>
    );
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRequests)
