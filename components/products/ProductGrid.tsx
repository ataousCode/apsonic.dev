'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { ProductModel } from '@/lib/types/products';
import { ProductModelCard } from './ProductModelCard';
import { colors } from '@/lib/design-tokens';
import { groupProductsByCategory } from '@/lib/data/product-models';
import { CATEGORY_DISPLAY_NAMES } from '@/lib/constants';
import { PRODUCTS_GRID_CONFIG } from '@/lib/constants/products';

interface ProductGridProps {
  products: ProductModel[];
  className?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, className }) => {
  const groupedProducts = groupProductsByCategory(products);
  const reduceMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.45,
        ease: [0.22, 1, 0.36, 1],
        when: 'beforeChildren' as const,
        staggerChildren: reduceMotion ? 0 : 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
    show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] } },
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p style={{ color: colors.text.muted }}>No products found.</p>
      </div>
    );
  }

  return (
    <div className={className}>
      {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
        <motion.section
          key={category}
          className="mb-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Category Title */}
          <motion.h2
            className="text-2xl font-bold mb-6"
            style={{ color: colors.text.black }}
            variants={itemVariants}
          >
            {CATEGORY_DISPLAY_NAMES[category] || category}
          </motion.h2>

          {/* Product Grid - 3 columns with overlapping effect */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            style={{ gap: PRODUCTS_GRID_CONFIG.grid.gap }}
          >
            {categoryProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductModelCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      ))}
    </div>
  );
};

