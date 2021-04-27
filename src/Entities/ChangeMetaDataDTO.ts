export class ChangeMetaDataDTO{
  oldName: string;
  newName: string;


  constructor(oldName: string, newName: string) {
    this.oldName = oldName;
    this.newName = newName;
  }
}
