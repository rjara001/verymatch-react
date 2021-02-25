const reducer = (store = {items:[]}, actions) => {
  switch (actions.type)
  {
    case 'NextValue':
      {
        let newStore = { ...store }
        newStore.currentIndex++;
        if (newStore.currentIndex >= newStore.items.length)
          newStore.currentIndex = 0;
        return newStore;
      }
    case 'Success':
      {
        store.currentIndex++;
        return { ...store }
      }
    default:
      return store;
    
  }
}

export default reducer;