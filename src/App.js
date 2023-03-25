import Header from "./components/shared/Header/Header";
import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUSer] = useState({
    id: null,
    name: null,
    surname: null,
    course: null,
  });
  const [nameErr, setNameErr] = useState(false);
  const [surnameErr, setSnameError] = useState(false);
  const [courseErr, setCourseErr] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [course, setCourse] = useState("");
  const [userList, setUserList] = useState([]);

  const addUser = (event) => {
    event.preventDefault();
    if (name && surname && course) {
      setUSer({
        id: `${Date.now()}${Math.floor(Math.random() * 1000)}`,
        name,
        surname,
        course,
      });
      setUserList([
        ...userList,
        {
          id: `${Date.now()}${Math.floor(Math.random() * 1000)}`,
          name,
          surname,
          course,
        },
      ]);
      setName("");
      setSurname("");
      setCourse("");
    } else {
      !name && setNameErr(true);
      !surname && setSnameError(true);
      !course && setCourseErr(true);
    }
  };

  const deleteUser = (id) => {
    setUserList((previousList) =>
      previousList.filter((user) => user.id !== id)
    );
  };

  return (
    <div className="app flex-items-column">
      <Header logotitle="Title" prop="Emirhan" />
      <form action="" className="form-container flex-items-column">
        <label htmlFor="name">Adınız:</label>
        <input
          type="text"
          id="name"
          onChange={(event) => {
            setName(event.target.value);
            name && setNameErr(false);
          }}
          value={name}
        />
        {nameErr && <p>Bu alan boş bırakılamaz</p>}

        <label htmlFor="surname">Soyadınız:</label>
        <input
          type="text"
          id="surname"
          onChange={(event) => {
            setSurname(event.target.value);
            surname && setSnameError(false);
          }}
          value={surname}
        />
        {surnameErr && <p>Bu alan boş bırakılamaz</p>}

        <label htmlFor="course">Eğitim:</label>
        <input
          type="text"
          id="course"
          onChange={(event) => {
            setCourse(event.target.value);
            course && setCourseErr(false);
          }}
          value={course}
        />

        {courseErr && <p>Bu alan boş bırakılamaz</p>}

        <input
          type="submit"
          className="btn btn-primary"
          value="Create User"
          onClick={addUser}
        />
      </form>
      <div className="card-list">
        {userList.length !== 0 &&
          userList.map((user) => (
            <ul className="user-card" key={user.id}>
              <li className="deleteBtn">
                <span onClick={() => deleteUser(user.id)}>x</span>
              </li>
              <li>{user.name}</li>
              <li>{user.surname}</li>
              <li>{user.course}</li>
            </ul>
          ))}
      </div>
    </div>
  );
}

export default App;
