import React, { useEffect, useState } from "react";
import { Folder, SubFolder } from "../App";

interface SingleFolderProps {
  folders: any[],
  padding: Number,
}
 type folder = {
  folderName?:String,
  subFolderName?: String,
  hasSubFolder: boolean
  subFolders: any[]

 }
interface MainFolderProps {
  folders: folder,
  padding: Number

}

const ParentFolder: React.FC<SingleFolderProps> = ({ folders, padding }: SingleFolderProps) => {


  console.log(folders)
  return (
    <>
      {
        folders.map((folder, index) => {
          return (<MainFolder folders={folder} padding={padding} />);
        })
      }
    </>
  );

}



const MainFolder: React.FC<MainFolderProps> = ({ folders, padding }: MainFolderProps) => {
  const [expand, setExpand] = useState<boolean>(false);
  //console.log(folders);

  const HandleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setExpand((prev) => {
      return !prev;
    })
  }

  return (
    <div className="parentFolder-wrapper">
      <div className="parentFolder__name" style={{ paddingLeft: padding + "10px" }} onClick={(e) => { HandleClick(e) }}>
        {folders.folderName || folders.subFolderName}
        {expand && folders.hasSubFolder && (
          <ParentFolder folders={folders.subFolders} padding={1} />
        )}
      </div>
    </div>
  )
}

export default ParentFolder;