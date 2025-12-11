import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, Menu } from 'lucide-react';

// ❄️ 검증된 고화질 겨울 의류 이미지 (깨짐 방지)
const baseProducts = [
  { name: '로얄 캐시미어 롱 코트', category: 'OUTER', price: '289,000원', img: 'https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?q=80&w=600&auto=format&fit=crop' },
  { name: '유니섹스 숏 패딩', category: 'OUTER', price: '159,000원', img: 'https://images.unsplash.com/photo-1551488852-0801751ac367?q=80&w=600&auto=format&fit=crop' },
  { name: '케이블 꽈배기 니트', category: 'TOP', price: '59,000원', img: 'https://images.unsplash.com/photo-1621335829175-95f437384d7c?q=80&w=600&auto=format&fit=crop' },
  { name: '울 와이드 슬랙스', category: 'BOTTOM', price: '49,000원', img: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=600&auto=format&fit=crop' },
  { name: '소프트 앙고라 비니', category: 'ACC', price: '25,000원', img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=600&auto=format&fit=crop' },
  { name: '체크 패턴 머플러', category: 'ACC', price: '35,000원', img: 'https://images.unsplash.com/photo-1547731030-cd126f44e9c5?q=80&w=600&auto=format&fit=crop' },
  { name: '양털 플리스 자켓', category: 'OUTER', price: '89,000원', img: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=600&auto=format&fit=crop' },
  { name: '코듀로이 밴딩 팬츠', category: 'BOTTOM', price: '45,000원', img: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=600&auto=format&fit=crop' },
];

// 50개 진열 (이미지 매칭)
const products = Array.from({ length: 50 }).map((_, i) => {
  const base = baseProducts[i % baseProducts.length];
  return {
    id: i + 1,
    name: `${base.name}`, 
    subName: `${Math.floor(i / 8) + 1}차 재입고`,
    category: base.category,
    price: base.price,
    img: base.img,
  };
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans pb-20">
      
      {/* 헤더 */}
      <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100 h-16 flex items-center justify-between px-6 shadow-sm">
        <div className="flex items-center gap-4">
          <Menu className="h-6 w-6 text-slate-400 cursor-pointer" />
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-[#6D6296]">
            <ShoppingBag className="h-6 w-6" /> WinterMood
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Search className="h-5 w-5 text-slate-400 cursor-pointer" />
          <Link href="/login" className="px-4 py-1.5 bg-[#6D6296] text-white rounded-full text-sm font-bold hover:bg-[#584F7D] transition">
            로그인
          </Link>
        </div>
      </header>

      {/* 메인 배너 */}
      <div className="pt-24 pb-12 text-center px-4 bg-gradient-to-b from-white to-[#FDFBF7]">
        <span className="text-[#6D6296] font-bold tracking-widest text-xs mb-2 block">2024 WINTER COLLECTION</span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-800">
          Winter <span className="text-[#6D6296]">Essentials</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-lg mx-auto">
          따뜻함과 스타일을 동시에.<br/>올겨울 당신을 위한 아이템.
        </p>
      </div>

      {/* 카테고리 */}
      <div className="max-w-7xl