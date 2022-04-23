import FlCommitInfoDesign from 'generated/my-components/FlCommitInfo';

export default class FlCommitInfo extends FlCommitInfoDesign {
  pageName?: string | undefined;
  private _name: string;
  private _time: string;
  private _description: string;
  private _avatar: string;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }

  get name(): string {
    return this._name;
  };

  set name(value: string) {
    this._name = value
    this.lblName.text = value;
  }
  get description(): string {
    return this._description;
  };

  set description(value: string) {
    this._description = value
    this.lblDescription.text = value;
  }

  get avatar(): string {
    return this._avatar;
  };

  set avatar(value: string) {
    this._avatar = value
    this.imgAvatar.loadFromUrl({
        url: value
    })
  }
}
