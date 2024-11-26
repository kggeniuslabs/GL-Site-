import "./App.css";
import Insights from "./Landingpage/Insights/Insights";
import Aboutus from "./Landingpage/Aboutus/Aboutus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Credentials from "./Landingpage/Credentials/Credentials";
import Menubar from "./Landingpage/Menubar/Menubar";
import Footer from "./Landingpage/Footer/Footer";
import Footercard from "./Landingpage/Footercard/Footercard";
import AboutKggl from "./Aboutsection/AboutKggl/AboutKggl";
import Mission from "./Aboutsection/Mission/Mission";
import Banner from "./Landingpage/Banner/Banner";
import Ourservices from "./Landingpage/Ourservices/Ourservices";
import Whygeniuslabs from "./Aboutsection/Whygeniuslabs/Whygeniuslabs";
import Teamfeatures from "./HRRecruitment/Teamfeatures/Teamfeatures";
import Bannerhr from "./HRRecruitment/Recruitment/Bannerhr/Bannerhr";
import Aboutpagehr from "./HRRecruitment/Recruitment/Aboutpage/Aboutpage";
import Sectors from "./HRRecruitment/Recruitment/Sectors/Sectors";
import Clientpage from "./HRRecruitment/Recruitment/Clientpage/Clientpage";
import Corevalues from "./HRRecruitment/Recruitment/Corevalues/Corevalues";
import { Evolution } from "./Aboutsection/Evolution/Evolution";
import Discover from "./HRRecruitment/Discover/Discover";
import Sapbanner from "./Sap/Sapbanner/Sapbanner";
import Sapimplementation from "./Sap/Sapimplementation/Sapimplementation";
import Hanacloud from "./Sap/Hanacloud/Hanacloud";
import Methodology from "./Sap/Methodology/Methodology";
import Greenfield from "./Sap/Greenfield/Greenfield";
import Newimplement from "./Sap/Newimplement/Newimplement";
import Contactpage from "./Landingpage/Contactpage/Contactpage";
import Contactsap from "./Sap/Contactsap/Contactsap";
import Hrfooter from "./HRRecruitment/Hrfooter/Hrfooter";
import Footerabout from "./Aboutsection/Footerabout/Footerabout";
import DMBanner from "./DigitalMarketing/DMBanner";
import Dmservice from "./DigitalMarketing/Dmservice/Dmservice";
import Adoptdm from "./DigitalMarketing/Adoptdm/Adoptdm";
import Dmcontact from "./DigitalMarketing/Dmcontact/Dmcontact";
import Footerdm from "./DigitalMarketing/Footerdm/Footerdm";
import Sapmenubar from "./Sap/Sapmenubar/Sapmenubar";
import Menubardm from "./DigitalMarketing/Menubardm/Menubardm";
import Hrmenubar from "./HRRecruitment/Hrmenubar/Hrmenubar";
import BannerIT from "./IT/BannerIT/BannerIT";
import Itfooter from "./IT/ITFooter/Itfooter";
import Dmblogview from "./DigitalMarketing/DMblogview/Dmblogview";
import Dmblog from "./DigitalMarketing/Dmblog/Dmblog";
import Sapblogview from "./Sap/Sapblogview/Sapblogview";
import Contactpages from "./Landingpage/Contactpages/Contactpages";
import Blogviewed from "./Landingpage/Blogviewed/Blogviewed";
import Blogit from "./IT/Blogit/Blogit";
import Autopopup from "./Landingpage/Autopopup/Autopopup";
import CRM from "./IT/CRM/CRM";
import LMS from "./IT/LMS/LMS";
import Demobook from "./IT/Demobook/Demobook";
import Techstack from "./IT/Techstack/Techstack";
import Contactformit from "./IT/Contactformit/Contactformit";
import Crmdemobook from "./IT/Demobook/Crmdemobook";
import CRMSolutions from "./IT/CRMSolutions/CRMSolutions";
import ITMenubar from "./IT/ITMenubar/ITMenubar";
import Dynamicblog from "./Landingpage/Dynamicblog/Dynamicblog";
import Errorpage from "./Landingpage/Errorpage/Errorpage";
import Loginpage from "./Landingpage/Loginpage/Loginpage";
// import BlogDisplay from "./Landingpage/BlogDisplay/BlogDisplay";
import BlogUpdate from "./Landingpage/BlogDisplay/BlogUpdate";
import EditorBlog from "./Landingpage/Editorblog/Editorblog";
import Blogupdation from "./Landingpage/Blogupdation/Blogupdation";
import Footerblog from "./Landingpage/Footerblog/Footerblog";
import Contactfooter from "./Landingpage/Contactfooter/Contactfooter";
import Newsletter from "./Landingpage/Newsletter/Newsletter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={[
              <Menubar />,
              <Banner />,
              <Aboutus />,
              <Ourservices />,
              <Credentials />,
              <Newsletter/>,
              <Insights />,
              <Contactpages />,
              <Footercard />,
              <Footer />,
              <Autopopup />,
            ]}
          />
          <Route
            path="/aboutus"
            element={[
              <Menubar />,
              <AboutKggl />,
              <Evolution />,
              <Mission />,
              <Whygeniuslabs />,
              <Footercard />,
              <Footerabout />,
            ]}
          />
          <Route
            path="/hr-consultancy"
            element={[
              <Hrmenubar />,
              <Bannerhr />,
              <Aboutpagehr />,
              <Teamfeatures />,
              <Sectors />,
              <Clientpage />,
              <Corevalues />,
              <Discover />,
              <Footercard />,
              <Hrfooter />,
              <Autopopup />,
            ]}
          />
          <Route
            path="/blogs"
            element={[<Menubar />, <Blogviewed />, <Footercard />, <Footerblog/>]}
          />
          <Route
            path="/implementation"
            element={[
              <Sapimplementation />,
              <Hanacloud />,
              <Methodology />,
              <Greenfield />,
              <Newimplement />,
              <Contactsap />,
            ]}
          />
          <Route
            path="/contact"
            element={[<Menubar />, <Contactpage />, <Footercard />, <Contactfooter/>]}
          />
          <Route
            path="/sap-services-consultancy"
            element={[<Sapmenubar />, <Sapbanner />, <Autopopup />]}
          />
          <Route
            path="/it-services"
            element={[<ITMenubar />, <BannerIT />, <Autopopup />]}
          />
          <Route
            path="/digital-marketing-consultancy"
            element={[
              <Menubardm />,
              <DMBanner />,
              <Dmservice />,
              <Adoptdm />,
              <Dmblog />,
              <Dmcontact />,
              <Footercard />,
              <Footerdm />,
              <Autopopup />,
            ]}
          />
          <Route path="/digital-marketing-blog/:id" element={[<Menubar />,<Dmblogview />,<Footercard />,<Footerblog/>]} />
          <Route path="/sap-blog/:id" element={[<Menubar />,<Sapblogview />,<Footercard />,<Footerblog/>]} />
          <Route
            path="/it-blog/:id"
            element={[<Menubar />, <Blogit />, <Footercard />, <Footerblog/>]}
          />
          <Route
            path="/crm"
            element={[
              <CRM />,
              <CRMSolutions />,
              <Crmdemobook />,
              <Techstack />,
              <Contactformit />,
              <Footercard />,
              <Itfooter />,
            ]}
          />
          <Route
            path="/lms"
            element={[
              <LMS />,
              <Demobook />,
              <Techstack />,
              <Contactformit />,
              <Footercard />,
              <Itfooter />,
            ]}
          />
          <Route path="/blog-login" element={<Loginpage />} />
          <Route path="/dynamic-blog/:id" element={<Dynamicblog />} />
         
          <Route path="/blog-update" element={<BlogUpdate />} />
          <Route path="/blogeditor/:id" element={<EditorBlog/>}/>
          <Route path="/updateblog/:id/:userid" element={<Blogupdation/>}/>
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
