import { selector } from 'recoil';
import GetTag from '../apis/StoreDetail/GetTags';
import { StoreTagtype } from './types';

const GetReviewTag = selector<StoreTagtype[]>({
  key: 'GetReviewTag',
  get: async () => {
    const data = await GetTag('REVIEW');
    return data;
  },
});

const GetProductTagList = selector({
  key: 'GetProductTagList',
  get: async () => {
    const data = await GetTag('PRODUCT');
    let result: string[] = ['전체'];
    let id: any[] = [null];
    data.forEach((element: any) => {
      result.push(element.name);
      id.push(element.id);
    });
    return { list: result, ids: id };
  },
});

const GetProductTag = selector<StoreTagtype[]>({
  key: 'GetProductTag',
  get: async () => {
    const data = await GetTag('PRODUCT');
    return data;
  },
});

const GetStoreTag = selector<StoreTagtype[]>({
  key: 'GetStoreTags',
  get: async () => {
    const data = await GetTag('STORE');
    return data;
  },
});

export { GetReviewTag, GetProductTagList, GetProductTag, GetStoreTag };
