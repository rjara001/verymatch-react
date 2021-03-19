export default class SummaryService {

  constructor(store) {
    this.store = store;
  }

  calculate() {
    let statusSummary = [[], [], [], []];

    this.store.currentTrack.items.forEach(item => {
      let index = 0;
      switch (item.status) {
        case 'FirstMatch':
          index = 0;
          break;
        case 'SecondMatch':
          index = 1;
          break;
        case 'ThirdMatch':
          index = 2;
          break;
        case 'FourthMatch':
          index = 3;
          break;
        default:
      }
      statusSummary[index].push(item);

    });

    return {
      FirstMatch: statusSummary[0].length,
      SecondMatch: statusSummary[1].length,
      ThirdMatch: statusSummary[2].length,
      FourthMatch: statusSummary[3].length,
      Total: this.store.currentTrack.items.length
    }
  }
}
