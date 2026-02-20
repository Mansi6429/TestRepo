// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// function Signup() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [status, setStatus] = useState("idle");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setStatus("loading");

//     try {
//       const response = await fetch(
//         "https://amazing-big-spider.ngrok-free.app/signup",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ user: formData }), // Sending as { user: { name, email... } }
//         }
//       );

//       if (response.ok) {
//         setStatus("success");
//         // Wait 1.5 seconds so they see the success message, then move to login
//         setTimeout(() => navigate("/login"), 1500);
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
//         <h2 style={styles.title}>Join Us Today</h2>
//         <form onSubmit={handleSignup}>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Full Name</label>
//             <input
//               style={styles.input}
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Email</label>
//             <input
//               style={styles.input}
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Password</label>
//             <input
//               style={styles.input}
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={status === "loading"}
//             style={styles.button}
//           >
//             {status === "loading" ? "Processing..." : "Sign Up"}
//           </button>
//         </form>
//         {status === "success" && (
//           <p style={{ color: "#2ecc71", marginTop: "10px" }}>
//             ✨ Account created! Redirecting...
//           </p>
//         )}
//         {status === "error" && (
//           <p style={{ color: "#e74c3c", marginTop: "10px" }}>
//             ❌ Error creating account.
//           </p>
//         )}
//         <p style={{ marginTop: "15px", fontSize: "14px" }}>
//           Already have an account?{" "}
//           <Link to="/login" style={{ color: "#764ba2", fontWeight: "bold" }}>
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// // --- COLORFUL STYLES ---
// const styles = {
//   pageBackground: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "100vh",
//     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Vibrant Purple/Blue Gradient
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     padding: "40px",
//     borderRadius: "15px",
//     boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
//     width: "100%",
//     maxWidth: "400px",
//     textAlign: "center",
//   },
//   title: {
//     margin: "0 0 10px 0",
//     color: "#333",
//     fontSize: "28px",
//   },
//   subtitle: {
//     color: "#666",
//     marginBottom: "30px",
//     fontSize: "14px",
//   },
//   inputGroup: {
//     textAlign: "left",
//     marginBottom: "20px",
//   },
//   label: {
//     display: "block",
//     marginBottom: "8px",
//     fontWeight: "600",
//     color: "#555",
//     fontSize: "14px",
//   },
//   input: {
//     width: "100%",
//     padding: "12px 15px",
//     borderRadius: "8px",
//     border: "1px solid #ddd",
//     fontSize: "16px",
//     boxSizing: "border-box", // Prevents input from overflowing
//     outline: "none",
//     transition: "border-color 0.3s",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     border: "none",
//     borderRadius: "8px",
//     background: "linear-gradient(to right, #ff416c, #ff4b2b)", // Vibrant Red/Orange Gradient
//     color: "white",
//     fontSize: "16px",
//     fontWeight: "bold",
//     cursor: "pointer",
//     marginTop: "10px",
//     transition: "transform 0.2s",
//   },
//   successMsg: { color: "#2ecc71", marginTop: "15px", fontWeight: "500" },
//   errorMsg: { color: "#e74c3c", marginTop: "15px", fontWeight: "500" },
// };

// export default Signup;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(
        "https://amazing-big-spider.ngrok-free.app/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify({ user: formData }),
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setStatus("success");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div style={styles.pageBackground}>
      <div style={styles.card}>
        <h2 style={styles.title}>Join Us Today</h2>

        <form onSubmit={handleSignup}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              style={styles.input}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              style={styles.input}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" style={styles.button}>
            {status === "loading" ? "Processing..." : "Sign Up"}
          </button>
        </form>

        {status === "success" && (
          <p style={{ color: "#2ecc71", marginTop: "10px" }}>
            ✨ Account created! Redirecting...
          </p>
        )}

        {status === "error" && (
          <p style={{ color: "#e74c3c", marginTop: "10px" }}>
            ❌ Error creating account.
          </p>
        )}

        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#764ba2", fontWeight: "bold" }}>
            Login
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
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  title: { marginBottom: "10px", color: "#333", fontSize: "28px" },
  inputGroup: { textAlign: "left", marginBottom: "20px" },
  label: { marginBottom: "8px", fontWeight: "600", fontSize: "14px" },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(to right, #ff416c, #ff4b2b)",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Signup;
