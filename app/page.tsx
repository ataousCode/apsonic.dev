import { HomeBanner } from '@/components/banner/HomeBanner';
import { RecommendedModels } from '@/components/product/RecommendedModels';
import { ServiceSupport } from '@/components/service';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Home() {
  return (
    <main className="relative">
      <HomeBanner autoPlay={true} interval={5000} />
      <ScrollReveal as="section" variant="fadeUp" amount={0.15}>
        <RecommendedModels />
      </ScrollReveal>
      <ScrollReveal as="section" variant="fadeUp" amount={0.15}>
        <ServiceSupport />
      </ScrollReveal>
    </main>
  );
}
