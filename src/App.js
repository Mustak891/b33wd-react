import "./App.css";

export default function Appbox() {

  return (
    <div className="box_1" >
      <form>

        <div class="container">
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <button type="submit">Login</button>
        </div>

      </form>
    </div>
  )
}

