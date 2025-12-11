'use client';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ProductDetail() {
  const params = useParams();
  const id = Number(params.id);

  // 데이터 (메인과 동일)
  const categories = [
    { name: '캐시미어 니트', price: '49,900원', desc: '부드러운 촉감의 니트입니다.', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop' },
    { name: '천연 가죽 백', price: '129,000원', desc: '고급스러운 가죽 가방입니다.', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop' },
    { name: '러닝 스니커즈', price: '89,000원', desc: '편안한 러닝화입니다.', img: 'https://images.unsplash.com/photo-1560769629-975e13f0c470?q=80&w=800&auto=format&fit=crop' },
    { name: '데님 자켓', price: '79,000원', desc: '어디에나 어울리는 자켓입니다.', img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop' },
    { name: '아날로그 시계', price: '159,000원', desc: '심플한 디자인의 시계입니다.', img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop' },
  ];

  const category = categories[(id - 1) % categories.length];

  if (!category || isNaN(id)) {
    return <div className="p-10 text-center">상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* 상단 네비게이션 */}
      <div className="p-4 border-b">
        <Link href="/" className="text-gray-500 font-bold">← 뒤로가기</Link>
      </div>

      <div className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-8">
        <img src={category.img} className="w-full rounded-lg shadow-md" />
        <div>
          <h1 className="text-3xl font-bold mb-2">{category.name} {id}호</h1>
          <p className="text-2xl text-blue-600 font-bold mb-6">{category.price}</p>
          <p className="text-gray-600 mb-8 leading-relaxed">{category.desc}</p>
          
          <button className="w-full bg-black text-white py-4 rounded-lg font-bold text-lg hover:bg-gray-800">
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}