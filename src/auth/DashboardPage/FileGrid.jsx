import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { NavigationBar } from "../../auth/NavigationBar";
import "./SubBar.css";
import { storage } from "../../firebase";

const FileGrid = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const uploadFile = () => {
    if (selectedFile) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(selectedFile.name);

      fileRef.put(selectedFile).then((snapshot) => {
        console.log("File uploaded:", snapshot);
        // You can add the logic to display the uploaded file in a grid here
      });
    }
  };

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
      }
    });

    return () => unsubscribed();
  }, []);

  return (
    <div>
      <NavigationBar />
      <label htmlFor="file-upload" className="file-upload-button">
        Add Ebook
      </label>
      <input
        type="file"
        id="file-upload"
        accept=".pdf" // You can specify the file types allowed
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <button onClick={uploadFile}>Upload Ebook</button>
      {/* Your file grid goes here */}
    </div>
  );
};







export {FileGrid};