import CustomFooter from "../../components/Footer/Footer";
import CustomNavbar from "../../components/Navbar/Navabr";
import Search from "../../components/Search/Search";
import "./News-detail.css";

const NewsDetail = () => {
  return (
    <>
      <div className="detailcontainer">
        <div className="backgroundImg1">
          <CustomNavbar />
          <div className="content">
            <div className="content2">
              <div
                className="backgroundImg2"
                style={{
                  background: `url(${"/images/news.png"}) no-repeat`,
                }}
              />
            </div>
            <div className="details">
              <h2>Lorem ipsum dolor sit ame</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod dolor eros, in lacinia magna lacinia in. Nunc odio
                tortor, aliquam sit amet tellus at, ullamcorper egestas ligula.
                Phasellus dapibus neque id justo ultricies, in vestibulum nisi
                pharetra. Donec pharetra dolor ultricies gravida vehicula.
                Pellentesque felis diam, efficitur nec mi a, facilisis
                scelerisque justo. Proin viverra, ex ut porttitor consequat, est
                nunc pharetra dolor, id vestibulum risus velit in enim. Nullam
                vitae felis nec neque sagittis cursus ut in diam. Integer metus
                sem, convallis id ante a, tristique ultrices turpis. Nam in urna
                sit amet odio cursus sagittis non at erat. Vestibulum id enim
                suscipit, convallis nibh sit amet, lacinia lorem. Pellentesque
                commodo mauris a lectus congue porttitor. Vivamus ligula erat,
                mattis ac nibh vel, molestie cursus neque. Ut suscipit
                pellentesque eros ut feugiat. Proin efficitur nulla at risus
                dignissim, a varius orci tempus. Praesent id interdum nisi, ac
                mollis ipsum. Sed porta cursus felis nec luctus.
              </p>
              <span>Lorem ipsum dolor sit amet, consectetur</span>
              <span>Lorem ipsum dolor sit amet, consectetur</span>
            </div>
          </div>
          <Search />
        </div>
      </div>
      <CustomFooter />
    </>
  );
};
export default NewsDetail;
