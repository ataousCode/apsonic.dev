import { HomeBanner } from '@/components/banner/HomeBanner';
import { RecommendedModels } from '@/components/product/RecommendedModels';

export default function Home() {
  return (
    <main className="relative">
      <HomeBanner autoPlay={true} interval={5000} />
      <RecommendedModels />
    </main>
  );
}
