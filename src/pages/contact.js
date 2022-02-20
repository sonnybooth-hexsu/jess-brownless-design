import React from "react"
import { Phone, MapPin, Mail, ArrowRight } from "react-feather"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { AffiliateList } from "../components/AffiliateList"
import clinicDoor from "../assets/images/clinic-door.jpg"
import clinicDoorX2 from "../assets/images/clinic-door-x2.jpg"
import containerClasses from "../styles/container.module.css"
import buttons from "../styles/buttons.module.css"

const Contact = ({ data }) => {
  return (
    <Layout page="Contact">
      <SEO title="Contact" />
      <div className="pt-20 text-center text-white bg-Brand-green lg:pt-30">
        <div className={`${containerClasses.container}`}>
          <div className="grid grid-cols-12 gap-x-6">
            <p className="col-span-12 uppercase overline text-secondaryBrand-8">
              Contact
            </p>
            <h1 className="col-span-12 mt-4 headingResponsive01">
              Get In Touch
            </h1>
            <p className="col-span-12 mt-6 mb-8 text-white lg:col-span-6 lg:col-start-4">
              If you would like to make an appointment or have an enquiry,
              please contact us using one of the methods below. A member of the
              team will reply within one working day. Miss Hawkes consults and
              operates at the award winning Cadogan Clinic in Chelsea, London.
            </p>
            <figure className="col-span-12 lg:col-span-10 lg:col-start-2">
              <div className="transform translate-y-1/2">
                <img
                  className="w-full -mt-16 lg:-mt-24 xl:-mt-32"
                  loading="lazy"
                  alt="Dr Hawkes"
                  src={clinicDoor}
                  srcSet={`${clinicDoor} 1x, ${clinicDoorX2} 2x`}
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
      <div className="pb-24 pt-35p md:pt-30p lg:pb-50 xl:pt-25p xl:-mt-8 bg-secondaryBrand-1">
        <div className={`${containerClasses.container}`}>
          <div className="grid grid-cols-12 gap-6 -mt-8">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="headingResponsive02 xl:pt-8">Contact Details</h2>
              <div className="flex mt-8">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-2 lg:mr-6 lg:w-16 lg:h-16 bg-secondaryBrand-2">
                  <Mail className="text-secondaryBrand-10" size="20" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase lg:text-lg">
                    Email
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`mailto:${data?.site?.siteMetadata?.email}`}
                    className="mt-1 text-xl italic lg:mt-2 lg:text-xl font-serifSecondary"
                  >
                    {data?.site?.siteMetadata?.email}
                  </a>
                </div>
              </div>
              <div className="flex mt-6 lg:mt-12">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-2 lg:mr-6 lg:w-16 lg:h-16 bg-secondaryBrand-2">
                  <Phone className="text-secondaryBrand-10" size="20" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase lg:text-lg">
                    Phone Number
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`tel:${data?.site?.siteMetadata?.telephone}`}
                    className="mt-1 text-xl italic lg:mt-2 lg:text-xl font-serifSecondary"
                  >
                    {data?.site?.siteMetadata?.telephone}
                  </a>
                </div>
              </div>
              <div className="flex mt-6 lg:mt-12">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-2 lg:mr-6 lg:w-16 lg:h-16 bg-secondaryBrand-2">
                  <MapPin className="text-secondaryBrand-10" size="20" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase lg:text-lg">
                    Clinic Address
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/place/120+Sloane+St,+Chelsea,+London+SW1X+9BW/@51.4944335,-0.1607926,17z/data=!3m1!4b1!4m5!3m4!1s0x4876053e0792d337:0xc4910b4996eba637!8m2!3d51.4944302!4d-0.1585986"
                    className="mt-1 text-xl italic lg:mt-2 lg:text-xl font-serifSecondary"
                  >
                    {data?.site?.siteMetadata?.address}
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden w-px h-full transform -translate-x-3 bg-black h-90p xl:block"></div>
            <div className="col-span-12 mt-8 lg:col-span-6 xl:col-span-5 lg:col-start-8 lg:mt-0 xl:pt-8">
              <h2 className="headingResponsive02">Leave A Message</h2>
              <form
                name="contact"
                className="mt-8"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div>
                  <label className="uppercase uiBold" htmlFor="first-name">
                    Full Name
                  </label>
                  <input
                    className="block w-full h-10 bg-transparent border-black border-solid border-b-1"
                    id="first-name"
                    name="firstName"
                    type="text"
                    required
                  />
                </div>
                <div className="mt-6">
                  <label className="uppercase uiBold" htmlFor="last-name">
                    Email Address
                  </label>
                  <input
                    className="block w-full h-10 bg-transparent border-black border-solid border-b-1"
                    id="email"
                    name="email"
                    type="email"
                    required
                  />
                </div>
                <div className="mt-6">
                  <label className="uppercase uiBold" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-20 bg-transparent border-black border-solid border-b-1"
                    id="message"
                    name="message"
                  />
                </div>
                <button
                  className={`${buttons.btnDark} mt-10 w-full`}
                  type="submit"
                >
                  <div className="flex items-center justify-between">
                    Submit
                    <ArrowRight className="ml-10" size="16" />
                  </div>
                </button>
              </form>
              <p className="mt-4 text-sm">
                By using this form you agree with the storage and handling of
                your data by this website
              </p>
            </div>
          </div>
        </div>
      </div>
      <AffiliateList />
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query {
    site {
      siteMetadata {
        telephone
        email
        address
      }
    }
  }
`
