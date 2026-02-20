// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Dashboard() {
//   const [user, setUser] = useState(null);
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   // Form State
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [editingId, setEditingId] = useState(null);

//   const navigate = useNavigate();
//   const BASE_URL = "https://amazing-big-spider.ngrok-free.app";
//   const API_URL = `${BASE_URL}/posts`;
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const storedName = localStorage.getItem("userName");
//     if (storedName) {
//       setUser({ name: storedName });
//     }
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await fetch(API_URL, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "ngrok-skip-browser-warning": "true",
//         },
//       });
//       const data = await response.json();
//       setPosts(data);
//     } catch (error) {
//       console.log("Error fetching posts");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("content", content);
//     if (imageFile) {
//       formData.append("image", imageFile);
//     }

//     const method = editingId ? "PUT" : "POST";
//     const url = editingId ? `${API_URL}/${editingId}` : API_URL;

//     try {
//       const res = await fetch(url, {
//         method: method,
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });

//       if (res.ok) {
//         resetForm();
//         setIsFormOpen(false);
//         fetchPosts();
//       } else {
//         const errorData = await res.json();
//         console.error("Server rejected the data:", errorData);
//         alert("Failed to save. Check console for details.");
//       }
//     } catch (error) {
//       console.log("Error saving post");
//     }
//   };

//   const resetForm = () => {
//     setTitle("");
//     setContent("");
//     setImageFile(null);
//     setEditingId(null);
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <div style={styles.page}>
//       {/* 🔹 NAVBAR (COLORED) */}
//       <nav style={styles.navbar}>
//         <div style={styles.navContent}>
//           <h2 style={styles.logo}>
//             My <span>Dashboard</span>
//           </h2>
//           <div style={styles.navRight}>
//             <button
//               onClick={() => {
//                 resetForm();
//                 setIsFormOpen(!isFormOpen);
//               }}
//               style={styles.addBtn}
//             >
//               {isFormOpen ? "✕ Close" : "+ Create Post"}
//             </button>
//             <span style={styles.userName}>👋 {user?.name || "Somya"}</span>
//             <button onClick={handleLogout} style={styles.logoutBtn}>
//               Logout
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* 🔹 DROPDOWN FORM */}
//       <div
//         style={{
//           ...styles.formDropdown,
//           maxHeight: isFormOpen ? "600px" : "0px",
//           opacity: isFormOpen ? 1 : 0,
//           padding: isFormOpen ? "20px 0" : "0",
//         }}
//       >
//         <div style={styles.formCard}>
//           <h3 style={styles.formTitle}>
//             {editingId ? "Edit Post" : "New Post"}
//           </h3>
//           <form onSubmit={handleSubmit}>
//             <input
//               style={styles.input}
//               type="text"
//               placeholder="Title..."
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//             <textarea
//               style={styles.textarea}
//               placeholder="Write something..."
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               required
//             />

//             <div style={styles.fileInputWrapper}>
//               <label htmlFor="imageUpload" style={styles.fileLabel}>
//                 {imageFile ? `📷 ${imageFile.name}` : "Upload Image"}
//               </label>
//               <input
//                 id="imageUpload"
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => setImageFile(e.target.files[0])}
//                 style={styles.fileInputHidden}
//               />
//             </div>

//             <button type="submit" style={styles.submitBtn}>
//               {editingId ? "Update" : "Publish"}
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* 🔹 POST GRID */}
//       <div style={styles.main}>
//         {loading ? (
//           <p style={styles.loadingText}>Loading...</p>
//         ) : (
//           <div style={styles.grid}>
//             {posts.map((post) => {
//               const imgUrl = post.image_url?.startsWith("http")
//                 ? post.image_url
//                 : `${BASE_URL}${post.image_url}`;

