import { atom, selector } from 'recoil';
import GetTag from '../../apis/StoreDetail/GetTags';
const SearchState = atom({
  key: 'SearchState',
  default: { text: '', noresult: false },
});

const ProductTags = selector({
  key: 'ProductTags',
  get: async () => {
    const data = await GetTag('PRODUCT');
    console.log(data);
    let result: string[] = ['전체'];
    let id: number[] = [0];
    data.forEach((element: any) => {
      result.push(element.name);
      id.push(element.id);
    });
    return { list: result, ids: id };
  },
});

export { SearchState, ProductTags };
