"use client";
import { useRouter } from "next/navigation";
import { useState, useMemo, useCallback, useContext } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { useTheme } from "next-themes";
import Button from "@/components/Button";
import images from "@/public/assets";
import Input from "@/components/Input";
const Page = () => {
  const [filUrl, setFileUrl] = useState(null);
  const [formInput, setformInput] = useState({
    price: "",
    name: "",
    description: "",
  });
  console.log(formInput);
  const { theme } = useTheme();
  const onDrop = useCallback(() => {}, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    // @ts-ignore
    accept: "image/*",
    maxSize: 5000000,
  });
  const fileStyle = useMemo(
    () =>
      `dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed
    ${isDragActive ? "border-file-active" : ""}
    ${isDragAccept ? "border-file-accept" : ""}
    ${isDragReject ? "border-file-reject" : ""}
    `,
    [isDragActive, isDragAccept, isDragReject]
  );
  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
          Create new NFT
        </h1>
        <div className="mt-16">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
            Upload File
          </p>
          <div className="mt-4">
            <div {...getRootProps()} className={fileStyle}>
              <input {...getInputProps()} />
              <div className="flexCenter flex-col text-center ">
                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
                  JPG, PNG, GIF , SVG , WEBM Max 100mb.
                </p>
                <div className="my-12 w-full flex justify-center">
                  <Image
                    src={images.upload}
                    alt="upload"
                    width={100}
                    height={100}
                    objectFit="contain"
                    className={theme === "light" ? "filter invert" : ""}
                  />
                </div>
                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm">
                  Drag and Drop File
                </p>
                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm">
                  or Browse media on your device
                </p>
              </div>
            </div>
            {filUrl && (
              <aside>
                <div>
                  <Image src={filUrl} alt="asset_file" />
                </div>
              </aside>
            )}
          </div>
        </div>
        <Input
          inputType="input"
          title="Name"
          placeholder="NET Name"
          handleClick={(e: any) =>
            setformInput({
              ...formInput,
              name: e.target.value,
            })
          }
        />
        <Input
          inputType="textarea"
          title="Description"
          placeholder="NET Description"
          handleClick={(e: any) =>
            setformInput({
              ...formInput,
              description: e.target.value,
            })
          }
        />
        <Input
          inputType="number"
          title="Price"
          placeholder="NET Price"
          handleClick={(e: any) =>
            setformInput({
              ...formInput,
              price: e.target.value,
            })
          }
        />
        <div className="mt-7 w-full flex justify-end">
          <Button
            btnName="Create NFT"
            classStyles="rounded-xl"
            handleClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
