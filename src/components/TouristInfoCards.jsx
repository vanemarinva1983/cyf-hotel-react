import React from "react";

const cities = [
  {
    picture:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/73/7a/5b/st-mungo-mural-realizzato.jpg?w=300&h=300",
    nameCountry: "Glasgow",
    review:
      "As Scotland’s largest city, Glasgow is famed for its culture, shopping and people. Spend your day exploring a wide range of fascinating free museums and galleries, enjoying the UK’s best shopping outside of London, and taking advantage of tips from friendly local people. ",
    link: "https://peoplemakeglasgow.com/"
  },
  {
    picture:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/74/eb/88/caption.jpg?w=300&h=300",
    nameCountry: "Manchester",
    review:
      "Manchester, the third largest city in England, is rooted in industry and expressionism. It was here where the Industrial Revolution began and where many of the UK’s most revered musical talents were born. Today, this spirit lives on in a thriving media industry and an array of fascinating museums. ",
    link: "https://www.visitmanchester.com/"
  },
  {
    picture:
      "https://c.ststat.net/content/entimg/homepagemodule/--972546745-300x300.jpg",
    nameCountry: "London",
    review:
      "London is a very populous city (18 million in 2016) with a great history, cultural heritage and large economy. It is the largest European metropolis both by population (except Moscow) and GDP, and Europe's dominant financial centre, although this is expected to change following Brexit.",
    link: "https://visitlondon.com/"
  }
];

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      {cities.map(city => (
        <div key={city.cityName} className="card">
          <img
            src={city.picture}
            className="card-img-top"
            alt="city picture"
            rel="noopener noreferrer"
          />
          <div className="card-body">
            <h2>{city.cityName}</h2>
            <p>{city.review}</p>
            <a
              href={city.link}
              className="btn btn-primary"
              target="blank"
              rel="noopener noreferrer"
            >
              Go somewhere
            </a>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default TouristInfoCards;
