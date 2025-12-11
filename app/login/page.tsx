'use client'; 
// 👆 이 한 줄이 없으면 버튼은 절대 작동하지 않습니다.

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 폼 전송 방지 (새로고침 막기)
    e.preventDefault();
    
    // 버튼 클릭 확인용 알림
    alert("버튼이 클릭되었습니다!"); 

    // 로그인 로직
    if (!email || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    
    alert(`로그인 성공! ${email}님 환영합니다.`);
    router.push('/'); // 메인으로 이동
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-200 w-full max-w-sm">
        
        <h1 className="text-2xl font-bold text-center mb-2 text-slate-800">로그인</h1>
        <p className="text-center text-slate-400 mb-8">아이디와 비밀번호를 입력하세요</p>

        {/* 폼 태그가 버튼 클릭을 방해하지 않도록 form 태그 없이 작성 */}
        <div className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="아이디" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-300 text-black"
          />
          <input 
            type="password" 
            placeholder="비밀번호" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-300 text-black"
          />
          
          <button 
            type="button" 
            onClick={handleLogin}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition cursor-pointer active:scale-95"
          >
            로그인 하기 (클릭해보세요)
          </button>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-500">
            ← 메인으로 돌아가기
          </Link>
        </div>
        
      </div>
    </div>
  );
}