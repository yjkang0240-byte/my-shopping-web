import React from 'react';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

const generateProducts = () => {
  const categories = [
    { name: '프리미엄 캐시미어 니트', price: '49,900원', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop' },
    { name: '이태리 천연 가죽 백', price: '129,000원', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop' },
    { name: '컴포트 러닝 스니커즈', price: '89,000원', img: 'https://images.unsplash.com/photo-1560769629-975e13f0c470?q=80&w=600&auto=format&fit=crop' },
    { name: '클래식 데님 자켓', price: '79,000원', img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop' },
    { name: '모던 아날로그 시계', price: '159,000원', img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=600&auto=format&fit=crop' },
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
    <div className="min-h-screen bg-white text-slate-800 font-sans pb-20">
      <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-100 h-16 flex items-center justify-between px-6 shadow-sm">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-indigo-900">
          <ShoppingBag className="h-6 w-6 text-indigo-600" /> MyPastelShop
        </div>
        <Link href="/login" className="px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-700 transition">
          로그인
        </Link>
      </header>

      <div className="pt-32 pb-10 text-center px-4 bg-slate-50">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">Winter Collection</h1>
        <p className="text-slate-500 text-lg">총 50개의 신상품이 입고되었습니다.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="group cursor-pointer">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-200 mb-4 relative">
                <img src={product.img} alt={product.name} className="h-full w-full object-cover object-center group-hover:scale-110 transition duration-500 ease-in-out" />
              </div>
              <h3 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-indigo-600 transition">{product.name}</h3>
              <p className="text-sm text-slate-500 mt-1">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}