import likesModel from "./likes-model.js";

export const createLike = async (like) => {
  const newLike = await likesModel.create(like);
  return newLike;
};

export const findLikeByAlbumId = async (albumId) => {
  const likes = await likesModel.find({ albumId });
  return likes;
};

export const findLikesByUserId = async (userId) => {
  const likes = await likesModel.find({ userId });
  return likes;
};
