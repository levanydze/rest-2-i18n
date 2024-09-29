import emailjs from "@emailjs/browser";

export const sendEmail = (
  form: React.RefObject<HTMLFormElement>,
  handleEmailSent: () => void
) => {
  if (!form.current) return;

  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE!,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE!,
      form.current,
      process.env.NEXT_PUBLIC_EMAIL_FORM
    )
    .then(() => {
      handleEmailSent();
    });
};
