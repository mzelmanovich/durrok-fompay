export const mapToJumbo = (apiArr) =>
apiArr.map(data => ({
  src: data.jumboImg,
  h3: data.artist ? data.artist.name : 'UNKNOWN',
  p: data.name
}));
