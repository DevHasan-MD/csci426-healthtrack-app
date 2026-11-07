import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function change(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Enter a valid email, like name@example.com.";
    if (form.message.trim().length < 10) err.message = "Write at least 10 characters.";
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }
  }

  return (
    <section className="wrap narrow">
      <h1>Contact us</h1>
      <p>Questions or feedback? Send us a message. This demo form doesn't send email, because the project has no backend.</p>
      {sent && <p className="ok" role="status">Message received. Thank you!</p>}
      <form className="panel form" onSubmit={submit} noValidate>
        <label>Name<input name="name" value={form.name} onChange={change} />{errors.name && <span className="error">{errors.name}</span>}</label>
        <label>Email<input name="email" type="email" value={form.email} onChange={change} />{errors.email && <span className="error">{errors.email}</span>}</label>
        <label>Message<textarea name="message" rows="5" value={form.message} onChange={change} />{errors.message && <span className="error">{errors.message}</span>}</label>
        <button className="btn" type="submit">Send message</button>
      </form>
    </section>
  );
}
