import React from "react";

const AboutComponent = () => {
  const items = [
    { title: "Twitter", url: "https://twitter.com/antonygiomarx" },
    { title: "Instagram", url: "https://instagram.com/antonygiomarx" },
    { title: "Github", url: "github.com/antonygiomarx" },
    {
      title: "Donations",
      url: "https://paypal.me/antonygiomarx?locale.x=es_XC",
    },
  ];
  return (
    <div className="col-lg-6">
      <ul className="nav nav-footer justify-content-center justify-content-lg-end">
        {items.map(({ title, url }, i) => {
          return (
            <li className="nav-item" key={i}>
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
