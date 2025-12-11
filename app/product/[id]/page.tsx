'use client';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Heart, ShoppingCart, Truck, ShieldCheck } from 'lucide-react';

// [수정됨] 메인과 동일한 안전한 이미지 리스트
const baseProducts = [
  { name: '로얄 캐시미어 롱 코트', category: 'OUTER', price: '289,000원', img: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop', desc: '최상급 울과 캐시미어 혼방으로 가볍고 따뜻합니다.' },
  { name: '유니섹스 숏 패딩', category: 'OUTER', price: '159,000원', img: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=800&auto=format&fit=crop', desc: '트렌디한 핏의 덕다운 숏패딩입니다.' },
  { name: '케이블 꽈배기 니트', category: 'TOP', price: '59,000원', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop', desc: '클래식한 케이블 짜임이 돋보이는 도톰한 니트입니다.' },
  { name: '울 와이드 슬랙스', category: 'BOTTOM', price: '49,000원', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop', desc: '한겨울에도 입기 좋은 두께감 있는 울 슬랙스입니다.' },
  { name: '소프트 앙고라 비니', category: 'ACC', price: '25,000원', img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=800&auto=format&fit=crop', desc: '포근한 앙고라 소재로 포인트를 주기 좋습니다.' },
  { name: '체크 패턴 머플러', category: 'ACC', price: '35,000원', img: 'https://images.unsplash.com/photo-1600091106787-88069ea79790?q=80&w=800&auto=format&fit=crop', desc: '감성적인 컬러 배색의 체크 머플러입니다.' },
  { name: '양털 플리스 자켓', category: 'OUTER', price: '89,000원', img: 'https://images.unsplash.com/photo-1551028919-ac7675cf5c63?q=80&w=800&auto=format&fit=crop', desc: '귀엽고 따뜻한 양털 텍스처의 자켓입니다.' },
  { name: '빈티지 데님 팬츠', category: 'BOTTOM', price: '45,000원', img: 'https://images.unsplash.com/photo-1584370848010-d7cc637703e6?q=80&w=800&auto=format&fit=crop', desc: '편안한 착용감의 데님 팬츠입니다.' },
];

export default function ProductDetail() {
  const params = useParams();
  const id = Number(params.id);

  const index = (id - 1) % baseProducts.length;
  const product = baseProducts[index];

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b z-50 px-4 h-14 flex items-center">
        <Link href="/" className="inline-flex items-center text-slate-600 hover:text-[#6D6296] transition font-bold">
          <ArrowLeft className="mr-2 h-5 w-5" /> 뒤로가기
        </Link>
      </header>

      <div className="max-w-4xl mx-auto md:py-10 grid md:grid-cols-2 gap-0 md:gap-10">
        <div className="w-full h-[50vh] md:h-auto bg-gray-200 md:rounded-2xl overflow-hidden relative">
          <img src={product.img} className="w-full h-full object-cover" alt={product.name} />
        </div>

        <div className="p-6 md:p-4 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
          
          <h1 className="text-2xl font-bold text-slate-800 mb-2">{product.name}</h1>
          <p className="text-2xl font-bold text-[#6D6296] mb-6">{product.price}</p>
          
          <div className="text-sm text-slate-500 leading-relaxed border-t border-b border-slate-200 py-6 mb-6">
            <p>{product.desc}</p>
            <br/>
            <ul className="list-disc pl-4 space-y-1">
              <li>소재: 상세페이지 참조</li>
              <li>배송: 2~3일 소요 (무료배송)</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-[#6D6296] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#584F7D] transition flex justify-center items-center gap-2 shadow-lg">
              <ShoppingCart className="h-5 w-5" /> 구매하기
            </button>
            <button className="p-4 border border-slate-200 rounded-xl hover:bg-red-50 hover:text-red-500 transition">
              <Heart className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}