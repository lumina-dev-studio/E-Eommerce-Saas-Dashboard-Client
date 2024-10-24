// import React, { useRef } from 'react';



// const ImageUploader= ({ oldImages, setImageFiles,condition }:any) => {
//   const dropzoneRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);
//   console.log(oldImages,'old')

//   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     dropzoneRef.current?.classList.add('border-indigo-600');
//   };

//   const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     dropzoneRef.current?.classList.remove('border-indigo-600');
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     dropzoneRef.current?.classList.remove('border-indigo-600');
//     const files = Array.from(e.dataTransfer.files);
//     files.forEach(displayPreview);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = Array.from(e.target.files || []);
//     files.forEach(displayPreview);
//   };

//   const displayPreview = (file: File) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       const imageUrl = reader.result as string; // Get the Data URL

//       // Check for duplicates before updating state
//       setImageFiles((prev: string[]) => {
//         const allImages = new Set([...prev, ...(oldImages || [])]); // Use Set to avoid duplicates
//         allImages.add(imageUrl); // Add the new image URL

//         console.log(Array.from(allImages)); // Log unique images
//         return Array.from(allImages); // Convert Set back to Array
//       });
//     };
//   };

//   return (
//     <div>
//       <div
//         className={`${condition==="NewCategory"?"p-20 border-blue-300 rounded-xl":" py-6 px-3 border-gray-300 rounded-lg "} w-full h-full relative border-2  border-dashed  `}
//         id="dropzone"
//         ref={dropzoneRef}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={handleDrop}
//       >
//         <input
//           type="file"
//           className="absolute inset-0 w-full h-full opacity-0 z-50"
//           ref={inputRef}
//           onChange={handleInputChange}
//           multiple // Allow multiple file uploads
//         />
//         <div className="text-center w-full">
//           <img
//             className="mx-auto h-[70px] w-[70px]"
//             src="/ImageUploader/Fotolia_128673803_Subscription_Monthly_M-removebg-preview.png"
//             alt="Upload Icon"
//           />
//           <h3 className="text-sm font-medium text-gray-900">
//             <label htmlFor="file-upload" className="relative cursor-pointer">
//               <p className="text-gray-400 text-[13px]" style={{ fontFamily: 'var(--font-inter)' }}>
//                 Drop your images here or <span className="text-blue-500">click to browse</span>
//               </p>
//               <input
//                 id="file-upload"
//                 name="file-upload"
//                 type="file"
//                 className="sr-only"
//                 ref={inputRef}
//                 onChange={handleInputChange}
//                 multiple
//               />
//             </label>
//           </h3>
//         </div>
//       </div>

      
     
//     </div>
//   );
// };

// export default ImageUploader;








import React, { useRef } from 'react';

const ImageUploader = ({ oldImages, setImageFiles, condition }: any) => {
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(oldImages, 'old');

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dropzoneRef.current?.classList.add('border-indigo-600');
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dropzoneRef.current?.classList.remove('border-indigo-600');
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dropzoneRef.current?.classList.remove('border-indigo-600');
    const files = Array.from(e.dataTransfer.files);
    uploadImages(files);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    uploadImages(files);
  };

  const uploadImages = async (files: File[]) => {
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=8460cd1a14bf680b3bf68fe6e9950c8d`;

    // Create an array of promises for each image upload
    const uploadPromises = files.map(async (file) => {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch(image_hosting_url, {
        method: 'POST',
        body: formData,
      });

      const imageResponse = await response.json();

      // Check if the image upload was successful
      if (imageResponse.success) {
        return imageResponse.data.display_url; // Return the image URL
      } else {
        throw new Error(`Image upload failed: ${imageResponse.message || 'Unknown error'}`);
      }
    });

    try {
      const imageUrls = await Promise.all(uploadPromises); // Wait for all uploads
      setImageFiles((prev: string[]) => [...prev, ...imageUrls]); // Update state with new image URLs
      console.log(imageUrls, 'Uploaded images');
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  return (
    <div>
      <div
        className={`${condition === 'NewCategory' ? 'p-20 border-blue-300 rounded-xl' : 'py-6 px-3 border-gray-300 rounded-lg'} w-full h-full relative border-2  border-dashed`}
        id="dropzone"
        ref={dropzoneRef}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 z-50"
          ref={inputRef}
          onChange={handleInputChange}
          multiple // Allow multiple file uploads
        />
        <div className="text-center w-full">
          <img
            className="mx-auto h-[70px] w-[70px]"
            src="/ImageUploader/Fotolia_128673803_Subscription_Monthly_M-removebg-preview.png"
            alt="Upload Icon"
          />
          <h3 className="text-sm font-medium text-gray-900">
            <label htmlFor="file-upload" className="relative cursor-pointer">
              <p className="text-gray-400 text-[13px]" style={{ fontFamily: 'var(--font-inter)' }}>
                Drop your images here or <span className="text-blue-500">click to browse</span>
              </p>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                ref={inputRef}
                onChange={handleInputChange}
                multiple
              />
            </label>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
