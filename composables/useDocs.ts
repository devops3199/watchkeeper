import {doc as fbDoc, collection, getDocs, getDoc} from 'firebase/firestore';
import {Brand} from '@/model/brand';

export default function () {
  const {$firestore} = useNuxtApp();
  const isFetching = ref(false);

  const brandsRef = collection($firestore, 'brands');
  const pinnedMessagesRef = fbDoc($firestore, 'messages', 'pinned');

  const getBrands = async () => {
    const result: Array<Brand> = [];

    try {
      isFetching.value = true;
      const docs = await getDocs(brandsRef);

      docs.forEach((doc) => {
        result.push(doc.data() as Brand);
      });
    } catch (e) {
      console.error({catch: e});
    } finally {
      isFetching.value = false;
    }

    return result;
  };

  const getPinnedMessage = async () => {
    let result = '';

    try {
      isFetching.value = true;
      const doc = await getDoc(pinnedMessagesRef);

      result = (doc.data() as {content: string}).content;
    } catch (e) {
      console.error({catch: e});
    } finally {
      isFetching.value = false;
    }

    return result;
  };

  return {getBrands, getPinnedMessage, isFetching};
}
