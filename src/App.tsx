import React, { useEffect, useState } from 'react';
import SingleFolder from './Components/ParentFolder';
import './App.css';
import Folders from './folders.json';
import ParentFolder from './Components/ParentFolder';

export interface Root {
  folders: Folder[]
}

export interface Folder {
  folderName: string
  hasSubFolder: boolean
  subFolders: SubFolder[],
}

export interface SubFolder {
  folderName?: string,
  subFolderName: string
  hasSubFolder: boolean
}

const App: React.FC = () => {
  const [folders, setFolders] = useState<Folder[]>([]);

  useEffect(() => {
    // console.log(Folders)
    setFolders([...Folders.folders])
  }, [])
  return (
    <div className="App">
      <ParentFolder folders={folders} padding={0}/>
    </div>
  );
}

export default App;
