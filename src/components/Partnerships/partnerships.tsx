import React from "react"

type PartnershipProps = {
  name: string
  img: string
}

type PartnershipsProps = {
  images: Array<PartnershipProps>
}

export const Partnerships = ({ images }: PartnershipsProps) => (
  <div className="flex items-center">
    <p className="flex-shrink-0">Cosmetic brand partnerships:</p>
    {images?.map(({ name, img }, id) => (
      <div key={id} className="flex items-center justify-end w-full h-16 ml-2">
        {" "}
        <img
          data-testid="partnershipImg"
          className="h-full"
          src={img}
          alt={name}
        />
      </div>
    ))}
  </div>
)

export default Partnerships
