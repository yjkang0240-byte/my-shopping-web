'use client'; // 👈 1. 이 줄이 없으면 버튼이 죽습니다. 꼭 있어야 해요!

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // 3. 클릭되면 무조건 알림창이 뜹니다.
    alert("⚡ 버튼 클릭 성공! ⚡\n이제 메인으로 이동합니다.");
    router.push('/'); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
      
      {/* 카드 박스 */}
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm border border-slate-200 relative z-10">
        <h1 className="text-2xl font-bold text-center mb-6 text-slate-800">로그인 테스트</h1>
        
        <input 
          type="text" 
          placeholder="아이디 입력" 
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 mb-4 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* 2. z-index 50으로 맨 위로 올리고, 커서를 강제로 손가락 모양으로 변경 */}
        <button 
          type="button"
          onClick={handleLogin}
          className="w-full py-5 bg-red-500 hover:bg-red-600 text-white font-bold text-xl rounded-xl shadow-lg transition transform active:scale-95 cursor-pointer z-50 relative"
        >
          여기 눌러보세요! (빨간 버튼)
        </button>

        <div className="mt-6 text-center">
          <Link href="/" className="text-slate-400 underline">← 돌아가기</Link>
        </div>
      </div>

    </div>
  );
}