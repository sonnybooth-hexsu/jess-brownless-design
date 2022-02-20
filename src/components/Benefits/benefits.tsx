import React from "react"
import { Link } from "gatsby"
import { CheckCircle } from "react-feather"
import buttons from "../../styles/buttons.module.css"

export const Benefits = ({ benefits }) => (
  <div className="grid grid-cols-12 gap-4 lg:gap-6">
    <h2 className="col-span-12 mb-8 md:text-center md:col-span-8 md:col-start-3 xl:col-span-6 xl:col-start-4">
      Bespoke cosmetic injectables and skin treatment plans.
    </h2>
    <div className="col-span-12 mb-4 md:flex md:flex-wrap md:justify-center lg:col-start-3 lg:col-span-8">
      {benefits?.map(({ text }, id) => (
        <div
          key={id}
          data-testid="benefitsItem"
          className="flex items-center mb-4 md:mx-4 md:justify-center"
        >
          <CheckCircle size="32" className="text-gray-100" />
          <p className="pb-0 ml-4">{text}</p>
        </div>
      ))}
    </div>
    <div className="col-span-12 text-center">
      <Link
        className={`${buttons.btn} ${buttons.btnSecondary} block w-full md:inline-block md:w-auto`}
        to="/treatments"
      >
        View treatments
      </Link>
    </div>
  </div>
)

export default Benefits
