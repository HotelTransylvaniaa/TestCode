import React from "react";

const About = () => {
  return (
    <>
      <div className="container my-3">
        <div className="row justify-content-between">
          <div className="my-3">
            <h2>Hotels</h2>
            <p>
              Here at lastminute.com, we know hotels, and we aim to bring you
              the best price on a last minute booking. From modern apartments
              and traditional guesthouses to well-known brands and boutique
              accommodations; we’ve got a great choice of places to stay. If
              you’re looking to save a bit of money on your holiday, check out
              our selection of cheap rooms, or if you want to celebrate in
              style, take a look at our 5-star luxury hotels. You could even
              treat yourself to some pampering on one of our spa breaks.
            </p>
          </div>
          <div className="mb-3">
            <h2>Why book our hotels?</h2>
            <p>
              By booking your hotel room through us, you’re sure to get a great
              deal thanks to our Price Match Guarantee, and we have plenty of
              regular offers to help you save more. If you find your hotel
              cheaper on any other UK website within 24 hours, we will give you
              the difference. Conditions apply. With Top Secret Hotels, you can
              enjoy a night in a great hotel room for a fraction of the regular
              price, while our promo codes offer fantastic discounts.{" "}
            </p>
          </div>
          <h2 className="text-center">Travel with confidence</h2>
          <p className="text-center mb-5">
            Many properties have updated us about their enhanced health and
            safety measures. So, during your search, you may find details like:
          </p>
          <div className="col">
            <div className="shadow px-2 border text-center py-5 bg-light rounded">
              <h2>Official health standards</h2>
              <p>
                Properties adhering to corporate/organizational sanitization
                guidelines.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="shadow px-2 border text-center py-5 bg-light h-100 rounded">
              <h2>Essentials at the property</h2>
              <p>
                Free hand sanitizer for guests and individually wrapped food
                options.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="shadow px-2 border text-center py-5 bg-light h-100 rounded">
              <h2>Social distancing</h2>
              <p>
                Contactless check-in and check-out along with other social
                distancing measures.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="shadow px-2 border text-center py-5 bg-light h-100 rounded">
              <h2>Hygiene and sanitization</h2>
              <p>
                The use of disinfectant and whether properties enforce a gap
                period between stays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
