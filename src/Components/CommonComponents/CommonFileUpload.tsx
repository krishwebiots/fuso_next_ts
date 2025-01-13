import { DragDrop, FileTitle, MorefileAdd } from "@/Constants/Constants";
import React, { Fragment, useState } from "react";
import Dropzone from "react-dropzone";

const CommonFileUpload: React.FC<{ multiple?: boolean }> = ({ multiple }) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  const removeFile = (indexToRemove: number) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, index) => index !== indexToRemove));
  };

  return (
    <Fragment>
      {uploadedFiles.length === 0 ? (
        <Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className='dropzone-container'>
              <input {...getInputProps()} />
              <p>{DragDrop}</p>
            </div>
          )}
        </Dropzone>
      ) : (
        <Fragment>
          {multiple && (
            <Dropzone onDrop={onDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className='add-more-files-zone'>
                  <input {...getInputProps()} />
                  <p>{MorefileAdd}</p>
                </div>
              )}
            </Dropzone>
          )}

          <div className='uploaded-files'>
            {uploadedFiles.map((file, index) => (
              <div key={index} className='file-card'>
                {file.type.startsWith("image/") ? (
                  <img src={URL.createObjectURL(file)} alt={file.name} className='file-thumbnail' />
                ) : (
                  <div className='file-placeholder'>
                    {file.name.split(".").pop()?.toUpperCase()} {FileTitle}
                  </div>
                )}
                <p className='file-name'>{file.name}</p>
                <p className='file-size'>{(file.size / 1024).toFixed(2)} KB</p>
                <button onClick={() => removeFile(index)} className='remove-button' title='Remove file'>
                  ×
                </button>
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CommonFileUpload;
