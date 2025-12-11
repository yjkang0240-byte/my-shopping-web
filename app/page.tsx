import React from 'react';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

// 상품 데이터 (사진과 가격을 미리 적어둠)
const products = [
  { id: 1, name: '포근한 니트', price: '49,900원', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: '천연 가죽 가방', price: '129,000원', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: '데일리 스니커즈', price: '89,000원', img: 'https://images.unsplash.com/photo-1560769629-975e13f0c470?q=80&w=800&auto=format&fit=crop' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans pb-20">
      
      {/* 헤더 */}
      <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-indigo-600" />
            <span className="font-bold text-xl tracking-tight">MyPastelShop</span>
          </div>
          <Link href="/login" className="text-sm font-bold text-slate-500 hover:text-indigo-600 transition">
            로그인
          </Link>
        </div>
      </header>

      {/* 메인 배너 */}
      <div className="pt-32 pb