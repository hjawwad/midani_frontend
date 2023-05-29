import React from "react";
import CustomFooter from "../../components/Footer/Footer";
import CustomNavbar from "../../components/Navbar/Navabr";
import "./Privacy-policy.css";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="privacy-policy">
        <div className="backgroundImg1">
          <CustomNavbar />
          <div className="container text-white cutom-font mt-5 pb-5">
            <div className="d-flex justify-content-center">
              <h3 className="text-center title">Privacy Policy</h3>
            </div>

            <div className="mt-5">Data Collection Policy Statement</div>
            <br />
            <div>
              <strong>1. Privacy Policy</strong>
            </div>
            <br />

            <div>
              MIDANI undertakes to observe the data protection principles and to
              comply with the requirements of the Law of Protection of Personal
              Data (Privacy Law) of UAE and MIDANI’s Privacy Policy during
              personal data collection and processing. All collected personal
              data will be properly archived during it storing up period and
              destroyed after said period.
            </div>
            <div className="mt-3">
              When MIDANI gathers private data, either electronically or in hard
              copy format, that may personally identify the person in question,
              the purpose and aim for the required information will be given.
              The personal data collected will only be processed and used by
              MIDANI and will not be disclosed to any third party or
              organizations outside MIDANI unless otherwise stated, or required
              by law, or with your prior consent.
            </div>
            <div className="mt-3">
              According to Law of Protection of Personal Data and related
              administrative procedures of MIDANI, one can request to have
              access or to correct one's personal data held by MIDANI.
            </div>
            <div>
              According to postal regulations, service contract terms and MIDANI
              regulations, a reasonable fee may be charged for complying a
              request for access to or correction of the collected data.
            </div>
            <br />
            <div>
              <strong>
                2. Privacy policy for collection and use of personal information
                in our website.
              </strong>
            </div>
            <br />
            <div>
              2.1 Collection and Use of Non-personal Information If one just
              browses this website instead of submitting an application by
              running any software, we will not keep identity information nor
              collect data such as names and addresses.
            </div>
            <div className="mt-3">
              When you browse or download information from our website, our
              computer system may log down and keep the information from your
              browser, such as your domain name, IP address, access date and
              time, the pages you have browsed and the referring website
              addresses. The purpose of collecting this information is to better
              facilitate your needs. No investigation based on the information
              will be launched against users except when MIDANI’s website is
              found under malicious attack by a visitor.
            </div>
            <div className="mt-3">
              When using eservices from our webpage, the software may use
              "cookies" to record your online experiences, in order to customize
              it for when you revisit it. There will be a warning message
              whenever a cookie is saved if the feature "detecting cookies" is
              activated in your browser.
            </div>
            <div className="mt-3">
              2.2 Collection and Use of Personal Information Personal data may
              be required if you use our eService’s, and the information needed
              may vary with the services. When required to provide personal
              information, we will inform you about respective collections
              conditions, regulations and purposes. We will only use and
              disclose your personal information for the purpose for which it
              was collected. Federal Law No. 1 of 2006 and its corresponding
              Dubai Law No. 2 of 2002, From 25 May 2018, companies based in the
              UAE will need to consider the extent to which they may fall within
              the scope of the European Union’s General Data Protection
              Regulation (“GDPR”). other type of use and disclosure will require
              your prior and definite consent, or be in accordance with the
              privacy law.
            </div>
            <div className="mt-3">
              2.3 Security Our webpage may provided eService’s, including the
              Certification Service, Electronic Postal Certification Mark,
              Annual Subscription and Online shopping, use the Secure Sockets
              Layer (SSL) technology to protect the transmission of sensitive
              personal information over the Internet.
            </div>
            <div className="mt-3">
              2.4 Personal Data Recipients The personal data collected and
              processed by the MIDANI may be, according to the needs of the
              services concerned, transferred to other administrative or
              judicial bodies, as well as private entities or bodies, and these
              must, in the handling of personal data, observe the Personal Data
              Protection Act and the present declaration.
            </div>
            <div>
              2.5 Personal Data Safety All MIDANI website administrators shall
              take appropriate measures to ensure the confidentiality and
              storing of the data until its usage or storage term come to an
              end, when the data shall be destroyed or sealed in accordance to
              what was previously stipulated.
            </div>
            <br />

            <div>
              <strong>3. External Links</strong>
            </div>
            <br />
            <div>
              Our website provides links to other websites that belongs to
              Regional / Int’l / UAE news agencies, external government/public
              sectors, local or international private sectors. Clicking the
              links to other websites means you have left the MIDANI’s website.
              Since the privacy statement on these websites may differ from
              ours, we do not take any responsibility for the privacy policies
              or contents of those websites, so you are advised to check those
              privacy statements when necessary.
            </div>
            <br />
            <div>
              <strong>4. Changes to this Statement</strong>
            </div>
            <br />
            <div>
              The revised Privacy Statement will be posted without any prior
              notice if changes are made, and the revising date will be printed
              in the page.
            </div>
            <br />
            <div>
              <strong>5. Inquiries</strong>
            </div>
            <br />
            <div>
              If you have any inquiries regarding the personal data collection
              and processing by the MIDANI, you are welcome to contact us
              personally or via email to MIDANI's Director at the following
              addresses:
            </div>
            <br />
            <br />
            <div>ESPORSA FZE LLC,</div>
            <div>Grand Tower, Office # B-1106-33, Media City.</div>
            <div>Ajman, UAE</div>
            <div>E-mail: hello@esporsa.com</div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  );
};

export default PrivacyPolicy;
