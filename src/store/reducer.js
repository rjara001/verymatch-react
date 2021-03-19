import ManagerMatchService from '../services/ManagerMatchService';

const reducer = (store = { items: [] }, actions) => {
  let newStore = { ...store }
  let _manager = new ManagerMatchService(newStore);

  switch (actions.type) {
    case 'HibernateMatch':
      {
        _manager.HibernateMatch();

        return newStore;
      }
    case 'RestartMatch':
      {
        _manager.RestartMatch('FirstMatch');

        _manager.getNextItem();
        return newStore;
      }
    case 'NextMatch':
      {
        _manager.NextMatch();
        _manager.getNextItem(newStore);
        return newStore;
      }
    case 'NextValue':
      {
        _manager.NextValue();

        _manager.getNextItem(newStore);
        return newStore;
      }
    case 'Success':
      {
        _manager.Success();
        _manager.getNextItem(newStore);
        return newStore;
      }
    case 'SwitchOption':
      {
        _manager.SwitchOption();
        return newStore;
      }
    case 'AddItem':
      {
        _manager.AddItem();
        return newStore;
      }
    case 'ChangeTrack':
      {
        _manager.ChangeTrack();
        return newStore;
      }
    case 'ActiveTrack':
      {
        _manager.ActiveTrack(actions.payload);
        return newStore;
      }
    default:
      return store;

  }
}

export default reducer;


