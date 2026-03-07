import { useState } from 'react';
import { Phone, Mail, MapPin, Building2, User, CheckCircle2 } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">

          <div className="text-center mb-16 sm:mb-24">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-12 bg-blue-500"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="h-1 w-12 bg-blue-500"></div>
            </div>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-4">
              Contact our team to discuss your metal fabrication project or schedule a consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-16">

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600"></div>
                Send us a message
              </h2>

              {submitted ? (
                <div className="bg-emerald-500/10 border-2 border-emerald-500/50 rounded-lg p-8 text-center backdrop-blur-sm">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-emerald-300 mb-2">Thank You!</h3>
                  <p className="text-emerald-200">We've received your message and will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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
                      className="w-full px-4 py-3 border border-slate-600 rounded-lg bg-slate-900/50 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all"
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
                      className="w-full px-4 py-3 border border-slate-600 rounded-lg bg-slate-900/50 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all"
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
                      className="w-full px-4 py-3 border border-slate-600 rounded-lg bg-slate-900/50 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all"
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
                      className="w-full px-4 py-3 border border-slate-600 rounded-lg bg-slate-900/50 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all"
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
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-600 rounded-lg bg-slate-900/50 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all resize-none"
                      placeholder="Tell us more about your fabrication project..."
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="gdprConsent"
                      name="gdprConsent"
                      checked={formData.gdprConsent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 border-slate-600 bg-slate-900 accent-blue-500 cursor-pointer"
                      required
                    />
                    <label htmlFor="gdprConsent" className="text-xs sm:text-sm text-slate-300 leading-relaxed cursor-pointer">
                      I agree to the processing of my personal data in accordance with GDPR regulations.
                      My data will only be used to respond to this inquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 active:scale-95 mt-6"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600"></div>
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                      <Building2 className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 text-sm sm:text-base">{contactInfo.companyName}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm">{contactInfo.registrationNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 text-sm sm:text-base">Address</h3>
                    <p className="text-slate-400 text-xs sm:text-sm">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 text-sm sm:text-base">Phone</h3>
                    <a href={`tel:${contactInfo.phone}`} className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-medium transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 text-sm sm:text-base">Email</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-medium transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="border-t border-slate-700 pt-6 mt-6">
                  <h3 className="font-bold text-white mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <User className="w-5 h-5 text-blue-400" />
                    Key Contacts
                  </h3>
                  <div className="space-y-3">
                    {contactInfo.keyStaff.map((staff, idx) => (
                      <div key={idx} className="bg-slate-900/40 rounded-lg p-3 sm:p-4 border border-slate-700 hover:border-blue-500/50 transition-colors">
                        <h4 className="font-semibold text-white text-xs sm:text-sm mb-1">{staff.name}</h4>
                        <p className="text-blue-400 text-xs font-bold mb-2">{staff.role}</p>
                        <div className="space-y-1">
                          <a href={`tel:${staff.phone}`} className="block text-slate-400 hover:text-blue-400 text-xs transition-colors">
                            {staff.phone}
                          </a>
                          <a href={`mailto:${staff.email}`} className="block text-slate-400 hover:text-blue-400 text-xs transition-colors truncate">
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

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="p-6 sm:p-8 border-b border-slate-700 bg-gradient-to-r from-slate-800 to-slate-900">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 mb-2">
                <MapPin className="w-6 h-6 text-blue-400" />
                Our Location
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2">Rooseveltova 12, 21000 Split, Croatia</p>
            </div>
            <div className="w-full h-96 bg-slate-900">
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
