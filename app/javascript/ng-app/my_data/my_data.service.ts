import { RailsService } from '../_base/rails.service';

export class MyDataService extends RailsService {
  resources = 'my_datas';

  allText() {
    return this.http.get('/my_datas/texttexttext');
  }
}