'use client';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Heart, ShoppingCart, Truck, ShieldCheck } from 'lucide-react';

// 메인 화면과 똑같은 겨울 옷 데이터
const baseProducts = [
  { name: '프리미엄 캐시미어 코트', category: 'OUTER', price: '289,000원', img: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=600', desc: '이탈리아산 캐시미어 혼방으로 제작되어 가볍지만 놀라운 보온성을 자랑합니다.' },
  { name: '헤비 덕다운 숏패딩', category: 'OUTER', price: '159,000원', img: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&q=80&w=600', desc: '솜털 80:깃털 20 황금 비율의 덕다운 충전재를 사용하여 혹한기에도 따뜻합니다.' },
  { name: '아가일 패턴 오버핏 니트', category: 'TOP', price: '59,000원', img: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=600', desc: '빈티지한 무드의 아가일 패턴이 포인트인 니트입니다. 넉넉한 오버핏입니다.' },
  { name: '울 블렌드 와이드 슬랙스', category: 'BOTTOM', price: '49,000원', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600', desc: '도톰한 울 소재로 한겨울까지 착용 가능한 슬랙스. 툭 떨어지는 핏이 멋스럽습니다.' },
  { name: '소프트 앙고라 비니', category: 'ACC', price: '25,000원', img: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600', desc: '부드러운 앙고라 소재의 비니입니다. 겨울철 포인트 아이템으로 좋습니다.' },
  { name: '캐시미어 머플러', category: 'ACC', price: '35,000원', img: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=600', desc: '피부에 닿는 촉감이 부드러운 머플러. 다양한 컬러감으로 준비했습니다.' },
  { name: '양털 후리스 자켓', category: 'OUTER', price: '89,000원', img: 'https://images.unsplash.com/photo-1551028919-ac7675cf5c63?auto=format&fit=crop&q=80&w=600', desc: '귀여운 양털 텍스처의 후리스 자켓. 가볍게 걸치기 좋습니다.' },
  { name: '코듀로이 밴딩 팬츠', category: 'BOTTOM', price: '45,000원', img: 'https://images.unsplash.com/photo-1584370848010-d7cc637703e6?auto=format&fit=crop&q=80&w=600', desc: '따뜻한 골덴 소재의 밴딩 팬츠. 활동성이 좋아 데일리 아이템으로 추천합니다.' },
];

export default function ProductDetail() {
  const params = useParams();
  const id = Number(params.id);

  // 상품 번호에 맞는 겨울 옷 정보 가져오기
  const index = (id - 1) % baseProducts.length;
  const product = baseProducts[index];

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b z-50 px-4 h-14 flex items-center">
        <Link href="/" className="inline-flex items-center text-slate-600 hover:text-[#6D6296] transition font-bold">
          <ArrowLeft className="mr-2 h-5 w-5" /> 겨울 쇼핑 계속하기
        </Link>
      </header>

      <div className="max-w-4xl mx-auto md:py-10 grid md:grid-cols-2 gap-0 md:gap-10">
        <div className="w-full h-[50vh] md:h-auto bg-gray-100 md:rounded-2xl overflow-hidden">
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
            <p>* 겨울 시즌 한정 수량입니다.</p>
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