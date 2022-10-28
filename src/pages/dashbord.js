import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Dashbord() {
  const navigate = useNavigate();
  // const[checked, setChecked]=(false)

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("info")));

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const [selectedrecord, setSelectedrecord] = useState([]);

  const [duplicate, setDuplicate] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const deleteRecord = (index) => {
    /* const currentuser = data.splice(index, 1);*/
    data.splice(index, 1);
    setData(
      localStorage.setItem("data", JSON.stringify([...data])) || [...data]
    );
  };

  const logout = () => {
    const logoutuser = data[data.length - 1];
    console.log(logoutuser);

    data.splice(data.length - 1, 1);

    // setUser(localStorage.removeItem("info", JSON.stringify(user)))
    navigate("/");
  };

  const handleSearch = (e) => {
    const value = e.target.value;

    if (!value) {
      setData(duplicate);
      return;
    }

    const update = data.filter((item) => {
      return item.uname?.toLowerCase().includes(value?.toLowerCase());
    });
    setData(update);
  };

  const handleChange = (e, id) => {
    const { name, checked } = e.target;

    if (name === "allselect") {
      const updated1 = data.map((value) => {
        return {
          ...value,
          isChecked: checked,
        };
      });

      setData(updated1);
    } else {
      const updated = data.map((value) => {
        if (value.id === id) {
          return {
            ...value,
            isChecked: checked,
          };
        }

        // console.log(value)

        return value;
      });

      setData(updated);

      setSelectedrecord(updated.filter((value) => value.isChecked));
      console.log(updated.filter((value) => value.isChecked));
    }
  };

  const deleteSelected = () => {
    const checkedrecord = data.filter((value) => !value?.isChecked);
    setData(checkedrecord);
  };

  return (
    <div className="App">
      <h1>{user.uname} has been logged in successfully</h1>
      <h1>Table data</h1>

      <label htmlFor="search">Search record:</label>
      <input
        type="text"
        className="search"
        onKeyUp={(e) => handleSearch(e)}
      ></input>
      <div className="btn">
        <button
          onClick={deleteSelected}
          disabled={!data.some((value) => value?.isChecked)}
        >
          Delete records
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <td>
              <input
                type="checkbox"
                name="allselect"
                checked={data.every((value) => value?.isChecked)}
                onChange={handleChange}
              />
              selectALL
            </td>
            <td>Username</td>
            <td>Email</td>
            <td>password</td>
            <td>gender</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {data.map((item, id) => (
            <tr key={id}>
              <td>
                <input
                  type="checkbox"
                  name={item.uname}
                  checked={item?.isChecked || false}
                  onChange={(e) => handleChange(e, item.id)}
                ></input>
              </td>

              <td>{item.uname}</td>

              <td>{item.email}</td>
              <td>{item.pswd}</td>
              <td>{item.gender}</td>
              <td>
                <button className="button-86" onClick={deleteRecord}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
