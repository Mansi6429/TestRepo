import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login() {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState("");

  // ✅ Formik validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // ✅ Formik submit
  const handleLogin = async (values, { setSubmitting }) => {
    setApiError("");

    try {
      const response = await axios.post(
        "https://amazing-big-spider.ngrok-free.app/login",
        values,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", response.data.user.name);

        navigate("/dashboard");
      }
    } catch (error) {
      setApiError("Invalid email or password");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={styles.pageBackground}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form>
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
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>

        {/* ✅ API ERROR DIV */}
        {apiError && <div style={styles.apiError}>{apiError}</div>}

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

/* ================= STYLES ================= */

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
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  inputGroup: {
    textAlign: "left",
    marginBottom: "15px",
  },
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
  },
};

export default Login;
