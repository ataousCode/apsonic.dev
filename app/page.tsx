import { HomeBanner } from '@/components/banner/HomeBanner';
import { RecommendedModels } from '@/components/product/RecommendedModels';
import { ServiceSupport } from '@/components/service';

export default function Home() {
  return (
    <main className="relative">
      <HomeBanner autoPlay={true} interval={5000} />
      <RecommendedModels />
      <ServiceSupport />
    </main>
  );
}
