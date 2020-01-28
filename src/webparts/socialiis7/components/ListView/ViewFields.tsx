import { ListView, IViewField, SelectionMode, GroupOrder, IGrouping } from "@pnp/spfx-controls-react/lib/ListView";

export const  Title : IViewField = {
    name: "Title",
    displayName: "Title",
    isResizable: true,
    sorting: true,
    minWidth: 200,
    maxWidth: 300,
};

export const  source : IViewField = {
  name: "source",
  displayName: "Source",
  isResizable: true,
  sorting: true,
  minWidth: 100,
  maxWidth: 150,
};

export const  keywordsText : IViewField = {
  name: "keywordsText",
  displayName: "Keywords",
  //linkPropertyName: "c",
  isResizable: true,
  sorting: true,
  minWidth: 300,
  maxWidth: 500,
};

export function viewFieldsFull() {

    let viewFields: IViewField[]=[];

    
    viewFields.push(source);
    viewFields.push(Title);
    viewFields.push(keywordsText);

    return viewFields;
    
}

