  
import React from "react";

const Item = (props) => {
  function makeEmailAddress(props) {
    var employeeName = props.employee_name.toLowerCase().split(" ");
    var EmailAddress = `${employeeName[0]}.${employeeName[1]}@company.com`;
    return EmailAddress;
  }

  function makePhoneNumber() {
    var fragment1 = Math.floor(Math.random() * 800 + 200);
    var fragment2 = Math.floor(Math.random() * 1000);
    var fragment3 = Math.floor(Math.random() * 10000);
    var PhoneNumber = `(${fragment1}) ${fragment2}-${fragment3}`;
    return PhoneNumber;
  }

  return (
    <div className="row item-row">
      <div className="col-sm-1">{props.id}</div>
      <div className="col-md-3">{props.employee_name}</div>
      <div className="col-md-5">{makeEmailAddress(props)}</div>
      <div className="col-md-2">{makePhoneNumber()}</div>
      <div className="col-sm-1">{props.employee_age}</div>
    </div>
  );
};

export default Item;