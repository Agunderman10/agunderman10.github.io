interface Props {
  href: string;
  alt: string;
  src: string;
}

export const ClickableImage = ({ href, alt, src }: Props) => {
  return (
    <a href={href}>
      <img alt={alt} className="socialsImage" src={src} />
    </a>
  );
};
