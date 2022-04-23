import PgCommitsDesign from 'generated/pages/pgCommits';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import LviContainer from 'components/LviContainer';
import { GetAllCommitsForGivenRepoAndBranch } from 'services';
import Color from '@smartface/native/ui/color';
import Application from '@smartface/native/application';

export default class PgCommits extends withDismissAndBackButton(PgCommitsDesign) {
  dataSet: any = [];
  routeData: Record<string, any> = this.route.getState().routeData;
  constructor(private router?: Router, private route?: Route) {
    super({});
    
  }

  async initDataset() {
    this.dataSet = await GetAllCommitsForGivenRepoAndBranch({organization: this.routeData.organization, repo: this.routeData.repo, branch: 'master'});
  }

  initListView() {
      this.lvMain.itemCount = 10;
      this.lvMain.refreshEnabled = false;
      this.lvMain.rowHeight = 344;
      this.lvMain.onRowHeight = () => 344;
      this.lvMain.onRowBind = (listViewItem: LviContainer, index: number) => {
        listViewItem.name = this.dataSet[index]?.commit?.author?.name ?? 'Placeholder Name';
        listViewItem.description = this.dataSet[index]?.commit?.message ?? 'Placeholder commit message due to shitty github api';
        listViewItem.avatar = this.dataSet[index]?.author?.avatar_url ?? "https://via.placeholder.com/50";
        listViewItem.time = this.dataSet[index]?.commit?.author?.date ?? '2022-03-18T09:00:00Z';
      }
  }

  /**
   * @event onShow
   * This event is called when the page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    this.initDismissButton(this.router); //Addes a back button to the page headerbar.
    this.initListView();
  }

  /**
   * @event onLoad
   * This event is called once when the page is created.
   */
  onLoad() {
    super.onLoad();
    this.initDataset();
    this.headerBar.title = 'Commit Timeline';
  }
}
