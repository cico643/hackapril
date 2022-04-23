import FlContainerDesign from 'generated/my-components/FlContainer';

export default class FlContainer extends FlContainerDesign {
  pageName?: string | undefined;
  private _name: string;
  private _time: string;
  private _description: string;
  private _avatar: string;
  constructor(props?: any, pageName?: string) {
    super(props);
    this.pageName = pageName;
   
  }

  get name(): string {
    return this._name;
  };

  set name(value: string) {
    this._name = value
    this.flCommitInfo.lblName.text = value;
  }
  get time(): string {
    return this._time;
  };

  set time(value: string) {
    this._time = value;
    const hh = new Date(value).getHours().toString();
    let mm = new Date(value).getMinutes().toString();
    if (mm.length === 1)
     mm = '0' + mm;
    this.flTime.lblTime.text = hh + ':' + mm;
  }
  get description(): string {
    return this._description;
  };

  set description(value: string) {
    this._description = value
    this.flCommitInfo.lblDescription.text = value;
  }

  get avatar(): string {
    return this._avatar;
  };

  set avatar(value: string) {
    this._avatar = value
    this.flCommitInfo.imgAvatar.loadFromUrl({
        url: value
    })
  }
}
