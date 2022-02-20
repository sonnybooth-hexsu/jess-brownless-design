import React from "react"
import { Link } from "gatsby"
import { ArrowRight } from "react-feather"
import { ReactSVG } from "react-svg"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { AffiliateList } from "../components/AffiliateList"
import { Carousel } from "../components/Carousel"
import { Reviews } from "../components/Reviews"
import { CTABlock } from "../components/CTABlock"
import profile1 from "../assets/images/profile1.jpg"
import menuRight from "../assets/icons/menu-right.svg"
import profile1X2 from "../assets/images/profile1X2.png"
import profile2 from "../assets/images/profile2.jpg"
import profile2X2 from "../assets/images/profile2-x2.jpg"
import serviceHelpWithEye from "../assets/images/serviceHelpWithEye.jpg"
import serviceHelpWithEyeX2 from "../assets/images/serviceHelpWithEyeX2.jpg"
import serviceNoneSurgical from "../assets/images/serviceNoneSurgical.jpg"
import serviceNoneSurgicalX2 from "../assets/images/serviceNoneSurgicalX2.jpg"
import serviceOcul from "../assets/images/serviceOcul.jpg"
import serviceOculX2 from "../assets/images/serviceOculX2.jpg"
import serviceHelpWithEyeLG from "../assets/images/serviceHelpWithEyeLG.jpg"
import serviceHelpWithEyeLGX2 from "../assets/images/serviceHelpWithEyeLGX2.jpg"
import serviceNoneSurgicalLG from "../assets/images/serviceNoneSurgicalLG.jpg"
import serviceNoneSurgicalLGX2 from "../assets/images/serviceNoneSurgicalLGX2.jpg"
import serviceOculLG from "../assets/images/serviceOculLG.jpg"
import serviceOculLGX2 from "../assets/images/serviceOculLGX2.jpg"
import aestheticsCircle from "../assets/icons/aesthetics-circle.svg"
import signature from "../assets/icons/signature.svg"
import eye from "../assets/icons/eye.svg"
import science from "../assets/icons/science.svg"
import woman from "../assets/icons/woman.svg"
import dailyMail from "../assets/icons/daily-mail.svg"
import glamour from "../assets/icons/glamour.svg"
import telegraph from "../assets/icons/telegraph.svg"
import bbcRadio from "../assets/icons/bbc-radio.svg"
import goodHousekeeping from "../assets/icons/good-housekeeping.svg"
import mayfair from "../assets/icons/mayfair.svg"
import metro from "../assets/icons/metro.svg"
import netDoctor from "../assets/icons/net-doctor.svg"
import stylist from "../assets/icons/stylist.svg"
import sundayTimes from "../assets/icons/sunday-times.svg"
import topSante from "../assets/icons/top-sante.svg"
import yahoo from "../assets/icons/yahoo.svg"
import buttons from "../styles/buttons.module.css"
import containerClasses from "../styles/container.module.css"
import {
  serviceHelpWithEyeCard,
  serviceNoneSurgicalCard,
  serviceOculCard,
} from "../styles/helpers.module.css"

const imageSliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 7,
  swipeToSlide: false,
  className: "pressSlider",
  responsive: [
    {
      breakpoint: 1280, //Tailwind lg default
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1024, //Tailwind lg default
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768, //Tailwind md default
      settings: {
        slidesToShow: 3,
      },
    },
  ],
}

