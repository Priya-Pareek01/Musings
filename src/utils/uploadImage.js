import { storage } from '@/utils/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const uploadImage = (file, onProgress, onError, onSuccess) => {
  const storageRef = ref(storage, `${Date.now()}_${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      onProgress(progress);
    },
    (error) => {
      onError(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        onSuccess(downloadURL);
      });
    }
  );
};

export default uploadImage;
