interface moviesProps {
  Title: string;
  averageRating: number;
}

export function ratingDec(
  a: moviesProps,
  b: moviesProps
): number {
  const v1 = a.averageRating;
  const v2 = b.averageRating;

  if (v1 < v2) {
    return 1;
  }
  if (v1 > v2) {
    return -1;
  }
  return 0;
}

export function ratingInc(
  a: moviesProps,
  b: moviesProps
): number {
  const v1 = a.averageRating;
  const v2 = b.averageRating;

  if (v1 > v2) {
    return 1;
  }
  if (v1 < v2) {
    return -1;
  }
  return 0;
}

export function titleDec(a: moviesProps, b: moviesProps): number {
  const v1 = a.Title;
  const v2 = b.Title;

  if (v1 < v2) {
    return 1;
  }
  if (v1 > v2) {
    return -1;
  }
  return 0;
}

export function titleInc(a: moviesProps, b: moviesProps): number {
  const v1 = a.Title;
  const v2 = b.Title;

  if (v1 > v2) {
    return 1;
  }
  if (v1 < v2) {
    return -1;
  }
  return 0;
}
