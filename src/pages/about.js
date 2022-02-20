import React from "react"
import { Link } from "gatsby"
import { ArrowRight } from "react-feather"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { CTABlock } from "../components/CTABlock"
import { AffiliateList } from "../components/AffiliateList"
import profileArmsFoldedOutide from "../assets/images/profile-arms-folded-outside.jpg"
import profileArmsFoldedOutideX2 from "../assets/images/profile-arms-folded-outside-x2.jpg"
import profileBooksAtDesk from "../assets/images/profile-books-at-desk.jpg"
import profileBooksAtDeskX2 from "../assets/images/profile-books-at-desk-x2.jpg"
import profileBooksAtDeskArmsFolded from "../assets/images/profile-books-at-desk-arms-folded.jpg"
import profileBooksAtDeskArmsFoldedX2 from "../assets/images/profile-books-at-desk-arms-folded-x2.jpg"
import profileOnBlackArmsFolded from "../assets/images/profile-on-black-arms-folded.jpg"
import profileOnBlackArmsFoldedX2 from "../assets/images/profile-on-black-arms-folded-x2.jpg"
import buttons from "../styles/buttons.module.css"
import containerClasses from "../styles/container.module.css"

const About = () => {
  return (
    <Layout page="About">
      <SEO title="About" />
      <div className="relative py-16 text-white xl:viewHeightBarHeader bg-Brand-green lg:py-0 ">
        <div className={`${containerClasses.container}`}>
          <div className="lg:absolute lg:max-w-3/10 xl:max-w-2/10 lg:h-full lg:flex lg:flex-col lg:justify-center">
            <h1 className="mb-5 sm:mb-0 headingResponsive01">About</h1>
            <div className="hidden my-6 sm:inline-block divider"></div>
            <p className="text-lg text-white font-serifSecondary">
              Miss Elizabeth Hawkes FRCOphth MBBS BSc is a Consultant Ophthalmic
              and Oculoplastic surgeon, specialising in{" "}
              <span className="italic">blepharoplasty surgery</span>,{" "}
              <span className="italic">eye surgery</span> &{" "}
              <span className="italic">advanced facial aesthetics</span>.
            </p>
            <Link
              className={`block mt-16 lg:mt-6 xl:mt-16 lg:self-start ${buttons.btnOutline}`}
              to="/contact"
            >
              <div className="flex items-center justify-between">
                Contact Miss Hawkes
                <ArrowRight className="ml-10" size="16" />
              </div>
            </Link>
          </div>
        </div>
        <div className="md:flex md:justify-center lg:justify-end lg:h-full">
          <img
            className="w-full mt-12 lg:mt-0 lg:w-auto lg:max-w-4/10 xl:max-w-5/10 xl:max-h-full"
            loading="lazy"
            alt="Dr Hawkes"
            src={profileArmsFoldedOutide}
            srcSet={`${profileArmsFoldedOutide} 1x, ${profileArmsFoldedOutideX2} 2x`}
          />
        </div>
      </div>
      <div className="py-16 bg-gray-100 lg:py-24">
        <div className={`${containerClasses.container}`}>
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6 lg:col-start-4">
              <h2 className="headingResponsive02">
                Miss Hawkes takes pride in producing natural results for eye and
                face rejuvenation.
              </h2>
              <p className="mt-6">
                Everyone&apos;s anatomy and requests are different, Miss Hawkes
                takes time in the consultation to understand unique
                requirements. She will then tailor her treatment plan to ensure
                natural rejuvenation and therefore ensure high patient
                satisfaction.
              </p>
              <p className="mt-6">
                Miss Hawkes graduated in Medicine and Surgery from{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.imperial.ac.uk"
                >
                  Imperial College London
                </a>{" "}
                and has trained at{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://hms.harvard.edu/"
                >
                  Harvard Medical School
                </a>
                , Boston. She holds a BSc degree in Neuroscience from Imperial
                College London. She undertook postgraduate medical and surgical
                training at{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.imperial.nhs.uk/our-locations/st-marys-hospital"
                >
                  St Mary&#39;s Hospital
                </a>
                , London before embarking on a career in Ophthalmic Surgery. She
                completed Ophthalmic Surgical Training on the prestigious Oxford
                rotation and spent time at{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.moorfields.nhs.uk/"
                >
                  Moorfields Eye Hospital
                </a>
                . She is on the <a href="https://www.gmc-uk.org/">GMC</a>{" "}
                Specialist Register for Ophthalmic Surgery and was appointed as
                an NHS Consultant Ophthalmologist and Oculoplastic Surgeon in
                2018.
              </p>

              <p className="mt-6">
                Miss Hawkes is a Fellow and Examiner of the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.rcophth.ac.uk/"
                >
                  Royal College of Ophthalmologists
                </a>
                . She is a full member of the highly respected{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.esoprs.eu/"
                >
                  European Society of Ophthalmic Plastic and Reconstructive
                  Surgeons
                </a>{" "}
                and the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.bopss.co.uk/"
                >
                  British Oculoplastic Surgical Society
                </a>
                . Combining her passion for precise delicate surgery and
                meticulous attention to detail, ophthalmology and cosmetic
                eyelid surgery was an obvious career choice. She has delivered
                several international and national presentations, and is now
                involved with surgical training and educating future eye
                surgeons.
              </p>
              <figure className="mt-6 md:flex md:flex-col md:justify-center">
                <img
                  loading="lazy"
                  alt="Dr Hawkes"
                  src={profileBooksAtDesk}
                  srcSet={`${profileBooksAtDesk} 1x, ${profileBooksAtDeskX2} 2x`}
                />
                <figcaption className="mt-3 caption">
                  Miss Hawkes serves on the clinical advisory board for
                  Aesthetics Journal, helping to set aesthetic industry
                  standard. She is also an examiner for the royal college of
                  ophthalmologists.
                </figcaption>
              </figure>
              <p className="mt-6">
                Miss Hawkes practices advanced facial aesthetics for eye and
                face rejuvenation. She has a keen interest in safety and
                regulation in the aesthetics industry. She serves on the
                clinical advisory board for the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://aestheticsjournal.com/"
                >
                  Aesthetics Journal
                </a>{" "}
                which is the UKs leading educational journal for aesthetic
                practitioners. Miss Hawkes helps to set industry standards and
                provides key specialist ophthalmic perspectives regarding
                cosmetic eye treatments. She is often consulted for second and
                even third opinions on complex aesthetic decision making by
                colleagues. She was appointed to the Specialist advisory board
                for the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.cmac.world/"
                >
                  Complications in Medical Aesthetics Collaborative Society
                </a>
                .
              </p>
              <p className="mt-6">
                Her patients comment on her professional yet friendly approach.
                She looks after a number of high profile and professional
                clientele.
              </p>
              <p className="mt-6">
                Miss Hawkes held a substantive NHS consultant post where she was
                Clinical Lead of the Emergency Eye Care Service at the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.royalberkshire.nhs.uk/wards-and-services/eye-casualty.htm"
                >
                  Royal Berkshire Hospital
                </a>{" "}
                NHS Foundation trust for 2 years. She consults on all aspects of
                general ophthalmology and is recognised with all the major
                insurance companies.
              </p>
              <p className="mt-6">
                Miss Hawkes is of Iranian and British heritage and is an active
                member of the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.iranianmedicalsociety.net/"
                >
                  Iranian Medical Society
                </a>
                . She enjoys skiing, running and socialising with friends. To
                this day, Miss Hawkes continues to be inspired by her medical
                family. Her mother is a Consultant Ophthalmologist and her
                father is a world-renowned Professor of Neurology. She is
                married to an Ophthalmologist.
              </p>
              <div className="flex justify-center mt-8">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/2Y9_00jeR2Y"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative pt-12 text-white md:pt-24 lg:pt-0 bg-Brand-green">
        <div className={`${containerClasses.container}`}>
          <div className="lg:absolute lg:max-w-4/10 lg:h-full lg:flex lg:flex-col lg:justify-center">
            <h2 className="display2XL">Work With Professor Richard Collin</h2>
            <p className="mt-4 text-white">
              Miss Hawkes is delighted to be taking over the care of Professor
              Richard Collin’s patients, after being mentored by him for several
              years. Professor Collin pioneered the specialty of Ophthalmic
              Plastic Surgery. Miss Hawkes is honored to be trusted with this
              prestigious role.
            </p>
          </div>
        </div>
        <div className="md:flex md:justify-center lg:justify-end lg:h-full">
          <img
            className="w-full mt-12 lg:w-auto md:mt-24 lg:mt-0 lg:max-w-4/10 xl:max-w-none xl:max-h-full"
            loading="lazy"
            alt="Dr Hawkes"
            src={profileBooksAtDeskArmsFolded}
            srcSet={`${profileBooksAtDeskArmsFolded} 1x, ${profileBooksAtDeskArmsFoldedX2} 2x`}
          />
        </div>
      </div>
      <div className="bg-gray-100 py-28">
        <div className={`${containerClasses.container}`}>
          <div className="w-16 h-16 mx-auto overflow-hidden rounded-full lg:w-24 lg:h-24">
            <img
              loading="lazy"
              alt="Dr Hawkes"
              src={profileOnBlackArmsFolded}
              srcSet={`${profileOnBlackArmsFolded} 1x, ${profileOnBlackArmsFoldedX2} 2x`}
            />
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <p className="mt-6 quote">
                “Having spent over 16 years training to become a blepharoplasty
                specialist, I have developed skills harnessing surgical and
                non-surgical bespoke treatments in order to restore the natural
                beauty of the eye and face.”
              </p>
              <p className="mt-8 text-center uppercase overline">
                Miss Elizabeth D Hawkes
              </p>
            </div>
          </div>
        </div>
      </div>
      <CTABlock />
      <AffiliateList />
    </Layout>
  )
}

export default About
