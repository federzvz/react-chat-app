import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../services/firebase";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { AuthContext } from "../context/auth";
import { useNavigate  } from "react-router-dom";

const Navbar = () => {
  const history = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSignout = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);
    history("/login", { replace: true })
  };
  return (
    <nav>
      <h3>
        <Link to="/">Feder Messenger</Link>
      </h3>
      <div>
        {user ? (
          <>
            <Link to="/profile">Perfil</Link>
            <button className="btn" onClick={handleSignout}>
              Cerar Sesión
            </button>
          </>
        ) : (
          <>
            <Link to="/register">Registrarse</Link>
            <Link to="/login">Iniciar Sesión</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;