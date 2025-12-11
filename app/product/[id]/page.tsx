import React from 'react';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function Home() {
  // 상품 50개 자동 생성 (파스텔 톤에 어울리는 랜덤 이미지 사용)
  const products = Array.from({ length: 50 }).map((_, i) => ({
    id: i + 1,
    name: `감성 아이템 ${i + 1}호`,
    price: `${(i + 1) * 1200}원`,
    // 이미지가 무조건 나오도록 안정적인 주소를 사용했습니다
    img: `https://picsum.photos/seed/${i + 100}/400/500` 
  }));

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-600 font-sans pb-20">
      
      {/* 1. 헤더 (부드러운 화이트 & 연보라) */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100 h-16 flex items-center justify-between px-6 shadow-sm">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-[#8E86B5]">
          <ShoppingBag className="h-6 w-6" /> MyPastelShop
        </div>
        <Link href="/login" className="px-5 py-2 bg-[#8E86B5] text-white rounded-full text-sm font-bold hover:bg-[#7A72A3] transition shadow-md">
          로그인
        </Link>
      </header>

      {/* 2. 메인 배너 (파스텔 그라데이션) */}
      <div className="pt-32 pb-16 text-center px-4 bg-gradient-to-b from-