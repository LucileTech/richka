// hooks/useProgressiveImg.ts
import { useState, useEffect } from "react";

const useProgressiveImg = (lowQualitySrc: string, highQualitySrc: string) => {
  const [src, setSrc] = useState<string | undefined>(lowQualitySrc);
  const [blur, setBlur] = useState(true); // Initially blur until high-quality image loads

  useEffect(() => {
    setSrc(lowQualitySrc);
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
      setBlur(false); // Remove blur once high-quality image is loaded
    };
  }, [lowQualitySrc, highQualitySrc]);

  return [src, { blur }] as const; // Use `as const` to preserve tuple type
};

export default useProgressiveImg;
