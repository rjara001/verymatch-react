import Item from '../models/item';

export default class ManagerMatchService {
  constructor(store) {
    this.store = store;
  }


  HibernateMatch(match) {
    let items = this.store.currentTrack.items.filter(_ => _.status === match);

    items.forEach(item => {
      let index = this.store.currentTrack.items.findIndex((obj => obj.id === this.store.currentIndex));
      this.store.currentTrack.items.slice(index, 1);
    });

    items.forEach(_ => {
      let itemHibernated = { ..._ };
      itemHibernated.history.times++;
      itemHibernated.history.date = new Date();
      this.store.hibernate.items.push(itemHibernated);
    });

  }

  getNextItem() {
    let itemsValid = this.getItemsValid(this.store.statusMatch);
    if (itemsValid.length === 0) {
      this.store.matchActive = false;
      this.changeStatusMatch();

      if (this.getItemsValid(this.store.statusMatch).length === 0)
        this.finalizeMatch();
      return 0;
    }

    let newIndex = Math.floor(Math.random() * itemsValid.length);

    this.store.currentIndex = itemsValid[newIndex].id;

    return itemsValid.length;

  }

  RestartMatch() {
    this.store.matchActive = true;
    this.store.statusMatch = 'FirstMatch';
    this.store.currentTrack = this.store.tracks.find(_ => _.selected);

    this.store.currentTrack.items.forEach(_ => {
      _.status = 'FirstMatch';
    });
  }

  getElementByIndex() {
    return this.store.currentTrack.items[this.store.currentTrack.items.findIndex((obj => obj.id === this.store.currentIndex))];
  }

  SwitchOption() {
    this.store.matchActive = !this.store.matchActive;
  }

  ActiveTrack(id) {
    let track = this.store.tracks.find(_ => { return _.id === id });
    this.store.tracks.forEach(element => {
      element.selected = false;
    });
    track.selected = true;
    this.store.currentTrack = track;
  }

  ChangeTrack() {
    this.store.tracksMenuActive = !this.store.tracksMenuActive;
  }

  AddItem() {
    const track = this.store.currentTrack;
    track.items.push(new Item(track.items.length+1));
  }

  Success() {
    let item = this.getElementByIndex();
    item.isRecongnized = true;
  }

  getItemsValid(statusMatch) {
    return this.store.currentTrack.items.filter(_ => _.status === statusMatch && !_.isRecongnized);
  }

  NextValue() {

    let item = this.getElementByIndex();

    item.status = this.getNextMatch(item.status);
    let itemsValid = this.getItemsValid(this.store.statusMatch);
    if (itemsValid.length === 0) {
      this.store.matchActive = false;
      return this.store;
    }
  }

  getNextMatch(status) {
    switch (status) {
      case 'FirstMatch':
        return 'SecondMatch';

      case 'SecondMatch':
        return 'ThirdMatch';

      case 'ThirdMatch':
        return 'FourthMatch';

      case 'FourthMatch':
        return 'Finalized';
      default:
    }
  }

  NextMatch() {

    this.store.matchActive = true;

    let itemsValid = this.getItemsValid(this.store.statusMatch);
    if (itemsValid.length === 0) {
      this.finalizeMatch();
      return this.store;
    }

  }

  changeStatusMatch() {
    switch (this.store.statusMatch) {
      case 'FirstMatch':
        this.store.statusMatch = 'SecondMatch';
        break;
      case 'SecondMatch':
        this.store.statusMatch = 'ThirdMatch';
        break;
      case 'ThirdMatch':
        this.store.statusMatch = 'FourthMatch';
        break;
      case 'FourthMatch':
        this.store.statusMatch = 'FinishMatch';

        break;
      default:
    }
  }

  finalizeMatch() {
    this.store.matchActive = false;
    this.store.statusMatch = 'FinishMatch';
  }
}