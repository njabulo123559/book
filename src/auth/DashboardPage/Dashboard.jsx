import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth, storage } from "../../firebase";
import { NavigationBar } from "../../auth/NavigationBar";
import { listAll, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import "./SubBar.css"

// Import the PNG icons
import pdfIcon from "../../assets/pdf.png";
import wordIcon from "../../assets/word.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]); // Store the list of uploaded files

  const fileInputRef = useRef(null); // Create a ref for the file input element

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
      }
    });

    const storageRef = ref(storage, ""); // Reference to your storage bucket

    listAll(storageRef)
      .then((res) => {
        // Create an array of file URLs
        const filesArray = res.items.map((item) =>
          getDownloadURL(item).then((url) => ({ name: item.name, url }))
        );

        // Resolve all promises and set the state with file URLs
        Promise.all(filesArray).then((files) => setUploadedFiles(files));
      })
      .catch((error) => {
        console.error("Error fetching uploaded files: ", error);
      });

    return () => unsubscribed();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  
    if (file) {
      // Create a reference to Firebase Storage
      const storageRef = ref(storage, file.name);
  
      // Upload the selected file to Firebase Storage
      uploadBytes(storageRef, file)
        .then(() => {
          alert("Ebook saved successfully!");
          // After successful upload, update the list of uploaded files
          setUploadedFiles([...uploadedFiles, { name: file.name }]);
        })
        .catch((error) => {
          console.error("Error uploading file: ", error);
        });
    }
  };
  

  const uploadFile = () => {
    // Programmatically trigger a click event on the hidden file input element
    fileInputRef.current.click();
  };

  return (
    <div className="dashboard-container">
      <NavigationBar />
      <div className="dashboard-header">
        
        <div className="button-container">
        <div class="content">
		      <h2>Ebooks</h2>
		      <h2>Ebooks</h2>
	        </div>
        <div className="dashboard-buttons">
          <button onClick={() => navigate("/ebook")}>Create Ebook</button>
          <button className="book1" onClick={uploadFile}>Add Ebook</button>
          {/* Hidden file input element */}
          <input
            ref={fileInputRef}
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          </div>
        </div>
      </div>
      <div className="uploaded-files">
        {uploadedFiles.map((file, index) => (
          <a key={index} href={file.url} target="_blank" rel="noopener noreferrer">
            <div className="file">
              {file.name.endsWith(".pdf") ? (
                <img src={pdfIcon} width="70" alt="PDF Icon" />
              ) : file.name.endsWith(".docx") ? (
                <img src={wordIcon} width="70" alt="Word Icon" />
              ) : (
                <span>Unknown Icon</span>
              )}
              <span>{file.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export { Dashboard };
