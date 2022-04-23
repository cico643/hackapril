import LviContainerDesign from 'generated/my-components/LviContainer';

export default class LviContainer extends LviContainerDesign {
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
    this.flContainer.name = value;
  }
  get time(): string {
    return this._time;
  };

  set time(value: string) {
    this._time = value
    this.flContainer.time = value;
  }
  get description(): string {
    return this._description;
  };

  set description(value: string) {
    this._description = value
    this.flContainer.description = value;
  }

  get avatar(): string {
    return this._avatar;
  };

  set avatar(value: string) {
    this._avatar = value
    this.flContainer.avatar = value;
  }
}
