import React from 'react';
import Link from 'next/link';

// 상품 50개 생성 (이미지는 그대로 나옵니다)
const generateProducts = () => {
  const categories = [
    { name: '캐시미어 니트', price: '49,900원', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop' },
    { name: '천연 가죽 백', price: '129,000원', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop' },
    { name: '러닝 스니커즈', price: '89,000원', img: 'https://images.unsplash.com/photo-1560769629-975e13f0c470?q=80&w=600&auto=format&fit=crop' },
    { name: '데님 자켓', price: '79,000원', img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop' },
    { name: '아날로그 시계', price: '159,000원', img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=600&auto=format&fit=crop' },
  ];

  return Array.from({ length: 50 }).map((_, i) => {
    const category = categories[i % categories.length];
    return {
      id: i + 1,
      name: `${category.name} ${i + 1}호`,
      price: category.price,
      img: category.img,
    };
  });
};

const products = generateProducts();

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans pb-20">
      
      {/* 헤더 */}
      <header className="fixed w-full bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 z-50">
        <div className="font-bold text-xl text-blue-600">
           MyPastelShop (상품 50개)
        </div>
        <Link href="/login" className="px-4 py-2 bg-black text-white rounded text-sm font-bold">
          로그인
        </Link>
      </header>

      {/* 제목 */}
      <div className="pt-32 pb-10 text-center px-4">
        <h1 className="text-3xl font-extrabold mb-4">Winter Collection</h1>
        <p className="text-gray-500">총 50개의 상품이 진열되었습니다.</p>
      </div>

      {/* 상품 목록 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="block group">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100 mb-2">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="h-full w-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <h3 className="text-sm font-bold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}