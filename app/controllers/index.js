import Controller from '@ember/controller';
import previousTalksList from '../data/previous-talks';
import speakers from '../data/speakers';

export default class IndexController extends Controller {
  speakers = speakers;
  previousTalksList = previousTalksList
}
