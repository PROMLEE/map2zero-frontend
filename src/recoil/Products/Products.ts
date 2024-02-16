import { atom, selector } from 'recoil';
import GetTag from '../../apis/StoreDetail/GetTags';
const SearchState = atom({
  key: 'SearchState',
  default: '',
});

const ProductTags = selector({
  key: 'ProductTags',
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

export { SearchState, ProductTags };
