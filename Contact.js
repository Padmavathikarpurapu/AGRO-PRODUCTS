import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        Thank you for your interest in our agricultural products! Whether you have questions, feedback, or inquiries,
        we'd love to hear from you. Please feel free to reach out to us through the following contact information:
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Customer Support</h2>
        <p>Email: support@agricultureproducts.com</p>
        <p>Phone: +91 9440786675</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Business Inquiries</h2>
        <p>Email: inquiries@agricultureproducts.com</p>
        <p>Phone: +91 8885556194</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Visit Our Office</h2>
        <p>
          Agriculture Products HQ<br />
          K L UNIVERSITY ,<br />
          GreenFeilds ,Guntur.
        </p>
      </div>
      <p className="mb-4">
        Our dedicated team is here to assist you. Whether you need help with product information, order assistance,
        or have general inquiries, we are committed to providing prompt and helpful support.
      </p>
      <p>
        Connect with us on social media to stay updated on the latest agricultural trends, product releases, and
        helpful farming tips.
      </p>
      {/* Add social media icons/links here if applicable */}
    </div>
  );
}

export default Contact;
