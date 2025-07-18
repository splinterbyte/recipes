import ContentLoader, { Rect } from 'react-content-loader/native';

export const Skeleton = () => (
  <ContentLoader
    speed={0.7}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <Rect x="10" y="0" rx="15" ry="15" width="390" height="133" />
  </ContentLoader>
);
