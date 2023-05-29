import React, { useState } from "react";
import CustomFooter from "../../components/Footer/Footer";
import CustomNavbar from "../../components/Navbar/Navabr";
import Search from "../../components/Search/Search";
import "./About.css";

const About = () => {
  const [showFullParagraph, setShowFullParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowFullParagraph(!showFullParagraph);
  };

  const renderParagraph = (paragraph) => {
    if (showFullParagraph) {
      return paragraph;
    }
    return paragraph.slice(0, paragraph.length / 2) + "...";
  };
  return (
    <div>
      <div className="homecontainer">
        <div className="backgroundImg1">
          <CustomNavbar />
          <div className="container">
            <div className="row mt-6">
              <div className="col-lg-6">
                <div className="para-heading text-white custom-underline">
                  A New Kind of Bond
                </div>
                <p className="about-para text-white">
                  {renderParagraph(
                    `Midani is a platform that combines sports teams with their
                  fans and vice versa! Technology is spreading all over the
                  market including sports. Hence, Midani gives the opportunity
                  to both sports givers and receivers to engage in all means
                  related to digital platforms. It comes back with benefits to
                  both sides by providing them with their needs. On one hand,
                  fans will reach, support and stay updated on all the
                  announcements their team might publish, while on the other
                  hand sports teams and clubs will have the advantage of
                  spreading all over the digital world, reaching out to their
                  fans and approaching revenues.`
                  )}
                  {showFullParagraph || (
                    <button
                      className="btn btn-link text-white"
                      onClick={toggleParagraph}
                    >
                      Read More
                    </button>
                  )}
                </p>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <img
                  src="/images/iPhone14-0.svg"
                  className="img-fluid bg-black mobile-border"
                  alt="Responsive"
                ></img>
              </div>
            </div>
            <div className="row mt-6">
              <div className="col-lg-6 d-flex justify-content-center">
                <img
                  src="/images/iPhone14-1.svg"
                  className="img-fluid bg-black mobile-border"
                  alt="Responsive"
                ></img>
              </div>
              <div className="col-lg-6">
                <div className="para-heading text-white custom-underline">
                  What does Midani do?
                </div>
                <p className="about-para text-white">
                  {renderParagraph(
                    `  Midani is mainly a keyboard app that combines many features
                  that facilitate for sports fans, above all, the way to seek,
                  reach and connect with their favorite team. The user himself
                  will be the lead, in other words, he will be able to control
                  everything on this app. The word user here is not just limited
                  to fans because as we discussed previously, clubs and teams
                  play a huge role in making up this application. It allows the
                  user to customize his own keyboard whether by choosing
                  backgrounds and photos of his favorite team or adjusting and
                  modifying keyboard characters the way he likes. However, it
                  does not end here, because is going to be a huge platform that
                  has a clear aim: Bonding fans and clubs. It will surely have a
                  space that allows clubs and teams to insert and update their
                  fans with all the information, ticket selling, products, and
                  brands merchandising, and all the forms needed as a means of
                  communication. Why use a traditional keyboard and browser when
                  you can have them both in an app specially made to meet your
                  expectations.`
                  )}
                  {showFullParagraph || (
                    <button
                      className="btn btn-link text-white"
                      onClick={toggleParagraph}
                    >
                      Read More
                    </button>
                  )}
                </p>
              </div>
            </div>
            <div className="row mt-6">
              <div className="col-lg-6">
                <div className="para-heading text-white custom-underline">
                  What problem do we solve?
                </div>
                <p className="about-para text-white">
                  {renderParagraph(
                    `If we really need to put it under the title “problem”, it
                  would be the lack of direct and easy communication between
                  fans and their favorite teams. It is to be considered the road
                  that links both parties, by providing the fans the freedom to
                  customize and surf through the world of sports that they and
                  by giving the clubs/teams the opportunity to reach out to
                  their fans and come back with a pleasing claim from marketing
                  plans, advertisements, and sponsorships. The solution here is
                  technology, since everything is rolling over the digital
                  planet; we ourselves have customized a new planet for sports
                  lovers! What is better known as good communication than a
                  specialized chat box for the club community? We surely offer
                  it in Midani!`
                  )}
                  {showFullParagraph || (
                    <button
                      className="btn btn-link text-white"
                      onClick={toggleParagraph}
                    >
                      Read More
                    </button>
                  )}
                </p>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <img
                  src="/images/iPhone14-2.svg"
                  className="img-fluid bg-black mobile-border"
                  alt="Responsive"
                ></img>
              </div>
            </div>
            <div className="row mt-6">
              <div className="col-lg-6 d-flex justify-content-center">
                <img
                  src="/images/iPhone14-1.svg"
                  className="img-fluid bg-black mobile-border"
                  alt="Responsive"
                ></img>
              </div>
              <div className="col-lg-6">
                <div className="para-heading text-white custom-underline">
                  What makes us special?
                </div>
                <p className="about-para text-white">
                  {renderParagraph(`Other than being the only app specialized for sports needs and
                  communication in the Middle East, Midani allows the user to
                  build up his own favourite team in an app, it helps him
                  communicate with other users having the same interests and it
                  gives him the ability to purchase anything offered by his
                  team/club. This will give a huge chance for confident
                  engagement between both sides. A fan will admire a technology
                  that connects him to his desires; consequently, what satisfies
                  a club or a team other than a pleased crowd. Midani is going
                  to corner the market; it is a one-of-a-kind app that will
                  definitely flip the marketplace of sports by providing the
                  best quality needed to satisfy all its users.`)}
                  {showFullParagraph || (
                    <button
                      className="btn btn-link text-white"
                      onClick={toggleParagraph}
                    >
                      Read More
                    </button>
                  )}
                </p>
              </div>
            </div>
            <div className="row mt-6">
              <div className="col-lg-6">
                <div className="para-heading text-white custom-underline">
                  Why should someone download Midani rather than something else?
                </div>
                <p className="about-para text-white">
                  {renderParagraph(`We are all familiar with the sentence that says, “One size
                  fits all”. Well, with Midani it is indeed a great fit! Thanks
                  to being all based on customization to meet the client’s
                  needs, Midani is like no other app. Apart from being totally
                  complementary to its users, it works as a full-functioning
                  platform and covers almost all means of social
                  media-sports-related links, sites, and visuals. You choose
                  Midani so it can ease up your work in reaching and staying in
                  touch with anything related or released by your team, by just
                  one click, you are there, being the fan, leader, and playmaker
                  of your own field. With Midani whether you are a fan or a
                  team, you are always a priority for us in the means of
                  innovation and modernization.`)}
                  {showFullParagraph || (
                    <button
                      className="btn btn-link text-white"
                      onClick={toggleParagraph}
                    >
                      Read More
                    </button>
                  )}
                </p>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <img
                  src="/images/iPhone14-4.svg"
                  className="img-fluid bg-black mobile-border"
                  alt="Responsive"
                ></img>
              </div>
            </div>
            <div className="row mt-6">
              <div className="col-lg-6 d-flex justify-content-center">
                <img
                  src="/images/iPhone14-5.svg"
                  className="img-fluid bg-black mobile-border"
                  alt="Responsive"
                ></img>
              </div>
              <div className="col-lg-6">
                <div className="para-heading text-white custom-underline">
                  Our platforms
                </div>
                <p className="about-para text-white">
                  {renderParagraph(`Midani is the new technology bond for sports lovers and their
                  teams. A sports customizable keyboard app that has uncountable
                  features for both teams and fans. Build your team keyboard,
                  stay updated, follow matches, chat with your community, and
                  buy tickets and products! With Midani, whether you are a team
                  or a fan you have the ability to lead. It is complimentary,
                  satisfying and worth trying!`)}
                  {showFullParagraph || (
                    <button
                      className="btn btn-link text-white"
                      onClick={toggleParagraph}
                    >
                      Read More
                    </button>
                  )}
                </p>
              </div>
            </div>
            <div className="row mt-6">
              <div className="col-lg-6">
                <div className="para-heading text-white custom-underline">
                  No one gets you closer than us
                </div>
                <p className="about-para text-white">
                  {renderParagraph(`This new fan experience is the best because we work with the
                  best in the business to deliver a mutually beneficial
                  solution. It’s simple: our partners’ content is valuable to
                  fans, our fans are valuable to our partners, who sharpen their
                  content to give our fans even more value and on and on it
                  goes. A virtuous cycle where everybody wins: fans,
                  advertisers, broadcasters, publishers, clubs, leagues,
                  federations and players.`)}
                  {showFullParagraph || (
                    <button
                      className="btn btn-link text-white"
                      onClick={toggleParagraph}
                    >
                      Read More
                    </button>
                  )}
                </p>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <img
                  src="/images/iPhone14-6.svg"
                  className="img-fluid bg-black mobile-border"
                  alt="Responsive"
                ></img>
              </div>
            </div>
            <div>
              <div className=" d-flex justify-content-center mb-4">
                <div className="custom-underline-text">
                  Why fans love Midani
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="/images/Vector.png"
                  className="img-fluid"
                  alt="Responsive"
                />
                <p className="ml-2 text-white">Non-stop News</p>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-2">
                <img
                  src="/images/Vector.png"
                  className="img-fluid"
                  alt="Responsive"
                />
                <p className="ml-2 text-white">Personalized feed of sports</p>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-2">
                <img
                  src="/images/Vector.png"
                  className="img-fluid"
                  alt="Responsive"
                />
                <p className="ml-2 text-white">
                  Live Streaming without a Subscription
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-2">
                <img
                  src="/images/Vector.png"
                  className="img-fluid"
                  alt="Responsive"
                />
                <p className="ml-2 text-white">
                  Premium non-intrusive advertising experience
                </p>
              </div>
            </div>

            <div>
              <div className=" d-flex justify-content-center mb-4">
                <div className="custom-underline-text">
                  Why Our Partners Love Midani
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="/images/Vector.png"
                  className="img-fluid"
                  alt="Responsive"
                />
                <p className="ml-2 text-white">
                  No Piracy, no hate speech, no user-generated content
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-2">
                <img
                  src="/images/Vector.png"
                  className="img-fluid"
                  alt="Responsive"
                />
                <p className="ml-2 text-white">
                  Exclusive and original plug-and-play content for premium
                  publishers
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-2">
                <img
                  src="/images/Vector.png"
                  className="img-fluid"
                  alt="Responsive"
                />
                <p className="ml-2 text-white">
                  Connect with young, engaged Sports fans
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-2">
                <img
                  src="/images/Vector.png"
                  className="img-fluid"
                  alt="Responsive"
                />
                <p className="ml-2 text-white">
                  Increased Global reach and data insights
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-2">
                <img
                  src="/images/Vector.png"
                  className="img-fluid"
                  alt="Responsive"
                />
                <p className="ml-2 text-white">
                  We elevate your brand - and you rub shoulders with the game's
                  elite!
                </p>
              </div>
            </div>

            <Search />
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default About;

// import React, { useState } from "react";
// import CustomFooter from "../../components/Footer/Footer";
// import CustomNavbar from "../../components/Navbar/Navabr";
// import "./About.css";

// const About = () => {

//   return (
//     <div>
//       <div className="homecontainer">
//         <div className="backgroundImg1">
//           <CustomNavbar />
//           <div className="container">
//             <div className="row mt-6">
//               <div className="col-lg-6">
//                 <div className="para-heading text-white custom-underline">
//                   A New Kind of Bond
//                 </div>
//                 <p className="about-para text-white">
//                   {renderParagraph(
//                     "Midani is a platform that combines sports teams with their fans and vice versa! Technology is spreading all over the market including sports. Hence, Midani gives the opportunity to both sports givers and receivers to engage in all means related to digital platforms. It comes back with benefits to both sides by providing them with their needs. On one hand, fans will reach, support and stay updated on all the announcements their team might publish, while on the other hand sports teams and clubs will have the advantage of spreading all over the digital world, reaching out to their fans and approaching revenues."
//                   )}
//                   {showFullParagraph || (
//                     <button
//                       className="btn btn-link text-white"
//                       onClick={toggleParagraph}
//                     >
//                       Read More
//                     </button>
//                   )}
//                 </p>
//               </div>
//               {/* ... */}
//             </div>
//             {/* ... */}
//           </div>
//         </div>
//       </div>
//       <CustomFooter />
//     </div>
//   );
// };

// export default About;