//               return (
//                 <div key={post.id} className="card-hover" style={styles.card}>
//                   <div style={styles.imgWrapper}>
//                     <img
//                       src={imgUrl}
//                       style={styles.image}
//                       alt="post"
//                       onError={(e) =>
//                         (e.target.src =
//                           "https://via.placeholder.com/150?text=No+Image")
//                       }
//                     />
//                   </div>
//                   <div style={styles.cardBody}>
//                     <h4 style={styles.cardTitle}>{post.title}</h4>
//                     <p style={styles.cardText}>{post.content}</p>
//                     <div style={styles.cardActions}>
//                       <button
//                         onClick={() => {
//                           setEditingId(post.id);
//                           setTitle(post.title);
//                           setContent(post.content);
//                           setIsFormOpen(true);
//                           window.scrollTo({ top: 0, behavior: "smooth" });
//                         }}
//                         style={styles.editBtn}
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={async () => {
//                           if (window.confirm("Delete this post?")) {
//                             await axios(`${API_URL}/${post.id}`, {
//                               method: "DELETE",
//                               headers: { Authorization: `Bearer ${token}` },
//                             });
//                             fetchPosts();
//                           }
//                         }}
//                         style={styles.deleteBtn}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>

//       {/* Simple CSS for hover effects */}
//       <style>{`
//         .card-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
//         .card-hover:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
//         /* -------- RESPONSIVE FIX -------- */

//         @media (max-width: 768px) {
//           nav {
//             height: auto;
//           }

//           nav > div {
//             flex-direction: column;
//             align-items: flex-start;
//           }

//           nav button {
//             width: 100%;
//           }

//           .card-hover:hover {
//             transform: none;
//           }
//         }

//         @media (max-width: 480px) {
//           textarea {
//             height: 80px;
//           }

//           nav h2 {
//             font-size: 16px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// // // ---------------- STYLES ----------------
// const styles = {
//   page: {
//     background: "#ffffff", // ✅ WHITE BACKGROUND
//     minHeight: "100vh",
//     fontFamily: "'Segoe UI', Tahoma, sans-serif",
//     paddingBottom: "50px",
//     color: "#333",
//   },

//   navbar: {
//     // ✅ COLORED HEADER (Gradient moved here)
//     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     color: "white",
//     height: "70px",
//     display: "flex",
//     alignItems: "center",
//     position: "sticky",
//     top: 0,
//     zIndex: 100,
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//   },
//   // navContent: {
//   //   width: "100%",
//   //   maxWidth: "1200px",
//   //   margin: "0 auto",
//   //   display: "flex",
//   //   justifyContent: "space-between",
//   //   padding: "0 25px",
//   //   alignItems: "center",
//   // },
//   navContent: {
//     width: "100%",
//     maxWidth: "1200px",
//     margin: "0 auto",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "10px 15px",
//     flexWrap: "wrap", // ✅ already there
//     rowGap: "10px", // ✅ ADD
//   },

//   logo: { margin: 0, fontSize: "24px", fontWeight: "bold" },
//   // navRight: { display: "flex", alignItems: "center", gap: "15px" },
//   navRight: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     flexWrap: "wrap", // ✅ IMPORTANT3
//     width: "100%",
//   },

//   // Clean Buttons
//   addBtn: {
//     background: "white",
//     color: "#667eea",
//     border: "none",
//     padding: "8px 20px",
//     borderRadius: "20px",
//     cursor: "pointer",
//     fontWeight: "bold",
//     boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//   },
//   userName: { fontWeight: "600", fontSize: "15px", whiteSpace: "nowrap" },
//   logoutBtn: {
//     background: "transparent",
//     border: "1px solid rgba(255,255,255,0.6)",
//     padding: "6px 14px",
//     borderRadius: "20px",
//     color: "white",
//     cursor: "pointer",
//     fontSize: "13px",
//   },

//   // Form Styles
//   formDropdown: {
//     overflow: "hidden",
//     transition: "all 0.4s ease",
//     background: "#f9f9f9",
//   },
//   formCard: {
//     maxWidth: "500px",
//     margin: "0 auto",
//     padding: "30px",
//     background: "white",
//     borderRadius: "12px",
//     border: "1px solid #ddd",
//     boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
//   },
//   formTitle: {
//     margin: "0 0 15px 0",
//     color: "#333",
//     fontSize: "20px",
//     textAlign: "center",
//   },
//   input: {
//     width: "100%",
//     padding: "12px",
//     marginBottom: "15px",
//     borderRadius: "8px",
//     border: "1px solid #ddd",
//     outline: "none",
//     fontSize: "15px",
//   },
//   textarea: {
//     width: "100%",
//     padding: "12px",
//     height: "100px",
//     marginBottom: "15px",
//     borderRadius: "8px",
//     border: "1px solid #ddd",
//     outline: "none",
//     fontSize: "15px",
//     fontFamily: "inherit",
//   },
//   fileInputWrapper: { marginBottom: "15px", textAlign: "center" },
//   fileLabel: {
//     display: "inline-block",
//     padding: "8px 16px",
//     background: "#eee",
//     color: "#555",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "14px",
//   },
//   fileInputHidden: { display: "none" },
//   submitBtn: {
//     width: "100%",
//     padding: "12px",
//     background: "#667eea", // Matches header color
//     color: "white",
//     border: "none",
//     borderRadius: "8px",
//     fontWeight: "bold",
//     fontSize: "16px",
//     cursor: "pointer",
//   },

//   // Grid & Cards
//   main: { maxWidth: "1200px", margin: "40px auto", padding: "0 20px" },
//   loadingText: { textAlign: "center", color: "#666", fontSize: "18px" },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
//     gap: "25px",
//   },
//   // card: {
//   //   background: "white",
//   //   borderRadius: "12px",
//   //   boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//   //   border: "1px solid #eaeaea", // Light border for white bg
//   //   display: "flex",
//   //   flexDirection: "column",
//   //   overflow: "hidden",
//   // },
//   card: {
//     background: "white",
//     borderRadius: "12px",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//     border: "1px solid #eaeaea",
//     display: "flex",
//     flexDirection: "column",
//     overflow: "hidden",
//     minWidth: "0", // ✅ ADD
//   },

//   imgWrapper: {
//     height: "180px",
//     background: "#f0f0f0",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     overflow: "hidden",
//   },
//   image: { width: "100%", height: "100%", objectFit: "cover" },
//   cardBody: {
//     padding: "15px",
//     flexGrow: 1,
//     display: "flex",
//     flexDirection: "column",
//   },
//   cardTitle: {
//     margin: "0 0 5px 0",
//     fontSize: "17px",
//     fontWeight: "700",
//     color: "#222",
//   },
//   cardText: {
//     fontSize: "14px",
//     color: "#555",
//     marginBottom: "15px",
//     flexGrow: 1,
//     lineHeight: "1.4",
//   },

//   // Card Buttons
//   cardActions: {
//     display: "flex",
//     justifyContent: "space-between",
//     gap: "10px",
//     marginTop: "auto",
//   },
//   editBtn: {
//     flex: 1,
//     background: "#f0f0f0",
//     color: "#333",
//     border: "none",
//     padding: "8px",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontWeight: "bold",
//     fontSize: "13px",
//   },
//   deleteBtn: {
//     flex: 1,
//     background: "#fff0f0", // Very light red
//     color: "#d32f2f",
//     border: "none",
//     padding: "8px",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontWeight: "bold",
//     fontSize: "13px",
//   },
// };

// export default Dashboard;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [openCardMenu, setOpenCardMenu] = useState(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const navigate = useNavigate();
  const BASE_URL = "https://amazing-big-spider.ngrok-free.app";
  const API_URL = `${BASE_URL}/posts`;
  const token = localStorage.getItem("token");

  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name) setUser({ name });
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
      });
      setPosts(res.data);
    } catch (err) {
      alert("Error fetching posts");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setImageFile(null);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", title);
    fd.append("content", content);
    if (imageFile) fd.append("image", imageFile);

    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, fd, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Post updated successfully ✅");
      } else {
        await axios.post(API_URL, fd, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Post created successfully ✅");
      }

      resetForm();
      setIsFormOpen(false);
      fetchPosts();
    } catch (err) {
      alert("Something went wrong ❌");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Post deleted successfully 🗑️");
      fetchPosts();
    } catch (err) {
      alert("Delete failed ❌");
    }
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setTitle(post.title);
    setContent(post.content);
    setIsFormOpen(true);
    setOpenCardMenu(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
            D
          </div> */}
          <h2 className="text-xl font-bold">My Dashboard</h2>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="bg-white text-indigo-600 px-4 py-1.5 rounded font-bold ml-3"
            >
              + Create Post
            </button>
            <span className="text-md font-semibold">👋 Hii {user?.name}</span>
            <button
              onClick={handleLogout}
              className="border border-white px-5 py-1.5 rounded text-sm font-bold ml-2.5"
            >
              Logout
            </button>
          </div>

          {/* Mobile menu */}
          <div className="sm:hidden relative">
            <button
              onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
              className="text-2xl"
            >
              ⋮
            </button>

            {isNavMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-md">
                <button
                  onClick={() => {
                    setIsFormOpen(true);
                    setIsNavMenuOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Create Post
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* FORM */}
      {isFormOpen && (
        <div className="bg-white shadow-md">
          <div className="max-w-md mx-auto p-4">
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                className="w-full border p-2 rounded"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <textarea
                className="w-full border p-2 rounded h-24"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
              <input
                type="file"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
              <button className="w-full bg-indigo-600 text-white py-2 rounded">
                {editingId ? "Update" : "Publish"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* POSTS */}
      <div className="max-w-6xl mx-auto p-4">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
              const imgUrl = post.image_url?.startsWith("http")
                ? post.image_url
                : `${BASE_URL}${post.image_url}`;

              return (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow relative"
                >
                  {/* Mobile 3-dot */}
                  <div className="absolute top-2 right-2 sm:hidden">
                    <button onClick={() => setOpenCardMenu(post.id)}>⋮</button>
                    {openCardMenu === post.id && (
                      <div className="absolute right-0 mt-2 bg-white shadow rounded w-28">
                        <button
                          onClick={() => handleEdit(post)}
                          className="block w-full px-3 py-2 hover:bg-gray-100"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="block w-full px-3 py-2 text-red-600 hover:bg-gray-100"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>

                  <img
                    src={imgUrl}
                    className="h-44 w-full object-cover rounded-t-xl"
                  />
                  <div className="p-4">
                    <h4 className="font-bold">{post.title}</h4>
                    <p className="text-sm text-gray-600">{post.content}</p>

                    {/* Desktop buttons */}
                    <div className="hidden sm:flex gap-2 mt-4">
                      <button
                        onClick={() => handleEdit(post)}
                        className="flex-1 bg-gray-200 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="flex-1 bg-red-100 text-red-600 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
