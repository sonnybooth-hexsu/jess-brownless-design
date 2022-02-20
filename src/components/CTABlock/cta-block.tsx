import React from "react"
import { Link } from "gatsby"
import buttons from "../../styles/buttons.module.css"
import containerClasses from "../../styles/container.module.css"

export const CTABlock = () => {
  return (
    <div className="text-white bg-Brand-green">
      <div className={`${containerClasses.container} py-24 sm:py-20 lg:py-40`}>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 text-center lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4">
            <h2 className="text-white headingResponsive02">
              Book a consultation
            </h2>
            <p className="col-span-12 mt-6 mb-8 text-white lg:col-span-6 lg:col-start-4">
              If you would like to make an appointment or have an enquiry,
              please contact Miss Hawkes.
            </p>
            <Link
              className={`inline-block mt-0 lg:self-start ${buttons.btnOutlineBright}`}
              to="/contact"
            >
              <div className="flex items-center justify-between">
                Contact Miss Hawkes
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
