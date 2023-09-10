import * as vscode from "vscode";
import { DoorsSmores, ProjectInfo } from "../doorsSmores";
import { DocumentNode } from "../model/documentNode";
import { SmoresProject } from "../model/smoresProject";
import { basename, dirname } from "path";
import { SmoresFile } from "../model/smoresFile";
import { getNodeIcon } from "../utils/gui";

export class ProjectTreeItem extends vscode.TreeItem {

  constructor(readonly info:ProjectInfo, private isProject:boolean) {
    const activeProject:SmoresProject|undefined = DoorsSmores.getActiveProject();
    var state = vscode.TreeItemCollapsibleState.None;
    let isActive = false;
    if(info.path === activeProject?.filepath) {
      state = vscode.TreeItemCollapsibleState.Expanded;
      isActive = true;
    }
    super(info.name, state);
    var icon:vscode.ThemeIcon;
    if(isProject) {
      icon = vscode.ThemeIcon.Folder;
      if(isActive === false) {
        this.contextValue = 'recentProject';
      }
    } else {
      const item = new DocumentNode(info.path);
      icon = getNodeIcon(item);
      this.contextValue = 'document';
    }
    this.tooltip = `${info.name}\n\n${info.path}`;
    this.iconPath = icon;
    this.command = {title: 'Click', command :'doors-smores.OnProjectTreeItemClick',arguments:[this]};
  }
  public static isProjectTreeItem(item:ProjectTreeItem) {
    if(item === undefined) {return false;}
    if(item.info === undefined) {return false;}
    if(item.info.name === undefined) {return false;}
    if(item.info.path === undefined) {return false;}
    if(item.isProject === undefined) {return false;}
    if(item.tooltip === undefined) {return false;}
    if(item.command === undefined) {return false;}
    if(item.iconPath === undefined) {return false;}
    return true;
  }
  public getChildren() {
    const project = DoorsSmores.getActiveProject();
    var children:ProjectTreeItem[] = [];
    if(this.info.path === project?.filepath) {
      const childDocNodes = project.getDocuments();
      for(let i=0; i< childDocNodes.length; i++) {
        const info:ProjectInfo = {
          name:childDocNodes[i].data.text,
          path:childDocNodes[i].filepath
        };
        const item = new ProjectTreeItem(info, false);
        children.push(item);
      }
    } 
    return children;
  }
  public onClick() {
    if(this.isProject) {
      DoorsSmores.openProjectPath(this.info.path);
    } else {
      const node = new DocumentNode(this.info.path);
      DoorsSmores.openDocument(node);
    }
  }
  public getItemId() {
    if(this.isProject) {
      return 0;
    } else {
      const node = new DocumentNode(this.info.path);
      return node.data.id;
    }
  }
}

