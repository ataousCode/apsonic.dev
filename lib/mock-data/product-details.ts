import { 
  ProductFeature, 
  EngineSpec, 
  GridFeature, 
  KeyMetric, 
  TechSpecItem 
} from '@/lib/types/products';

/**
 * Mock data for Underbone (骑士车) products.
 * In a real scenario, this would come from a backend API call like:
 * GET /api/products/[id]/details
 */
export const UNDERBONE_DETAILS = {
  features: [
    {
      id: 'led-lighting',
      label: '全车高性能LED',
      title: 'LED前大灯',
      description: '能耗低, 亮度高, 寿命长。照明范围更大, 更清晰, 夜间行车更安全。',
      image: '/images/products/accessories/内页车架.png',
    },
    {
      id: 'frame-structure',
      label: 'AP150-30PLUS系列车架',
      title: '系列车架',
      description: '采用高强度合金材料, 结构更加紧凑稳定, 全方位提升承载能力。',
      image: '/images/products/accessories/component3.png',
    },
    {
      id: 'suspension',
      label: 'AP150-30PLUS新型减震',
      title: '新型减震',
      description: '全方位过滤震动, 提升驾驶舒适度, 在复杂路面也能保持稳定。',
      image: '/images/products/accessories/内页避震.png',
    },
  ] as ProductFeature[],

  engineSpecs: [
    { label: '单缸排量', value: '162.4' },
    { label: '最大功率 (kw/r/min)', value: '10.0/8500' },
    { label: '最大扭矩 (N.m/r/min)', value: '12.5/7000' },
  ] as EngineSpec[],

  gridFeatures: [
    {
      id: 'cushion',
      title: '加厚舒适坐垫',
      description: '缝线使用双线, 更加结实耐用',
      image: '/images/products/accessories/内页坐垫.png',
    },
    {
      id: 'muffler',
      title: '新型消声器',
      description: '耐高温亮漆涂层, 不锈钢护罩, 散热更快',
      image: '/images/products/accessories/内页消音器.png',
    },
    {
      id: 'crash-bar',
      title: '标配原厂护杠',
      description: '与整车造型浑然一体, 且保护性好',
      image: '/images/products/accessories/内页护杠.png',
    },
    {
      id: 'dashboard',
      title: '全面屏负显仪表',
      description: '屏占比高达80%以上, 行车信息一览无遗。',
      image: '/images/products/accessories/内页仪表盘.png',
    },
  ] as GridFeature[],

  keyMetrics: [
    { label: '最高车速', value: '80', unit: 'km/h', subValue: '≥' },
    { label: '油箱容量', value: '4', unit: 'L' },
    { label: '整车装备质量', value: '104', unit: 'kg' },
    { label: '离地间隙', value: '155', unit: 'mm' },
  ] as KeyMetric[],

  detailedSpecs: [
    { label: '发动机型号', value: 'TYS162' },
    { label: '发动机类型', value: '单缸、四冲程、风冷, 内置' },
    { label: '供油方式', value: '化油器' },
    { label: '压缩比', value: '9.5:1' },
    { label: '最大功率(kw)/(rpm)', value: '10.0kW/8500r/min' },
    { label: '最大扭矩(N.m)/(rpm)', value: '12.5N·m/7000r/min' },
    { label: '长mm×宽mm×高mm', value: '1960X710X1130mm' },
    { label: '轴距mm', value: '1275mm' },
    { label: '坐高mm', value: '770 mm' },
    { label: '离地间隙mm', value: '155mm' },
    { label: '整备质量kg', value: '104kg' },
    { label: '油箱容量L', value: '4.0 L' },
    { label: '最高车速km/h', value: '≥80 km/h' },
    { label: '最大载重', value: '150kg' },
    { label: '百公里油耗L/100km', value: '1.8L/100KM' },
    { label: '前制动 / 后制动', value: '碟刹 / 鼓刹' },
  ] as TechSpecItem[],
};

/**
 * Helper to fetch detail data based on product category.
 * This function encapsulates the "logic" of data selection,
 * making it easy to swap with an async API call later.
 */
export function getProductDetailData(category: string) {
  // Currently we only have mock data for Underbone
  if (category === 'underbone') {
    return UNDERBONE_DETAILS;
  }
  
  // For now, ALL categories reuse the same Underbone template
  // so every product detail page is identical.
  return UNDERBONE_DETAILS;
}

