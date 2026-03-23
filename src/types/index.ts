export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'men' | 'women';
  description?: string;
}

export type Page = 'home' | 'shop' | 'men' | 'women' | 'about' | 'contact';
