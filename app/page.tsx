import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, Menu } from 'lucide-react';

// ❄️ 진짜 겨울 상품 데이터 (랜덤 아님! 실제 겨울 옷 사진 연결)
const baseProducts = [
  { name: '프리미엄 캐시미어 코트', category: 'OUTER', price: '289,000원', img: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=600' },
  { name: '헤비 덕다운 숏패딩', category: 'OUTER', price: '159,000원', img: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&q=80&w=600' },
  { name: '아가일 패턴 오버핏 니트', category: 'TOP', price: '59,000원', img: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=600' },
  { name: '울 블렌드 와이드 슬랙스', category: 'BOTTOM', price: '49,000원', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600' },
  { name: '소프트 앙고라 비니', category: 'ACC', price: '25,000원', img: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600' },
  { name: '캐시미어 머플러', category: 'ACC', price: '35,000원', img: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=600' },
  { name: '양털 후리스 자켓', category: 'OUTER', price: '89,000원', img: 'https://images.unsplash.com/photo-1551028919-ac7675cf5c63?auto=format&fit=crop&q=80&w=600' },
  { name: '코듀로이 밴딩 팬츠', category: 'BOTTOM', price: '45,000원', img: 'https://images.unsplash.com/photo-1584370848010-d7cc637703e6?auto=format&fit=crop&q=80&w=600' },
];

// 50개 상품 진열 (위의 겨울 옷들을 번갈아가며 배치)
const products = Array.from({ length: 50 }).map((_, i) => {
  const base = baseProducts[i % baseProducts.length];
  return {
    id: i + 1,
    name: `${base.name} (${i + 1}차 입고)`, 
    category: base.category,
    price: base.price,
    img: base.img,
  };
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans pb-20">
      
      {/* 1. 헤더: 파스텔 톤 복구 (붉은색 삭제) */}
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

      {/* 2. 메인 배너: 겨울 감성 */}
      <div className="pt-24 pb-12 text-center px-4 bg-gradient-to-b from-white to-[#FDFBF7]">
        <span className="text-[#6D6296] font-bold tracking-widest text-xs mb-2 block">2024 WINTER COLLECTION</span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-800">
          Winter <span className="text-[#6D6296]">Essentials</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-lg mx-auto">
          따뜻함과 스타일을 동시에.<br/>올겨울 당신을 위한 50가지 아이템.
        </p>
      </div>

      {/* 3. 카테고리 탭 */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {['ALL', 'OUTER', 'TOP', 'BOTTOM', 'ACC'].map((cat, idx) => (
          <button key={cat} className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition ${idx === 0 ? 'bg-[#6D6296] text-white' : 'bg-white text-slate-500 border border-slate-200 hover:border-[#6D6296] hover:text-[#6D6296]'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* 4. 상품 목록 (겨울 옷 사진 출력) */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="group cursor-pointer block">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100 mb-3 relative shadow-sm">
                
                {/* 여기가 핵심입니다. 실제 겨울 옷 이미지가 나옵니다. */}
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500 ease-in-out"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 text-slate-800 text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                  {product.category}
                </div>
              </div>
              <h3 className="text-sm md:text-base font-bold text-slate-800 leading-tight mb-1 group-hover:text-[#6D6296] transition">
                {product.name}
              </h3>
              <p className="text-sm font-bold text-[#6D6296]">
                {product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}