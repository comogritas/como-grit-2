import { useState } from 'react';
import { Phone, Mail, MapPin, Building2, User } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    subject: '',
    message: '',
    gdprConsent: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.gdprConsent) {
      alert('Please accept the GDPR consent to continue.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        company: '',
        email: '',
        subject: '',
        message: '',
        gdprConsent: false
      });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const contactInfo = {
    companyName: "COMO GRIT d.o.o",
    address: "Industrial Zone, Street Name 123, 10000 Zagreb, Croatia",
    registrationNumber: "VAT: HR12345678901",
    phone: "+385 1 234 5678",
    email: "service@comogrit.com",
    keyStaff: [
      { name: "Ivan Horvat", role: "CEO", phone: "+385 91 123 4567", email: "ivan.horvat@comogrit.com" },
      { name: "Marija Kovač", role: "Sales Manager", phone: "+385 91 234 5678", email: "marija.kovac@comogrit.com" },
      { name: "Petar Novak", role: "Technical Director", phone: "+385 91 345 6789", email: "petar.novak@comogrit.com" }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Contact Us</h1>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get in touch with our team. We're here to answer your questions and discuss your project needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">

            <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">We've received your message and will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white text-slate-900"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white text-slate-900"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white text-slate-900"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white text-slate-900"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none bg-white text-slate-900"
                      placeholder="Tell us more about your inquiry or project..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="gdprConsent"
                      name="gdprConsent"
                      checked={formData.gdprConsent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-orange-500 border-slate-300 rounded focus:ring-orange-500 cursor-pointer"
                      required
                    />
                    <label htmlFor="gdprConsent" className="text-sm text-slate-600 leading-relaxed cursor-pointer">
                      I agree to the processing of my personal data in accordance with GDPR regulations.
                      My data will only be used to respond to this inquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-md hover:shadow-lg active:scale-98"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{contactInfo.companyName}</h3>
                      <p className="text-slate-600 text-sm">{contactInfo.registrationNumber}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Address</h3>
                    <p className="text-slate-600 text-sm">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                    <a href={`tel:${contactInfo.phone}`} className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6 mt-6">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-orange-600" />
                    Key Contacts
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.keyStaff.map((staff, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                        <h4 className="font-semibold text-slate-900 text-sm mb-1">{staff.name}</h4>
                        <p className="text-orange-600 text-xs font-medium mb-2">{staff.role}</p>
                        <div className="space-y-1">
                          <a href={`tel:${staff.phone}`} className="block text-slate-600 hover:text-orange-600 text-xs transition-colors">
                            {staff.phone}
                          </a>
                          <a href={`mailto:${staff.email}`} className="block text-slate-600 hover:text-orange-600 text-xs transition-colors">
                            {staff.email}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-orange-600" />
                Our Location
              </h2>
            </div>
            <div className="w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.8157958669346!2d15.9658!3d45.8150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQ4JzU0LjAiTiAxNcKwNTcnNTYuOSJF!5e0!3m2!1sen!2shr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="COMO GRIT Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}