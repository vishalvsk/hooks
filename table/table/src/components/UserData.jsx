import React from "react";
import "./UserData.css";

export default function UserData({ user }) {
  return (
    <div>
      {user.map((curUser) => {
        const { id, name, email, phone, username } = curUser;
        const { address } = curUser;
        const { company } = curUser;
        return (
          <tr>
            <div className="mini">
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{username}</td>
              <td>{address.city}</td>
              <td>{address.street}</td>
              <td>{address.suite}</td>
              <td>{address.zipcode}</td>
              <td>{company.name}</td>
              <td>{company.catchPhrase}</td>
              <td>{company.bs}</td>
            </div>
          </tr>
        );
      })}
    </div>
  );
}
