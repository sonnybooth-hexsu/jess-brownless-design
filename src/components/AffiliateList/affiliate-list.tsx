import React from "react"
import bopss from "../../assets/images/bopss.png"
import esoprs from "../../assets/images/esoprs.png"
import aao from "../../assets/images/aao.png"
import imperialCollege from "../../assets/images/imperial-college.png"
import royalCollege from "../../assets/images/royal-college.png"
import iranianMedical from "../../assets/images/iranian-medical.png"
import aesthetics from "../../assets/images/aesthetics.png"
import independentDoctors from "../../assets/images/independent-doctors.png"
import pembrokeCollege from "../../assets/images/pembroke-college.png"
import cmac from "../../assets/images/cmac-logo.jpg"
import containerClasses from "../../styles/container.module.css"

export const AffiliateList = () => (
  <div className={containerClasses.container}>
    <div className="grid grid-cols-12 gap-6 pt-16 pb-12 lg:pt-4 lg:pb-0 lg:-mb-2">
      <div className="flex flex-col flex-wrap items-center justify-center col-span-12 xl:justify-between lg:flex-row">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.bopss.co.uk/"
        >
          <img
            className="h-8 mb-6 lg:mr-5"
            alt="British Oculoplastic Surgey Society"
            src={bopss}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.esoprs.eu/"
        >
          <img className="h-8 mx-5 mb-6" alt="ESOPRS" src={esoprs} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aao.org/"
        >
          <img
            className="h-8 mx-5 mb-6"
            alt="American Academy of Ophthalmology"
            src={aao}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.imperial.ac.uk/"
        >
          <img
            className="h-8 mx-5 mb-6"
            alt="Imperial College London"
            src={imperialCollege}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.rcophth.ac.uk/about/rcophth/rcophth-honorary-fellowships/#:~:text=Ordinances%20of%20The%20Royal%20College,a%20significant%20contribution%20to%20ophthalmology"
        >
          <img
            className="h-8 mx-5 mb-6"
            alt="The Royal College of Ophthalmologists"
            src={royalCollege}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.iranianmedicalsociety.net/"
        >
          <img
            className="h-8 mx-5 mb-6"
            alt="Iranian Medical Society"
            src={iranianMedical}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://aestheticsjournal.com/"
        >
          <img className="h-6 mx-5 mb-6" alt="Aesthetics" src={aesthetics} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.idf.uk.net/"
        >
          <img
            className="h-8 mx-5 mb-6"
            alt="Independent Doctors Federation"
            src={independentDoctors}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.cmac.world/about/cmac-specialist-advisory-board/"
        >
          <img
            className="h-8 mx-5 mb-6"
            alt="CMAC Specialist Advisory Board"
            src={cmac}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.pem.cam.ac.uk/international-programmes/pembroke-king%E2%80%99s-summer-programme/pembroke-circle"
        >
          <img
            className="h-8 mb-6 lg:ml-5"
            alt="Pembroke College Circle"
            src={pembrokeCollege}
          />
        </a>
      </div>
    </div>
  </div>
)
