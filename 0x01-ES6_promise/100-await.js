/*
 * a module contain function defination
 */

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const res = {};
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    res.photo = photo;
    res.user = user;
  } catch (error) {
    res.photo = null;
    res.user = null;
  }

  return res;
}
