export function makeImagePath(id) {
  return `https://image.tmdb.org/t/p/original/${id}`;
}

export function makeTrailerPath(key) {
  return `https://www.youtube.com/embed/${key}`;
}
