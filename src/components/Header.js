import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
library.add(faNewspaper, faFilePdf);

function Header() {
  const [preview] = useState([{showPreview:""}]); 
  preview[0].showPreview= false; 

  function Preview(){
    if(preview[0].showPreview === false){
      preview[0].showPreview = true;
    }else{
      preview[0].showPreview = false;
    }
  }

  return <div className="header">
          <div>
            <FontAwesomeIcon icon="fa-solid fa-newspaper" />&nbsp; CV Builder
          </div>
          <div className="preview">
            <button className="btnPreview" name="showPreview" value={preview[0].showPreview} onClick={(e) => Preview()}><FontAwesomeIcon icon="fa-solid fa-file-pdf" />&nbsp;&nbsp;Cv Preview</button>
          </div>
        </div>
  }

export default Header;