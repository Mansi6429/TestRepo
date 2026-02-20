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
//           // body: JSON.stringify({ user: formData }),
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await response.json();
//       if (response.ok) {
//         setStatus("success");
//         setTimeout(() => navigate("/login"), 1500);
//       } else {
//         setStatus("error");
//       }
//     } catch {
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

//           <button type="submit" style={styles.button}>
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

// const styles = {
//   pageBackground: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "100vh",
//     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
//   title: { marginBottom: "10px", color: "#333", fontSize: "28px" },
//   inputGroup: { textAlign: "left", marginBottom: "20px" },
//   label: { marginBottom: "8px", fontWeight: "600", fontSize: "14px" },
//   input: {
//     width: "100%",
//     padding: "12px",
//     borderRadius: "8px",
//     border: "1px solid #ddd",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     borderRadius: "8px",
//     border: "none",
//     background: "linear-gradient(to right, #ff416c, #ff4b2b)",
//     color: "white",
//     fontSize: "16px",
//     fontWeight: "bold",
//     cursor: "pointer",
//   },
// };

// export default Signup;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Signup() {
  const navigate = useNavigate();
  const [apiErrors, setApiErrors] = useState([]);

  // ✅ validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // ✅ submit handler
  const handleSignup = async (values, { setSubmitting }) => {
    setApiErrors([]);

    try {
      const response = await fetch(
        "https://amazing-big-spider.ngrok-free.app/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user: values }), // 🔥 correct backend format
        }
      );

      const data = await response.json();

      if (response.ok) {
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setApiErrors(data.errors || ["Error creating account"]);
      }
    } catch {
      setApiErrors(["Server error. Please try again later."]);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={styles.pageBackground}>
      <div style={styles.card}>
        <h2 style={styles.title}>Join Us Today</h2>

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSignup}
        >
          {({ isSubmitting }) => (
            <Form>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Full Name</label>
                <Field style={styles.input} type="text" name="name" />
                <ErrorMessage
                  name="name"
                  component="div"
                  style={styles.fieldError}
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Email</label>
                <Field style={styles.input} type="email" name="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={styles.fieldError}
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Password</label>
                <Field style={styles.input} type="password" name="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  style={styles.fieldError}
                />
              </div>

              <button
                type="submit"
                style={styles.button}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>

        {/* ✅ BACKEND ERRORS */}
        {apiErrors.length > 0 && (
          <div style={styles.apiError}>
            {apiErrors.map((err, i) => (
              <div key={i}>• {err}</div>
            ))}
          </div>
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

/* ================= STYLES ================= */

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
  title: {
    marginBottom: "10px",
    color: "#333",
    fontSize: "28px",
  },
  inputGroup: {
    textAlign: "left",
    marginBottom: "20px",
  },
  label: {
    marginBottom: "8px",
    fontWeight: "600",
    fontSize: "14px",
  },
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
  fieldError: {
    color: "#e74c3c",
    fontSize: "12px",
    marginTop: "4px",
  },
  apiError: {
    background: "#ffe6e6",
    color: "#e74c3c",
    padding: "10px",
    borderRadius: "8px",
    marginTop: "15px",
    fontSize: "14px",
    textAlign: "left",
  },
};

export default Signup;
