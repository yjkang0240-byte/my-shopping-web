'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';

// 가짜 데이터베이스 (ID에 맞춰서 내용을 꺼내옵니다)
const productDB: any = {
  1: { name: '포근한 니트', price: '49,900원', desc: '울 100% 소재로 제작되어 부드럽고 따뜻합니다. 겨울철 필수 아이템.', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop' },
  2: { name: '천연 가죽 가방', price: '129,000원', desc: '장인이 한 땀 한 땀 만든 프리미엄 가죽 가방입니다. 시간이 지날수록 멋스러워집니다.', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop' },
  3: { name: '데일리 스니커즈', price: '89,000원', desc: '오래 걸어도 발이 편안한 인체공학적 설계. 어떤 코디에도 잘 어울립니다.', img: 'https://images.unsplash.com/photo-1560769629-975e13f0c470?q=80&w=800&auto=format&fit=crop' },
};

export default function ProductDetail() {
  const params = useParams();
  const id = params.id as string; // 주소창의 번호(1, 2, 3)를 가져옴
  const product = productDB[id]; // 번호에 맞는 상품 정보를 찾음

  if (!product) {
    return <div className="p-10 text-center">상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 뒤로가기 네비게이션 */}
      <nav className="p-4 border-b">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-black">
          <ArrowLeft className="mr-2 h-5 w-5" /> 뒤로가기
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* 왼쪽: 큰 이미지 */}
        <div className="rounded-3xl overflow-hidden shadow-lg bg-slate-100">
          <img src={product.img} alt={product.name} className="w-full object-cover" />
        </div>

        {/* 오른쪽: 상세 정보 */}
        <div className="pt-4">
          <div className="text-indigo-600 font-bold mb-2">BEST SELLER</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-slate-800 mb-8">{product.price}</p>
          
          <div className="prose text-slate-500 mb-10 leading-relaxed border-t border-b py-6">
            {product.desc} <br/>
            (여기에 상세한 상품 설명이 더 들어갈 수 있습니다. 배송 안내, 사이즈 표 등등...)
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-black text-white py-5 rounded-xl font-bold text-lg hover:bg-gray-800 transition flex justify-center items-center gap-2 shadow-xl shadow-gray-200">
              <ShoppingCart className="h-5 w-5" /> 구매하기
            </button>
            <button className="px-6 border border-slate-200 rounded-xl hover:bg-slate-50 transition">
              <Heart className="h-6 w-6 text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}