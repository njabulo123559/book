
import '../Style.css'


import React, { Component } from 'react';
import jsPDF from 'jspdf';
import mammoth from 'mammoth';
import { Document, Packer, Paragraph, TextRun } from "docx";



class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      content: '',
      selectedFormat: 'pdf', // Default format
    };
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleAuthorChange = (e) => {
    this.setState({ author: e.target.value });
  }

  handleContentChange = (e) => {
    this.setState({ content: e.target.value });
  }

  handleFormatChange = (e) => {
    this.setState({ selectedFormat: e.target.value });
  }

  handleSave = () => {
    // You can implement eBook generation and download logic here based on the selected format.
    // For this example, we'll simulate a download link.
    const { title, author, content, selectedFormat } = this.state;
    const ebookData = `${title}\nAuthor: ${author}\n\n${content}`;

    if (selectedFormat === 'pdf') {
        // Create a new jsPDF instance and generate a PDF
        const doc = new jsPDF();
        doc.text(title, 10, 10);
        doc.text(`Author: ${author}`, 10, 20);
        doc.text(content, 10, 30);
        doc.save(`ebook.pdf`);
    }
    else if (selectedFormat === 'docx') {
        const doc = new Document();
    
        // Add content to the Word document
        doc.addSection({
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun(title).bold(),
                new TextRun(`Author: ${author}`),
                new TextRun(content),
              ],
            }),
          ],
        });
    
        // Save the Word document as a file
        Packer.toBlob(doc).then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `ebook.docx`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        });

    }
   


 





  }

  render() {
    return (
      <div className='create-ebook-container'>
        <h2>Create eBook</h2>
        <form>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
          </div>
          <div className="form-group">
            <label>Author:</label>
            <input type="text" value={this.state.author} onChange={this.handleAuthorChange} />
          </div>
          <div className="form-group">
            <label>Ebook Content:</label>
            <textarea value={this.state.content} onChange={this.handleContentChange}></textarea>
          </div>
          <div>
            <label className="form-group">Format:</label>
            <select value={this.state.selectedFormat} onChange={this.handleFormatChange}>
              <option value="pdf">PDF</option>
              <option value="epub">EPUB</option>
              <option VALUE="docx">WORD</option>
            </select>
          </div>
          <button type="button" onClick={this.handleSave}>Save</button>
        </form>
      </div>
    );
  }
}

export { About };
