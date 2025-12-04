import { useQuery } from '@tanstack/react-query';
import { fetchProductsAPI } from './fetchProductsAPI';
import { ProductResponse } from 'response/ProductResponse';

export const useProducts = () =>
  useQuery<ProductResponse[]>({
    queryKey: ['products'],
    queryFn: fetchProductsAPI,
  });