const IndexPage = () => (
  <Layout page="Home">
    <SEO title="Home" />
    <div className="text-Brand-black bg-Brand-white lg:flex lg:flex-col lg:justify-center">
      <div
        className={`${containerClasses.container} py-8 md:py-16 lg:py-16 lg:h-3/4`}
      >
        <div className="col-span-12 md:row-gap-12 md:grid-cols-8 md:gap-4 lg:grid-cols-12 lg:h-full">
          <div className="md:p-0 md:col-span-6 md:col-start-2 lg:col-start-1 lg:col-span-5 lg:flex lg:flex-col lg:justify-center">
            <p className="mt-8 text-center overline text-secondaryBrand-8 lg:text-left">
              Jess Brownless Design
            </p>

            <h1 className="mt-8 font-serif text-6xl font-light leading-none text-center uppercase lg:text-left">
              Product & web designer for{" "}
              <span className="lowercase">
                <i>medical</i>
              </span>{" "}
              aesthetics
            </h1>

            <p className="bodyText lg:text-left">
              With a passion for problem-solving; I specialise in creating
              beautiful, easy to use wesites that provide optimal user
              experience and business growth.
            </p>

            <div className="">
              <Link
                className={`block text-center mt-6 md:mt-8 lg:inline-block ${buttons.btnPrimary}`}
                to="/contact"
              >
                <span className="lg:px-12">Get in touch</span>
              </Link>
              <Link
                className={`block text-center mt-6 md:mt-8 lg:inline-block ${buttons.btnOutline}`}
                to="/contact"
              >
                <span className="lg:px-12">See work</span>
              </Link>
            </div>
          </div>
          <div className="col-span-4 mb-2 md:col-span-6 md:col-start-2 lg:col-start-8 lg:col-span-5 lg:flex lg:items-center">
            <img
              loading="lazy"
              className="w-full lg:mt-0"
              alt="Dr Hawkes"
              src={profile1}
              srcSet={`${profile1X2} 1x, ${profile1X2} 2x`}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-100">
      <div className={`${containerClasses.container} py-12`}>
        <p className="mb-4 text-center text-gray-500 overline">AS SEEN IN</p>
        <Carousel settingsOverrides={imageSliderSettings}>
          <ReactSVG src={mayfair} />
          <ReactSVG src={dailyMail} />
          <ReactSVG src={glamour} />
          <ReactSVG src={yahoo} />
          <ReactSVG src={netDoctor} />
          <ReactSVG src={goodHousekeeping} />
          <ReactSVG src={sundayTimes} />
          <ReactSVG src={metro} />
          <ReactSVG src={stylist} />
          <ReactSVG src={topSante} />
          <ReactSVG src={telegraph} />
          <ReactSVG src={bbcRadio} />
        </Carousel>
      </div>
    </div>
    <div className="bg-Brandwhite">
      <div className={`${containerClasses.container}  lg:py-24`}>
        <div className="col-span-12 lg:col-span-6">
          <div className="flex flex-col">
            <p className="uppercase overline text-Brand-gold">My Background</p>
            <h2 className="mt-2 headingResponsive02">
              7+ years delivering <i>opulent</i> creative solutions.
            </h2>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:col-start-8">
          <p className="mt-4 text-sm leading-loose lg:pt-8">
            I specialise in creating beautiful, easy to use websites that
            provide optimal user experience and business growth. My experience
            in design includes working for several acclaimed agencies, and with
            freelance clients internationally, producing high-end, professional
            solutions for various industries, ranging from medical professionals
            to eCommerce to successful, ambitious entrepreneurs.
          </p>
        </div>
      </div>
    </div>
    <div className="bg-Brand-biscuit">
      <div className={`${containerClasses.container} py-16 md:py-24`}>
        <div className="grid grid-cols-4 gap-4 md:grid-cols-8 md:gap-4 lg:grid-cols-12">
          <div className="col-span-8 md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4">
            <p className="mt-0 text-center uppercase lg:mt-4 overline text-secondaryBrand-8">
              An experienced, dedicated
            </p>
            <h2 className="mt-2 font-serif text-3xl text-center lg:text-4xl lg:tracking-tight">
              Oculoplastic surgeon, eye health expert &amp; aesthetic
              practitioner.
            </h2>
          </div>
          <div className="col-span-8 mt-4 lg:mt-8 md:col-span-6 md:col-start-2 lg:col-span-12 lg:col-start-1 lg:grid lg:grid-cols-3 lg:gap-6">
            <div className="flex-col p-4 text-center">
              <img className="w-16 h-16 mx-auto" src={eye} alt="eye" />
              <h3 className="mt-6 displayLG">An Eye Health Expert</h3>
              <p className="mt-2 text-gray-500">
                By having regular checks it is possible to detect
                sight-threatening disease early and increase outcomes.
              </p>
            </div>
            <div className="flex-col p-6 mt-4 text-center lg:mt-0">
              <img className="w-16 h-16 mx-auto" src={science} alt="atom" />
              <h3 className="mt-6 displayLG">Advanced Techniques</h3>
              <p className="mt-2 text-gray-500">
                Miss Hawkes uses advanced surgical techniques to help her
                patients achieve their desired results.
              </p>
            </div>
            <div className="flex-col p-6 mt-4 text-center lg:mt-0">
              <img className="w-16 h-16 mx-auto" src={woman} alt="woman" />
              <h3 className="mt-6 displayLG">Look & Feel Your Best</h3>
              <p className="mt-2 text-gray-500">
                Miss Hawkes thoroughly assesses your facial structure to guide
                you on a wide range of facial aesthetic treatments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-100">
      <div className={`${containerClasses.container} py-16 md:py-24`}>
        <div className="grid grid-cols-8 gap-4 md:grid-cols-8 md:gap-4 lg:grid-cols-12">
          <div className="col-span-8 md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4">
            <p className="mt-0 text-center uppercase lg:mt-4 overline text-secondaryBrand-8">
              Services
            </p>
            <h2 className="mt-1 font-normal text-center headingResponsive02 lg:text-4xl">
              Surgical &amp; non-surgical treatments for natural face & eye
              rejuvenation.
            </h2>
          </div>
          <div className="relative col-span-8 mt-8 lg:mt-12 lg:col-span-12 lg:flex">
            <img
              loading="lazy"
              alt="Dr Hawkes"
              className="w-full lg:hidden"
              src={serviceOcul}
              srcSet={`${serviceOcul} 1x, ${serviceOculX2} 2x`}
            />
            <img
              loading="lazy"
              alt="Dr Hawkes"
              className="flex-shrink-0 hidden w-1/2 lg:block"
              src={serviceOculLG}
              srcSet={`${serviceOculLG} 1x, ${serviceOculLGX2} 2x`}
            />
            <div
              className={`${serviceOculCard} bg-white p-12 xl:p-24 md:p-16 flex-shrink-0 lg:flex lg:flex-col`}
            >
              <h3 className="mb-2 font-serif text-3xl text-gray-800 lg:text-4xl lg:tracking-tight lg:mb-4">
                Oculoplastic Services
              </h3>
              <div className="w-8 h-1 mb-4 bg-secondaryBrand-8"></div>
              <p className="mb-8 text-sm font-normal text-gray-500 md:mb-40 lg:mb-0 md:text-base lg:mt-1 lg:flex-grow">
                Blepharoplasty Surgery <span className="font-light">/</span>{" "}
                Brow Lift Surgery <span className="font-light">/</span>{" "}
                Chalazion (sty) removal & management{" "}
                <span className="font-light">/</span> Ectropion & Entropion{" "}
                <span className="font-light">/</span> Eyelid lump diagnosis and
                removal <span className="font-light">/</span> Ptosis (droopy
                eyelid) <span className="font-light">/</span> Watery Eye{" "}
                <span className="font-light">/</span> Xanthelasma Removal
              </p>
              <a href="/contact" className="text-sm tracking-widest uppercase">
                Book a consulation
                <img
                  loading="lazy"
                  alt="Right Menu Arrow"
                  className="inline"
                  src={menuRight}
                />
              </a>
            </div>
          </div>
          <div className="relative flex-row-reverse col-span-8 mt-8 lg:col-span-12 lg:flex lg:mt-24">
            <img
              loading="lazy"
              alt="Dr Hawkes"
              className="w-full lg:hidden"
              src={serviceHelpWithEye}
              srcSet={`${serviceHelpWithEye} 1x, ${serviceHelpWithEyeX2} 2x`}
            />
            <img
              loading="lazy"
              alt="Dr Hawkes"
              className="flex-shrink-0 hidden w-1/2 lg:block"
              src={serviceHelpWithEyeLG}
              srcSet={`${serviceHelpWithEyeLG} 1x, ${serviceHelpWithEyeLGX2} 2x`}
            />
            <div
              className={`${serviceHelpWithEyeCard} bg-white p-12 xl:p-24 md:p-16 flex-shrink-0 lg:flex lg:flex-col`}
            >
              <h3 className="mb-2 font-serif text-3xl text-gray-800 lg:text-4xl lg:tracking-tight lg:mb-4">
                Help With Eye Conditions
              </h3>
              <div className="w-8 h-1 mb-4 bg-secondaryBrand-8"></div>
              <p className="mb-8 text-sm font-normal text-gray-500 md:mb-40 lg:mb-0 md:text-base lg:mt-1 lg:flex-grow">
                Blepharitis Assessment <span className="font-light">/</span>{" "}
                Blephex & Recurrent Sty Treatment{" "}
                <span className="font-light">/</span> Cataract Surgery{" "}
                <span className="font-light">/</span> Dry Eye{" "}
                <span className="font-light">/</span> General & Urgent
                Ophthalmology <span className="font-light">/</span> Laser
                Surgery – YAG Posterior Capsulotomy
              </p>

              <a href="/contact" className="text-sm tracking-widest uppercase">
                Book a consulation
                <img
                  loading="lazy"
                  alt="Right Menu Arrow"
                  className="inline"
                  src={menuRight}
                />
              </a>
            </div>
          </div>
          <div className="relative col-span-8 mt-8 lg:col-span-12 lg:flex lg:mt-24">
            <img
              loading="lazy"
              alt="Dr Hawkes"
              className="w-1/2 w-full lg:hidden"
              src={serviceNoneSurgical}
              srcSet={`${serviceNoneSurgical} 1x, ${serviceNoneSurgicalX2} 2x`}
            />
            <img
              loading="lazy"
              alt="Dr Hawkes"
              className="flex-shrink-0 hidden w-1/2 lg:block"
              src={serviceNoneSurgicalLG}
              srcSet={`${serviceNoneSurgicalLG} 1x, ${serviceNoneSurgicalLGX2} 2x`}
            />
            <div
              className={`${serviceNoneSurgicalCard} bg-white p-12 xl:p-24 md:p-16 flex-shrink-0 lg:flex lg:flex-col`}
            >
              <h3 className="mb-2 font-serif text-3xl text-gray-800 lg:text-4xl lg:tracking-tight lg:mb-4">
                Non-surgical Cosmetic Treatments
              </h3>
              <div className="w-8 h-1 mb-4 bg-secondaryBrand-8"></div>
              <p className="mb-8 text-sm font-normal text-gray-500 md:mb-40 lg:mb-0 md:text-base lg:mt-1 lg:flex-grow">
                Anti Wrinkle Injections <span className="font-light">/</span>{" "}
                Aquagold Facial <span className="font-light">/</span> Dark
                Circles <span className="font-light">/</span> Dermal Fillers{" "}
                <span className="font-light">/</span> Platelet Rich Plasma
                Facial <span className="font-light">/</span> Profhilo
              </p>
              <a href="/contact" className="text-sm tracking-widest uppercase">
                Book a consulation
                <img
                  loading="lazy"
                  alt="Right Menu Arrow"
                  className="inline"
                  src={menuRight}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-white bg-Brand-green">
      <div className={`${containerClasses.container} pt-16 pb-24 lg:py-24`}>
        <div className="grid grid-cols-12 gap-4">
          <div className="flex flex-col justify-center col-span-12 md:col-span-10 md:col-start-2 lg:col-start-1 lg:col-span-6">
            <p className="uppercase overline text-secondaryBrand-8">
              Meet THE SURGEON
            </p>
            <h2 className="mt-4 headingResponsive02">
              Miss E Hawkes FRCOphth MBBS BSc
            </h2>
            <p className="mt-6 text-base text-white lg:text-lg">
              I am <strong>Miss Elizabeth Hawkes FRCOphth MBBS BSc</strong>,
              with a special interest in Blepharoplasty Surgery and Facial
              Aesthetics. Having spent 16 years of training to become a
              specialist in eye and eyelid surgery, I have developed advanced
              techniques tailored to meet unique patient anatomy and natural
              face and eye rejuvenation requests. I am based in London at the
              Cadogan Clinic.
            </p>
            <ReactSVG className="flex mt-4 lg:block" src={signature} />
            <div className="lg:flex">
              <Link
                className={`inline-block mt-6 lg:mt-16 ${buttons.btnOutline}`}
                to="/about"
              >
                <div className="flex items-center justify-between">
                  Read more
                  <ArrowRight className="ml-10" size="16" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-span-12 mt-10 lg:mt-0 lg:col-start-8 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative md:flex md:justify-center lg:grid lg:grid-cols-6">
              <img
                loading="lazy"
                className="col-span-8 lg:mb-20"
                alt="Dr Hawkes"
                src={profile2}
                srcSet={`${profile2} 1x, ${profile2X2} 2x`}
              />
              <ReactSVG
                className="absolute right-0 -bottom-5 lg:bottom-0 lg:-right-5"
                src={aestheticsCircle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className={`${containerClasses.container} py-16`}>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <Reviews />
          </div>
        </div>
      </div>
    </div>

    <CTABlock />
    <AffiliateList />
  </Layout>
)

export default IndexPage
