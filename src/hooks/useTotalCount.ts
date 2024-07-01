import { Product } from '@/app/page';

export const useTotalCount = function (data: Product[]): number {
  return data.reduce((acc, cur) => {
    if (cur.count) {
      return (acc += cur.count * +cur.price);
    }
    return acc;
  }, 0);
};
