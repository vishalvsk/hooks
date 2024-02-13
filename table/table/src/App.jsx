import { useEffect, useState } from "react";
import "./App.css";
import UserData from "./components/UserData";

function App() {
  const [user, setUser] = useState([]);
  const API = "https://jsonplaceholder.typicode.com/users";

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUser(data);
      }

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Username</th>
          <th>City</th>
          <th>street</th>
          <th>suite</th>
          <th>zip Code</th>
          <th>company name</th>
          <th>comapny catchPhrase</th>
          <th>comapny bs</th>
        </thead>
        <tbody>
          <UserData user={user} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
