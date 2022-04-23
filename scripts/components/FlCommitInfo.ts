import FlCommitInfoDesign from 'generated/my-components/FlCommitInfo';

export default class FlCommitInfo extends FlCommitInfoDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
