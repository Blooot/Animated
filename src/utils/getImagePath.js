export const getImagePath = (local, name) => {
  return require(`../Views/BlogPosts/${local}/assets/${name}`);
};
