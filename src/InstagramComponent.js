import React from "react";

const InstagramLink = () => {
  const instagramUsername = "thehair_reaper"; // Your Instagram username

  // Construct the Instagram URL
  const instagramURL = `https://www.instagram.com/${instagramUsername}`;

  return (
    <div>
      <h3 style={{ fontFamily: "Arial, sans-serif" }}>
        Follow Me On{" "}
        <a href={instagramURL} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </h3>
    </div>
  );
};

export default InstagramLink;
