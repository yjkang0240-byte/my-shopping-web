import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-indigo-50 border border-slate-100 max-w-sm w-full">
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-700 mb-2">로그인</h1>
          <p className="text-slate-400 text-sm">부드러운 쇼핑을 시작해보세요.</p>
        </div>

        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="이메일" 
            className="w-full px-5 py-4 bg-slate-50 rounded-xl text-slate-700 outline-none focus:ring-2 focus:ring-indigo-100 transition"
          />
          <input 
            type="password" 
            placeholder="비밀번호" 
            className="w-full px-5 py-4 bg-slate-50 rounded-xl text-slate-700 outline-none focus:ring-2 focus:ring-indigo-100 transition"
          />
        </div>

        <button className="w-full mt-8 bg-indigo-300 hover:bg-indigo-400 text-white py-4 rounded-xl font-bold text-lg transition shadow-md shadow-indigo-100">
          로그인 하기
        </button>

        <div className="mt-8 pt-8 border-t border-slate-50 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition text-sm font-medium">
            <ArrowLeft className="h-4 w-4" /> 메인으로 돌아가기
          </Link>
        </div>

      </div>
    </div>
  );
}