import FlTimeDesign from 'generated/my-components/FlTime';

export default class FlTime extends FlTimeDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
