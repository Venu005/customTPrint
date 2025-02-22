"use client";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { useUploadThing } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

const Page = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isdragOver, setisDragOver] = useState<boolean>(false);

  const [isPending, startTransition] = useTransition();
  //uploading progress for progress bar
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  // functions for what to do after dropping rejected or accepted
  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: ([data]) => {
      const configId = data.serverData.configId; //type safety
      startTransition(() => {
        router.push(`/configure/design/?id=${configId}`);
      });
    },
    onUploadProgress(p) {
      setUploadProgress(p);
    },
  });
  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles;
    setisDragOver(false);
    toast({
      title: `${file.file.type} type is not supported`,
      description: "Please use a PNG, JPG, JPEG image instead",
      variant: "destructive",
    });
  };
  const onDropAccepted = (acceptedFiles: File[]) => {
    startUpload(acceptedFiles, { configId: undefined });
    setisDragOver(false);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={cn(
          "relative h-[70vh] w-[70vw] rounded-xl bg-gray-900/5 p-4 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
          {
            "ring-blue-900/25 bg-blue-900/10": isdragOver,
          }
        )}
      >
        <div className="relative flex flex-1 flex-col justify-center w-full">
          <Dropzone
            onDropRejected={onDropRejected}
            onDropAccepted={onDropAccepted}
            accept={{
              "image/png": [".png"],
              "image/jpg": [".jpg"],
              "image/jpeg": [".jpeg"],
            }}
            //* onDragEnter and onDragLeave are from react alone
            onDragEnter={() => setisDragOver(true)}
            onDragLeave={() => setisDragOver(false)}
          >
            {({ getRootProps, getInputProps }) => (
              <div
                className="h-[80%] w-full flex flex-1 flex-col items-center justify-center"
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {isdragOver ? (
                  <MousePointerSquareDashed className="h-6 w-6 text-zinc-500 mb-2" />
                ) : isUploading || isPending ? (
                  <Loader2 className="animate-spin h-6 w-6 mb-2 text-zinc-500 " />
                ) : (
                  <Image className="h-6 w-6 text-zinc-500 mb-2" />
                )}
                <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
                  {isUploading ? (
                    <div className="flex flex-col items-center">
                      <p>Uploading...</p>
                      <Progress
                        value={uploadProgress}
                        className="mt-2 w-40 h-2 bg-gray-300"
                      />
                    </div> //checking isPending
                  ) : isPending ? (
                    <div className="flex flex-col items-center">
                      <span>Please wait redirecting</span>
                    </div>
                  ) : //  when user is dragging  file
                  isdragOver ? (
                    <p>
                      <span className="font-semibold">Drop file</span> to upload
                    </p>
                  ) : (
                    // init stage
                    <p>
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                  )}
                </div>
                {isPending ? null : (
                  <p className="text-xs text-zinc-500">PNG, JPG, JPEG</p>
                )}
              </div>
            )}
          </Dropzone>
        </div>
      </div>
    </div>
  );
};

export default Page;
