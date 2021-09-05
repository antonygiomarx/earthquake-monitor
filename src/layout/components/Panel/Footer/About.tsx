import React from "react";
import { nanoid as uuid } from "nanoid";
interface SocialMediaItem {
  title: string;
  url: string;
}

const AboutComponent = () => {
  const socialMediaItems = [
    { title: "Twitter", url: "https://twitter.com/antonygiomarx" },
    { title: "Instagram", url: "https://instagram.com/antonygiomarx" },
    { title: "Github", url: "github.com/antonygiomarx" },
    {
      title: "Donations",
      url: "https://paypal.me/antonygiomarx?locale.x=es_XC",
    },
  ] as SocialMediaItem[];
  return (
    <div className="col-lg-6">
      <ul className="nav nav-footer justify-content-center justify-content-lg-end">
        {socialMediaItems.map(({ title, url }) => {
          return (
            <li className="nav-item" key={uuid()}>
              <a
                href={url}
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AboutComponent;
