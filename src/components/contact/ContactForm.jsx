import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Loader2, Send } from 'lucide-react';
import Button from '../ui/Button';
import { emailjsConfig, buildEmailParams } from '../../data/emailjs';
import styles from './ContactForm.module.css';

const initialForm = { name: '', email: '', subject: '', message: '' };

function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') { setStatus('idle'); setErrorMessage(''); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        buildEmailParams(form),
        emailjsConfig.publicKey
      );
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email directly.');
    }
  };

  const isLoading = status === 'loading';
  const fields = [
    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'What is this about?' },
  ];

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fields}>
        {fields.map(({ id, label, type, placeholder }) => (
          <div key={id}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <input
              id={id} name={id} type={type} required disabled={isLoading}
              placeholder={placeholder} value={form[id]} onChange={handleChange}
              className={styles.input}
            />
          </div>
        ))}
        <div>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message" name="message" required disabled={isLoading}
            rows={5} placeholder="Write your message here..."
            value={form.message} onChange={handleChange}
            className={styles.textarea}
          />
        </div>
      </div>

      {status === 'success' && (
        <p className={styles.success} role="status">
          Thank you! Your message has been sent successfully.
        </p>
      )}
      {status === 'error' && (
        <p className={styles.error} role="alert">{errorMessage}</p>
      )}

      <Button type="submit" size="lg" style={{ marginTop: '1.5rem', width: '100%' }} disabled={isLoading}>
        {isLoading ? (
          <><Loader2 size={18} className={styles.spinIcon} /> Sending...</>
        ) : (
          <><Send size={18} /> Send Message</>
        )}
      </Button>
    </form>
  );
}

export default ContactForm;
