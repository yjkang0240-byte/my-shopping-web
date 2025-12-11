import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
      
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm border border-slate-200 relative">
        <h1 className="text-2xl font-bold text-center mb-6 text-slate-800">로그인</h1>
        
        {/* 입력창 (모양만 있음) */}
        <input 
          type="text" 
          placeholder="아이디 (아무거나 입력)" 
          className="w-full p-4 mb-4 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input 
          type="password" 
          placeholder="비밀번호 (아무거나 입력)" 
          className="w-full p-4 mb-4 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* 여기가 핵심입니다. 버튼 기능을 다 빼고, 'Link' 태그로 감싸버렸습니다. */}
        {/* 이걸 누르면 물리적으로 메인 페이지(/)로 이동합니다. */}
        <Link 
          href="/"
          className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl rounded-xl shadow-lg transition transform active:scale-95 block text-center"
        >
          입장하기 (무조건 이동)
        </Link>

        <div className="mt-6 text-center">
          <Link href="/" className="text-slate-400 underline">← 돌아가기</Link>
        </div>
      </div>

    </div>
  );
}