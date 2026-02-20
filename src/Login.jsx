// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();
//   const [loginData, setLoginData] = useState({ email: "", password: "" });
//   const [status, setStatus] = useState("idle");
//   // const axios = require("axios");

//   // console.log(axios.isCancel("something"));

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setStatus("loading");

//     try {
//       const response = await axios.post(
//         "https://amazing-big-spider.ngrok-free.app/login",
//         loginData,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       console.log(response);

//       // const data = await response.json();

//       if (response.status === 200) {
//         // --- CRITICAL CHANGE: SAVING THE TOKEN ---
//         localStorage.setItem("token", response.data.token); // Store the JWT
//         localStorage.setItem("userName", response.data.user.name); // Store name for display

//         setStatus("success");
//         setTimeout(() => navigate("/dashboard"), 1000);
//       } else {
//         setStatus("error");
//       }
//     } catch (error) {
//       setStatus("error");
//     }
//   };

//   return (
//     <div style={styles.pageBackground}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>Welcome Back</h2>
//         <form onSubmit={handleLogin}>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Email</label>
//             <input
//               style={styles.input}
//               type="email"
//               name="email"
//               value={loginData.email}
//               onChange={(e) =>
//                 setLoginData({ ...loginData, email: e.target.value })
//               }
//               required
//             />
//           </div>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Password</label>
//             <input
//               style={styles.input}
//               type="password"
//               name="password"
//               value={loginData.password}
//               onChange={(e) =>
//                 setLoginData({ ...loginData, password: e.target.value })
//               }
//               required
//             />
//           </div>
//           <button type="submit" style={styles.button}>
//             Login
//           </button>
//         </form>
//         {status === "error" && (
//           <p style={{ color: "red" }}>Invalid Credentials</p>
//         )}
//       </div>
//     </div>
//   );
// }

// // SHARED STYLES (Use these in both files)
// const styles = {
//   pageBackground: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "100vh",
//     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     fontFamily: "sans-serif",
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: "40px",
//     borderRadius: "15px",
//     boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
//     width: "100%",
//     maxWidth: "350px",
//     textAlign: "center",
//   },
//   title: { marginBottom: "20px", color: "#333" },
//   inputGroup: { textAlign: "left", marginBottom: "15px" },
//   label: {
//     display: "block",
//     marginBottom: "5px",
//     fontWeight: "bold",
//     fontSize: "14px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ddd",
//     boxSizing: "border-box",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     borderRadius: "8px",
//     border: "none",
//     background: "linear-gradient(to right, #ff416c, #ff4b2b)",
//     color: "white",
//     fontWeight: "bold",
//     cursor: "pointer",
//     marginTop: "10px",
//   },
// };

// export default Login;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("idle");

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await axios.post(
        "https://amazing-big-spider.ngrok-free.app/login",
        loginData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", response.data.user.name);

        setStatus("success");
        setTimeout(() => navigate("/dashboard"), 1000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div style={styles.pageBackground}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>

        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              style={styles.input}
              type="email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              style={styles.input}
              type="password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
          </div>

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        {status === "error" && (
          <p style={{ color: "red", marginTop: "10px" }}>Invalid Credentials</p>
        )}

        {/* ✅ SIGNUP LINK ADDED */}
        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Don’t have an account?{" "}
          <Link to="/signup" style={{ color: "#764ba2", fontWeight: "bold" }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  pageBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    fontFamily: "sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    width: "100%",
    maxWidth: "350px",
    textAlign: "center",
  },
  title: { marginBottom: "20px", color: "#333" },
  inputGroup: { textAlign: "left", marginBottom: "15px" },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(to right, #ff416c, #ff4b2b)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Login;
