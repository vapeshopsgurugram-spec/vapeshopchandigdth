import React from 'react';
import { REVIEWS } from '@/data/mockData';
import { Star, CheckCircle, MapPin } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section 
      id="reviews" 
      aria-label="Customer Reviews Vape Shop Chandigarh"
      className="py-12 sm:py-20 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Real Customer Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Chandigarh Customers Say <span className="text-emerald-600">About Us</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Authentic reviews from verified buyers across Chandigarh, Mohali, Panchkula, and Zirakpur.
            </p>
          </div>

          {/* Rating Summary Pill */}
          <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 p-4 rounded-2xl flex-shrink-0 shadow-xs">
            <div className="text-3xl font-black text-slate-900">4.9</div>
            <div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-500 mt-1">Based on 1,280+ Tricity orders</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <article 
              key={review.id}
              className="rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{review.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">{review.name}</span>
                  {review.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3 text-emerald-600" /> Verified
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
                  <MapPin className="w-3 h-3" />
                  <span>{review.location}</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  Bought: {review.productBought}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
