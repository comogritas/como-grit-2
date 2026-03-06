import { useState } from 'react';
import { Send } from 'lucide-react';
import { useTranslation } from "react-i18next";

export default function QuoteForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', description: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="quote" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">{t("quoteTitle")}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">{t("quoteSubtitle")}</p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border-2 border-green-500 p-8 text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-2">{t("thankYouTitle")}</h3>
            <p className="text-green-700">{t("thankYouMessage")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border-2 border-slate-200 p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">{t("fullName")}</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border-2 border-slate-300 focus:border-blue-600 focus:outline-none transition-colors"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">{t("emailAddress")}</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border-2 border-slate-300 focus:border-blue-600 focus:outline-none transition-colors"/>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">{t("phoneNumber")}</label>
              <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border-2 border-slate-300 focus:border-blue-600 focus:outline-none transition-colors"/>
            </div>

            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-semibold text-slate-900 mb-2">{t("projectDescription")}</label>
              <textarea id="description" name="description" rows={6} required value={formData.description} onChange={handleChange} placeholder={t("descriptionPlaceholder")} className="w-full px-4 py-3 border-2 border-slate-300 focus:border-blue-600 focus:outline-none transition-colors resize-none"/>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
              {t("submitRequest")} <Send className="w-5 h-5"/>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}