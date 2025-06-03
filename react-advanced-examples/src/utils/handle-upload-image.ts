// upload-to-uploadcare.ts
import { uploadFile } from '@uploadcare/upload-client';

export const uploadImage = async (file: File): Promise<string | null> => {
  // Use Upload Care API to upload image and return the image URL
  try {
    const result = await uploadFile(file, {
      publicKey: 'e76a92de305590038ff6',
      store: 'auto',
    });

    return result.cdnUrl;
  } catch (error) {
    console.error('Uploadcare error:', error);
    return null;
  }
};
