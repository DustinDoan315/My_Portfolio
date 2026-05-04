import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Page Hero Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 py-16 px-4 text-white text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-3">Get In Touch</h1>
        <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
          Have a project in mind? I&apos;d love to hear from you. Let&apos;s
          build something great together.
        </p>
      </div>

      {/* Form Content */}
      <div className="container mx-auto px-4 max-w-4xl py-12">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
