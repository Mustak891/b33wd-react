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

function Detail({ name, packages, singleuser, storage, projects, access, privates, dedicated, subdomain, monthly }) {
  return (
    <div className="numbox">
      <div>
        <h3 className="nametop">{name}</h3>
      </div>
      <div>
        <h1 className="namebottom">{packages}<span className="month">/month</span></h1>
      </div>
      <div>
        <h3> {singleuser}</h3>x
      </div>
      <div>
        <h3>{storage}</h3>
      </div>
      <div>
        <h3>{projects}</h3>
      </div>
      <div>
        <h3>{access}</h3>
      </div>
      <div>
        <h3>{privates}</h3>
      </div>
      <div>
        <h3>{dedicated}</h3>
      </div>
      <div>
        <h3>{subdomain}</h3>
      </div>
      <div>
        <h3>{monthly}</h3>
      </div>
      <div>
        <button className="button">Button</button>
      </div>
    </div>
  )
}
