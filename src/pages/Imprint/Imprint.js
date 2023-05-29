import CustomNavbar from "../../components/Navbar/Navabr";
import CustomFooter from "../../components/Footer/Footer";
import "./Imprint.css";
const Imprint = () => {
  return (
    <div>
      <div className="homecontainer">
        <div className="backgroundImg1">
          <CustomNavbar />
          <div className="container text-white cutom-font mt-5">
            <div className="text-center">
              <span className="custom-underline-text">
                <strong>Imprint</strong>
              </span>
            </div>
            <div>ESPORSA FZE LLC,</div>
            <div>Grand Tower, Office # B-1106-33</div>
            <div>Phone: +971556929500</div>
            <div>
              Email: <span>Hello@esporsa.com</span>
            </div>
            <br />

            <div>
              <strong>Presented By:</strong>
            </div>
            <div>FOUNDER & CEO</div>
            <div>CHUCRI RIZK</div>
            <br />

            <div>
              <strong>Register Entry:</strong>
            </div>
            <div>Register in the Commercial Registry number 1540</div>
            <div>
              Existing and registered under the laws of the Amiri Decree No. 8
              of 2015
            </div>
            <br />

            <div>APPLICABLE LAW AND DISPUTE RESOLUTION</div>
            <br />

            <div>
              <strong>Applicable Law</strong>
            </div>
            <div>
              This Agreement (including any non-contractual matters and
              obligations arising therefrom or associated therewith) shall be
              governed by, and construed in accordance with, the laws of the
              United Arab Emirates.
            </div>
            <br />
            <div>
              <strong>Online Dispute Resolution</strong>
            </div>
            <div>
              Any dispute, controversy, proceedings, or claim between the
              Parties relating to this Agreement (including any non-contractual
              matters and obligations arising therefrom or associated therewith)
              within a period of shall fall within the jurisdiction of the
              courts of Dubai, UAE
            </div>
          </div>
        </div>
        <CustomFooter />
      </div>
    </div>
  );
};
export default Imprint;
