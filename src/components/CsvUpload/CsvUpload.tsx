import { Dispatch, SetStateAction, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { DocumentTextIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/utils/helper-functions";
type FileUploadProps = {
  files: File | undefined;
  setFiles: Dispatch<React.SetStateAction<File | undefined>>;
};

export const CsvUpload = ({ files, setFiles }: FileUploadProps) => {
  const handleFileChange = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFiles(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleFileChange,
    accept: {
      "text/csv": [".csv"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={classNames(
        isDragActive ? "border-blue-500" : "",
        "mt-6 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14  xl:px-16 xl:pb-20 xl:pt-16"
      )}
    >
      <div>
        <input {...getInputProps()} />

        {isDragActive && (
          <p className="text-center font-normal">Drop CSV file here...</p>
        )}
        {files ? (
          <div>
            <div className="flex flex-row justify-center">
              <DocumentTextIcon className="h-5 w-5 shrink-0 cursor-pointer" />
            </div>
            <div className="mt-4 flex flex-row items-center gap-3">
              <p className="">{files.name}</p>
              <XMarkIcon
                className="text-red-500 h-5 w-5 shrink-0 cursor-pointer"
                onClick={() => setFiles(undefined)}
              />
            </div>
          </div>
        ) : (
          <>
            <p className="mt-6 text-sm text-center font-normal leading-7 text-black">
              Upload a CSV file or drag and drop
            </p>

            <p className="mt-2 text-sm text-center font-normal leading-7 text-black">
              only CSV accepted
            </p>
          </>
        )}
      </div>
    </div>
  );
};
