'use client';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Heart, ShoppingCart, Truck, ShieldCheck } from 'lucide-react';

// 메인 화면과 동일한 규칙의 데이터
const baseProducts = [
  { name: '프리미엄 캐시미어 코트', category: 'OUTER', price: 289000, img: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=600', desc: '이탈리아산 캐시미어 혼방으로 제작되어 가볍지만 놀라운 보온성을 자랑합니다. 클래식한 디자인으로 유행을 타지 않습니다.' },
  { name: '헤비 덕다운 숏패딩', category: 'OUTER', price: 159000, img: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&q=80&w=600', desc: '솜털 80:깃털 20 황금 비율의 덕다운 충전재를 사용하여 혹한기에도 따뜻합니다. 트렌디한 숏 기장감.' },
  { name: '아가일 패턴 오버핏 니트', category: 'TOP', price: 59000, img: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=600', desc: '빈티지한 무드의 아가일 패턴이 포인트인 니트입니다. 넉넉한 오버핏으로 편안하게 착용 가능합니다.' },
  { name: '울 블렌드 와이드 슬랙스', category: 'BOTTOM', price: 49000, img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600', desc: '도톰한 울 소재로 한겨울까지 착용 가능한 슬랙스. 툭 떨어지는 와이드 핏이 멋스럽습니다.' },
  { name: '소프트 앙고라 비니', category: 'ACC', price: 25000, img: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600', desc: '부드러운 앙고라 소재의 비니입니다. 겨울철 포인트 아이템으로 활용하기 좋습니다.' },
  { name: '캐시미어 머플러', category: 'ACC', price: 35000, img: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=600', desc: '피부에 닿는 촉감이 부드러운 머플러. 다양한 컬러감으로 준비했습니다.' },
  { name: '양털 후리스 자켓', category: 'OUTER', price: 89000, img: 'https://images.unsplash.com/photo-1551028919-ac7675cf5c63?auto=format&fit=crop&q=80&w=600', desc: '귀여운 양털 텍스처의 후리스 자켓. 가볍게 걸치기 좋으며 보온성이 뛰어납니다.' },
  { name: '코듀로이 밴딩 팬츠', category: 'BOTTOM', price: 45000, img: 'https://images.unsplash.com/photo-1584370848010-d7cc637703e6?auto=format&fit=crop&q=80&w=600', desc: '따뜻한 골덴 소재의 밴딩 팬츠. 활동성이 좋아 데일리 아이템으로 추천합니다.' },
];

export default function ProductDetail() {
  const params = useParams();
  const id = Number(params.id);

  // ID를 기반으로 어떤 상품인지 찾기 (메인화면과 같은 순서 로직)
  const index = (id - 1) % baseProducts.length;
  const product = baseProducts[index];
  const displayName = `${product.name} ${Math.floor((id - 1) / 8) + 1}차 입고`;

  return (
    <div className="min-h-screen bg-white">
      {/* 상단 네비게이션 */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b z-50 px-4 h-14 flex items-center">
        <Link href="/" className="inline-flex items-center text-slate-600 hover:text-black transition">
          <ArrowLeft className="mr-2 h-5 w-5" /> 뒤로가기
        </Link>
      </header>

      <div className="max-w-4xl mx-auto md:py-10 grid md:grid-cols-2 gap-0 md:gap-10">
        {/* 이미지 영역 */}
        <div className="w-full h-[50vh] md:h-auto bg-gray-100 md:rounded-2xl overflow-hidden relative">
          <img src={product.img} className="w-full h-full object-cover" alt={product.name} />
        </div>

        {/* 정보 영역 */}
        <div className="p-6 md:p-4 flex flex-col h-full">
          <div className="mb-auto">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">
                {product.category}
              </span>
              <span className="text-[#6D6296] text-[10px] font-bold tracking-widest">
                WINTER NEW
              </span>
            </div>
            
            <h1 className="text-2xl font-bold text-slate-800 mb-2">{displayName}</h1>
            <p className="text-xl font-bold text-slate-900 mb-6">
              {product.price.toLocaleString()}원
            </p>
            
            <div className="prose text-sm text-slate-500 leading-relaxed border-t border-b border-slate-100 py-6 mb-6">
              <p>{product.desc}</p>
              <br/>
              <ul className="list-disc pl-4 space-y-1">
                <li>소재: 상세페이지 참조</li>
                <li>세탁: 드라이클리닝 권장</li>
                <li>제조국: 대한민국</li>
              </ul>
            </div>

            {/* 배송/보증 아이콘 */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Truck className="h-4 w-4 text-[#6D6296]" /> 무료 배송 (5만원 이상)
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="h-4 w-4 text-[#6D6296]" /> 품질 보증 상품
              </div>
            </div>
          </div>

          {/* 구매 버튼 */}
          <div className="sticky bottom-0 bg-white pt-4 pb-6 border-t md:border-none md:static md:p-0 flex gap-3">
            <button className="flex-1 bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-black transition flex justify-center items-center gap-2 shadow-lg">
              <ShoppingCart className="h-5 w-5" /> 구매하기
            </button>
            <button className="p-4 border border-slate-200 rounded-xl hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition">
              <Heart className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}