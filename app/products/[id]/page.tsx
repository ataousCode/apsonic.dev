'use client';

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/data/product-models';
import { getProductDetailData } from '@/lib/mock-data/product-details';
import { 
  ProductHero, 
  ProductFeatureHighlight, 
  ProductFeatureShowcase, 
  ProductEngineSpecs, 
  ProductFeatureGrid, 
  ProductColorShowcase,
  ProductSpecification 
} from '@/components/products';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

/**
 * ProductDetailPage Component
 * 
 * High-fidelity product detail view.
 * Refactored to separate data fetching logic from the UI presentation.
 * Ready for backend integration.
 */
export default function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const product = getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  // Force the Underbone reference template for ALL products (same UI, same copy, same sections).
  const TEMPLATE_PRODUCT_MODEL = 'AP150-30';
  const TEMPLATE_CATEGORY_NAME = 'Aloba';

  // Logic: Fetch additional detail data based on category
  // This can easily be converted to an async await call for a real backend
  const details = getProductDetailData(product.category);
  const isUnderbone = product.category === 'underbone';

  // UI Transformation Logic: Prepare Hero data
  const heroData = {
    title: TEMPLATE_PRODUCT_MODEL,
    categoryName: TEMPLATE_CATEGORY_NAME,
    backgroundImage: '/images/products/accessories/AP150-30.png',
    overlayImage: '/images/products/accessories/AP150-30-1.png',
    breadcrumbs: [
      { label: '首页', href: '/' },
      { label: '骑士车', href: '/products' },
      { label: TEMPLATE_PRODUCT_MODEL, href: `/products/${product.id}` },
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <ProductHero
        title={heroData.title}
        categoryName={heroData.categoryName}
        backgroundImage={heroData.backgroundImage}
        overlayImage={heroData.overlayImage}
        breadcrumbs={heroData.breadcrumbs}
      />

      {/* Always render the full template (details is guaranteed by getProductDetailData fallback) */}
      {details && (
        <>
          {/* Visual Showcase Components */}
          <ScrollReveal as="div" variant="fadeUp">
            <ProductFeatureHighlight
              title="车身美学设计升级"
              description="更稳定的车架结构, 新版的车架后部加强结构, 全方位强度优化。高速过弯不飘, 并且强度更高, 承载能力进一步增强。"
              image="/images/products/accessories/second_component.png"
              bottomText="*基于用户调研, 全车优化升级"
            />
          </ScrollReveal>

          <ScrollReveal as="div" variant="fadeUp">
            <ProductFeatureShowcase
              sectionTitle="AP150-30PLUS 升级亮点"
              features={details.features}
            />
          </ScrollReveal>

          <ScrollReveal as="div" variant="fadeUp" amount={0.12}>
            <ProductEngineSpecs
              title="新款TYS 162 发动机"
              description="TY动力, 高效燃烧技术, 性能强悍, 多通道冷却技术, 双列油道, 换挡快感, 降噪改进, 更加柔和。"
              backgroundImage="/images/products/accessories/APSONIC-详情页-改版切片_06.png"
              specs={details.engineSpecs}
              disclaimer="*数据来自APSONIC实验室"
            />
          </ScrollReveal>

          <ScrollReveal as="div" variant="fadeUp">
            <ProductFeatureGrid
              sectionTitle="全车强化升级设计"
              features={details.gridFeatures}
              footerText="发售地区：多哥 | 加纳 | 布基纳法索 | 科特迪瓦 | 马里 | 贝宁 | 几内亚 | 肯尼亚 | 坦桑尼亚 | 乌干达"
            />
          </ScrollReveal>

          {/* Color Showcase (between grid and specifications) */}
          <ScrollReveal as="div" variant="fadeUp">
            <ProductColorShowcase
              title="3种经典配色"
              subtitle="非洲生命之美"
              initialVariantId="black"
              variants={[
                {
                  id: 'black',
                  name: '钻石黑',
                  description: '经典沉稳，质感纯粹',
                  imageSrc: '/images/banners/homepage/img3.jpg',
                  dotColor: '#0B0B0F',
                },
                {
                  id: 'red',
                  name: '经典红',
                  description: '热情张扬，醒目耐看',
                  imageSrc: '/images/banners/homepage/img2.jpg',
                  dotColor: '#7F1D1D',
                },
                {
                  id: 'blue',
                  name: '深海蓝',
                  description: '冷静克制，个性高级',
                  imageSrc: '/images/banners/homepage/img4.png',
                  dotColor: '#1D4ED8',
                },
              ]}
            />
          </ScrollReveal>

          {/* Technical Specifications */}
          <ScrollReveal as="div" variant="fadeUp">
            <ProductSpecification
              keyMetrics={details.keyMetrics}
              detailedSpecs={details.detailedSpecs}
            />
          </ScrollReveal>
        </>
      )}
    </main>
  );
}
