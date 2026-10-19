/** Share images are generated at build time by src/app/og/[image]/route.tsx. */
export function ogImagePath(key: string) {
  return `/og/${key}.png`;
}
