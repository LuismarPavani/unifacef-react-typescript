import { getPrice } from './../../apis/economy.api';
import { action, observable } from 'mobx';

export default class HomeStore {
  @observable records: any[] = [];

  @action buildRecords = async () => {
      try{
    const { data } = await getPrice();
    this.records = Object.values(data);
} catch (error){
    
}
  }

}
const home = new HomeStore();
export { home };
