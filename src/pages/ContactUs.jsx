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
    address: "Rooseveltova 12, 21000 Split, Croatia",
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
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-white">
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">

          <div className="text-center mb-16 sm:mb-24">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-1 bg-gradient-to-b from-blue-600 to-slate-900"></div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900">Get In Touch</h1>
              </div>
            </div>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 mt-4">
              Contact our team to discuss your metal fabrication project or schedule a consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">

            <div className="bg-white rounded-xl shadow-2xl p-8 border border-slate-200 hover:shadow-2xl hover:border-blue-600 transition-all duration-300">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-slate-900"></div>
                Send us a message
              </h2>

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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all resize-none"
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
                      className="mt-1 w-4 h-4 border-slate-300 bg-white accent-blue-600 cursor-pointer"
                      required
                    />
                    <label htmlFor="gdprConsent" className="text-sm text-slate-600 leading-relaxed cursor-pointer">
                      I agree to the processing of my personal data in accordance with GDPR regulations.
                      My data will only be used to respond to this inquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-600/40 active:scale-95"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="bg-white rounded-xl shadow-2xl p-8 border border-slate-200 hover:shadow-2xl hover:border-blue-600 transition-all duration-300">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-slate-900"></div>
                Contact Information
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-white" />
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
                    <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Address</h3>
                    <p className="text-slate-600 text-sm">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                    <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6 mt-6">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Key Contacts
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.keyStaff.map((staff, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:border-blue-600 transition-colors">
                        <h4 className="font-semibold text-slate-900 text-sm mb-1">{staff.name}</h4>
                        <p className="text-blue-600 text-xs font-bold mb-2">{staff.role}</p>
                        <div className="space-y-1">
                          <a href={`tel:${staff.phone}`} className="block text-slate-600 hover:text-blue-600 text-xs transition-colors">
                            {staff.phone}
                          </a>
                          <a href={`mailto:${staff.email}`} className="block text-slate-600 hover:text-blue-600 text-xs transition-colors">
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

          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="p-8 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-slate-900"></div>
                Our Location
              </h2>
              <p className="text-slate-600 mt-2">Rooseveltova 12, 21000 Split, Croatia</p>
            </div>
            <div className="w-full h-96 bg-slate-100">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=16.43%2C43.50%2C16.48%2C43.52&layer=mapnik&marker=43.5081%2C16.4572"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="COMO GRIT Location - Rooseveltova 12, Split, Croatia"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
