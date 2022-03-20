import ContentLoader from 'react-content-loader';

export default function Skeleton() {
  return (
    <ContentLoader
      speed={2}
      width={900}
      height={101}
      viewBox="0 0 900 101"
      backgroundColor="#f3f3f3"
      foregroundColor="#b0b0b0">
      <rect x="97" y="95" rx="0" ry="0" width="0" height="1" />
      <rect x="96" y="96" rx="0" ry="0" width="1" height="0" />
      <rect x="100" y="283" rx="0" ry="0" width="10" height="2" />
      <rect x="89" y="281" rx="0" ry="0" width="21" height="1" />
      <rect x="167" y="237" rx="0" ry="0" width="0" height="1" />
      <rect x="289" y="130" rx="0" ry="0" width="0" height="1" />
      <rect x="265" y="257" rx="0" ry="0" width="2" height="0" />
      <rect x="44" y="24" rx="0" ry="0" width="110" height="41" />
      <rect x="386" y="31" rx="0" ry="0" width="30" height="20" />
      <rect x="435" y="31" rx="0" ry="0" width="30" height="20" />
      <rect x="487" y="31" rx="0" ry="0" width="30" height="20" />
      <rect x="538" y="30" rx="0" ry="0" width="30" height="20" />
    </ContentLoader>
  );
}
