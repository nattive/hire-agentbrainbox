import React, { Component } from "react";
import { connect } from "react-redux";
import DataTable from "react-data-table-component";
import { getAllMessages } from "../../Actions/chatAction";
import { useEffect } from "react";
import { useState } from "react";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
const data = [{ id: 1, title: "Conan the Barbarian", year: "1982" }];
const columns = [
  {
    name: "Date",
    width: "5px",
    selector: "date",
    sortable: false,
  },
  {
    name: "Subject",
    selector: "subject",
    sortable: true,
  },
  {
    name: "message",
    selector: "message",
    sortable: false,
  },
];
const conditionalRowStyles = [
  {
    when: (row) => row.isRead === false || 0,
    style: { fontWeight: "bold" },
  },
];
const AllMessage = (props) => {
  const {url} = useRouteMatch()
  const handleRowclick = (message) => {
    console.log(message);
    props.history.push(`${url}/${message.id}`);
  }

  const [messagesArray, setMessagesArray] = useState([]);
  useEffect(() => {
    let messages = [];
    props.messages.forEach((message) => {
      messages.push({
        id: message.id,
        sender_id: message.user.id,
        sender_data: message.user,
        message: message.message,
        subject: message.subject,
        date: message.date,
        isRead: message.isRead === 0 ? false : true,
      });
    });
    setMessagesArray(messages);
  }, [props.messages]);
  useEffect(() => {
    props.getAllMessages();
  }, []);
  return (
    <div className="container">
      <DataTable
        selectableRows // add for checkbox selection
        Clicked
        onRowClicked={handleRowclick}
        title="All Messages"
        columns={columns}
        data={messagesArray}
        pointerOnHover
        responsive
        striped
        highlightOnHover
        conditionalRowStyles={conditionalRowStyles}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
  messageError: state.chat.messageError,
  gettingChats: state.chat.gettingChats,
});

const mapDispatchToProps = {
  getAllMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMessage);
