'use client'; 

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // ⚡ 알림창(alert) 삭제! 
    // 대신 바로 메인으로 이동시킵니다.
    console.log("로그인 버튼 클릭됨");
    router.push('/'); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
      
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm border border-slate-200 relative z-10">
        <h1 className="text-2xl font-bold text-center mb-6 text-slate-800">로그인</h1>
        
        <input 
          type="text" 
          placeholder="아이디 입력" 
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 mb-4 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* 버튼을 누르면 바로 이동합니다 */}
        <button 
          type="button"
          onClick={handleLogin}
          className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl rounded-xl shadow-lg transition transform active:scale-95 cursor-pointer z-50 relative"
        >
          바로 입장하기 (클릭)
        </button>

        <div className="mt-6 text-center">
          <Link href="/" className="text-slate-400 underline">← 돌아가기</Link>
        </div>
      </div>

    </div>
  );
}