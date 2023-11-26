export type PhotosType = {
  large: string | null;
  small: string | null;
};
export type UserDateType = {
  followed: boolean;
  id: number | null;
  name: string | null;
  photos: PhotosType;
  status: string | null;
  uniqueUrlName: string | null;
};
export type PostType = {
  id: number | null;
  text: string | null;
  likeCount: number | null;
  img: PhotosType
};
export type ContactsType = {
  github: string | null;
  vk: string | null;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  youtube: string | null;
  mainLink: string | null;
};
export type ProfileType = {
  userId: number
  lookingForAJob: boolean;
  lookingForAJobDescription: string 
  fullName: string 
  contacts: ContactsType;
  photos: PhotosType;
};
export type DialogType = {
  id: number | null;
  userName: string | null;
  isActive: boolean | null;
};
export type MessageType = {
  id: number | null;
  text: string | null;
};
