import FlTimeLineDesign from 'generated/my-components/FlTimeLine';

export default class FlTimeLine extends FlTimeLineDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
