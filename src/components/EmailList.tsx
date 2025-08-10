import React, { useState } from "react";

interface EmailListProps {
  open: boolean;
  onClose: () => void;
}

const EmailList: React.FC<EmailListProps> = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(30, 41, 59, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose} // close when clicking overlay
    >
      <div
        style={{
          background: "white",
          padding: "2.5rem 2rem 2rem 2rem",
          borderRadius: "24px",
          boxShadow: "0 8px 32px rgba(30,41,59,0.18)",
          minWidth: "350px",
          maxWidth: "90vw",
          textAlign: "center",
          position: "relative",
          border: "none",
        }}
        onClick={e => e.stopPropagation()} // prevent closing when clicking inside modal
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "transparent",
            color: "#64748b",
            border: "none",
            borderRadius: "50%",
            width: "2.5rem",
            height: "2.5rem",
            fontSize: "1.5rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s",
          }}
          aria-label="Close"
        >
          <svg width="24" height="24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="6" y1="6" x2="18" y2="18"/>
            <line x1="6" y1="18" x2="18" y2="6"/>
          </svg>
        </button>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <h2 style={{ marginBottom: "1rem", fontWeight: 600 }}>Join our email list</h2>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{
          width: "100%",
          padding: "0.75rem",
          borderRadius: "8px",
          border: "1px solid #cbd5e1",
          marginBottom: "1rem",
          fontSize: "1rem",
              }}
            />
            <button
              type="submit"
              style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "8px",
              background: "#2563eb",
              color: "white",
              border: "none",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background 0.2s",
              }}
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div>
            <h2 style={{ marginBottom: "1rem", fontWeight: 600 }}>Thank you!</h2>
            <p style={{ marginBottom: "1rem" }}>You've been added to our email list.</p>
            <button
              onClick={onClose}
              style={{
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          background: "#2563eb",
          color: "white",
          border: "none",
          fontWeight: 600,
          fontSize: "1rem",
          cursor: "pointer",
          transition: "background 0.2s",
              }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailList;
