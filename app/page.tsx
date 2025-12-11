import React from 'react';
import Link from 'next/link';

export default function Home() {
  // 강제로 사진 50개 생성 (인터넷에 있는 랜덤 이미지 끌어오기)
  const products = Array.from({ length: 50 }).map((_, i) => ({
    id: i + 1,
    name: `상품 ${i + 1}호`,
    price: `${(i + 1) * 1000}원`,
    // 이 주소는 무조건 이미지가 나옵니다
    img: `https://picsum.photos/seed/${i + 1}/300/300`
  }));

  return (
    <div style={{ padding: '20px', backgroundColor: 'white' }}>
      
      {/* 🔴 여기가 빨간색으로 변해야 성공입니다 */}
      <header style={{ 
        backgroundColor: 'red', color: 'white', padding: '20px', 
        textAlign: 'center', fontWeight: 'bold', marginBottom: '30px' 
      }}>
        <h1>🚨 이미지 긴급 복구 성공! (빨간색) 🚨</h1>
      </header>

      {/* 상품 목록 */}
      <div style={{ 
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' 
      }}>
        {products.map((p) => (
          <Link href={`/product/${p.id}`} key={p.id} style={{ textDecoration: 'none', color: 'black' }}>
            <div style={{ border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden' }}>
              {/* 이미지 태그 */}
              <img src={p.img} alt="상품" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '10px' }}>
                <h3>{p.name}</h3>
                <p style={{ color: 'blue' }}>{p.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}