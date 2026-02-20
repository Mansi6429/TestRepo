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
  const loggedUser = localStorage.getItem("userName");

  useEffect(() => {
    if (loggedUser) setUser({ name: loggedUser });
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
    } catch {
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
        alert("Post updated ✅");
      } else {
        await axios.post(API_URL, fd, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Post created ✅");
      }

      resetForm();
      setIsFormOpen(false);
      fetchPosts();
    } catch {
      alert("Something went wrong ❌");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this post?")) return;

    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchPosts();
    } catch {
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
      {/* <nav className="sticky top-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white"> */}
      <nav className="sticky top-0 h-25 bg-gradient-to-r from-indigo-500 to-purple-600 text-white z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between">
          <h2 className="text-3xl font-bold p-5">My Dashboard</h2>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="bg-white text-indigo-600 px-4 py-1.5 rounded font-bold text-xl"
            >
              + Create Post
            </button>
            <span className="font-semibold p-2 text-xl">
              👋 Hii, {user?.name}
            </span>
            <button
              onClick={handleLogout}
              className="border px-4 py-1 rounded text-xl"
            >
              Logout
            </button>
          </div>

          <div className="sm:hidden relative">
            <button onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}>⋮</button>
            {isNavMenuOpen && (
              <div className="absolute right-0 bg-white text-black rounded shadow">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="block px-4 py-2"
                >
                  Create Post
                </button>
                <button onClick={handleLogout} className="block px-4 py-2">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* FORM */}
      {isFormOpen && (
        <div className="bg-white shadow">
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
                className="w-full border p-2 rounded"
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
              const isOwner = post.user?.name === loggedUser;
              const imgUrl = post.image_url?.startsWith("http")
                ? post.image_url
                : `${BASE_URL}${post.image_url}`;

              return (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow relative"
                >
                  {/* 3 DOT — ONLY OWNER */}
                  {isOwner && (
                    <div className="absolute top-2 right-2 sm:hidden">
                      <button onClick={() => setOpenCardMenu(post.id)}>
                        ⋮
                      </button>
                      {openCardMenu === post.id && (
                        <div className="absolute right-0 bg-white shadow rounded">
                          <button
                            onClick={() => handleEdit(post)}
                            className="block px-3 py-2"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="block px-3 py-2 text-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  <img
                    src={imgUrl}
                    className="h-44 w-full object-cover rounded-t-xl"
                  />
                  <div className="p-4">
                    <h4 className="font-bold">{post.title}</h4>
                    <p className="text-sm text-gray-600">{post.content}</p>

                    {/* DESKTOP BUTTONS — ONLY OWNER */}
                    {isOwner && (
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
                    )}
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
