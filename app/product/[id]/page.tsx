'use client';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

const productDB: any = {
  1: { name: '포근한 니트', price: '49,900원', desc: '따뜻한 울 소재의 프리미엄 니트입니다.', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop' },
  2: { name: '천연 가죽 가방', price: '129,000원', desc: '장인이 만든 100% 천연 가죽 가방.', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop' },
  3: { name: '데일리 스니커즈', price: '89,000원', desc: '편안한 착화감의 데일리 슈즈.', img: 'https://images.unsplash.com/photo-1560769629-975e13f0c470?q=80&w=800&auto=format&fit=crop' },
};

export default function ProductDetail() {
  const params = useParams();
  const product = productDB[params.id as string];

  if (!product) return <div>상품 없음</div>;

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <Link href="/" className="inline-flex items-center text-slate-500 mb-6"><ArrowLeft className="mr-2" /> 뒤로가기</Link>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <img src={product.img} className="rounded-2xl shadow-lg w-full" />
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-indigo-600 mb-8">{product.price}</p>
          <p className="text-slate-600 mb-8">{product.desc}</p>
          <button className="w-full bg-black text-white py-4 rounded-xl font-bold flex justify-center gap-2"><ShoppingCart /> 구매하기</button>
        </div>
      </div>
    </div>
  );
}