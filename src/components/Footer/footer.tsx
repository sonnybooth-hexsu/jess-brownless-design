import React from "react"
import { Link } from "gatsby"
import { Linkedin, Instagram, Send } from "react-feather"
import logo from "../../assets/icons/logo.svg"
import containerClasses from "../../styles/container.module.css"

type FooterProps = {
  siteTitle: string
  productItems: {
    oculoplasticServices: {
      edges: Array<any>
    }
    aestheticServices: {
      edges: Array<any>
    }
    conditions: {
      edges: Array<any>
    }
  }
}

export const Footer = ({ siteTitle, productItems }: FooterProps) => (
  <>
    <div className="bg-Brand-green text-whiteBright">
      <div className={`${containerClasses.container} py-10`}>
        <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-12">
          <div className="grid grid-cols-12 col-span-12 gap-6">
            <div className="col-span-12 lg:col-span-6">
              <Link
                to="/"
                className="inline-block mb-4 text-lg uppercase md:text-3xl md:mb-0"
              >
                <img className="h-5" src={logo} alt={siteTitle} />
              </Link>
              <p className="my-4 uiRegular text-whiteWarm lg:pr-4">
                Elizabeth Hawkes is a Consultant Ophthalmic and Oculoplastic
                Surgeon, specialising in blepharoplasty surgery, eye health and
                advanced facial aesthetics.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/dr_elizabethhawkes/"
              >
                <Instagram className="inline mr-2" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
                href="https://www.linkedin.com/in/elizabeth-hawkes-84410588/"
              >
                <Linkedin className="inline" />
              </a>
            </div>
          </div>
          <div className="col-span-12 mt-6 lg:mt-0 lg:col-span-3 xl:col-span-3">
            <nav>
              <h3 className="mb-2 text-sm font-bold tracking-wide">
                Oculoplastic Services
              </h3>
              <div className="mb-1 border-solid border-b-1"></div>
              <ol>
                {productItems?.oculoplasticServices?.edges.map(
                  ({ node }, id) => (
                    <li
                      className="pb-1 text-white transition-all duration-500 ease-in-out hover:underline hover:text-secondaryBrand-8"
                      key={`footerProductsLink-${id}`}
                    >
                      <Link
                        to={node?.childMarkdownRemark?.frontmatter?.path}
                        className="text-sm text-center"
                      >
                        {node?.childMarkdownRemark?.frontmatter?.title}
                      </Link>
                    </li>
                  )
                )}
              </ol>
            </nav>
          </div>
          <div className="col-span-12 lg:col-span-3 xl:col-span-3">
            <nav>
              <h3 className="mb-2 text-sm font-bold tracking-wide">
                Aesthetic Services
              </h3>
              <div className="mb-1 border-solid border-b-1"></div>
              <ol>
                {productItems?.aestheticServices?.edges.map(({ node }, id) => (
                  <li
                    className="pb-1 text-white transition-all duration-500 ease-in-out hover:underline hover:text-secondaryBrand-8"
                    key={`footerProductsLink-${id}`}
                  >
                    <Link
                      to={node?.childMarkdownRemark?.frontmatter?.path}
                      className="text-sm text-center"
                    >
                      {node?.childMarkdownRemark?.frontmatter?.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          <div className="col-span-12 lg:col-span-3 xl:col-span-3">
            <nav>
              <h3 className="mb-2 text-sm font-bold tracking-wide">
                Eye Conditions
              </h3>
              <div className="mb-1 border-solid border-b-1"></div>
              <ol>
                {productItems?.conditions?.edges.map(({ node }, id) => (
                  <li
                    className="pb-1 text-white transition-all duration-500 ease-in-out hover:underline hover:text-secondaryBrand-8"
                    key={`footerProductsLink-${id}`}
                  >
                    <Link
                      to={node?.childMarkdownRemark?.frontmatter?.path}
                      className="text-sm text-center"
                    >
                      {node?.childMarkdownRemark?.frontmatter?.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          <div className="col-span-12 mt-6 lg:mt-0 lg:col-span-3 xl:col-span-3">
            <h3 className="mb-2 text-sm font-bold">Stay up to date</h3>
            <div className="mb-8 border-solid border-b-1"></div>
            <form
              name="newsletter"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <div className="flex">
                <input type="hidden" name="form-name" value="newsletter" />
                <input type="hidden" name="bot-field" />
                <label className="flex flex-grow">
                  <span className="sr-only">Sign up</span>
                  <input
                    className="flex-grow pl-2 text-sm placeholder-white bg-transparent border-white border-solid lg:w-full border-b-1"
                    type="email"
                    placeholder="Email address"
                    id="newsletter-signup"
                    name="newsletter-signup"
                    required
                  />
                </label>
                <button className="p-3 bg-secondaryBrand-8">
                  <span className="sr-only">Apply for newsletter</span>
                  <Send />
                </button>
              </div>
            </form>
            <p className="mt-2 mb-6 text-xs text-gray-200">
              Please sign up to the newsletter if interested
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="py-2 text-white bg-mainBrand-10">
      <div
        className={`${containerClasses.container} px-6 mx-auto sm:px-8 md:px-12`}
      >
        <div className="flex justify-start">
          <p className="text-xs text-white">
            Made by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white transition-all duration-500 ease-in-out hover:underline hover:text-secondaryBrand-8"
              href="https://www.instagram.com/jessicabrownless/?hl=en"
            >
              Jess Brownless Design
            </a>
          </p>
        </div>
      </div>
    </div>
  </>
)

export default Footer
