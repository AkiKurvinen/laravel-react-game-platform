import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

class ClassGalleryItem {
  constructor(
    original,
    thumbnail,
    desc = "gallery image",
    videoId
  ) {
    this.original = `./img/original/${original}`;
    this.thumbnail = `./img/thumb/${thumbnail ? thumbnail : original}`;
    this.desc = desc;
    this.videoId = videoId
      ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&wmode=Opaque&enablejsapi=1`
      : undefined;
    this.thumbnailUrl = videoId ? "https://img.youtube.com/vi/" + videoId + "/0.jpg" : undefined;
  }
}

const gallery_base = (
  thumbnailSize,
  aspectRatio
) => css`
  text-align: center;
  width: 100%;
  height: 100%;
  max-width: 600px;
  min-width: 345px;
  .thumbs {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    margin-top: 0.5em;
  }
  .thumbs div {
    box-sizing: border-box;
    height: auto;
    display: inline-block;
    opacity: 0.95;
    border-bottom: solid 4px white;
    object-fit: cover;
    width: ${thumbnailSize.width};
    height: ${thumbnailSize.height};
  }
  .thumbs div img {
    width: 100%;
    height: 100%;
    max-width: unset;
    object-fit: cover;
  }
  .thumbs div:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  .thumbs .selected {
    border-color: var(--primary);
    pointer-events: none;
  }
  .embed-container {
    position: relative;
    padding-bottom: ${(parseInt(aspectRatio.split("/")[1]) /
      parseInt(aspectRatio.split("/")[0])) *
    100}%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    object-fit: contain;
    display: block;
  }
  .embed-container iframe,
  .embed-container object,
  .embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }
  .display {
    aspect-ratio: ${aspectRatio};
    overflow: hidden;
    width: 100%;
  }
  .slide {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: grid;
    place-items: center;
  }
  .slide img {
    object-fit: contain;
    width: 100%;
    height: 100% !important;
    max-width: 100%;
    max-height: 100%;
  }
  @media screen and (max-width: 800px) {
    min-width: unset;
    .thumbs {
      margin-top: 0.25em;
      gap: 0.25em;
    }
  }
`;

function renderGalleryDisplay(item) {
  if (item.videoId) {
    return (
      <div className="embed-container displaynone">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${item.videoId}?rel=0&wmode=Opaque&enablejsapi=1`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
  return (
    <div className="slide" key={item.original}>
      <img
        src={`./img/original/${item.original}`}
        alt={item.desc}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "https://augergames.com/img/augericon.png";
        }}
      />
    </div>
  );
}

const StyledGallery = ({ images, className = "gallery", aspectRatio, thumbnailSize }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  function renderGalleryThumbnail(item, index) {
    const galleryItem = new ClassGalleryItem(
      item.original,
      item.thumbnail,
      item.desc,
      item.videoId
    );

    if (galleryItem.videoId) {
      return (
        <div
          className={
            currentImage.original == images[index].original ? "selected" : ""
          }
          key={index}
          onClick={() => setCurrentImage(images[index])}
        >
          <img
            src={galleryItem.thumbnailUrl}
            alt={galleryItem.desc}
            key={index + 100}
          />
        </div>
      );
    } else {
      return (
        <div
          className={
            currentImage.original == images[index].original ? "selected" : ""
          }
          key={index}
          onClick={() => setCurrentImage(images[index])}
        >
          <img
            src={galleryItem.thumbnail}
            alt={galleryItem.desc}
            key={index + 100}
          />
        </div>
      );
    }
  }
  return (
    <div className={className}>
      <div className="display">{renderGalleryDisplay(currentImage)}</div>
      {images.length > 1 && images && (
        <div className="thumbs">
          {images.map((link, idx) => {
            return renderGalleryThumbnail(link, idx);
          })}
        </div>
      )}
    </div>
  );
};

export const Gallery = styled(StyledGallery)`
  ${(props) =>
    gallery_base(
      props.thumbnailSize
        ? props.thumbnailSize
        : { width: "80px", height: "80px" },
      props.aspectRatio ? props.aspectRatio : "1/1"
    )};
`;