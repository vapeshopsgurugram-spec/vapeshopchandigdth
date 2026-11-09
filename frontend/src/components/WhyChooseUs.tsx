import React from 'react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { 
  ShieldCheck, 
  Package, 
  Truck, 
  BadgePercent, 
  CheckCircle2 
} from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "100% Factory Sealed & Authentic",
      description: "Every device features an official scratch-and-scan QR verification code. Zero clones, zero fakes—only authentic manufacturer stock.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
    },
    {
      icon: Truck,
      title: "30-45 Minute Express Tricity Delivery",
      description: "Dedicated local riders stationed across Chandigarh, Mohali, and Panchkula for hyper-fast doorstep dispatch within minutes.",
      color: "text-teal-600",
      bg: "bg-teal-50",
      border: "border-teal-200",
    },
    {
      icon: Package,
      title: "100% Discreet Plain Box Packaging",
      description: "Shipped in discreet, neutral outer cardboard boxes with zero vape branding or labels to ensure complete personal privacy.",
      color: "text-slate-700",
      bg: "bg-slate-100",
      border: "border-slate-200",
    },
    {
      icon: BadgePercent,
      title: "Best Price Guarantee in Chandigarh",
      description: "Direct distributor pricing with regular seasonal discounts, bundle offers, and free delivery on qualifying orders.",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
    },
    {
      icon: WhatsAppIcon,
      title: "24/7 WhatsApp Customer Helpline",
      description: "Get real-time flavor recommendations, nicotine level guidance, device troubleshooting, and instant order tracking via WhatsApp.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
    },
    {
      icon: CheckCircle2,
      title: "Convenient UPI & Cash on Delivery",
      description: "Multiple frictionless payment options including Google Pay, PhonePe, Paytm, net banking, or pay cash directly to the rider.",
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      border: "border-cyan-200",
    },
  ];

  return (
    <section 
      id="why-us" 
      aria-label="Why Choose Vape Shop Chandigarh"
      className="py-12 sm:py-20 bg-slate-50/50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Commitment to Quality</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why We Are The #1 Trusted <span className="text-emerald-600">Vape Store in Chandigarh</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            We prioritize customer satisfaction, product authenticity, fast delivery, and private packaging above all else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 p-6 flex flex-col transition-all duration-200 hover:shadow-lg"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
