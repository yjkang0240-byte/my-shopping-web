'use client';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Heart, ShoppingCart, Truck, ShieldCheck } from 'lucide-react';

// 메인과 100% 동일한 순서의 데이터 (절대 수정 금지)
const fixedProducts = [
  { id: 1, name: '로얄 캐시미어 롱 코트', category: 'OUTER', price: '289,000원', img: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop', desc: '고급스러운 베이지 컬러의 롱 코트입니다.' },
  { id: 2, name: '헤비 덕다운 숏패딩', category: 'OUTER', price: '159,000원', img: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=800&auto=format&fit=crop', desc: '한겨울 추위도 막아주는 든든한 숏패딩입니다.' },
  { id: 3, name: '케이블 꽈배기 니트', category: 'TOP', price: '59,000원', img: 'https://images.unsplash.com/photo-1621335829175-95f437384d7c?q=80&w=800&auto=format&fit=crop', desc: '포근한 느낌의 아이보리 케이블 니트입니다.' },
  { id: 4, name: '울 와이드 슬랙스', category: 'BOTTOM', price: '49,000원', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop', desc: '어떤 옷에도 잘 어울리는 기본 그레이 슬랙스입니다.' },
  { id: 5, name: '소프트 앙고라 비니', category: 'ACC', price: '25,000원', img: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800&auto=format&fit=crop', desc: '귀여운 포인트가 되는 앙고라 비니입니다.' },
  { id: 6, name: '체크 패턴 머플러', category: 'ACC', price: '35,000원', img: 'https://images.unsplash.com/photo-1600091106787-88069ea79790?q=80&w=800&auto=format&fit=crop', desc: '따뜻한 색감의 체크 머플러입니다.' },
  { id: 7, name: '양털 플리스 자켓', category: 'OUTER', price: '89,000원', img: 'https://images.unsplash.com/photo-1551028919-ac7675cf5c63?q=80&w=800&auto=format&fit=crop', desc: '가볍고 따뜻한 양털 텍스처 자켓입니다.' },
  { id: 8, name: '빈티지 데님 팬츠', category: 'BOTTOM', price: '45,000원', img: 'https://images.unsplash.com/photo-1584370848010-d7cc637703e6?q=80&w=800&auto=format&fit=crop', desc: '스타일리시한 핏의 데님 팬츠입니다.' },
];

export default function ProductDetail() {
  const params = useParams();
  const id = Number(params.id);

  // 1번 상품을 누르면 무조건 1번 데이터(코트)를 가져옵니다.
  const index = (id - 1) % fixedProducts.length;
  const product = fixedProducts[index];

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b z-50 px-4 h-14 flex items-center">
        <Link href="/" className="inline-flex items-center text-slate-600 hover:text-[#6D6296] transition font-bold">
          <ArrowLeft className="mr-2 h-5 w-5" /> 뒤로가기
        </Link>
      </header>

      <div className="max-w-4xl mx-auto md:py-10 grid md:grid-cols-2 gap-0 md:gap-10">
        <div className="w-full h-[50vh] md:h-auto bg-gray-200 md:rounded-2xl overflow-hidden relative">
          {/* 이미지 표시 */}
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
              <li>상품 ID: {id}호</li>
              <li>배송: 무료배송 (오늘 출발)</li>
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