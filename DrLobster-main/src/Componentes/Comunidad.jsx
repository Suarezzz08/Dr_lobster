import React, { useState } from "react";

// Simulamos datos de ejemplo
const initialPosts = [
  {
    id: 1,
    author: "Johnny Melo lavo",
    content: "¡Bienvenidos a la comunidad!",
    comments: ["¡Gracias!", "Encantado de estar aquí."]
  },
  {
    id: 2,
    author: "Armando Casas",
    content: "¿Qué opinan del sexo?",
    comments: ["Es muy útil.", "No me gusta."]
  }
];

const Community = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newPostContent, setNewPostContent] = useState("");

  const handleNewPost = () => {
    if (newPostContent.trim()) {
      const newPost = {
        id: posts.length + 1,
        author: "Usuario Anónimo",
        content: newPostContent,
        comments: []
      };
      setPosts([...posts, newPost]);
      setNewPostContent("");
    }
  };

  const handleAddComment = (postId, comment) => {
    setPosts(
      posts.map(post => 
        post.id === postId 
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <div>
      <h2>Comunidad</h2>

      {/* Formulario para nueva publicación */}
      <div>
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="Escribe algo..."
        />
        <button onClick={handleNewPost}>Publicar</button>
      </div>

      {/* Lista de publicaciones */}
      <div>
        {posts.map(post => (
          <div key={post.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h4>{post.author}</h4>
            <p>{post.content}</p>

            {/* Comentarios */}
            <div>
              {post.comments.length > 0 && (
                <div>
                  <h5>Comentarios:</h5>
                  <ul>
                    {post.comments.map((comment, index) => (
                      <li key={index}>{comment}</li>
                    ))}
                  </ul>
                </div>
              )}
              <CommentForm postId={post.id} onAddComment={handleAddComment} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente para el formulario de comentarios
const CommentForm = ({ postId, onAddComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (comment.trim()) {
      onAddComment(postId, comment);
      setComment("");
    }
  };

  return (
    <div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Escribe un comentario..."
      />
      <button onClick={handleSubmit}>Comentar</button>
    </div>
  );
};

export default Community;

