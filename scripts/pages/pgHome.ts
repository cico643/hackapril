import PgHomeDesign from 'generated/pages/pgHome';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import Color from '@smartface/native/ui/color';
import Application from '@smartface/native/application';
import { ImageFillType, ImageViewFillTypeIOS } from '@smartface/native/ui/imageview/imageview';
import System from '@smartface/native/device/system';
import FlCommitInfo from 'components/FlCommitInfo';
import {
    styleableContainerComponentMixin
  } from "@smartface/styling-context";
import { themeService } from 'theme';
import { GetRepoInfo } from 'services';
import Screen from '@smartface/native/device/screen'
  class StyleableFlCommitInfo extends styleableContainerComponentMixin(
    FlCommitInfo
  ) {}

export default class PgHome extends withDismissAndBackButton(PgHomeDesign) {
  index: number = 0;
  dataset = [];
  constructor(private router?: Router, private route?: Route) {
    super({});
  }

  initMaterialTextBoxes() {
    this.mtbOrganization.options = {
        hint: 'Repository Owner',
        onActionButtonPress: () => {
            this.mtbRepo.materialTextBox.requestFocus();
        }
    }
    this.mtbRepo.options = {
        hint: 'Repository Name',
        onActionButtonPress: () => {
            this.mtbRepo.materialTextBox.removeFocus();
        }
    }

  }

  initAddButton() {
      this.btnAdd.onPress = async () => {
        const organization = this.mtbOrganization.materialTextBox.text;
        const repo = this.mtbRepo.materialTextBox.text;
        const response = await GetRepoInfo({organization, repo});
        const data = {
            name: response.name,
            avatar: response.owner.avatar_url,
            description: response.description,
            index: this.index
        };
        this.dataset.push(data);
        if(this.index === 0) {
            this.removeChild(this._children.flNoItemFound);
        }
        
        const fl = new FlCommitInfo();
        fl.name = data.name;
        fl.description = data.description;
        fl.avatar = data.avatar;
        fl.onTouchEnded = (isInside) => {
            if(!isInside)
                return true;
            this.router.push('pgCommits', {organization, repo})
            return true;
        }
        themeService.addGlobalComponent(fl, `flRepo${this.index}`);
        if(System.OS === System.OSType.IOS) {
            this.addChild(fl, `flRepo${this.index}`, '', {
                marginLeft: 5,
                width: Screen.width - 10
            });
        }
        this.addChild(fl);
        this.index += 1;
      }
  }

  /**
   * @event onShow
   * This event is called when the page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    // this.router.push('pgCommits')

  }

  /**
   * @event onLoad
   * This event is called once when the page is created.
   */
  onLoad() {
    super.onLoad();
    this.headerBar.leftItemEnabled = false;
    this.headerBar.title = 'Favorite Repositories';
    this.imgNoItemFound.imageFillType = System.OS === System.OSType.IOS ?  ImageFillType.STRETCH : ImageFillType.NORMAL;
    this.initMaterialTextBoxes();
    this.initAddButton();
    
  }
}
