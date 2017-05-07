export const mapToGrid = (apiArr) =>
apiArr.map(data => ({
  id: data.id,
  src: data.imgURL,
  p: data.name,
  to: `/genres/${data.id}/albums`
}));


