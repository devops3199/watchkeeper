import {collection, getDocs} from 'firebase/firestore';
import {Brand} from '@/model/brand';

export default function () {
  const {$firestore} = useNuxtApp();

  const brandsRef = collection($firestore, 'brands');

  const getBrands = async () => {
    const result: Array<Brand> = [];
    const docs = await getDocs(brandsRef);

    docs.forEach((doc) => {
      result.push(doc.data() as Brand);
    });

    return result;
  };

  return {getBrands};
}
