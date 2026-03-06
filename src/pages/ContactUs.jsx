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
    <div className="min-h-screen bg-neutral-900">
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">

          <div className="text-center mb-16 sm:mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-1 w-12 bg-amber-500"></div>
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <div className="h-1 w-12 bg-amber-500"></div>
            </div>
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed px-4">
              Get in touch with our team. We're here to answer your questions and discuss your metal fabrication project needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">

            <div className="bg-neutral-800 rounded-lg shadow-lg p-8 border border-neutral-700 hover:border-amber-500 transition-colors duration-300">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <div className="w-1 h-6 bg-amber-500"></div>
                Send us a message
              </h2>

              {submitted ? (
                <div className="bg-neutral-700/50 border-2 border-amber-500 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-amber-400 mb-2">Thank You!</h3>
                  <p className="text-neutral-300">We've received your message and will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-600 rounded bg-neutral-900 text-white placeholder-neutral-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-600 rounded bg-neutral-900 text-white placeholder-neutral-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-600 rounded bg-neutral-900 text-white placeholder-neutral-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-600 rounded bg-neutral-900 text-white placeholder-neutral-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-600 rounded bg-neutral-900 text-white placeholder-neutral-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
                      placeholder="Tell us more about your fabrication project..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="gdprConsent"
                      name="gdprConsent"
                      checked={formData.gdprConsent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 border-neutral-600 bg-neutral-900 accent-amber-500 cursor-pointer"
                      required
                    />
                    <label htmlFor="gdprConsent" className="text-sm text-neutral-300 leading-relaxed cursor-pointer">
                      I agree to the processing of my personal data in accordance with GDPR regulations.
                      My data will only be used to respond to this inquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded font-semibold transition-all duration-300 shadow-lg hover:shadow-amber-500/30 active:scale-98 border border-amber-500/30 hover:border-amber-400"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="bg-neutral-800 rounded-lg shadow-lg p-8 border border-neutral-700 hover:border-amber-500 transition-colors duration-300">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <div className="w-1 h-6 bg-amber-500"></div>
                Contact Information
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-neutral-700 rounded flex items-center justify-center border border-neutral-600">
                        <Building2 className="w-6 h-6 text-amber-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{contactInfo.companyName}</h3>
                      <p className="text-neutral-400 text-sm">{contactInfo.registrationNumber}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-neutral-700 rounded flex items-center justify-center border border-neutral-600">
                      <MapPin className="w-6 h-6 text-amber-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Address</h3>
                    <p className="text-neutral-400 text-sm">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-neutral-700 rounded flex items-center justify-center border border-neutral-600">
                      <Phone className="w-6 h-6 text-amber-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Phone</h3>
                    <a href={`tel:${contactInfo.phone}`} className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-neutral-700 rounded flex items-center justify-center border border-neutral-600">
                      <Mail className="w-6 h-6 text-amber-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="border-t border-neutral-700 pt-6 mt-6">
                  <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-amber-500" />
                    Key Contacts
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.keyStaff.map((staff, idx) => (
                      <div key={idx} className="bg-neutral-900/50 rounded p-4 border border-neutral-700 hover:border-amber-500/50 transition-colors">
                        <h4 className="font-semibold text-white text-sm mb-1">{staff.name}</h4>
                        <p className="text-amber-400 text-xs font-medium mb-2">{staff.role}</p>
                        <div className="space-y-1">
                          <a href={`tel:${staff.phone}`} className="block text-neutral-400 hover:text-amber-400 text-xs transition-colors">
                            {staff.phone}
                          </a>
                          <a href={`mailto:${staff.email}`} className="block text-neutral-400 hover:text-amber-400 text-xs transition-colors">
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

          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden border border-neutral-700">
            <div className="p-6 border-b border-neutral-700">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <MapPin className="w-6 h-6 text-amber-500" />
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