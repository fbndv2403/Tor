import { useState } from "react";

export default function Form() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ user, password });
    setUser("");
    setPassword("");
  };

  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User:
        <input type="text" onChange={handleChangeUser} value={user} autoFocus />
      </label>
      <label>
        Password:
        <input type="text" onChange={handleChangePassword} value={password} />
      </label>
      <input type="submit" value="Enter" />
    </form>
  );
}
