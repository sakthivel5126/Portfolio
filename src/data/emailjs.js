import { profile } from './profile.js';

export const emailjsConfig = {
  serviceId: 'service_loxlyfd',
  templateId: 'template_m9216nh',
  publicKey: 'IjthlRjJKsv689o0X',
};

export function buildEmailParams(form) {
  return {
    from_name: form.name,
    from_email: form.email,
    user_name: form.name,
    user_email: form.email,
    subject: form.subject,
    message: form.message,
    to_email: profile.email,
    reply_to: form.email,
  };
}
