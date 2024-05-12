// TODO: Add replace icons with icons from Font Awesome || other font icon libraries
import { FaAward } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";

import AWARDS from "../../public/data/awards.json";

const AwardsPage = () => {
  return (
    <section className="resume-section" id="awards">
      <div className="resume-section-content">
        <h2 className="mb-5">Awards</h2>
        <ul className="fa-ul mb-5">
          <li>
            <span className="fa-li">
              <FaAward className="text-warning" />
            </span>
            Google Analytics Certified Developer
          </li>
          <li>
            <span className="fa-li">
              <FaTrophy className="text-warning" />
            </span>
            Mobile Web Specialist - Google Certification
          </li>
          <li>
            <span className="fa-li">
              <FaMedal className="text-warning" />
            </span>
            1<sup>st</sup>
            Place - University of Colorado Boulder - Emerging Tech Competition
            2009
          </li>
          <li>
            <span className="fa-li">
              <GrAchievement className="text-warning" />
            </span>
            1<sup>st</sup>
            Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI
            Design Category)
          </li>
          <li>
            <span className="fa-li">
              <FaTrophy className="text-warning" />
            </span>
            2<sup>nd</sup>
            Place - University of Colorado Boulder - Emerging Tech Competition
            2008
          </li>
          <li>
            <span className="fa-li">
              <FaTrophy className="text-warning" />
            </span>
            1<sup>st</sup>
            Place - James Buchanan High School - Hackathon 2006
          </li>
          <li>
            <span className="fa-li">
              <FaTrophy className="text-warning" />
            </span>
            3<sup>rd</sup>
            Place - James Buchanan High School - Hackathon 2005
          </li>
        </ul>
        <h2 className="mb-5">Certifications</h2>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <FaAward className="text-warning" />
            </span>
            Google Analytics Certified Developer
          </li>
          <li>
            <span className="fa-li">
              <FaTrophy className="text-warning" />
            </span>
            Mobile Web Specialist - Google Certification
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AwardsPage;
