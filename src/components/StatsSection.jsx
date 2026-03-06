import React from 'react';
import { useTranslation } from "react-i18next";

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    {
      value: "18",
      label: "Years of Experience",
      suffix: "+"
    },
    {
      value: "32",
      label: "Employees",
      suffix: ""
    },
    {
      value: "150",
      label: "Clients",
      suffix: "+"
    },
    {
      value: "1000",
      label: "Projects",
      suffix: "+"
    }
  ];

  return (
    <section className="bg-[#1a1c1e] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Experience and Customer Satisfaction
            </h2>
            <div className="w-16 h-1 bg-blue-600 mb-8"></div>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our expertise, precision, and dedication to quality make us a trusted partner for clients across multiple industrial sectors.
            </p>
          </div>

          {/* Right Side: Stats Grid */}
          <div className="grid grid-cols-2 gap-y-12 gap-x-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl md:text-6xl font-black text-white">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-4xl font-bold text-blue-600">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <div className="mt-2 w-8 h-1 bg-blue-600 mb-3"></div>
                <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;