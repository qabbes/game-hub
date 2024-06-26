import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  if (url === null || url.length === 0) return noImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const cropSize = "crop/600/400/";
  return url.slice(0, index) + cropSize + url.slice(index);
};

export default getCroppedImageUrl;
