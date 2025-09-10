interface ProductImage {
  url: string;
  alt: string;
}

interface ProductVariant {
  id: number;
  hex: string;
  size: string;
  stock: number;
  images: ProductImage[];
}

export interface ProductInterface {
  id: number;
  name: string;
  price: number;
  variants: ProductVariant[];
}
