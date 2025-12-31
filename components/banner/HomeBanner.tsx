// HomeBanner - Wrapper component for homepage with specific configuration
// Uses the reusable Banner component
import { Banner } from './Banner';
import type { BannerProps } from '@/lib/types/banner';

export const HomeBanner: React.FC<BannerProps> = (props) => {
  return (
    <Banner
      {...props}
      showText={true}
      showDots={true}
      height="fullScreen"
      textPosition="right"
      overlayOpacity="medium"
    />
  );
};
