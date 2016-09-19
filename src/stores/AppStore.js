import { observable } from 'mobx';

class MoneyItem {
  @observable amount;
  @observable type;
  @observable date;
}

class AppStore {
  @observable moneyItems = [];
  @observable interest = 2.25;
}

const appStore = new AppStore();

export default appStore;
export { AppStore };
