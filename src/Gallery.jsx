import React, { useState } from "react";
import Card from "./components/galleryCard/Card";
import Menu from "./Menu";
import GalleryList from "./GalleryList";

const Gallery = () => {
  // just for getting single category button
  const [item, setItem] = useState(Menu);

  const allCurrent = [...new Set(Menu.map((va) => va.category)), "all"];

  const [currentval, setCurrentVal] = useState(allCurrent);

  const selectGallery = (valu) => {
    if (valu === "all") {
      setItem(Menu);
      return;
    }
    const updateValue = Menu.filter((currentElement) => {
      return currentElement.category === valu;
    });
    setItem(updateValue);
  };

  return (
    <>
      <section className="gallery">
        <div className="gallery-sec">
          <h1
            style={{
              marginTop: "1em",
              marginBottom: "1em",
              textAlign: "center",
              fontFamily: "fantasy",
              fontSize: "3em",
            }}
          >
            Pets Gallery
          </h1>
          <div className="menu-tabs container mt-5">
            {/* button list component */}
            <GalleryList selectGal={selectGallery} currentval={currentval} />
          </div>

          <div className="menu-item container-fluid">
            <div className="row">
              <div className="col-11 mx-auto">
                <div className="card-listing row my-5">
                  {item.map((val) => {
                    return (
                      <Card
                        key={val.id}
                        im={val.imag}
                        na={val.name}
                        cat={val.category}
                        pri={val.price}
                        dic={val.discription}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
