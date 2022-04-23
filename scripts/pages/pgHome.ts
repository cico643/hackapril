import PgHomeDesign from 'generated/pages/pgHome';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import Color from '@smartface/native/ui/color';
import Application from '@smartface/native/application';

export default class PgHome extends withDismissAndBackButton(PgHomeDesign) {
  constructor(private router?: Router, private route?: Route) {
    super({});
  }

  initMaterialTextBoxes() {
    this.mtbOrganization.options = {
        hint: 'Repository Owner'
    }
    this.mtbRepo.options = {
        hint: 'Repository Name'
    }



  }

  /**
   * @event onShow
   * This event is called when the page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    this.router.push('pgCommits')
    }

  /**
   * @event onLoad
   * This event is called once when the page is created.
   */
  onLoad() {
    super.onLoad();
    this.headerBar.leftItemEnabled = false;
    this.initMaterialTextBoxes();
  }
}
