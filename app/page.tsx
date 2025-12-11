import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Star, Heart, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      
      {/* 1. 상단 메뉴 (헤더) */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-indigo-400" />
            <span className="font-bold text-xl text-slate-800">MyShop</span>
          </div>
          
          {/* 로그인 버튼이 안 보이면 로그인하러 가게 유도 */}
          <Link href="/login">
            <button className="bg-indigo-400 hover:bg-indigo-500 text-white px-4 py-2 rounded-full font-bold text-sm transition">
              로그인 / 회원가입
            </button>
          </Link>
        </div>
      </header>

      {/* 2. 메인 배너 */}
      <section className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          쇼핑이 <span className="text-indigo-500">즐거워지는</span> 순간
        </h1>
        <p className="text-lg text-slate-500 mb-8">
          감성적인 아이템을 만나보세요.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition">
            상품 구경하기
          </button>
        </div>
      </section>

      {/* 3. 상품 예시 (3개) */}
      <section className="py-10 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="h-40 bg-slate-100 rounded-xl mb-4 flex items-center justify-center text-slate-400">
              상품 이미지 {item}
            </div>
            <h3 className="font-bold text-lg mb-1">감성 아이템 {item}호</h3>
            <p className="text-indigo-500 font-bold">29,900원</p>
          </div>
        ))}
      </section>

    </div>
  );
}