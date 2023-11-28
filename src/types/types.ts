export type PhotosType = {
  large: string | null;
  small: string | null;
};
export type UserDateType = {
  followed: boolean;
  id: number;
  name: string;
  photos: PhotosType;
  status: string;
  uniqueUrlName: string;
};
export type PostType = {
  id: number;
  text: string;
  likeCount: number;
  img: PhotosType;
};
export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
};
export type DialogType = {
  id: number;
  userName: string;
  isActive: boolean;
};
export type MessageType = {
  id: number;
  text: string;
};
