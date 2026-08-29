"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Code2, Terminal } from "lucide-react";
import RoomCanvas from "./Room";

export default function Home() {
  const [showDadMessage, setShowDadMessage] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-start p-4 md:p-8 relative overflow-hidden font-sans">
      
      {/* خلفية تفاعلية بلمسة نيون */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header / العنوان الرئيسي */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-10 mb-6 mt-2"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-blue-400 mb-2">
          <Sparkles className="w-3.5 h-3.5" /> Youssef Workspace v1.0
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
          مرحباً بك في عالم يوسف
        </h1>
      </motion.div>

      {/* عرض الغرفة الـ 3D */}
      <div className="w-full max-w-3xl z-10 mb-6">
        <RoomCanvas />
      </div>

      {/* أزرار التفاعل السريعة */}
      <div className="flex flex-wrap gap-4 justify-center z-10 mb-6">
        <button 
          onClick={() => setShowDadMessage(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-medium px-5 py-3 rounded-xl shadow-lg shadow-rose-950/40 transition-all transform active:scale-95 border border-rose-400/30 text-sm md:text-base"
        >
          <Heart className="w-5 h-5 fill-current animate-pulse text-white" />
          <span>رسالة خاصة لوالدي العزيز ❤️</span>
        </button>
      </div>

      {/* Pop-Up Modal: كارت رسالة الوالد المتجاوب للموبايل */}
      <AnimatePresence>
        {showDadMessage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-slate-900 border border-slate-700/80 rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-500/20 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-3 mb-4 text-rose-400 border-b border-slate-800 pb-3">
                <Heart className="w-6 h-6 fill-rose-500" />
                <h2 className="text-xl font-bold">إلى والدي الغالي ❤️</h2>
              </div>

              <div className="space-y-4 text-slate-200 text-right leading-relaxed dir-rtl">
                <p className="font-semibold text-lg text-blue-300">
                  والدي الحبيب،
                </p>
                <p className="text-sm md:text-base">
                  حبيت تكون أول حد يشوف ثمرة شغفي وتجاربي في عالم البرمجة والتكنولوجيا. كل خطوة بتعلمها وكل نجاح بكون عايز أحققه، بيكون بعد فضل ربنا بفضل دعمك وتعابك معايا.
                </p>
                <p className="text-sm md:text-base text-slate-300">
                  ربنا يرجعك بالسلامة من السفر، ويحفظك لينا دائماً سند وظهر يا أغلى الناس!
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                <span className="text-xs text-slate-500">ابنك: يوسف</span>
                <button 
                  onClick={() => setShowDadMessage(false)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium px-4 py-2 rounded-lg transition-colors border border-slate-700"
                >
                  إغلاق الرسالة
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}