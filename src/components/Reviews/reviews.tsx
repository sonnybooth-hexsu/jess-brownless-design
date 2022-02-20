import React from "react"
import { Star } from "react-feather"
import doctify from "../../assets/icons/doctify.svg"
import { Carousel } from "../Carousel"

export const Reviews = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="flex flex-col col-span-12 lg:items-start lg:col-start-1 lg:col-span-3">
        <h3 className="font-serif displayXL lg:text-left">
          Rated excellent on Doctify
        </h3>
        <div className="flex mt-4 mb-2 text-teal-500">
          <Star size="16" className="fill-current" />
          <Star size="16" className="fill-current" />
          <Star size="16" className="fill-current" />
          <Star size="16" className="fill-current" />
          <Star size="16" className="fill-current" />
        </div>
        <p>
          <span className="text-gray-500">based on</span> <b>46</b>{" "}
          <span className="text-gray-500">patient reviews</span>
        </p>
        <div className="flex items-end mt-6 mb-6 lg:mb-0">
          <p className="text-gray-500">Verified by</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.doctify.com/uk/specialist/ms_elizabeth_dolatshany_hawkes"
          >
            <img className="h-6 ml-2" src={doctify} alt="Doctify" />
          </a>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-9">
        <Carousel>
          <div className="flex flex-col h-full col-span-12 px-6 py-8 border-gray-300 border-solid border-1 md:col-span-10 md:col-start-2 lg:col-start-4 lg:col-span-3">
            <div className="flex items-center mb-2 text-teal-500">
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
            </div>
            <p className="flex-grow text-sm text-gray-500">
              &#8220;Elizabeth was very clear in her explanations and ensured
              that I was fully aware of any potential risks - she was very
              considered in her approach and was excellent in managing my
              expectations.&#8221;
            </p>
            <p className="mt-4 text-sm font-bold">18 October 2021</p>
          </div>

          <div className="flex flex-col h-full col-span-12 px-6 py-8 border-gray-300 border-solid border-1 md:col-span-10 md:col-start-2 lg:col-start-4 lg:col-span-3">
            <div className="flex items-center mb-2 text-teal-500">
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
            </div>
            <p className="flex-grow text-sm text-gray-500">
              &#8220;Ms Hawkes was caring, understanding and extremely
              professional. She explained everything in a way that is easily
              understood. As part of my treatment I had a blepharoplasty upper
              eyelid lift and I am overwhelmed of how much difference it has
              made. My eyes have opened up and I have a fresher look. I didn’t
              tell many people, but I get a lot of comments now of how “well I
              look”. I am really impressed with the results. &#8221;
            </p>
            <p className="mt-4 text-sm font-bold">28 April 2021</p>
          </div>

          <div className="flex flex-col h-full col-span-12 px-6 py-8 border-gray-300 border-solid border-1 md:col-span-10 md:col-start-2 lg:col-start-4 lg:col-span-3">
            <div className="flex items-center mb-2 text-teal-500">
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
            </div>
            <p className="flex-grow text-sm text-gray-500">
              &#8220;I chose Dr Elizabeth Hawkes to have my lips augmented as
              after seeing her a couple of times, I completely trusted her with
              my lips! She takes the time to make sure you feel comfortable and
              talks through what treatment is best for you. I&apos;m so happy
              with the end results and couldn&apos;t recommend her more. She is
              also a pleasure to visit too!&#8221;
            </p>
            <p className="mt-4 text-sm font-bold">19 April 2021</p>
          </div>

          <div className="flex flex-col h-full col-span-12 px-6 py-8 border-gray-300 border-solid border-1 md:col-span-10 md:col-start-2 lg:col-start-4 lg:col-span-3">
            <div className="flex items-center mb-2 text-teal-500">
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
            </div>
            <p className="flex-grow text-sm text-gray-500">
              &#8220;I have researched for a long time to find someone I can
              trust with my upper eyelid surgery. I chose Elizabeth because she
              is specialised in eyes only and she is passionate about the health
              of the eye from the inside as well as the cosmetic part of it. At
              our first meeting she examined the health of my eye and then
              talked about the desired result of the upper eyelid
              surgery.&#8221;
            </p>
            <p className="mt-4 text-sm font-bold">11 April 2021</p>
          </div>

          <div className="flex flex-col h-full col-span-12 px-6 py-8 border-gray-300 border-solid border-1 md:col-span-10 md:col-start-2 lg:col-start-4 lg:col-span-3">
            <div className="flex items-center mb-2 text-teal-500">
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
            </div>
            <p className="flex-grow text-sm text-gray-500">
              &#8220;Elizabeth was the perfect consultant: she thought carefully
              about what would be best for me having discussed at length my
              needs. Her manner was impeccable: thoughtful, intelligent and I
              had complete confidence in her expertise. She performed such a
              brilliant op on my eyes that people remarked how well I looked,
              but couldn’t tell I had had eye surgery. The whole experience was
              very positive and I highly recommend her.&#8221;
            </p>
            <p className="mt-4 text-sm font-bold">10 April 2021</p>
          </div>

          <div className="flex flex-col h-full col-span-12 px-6 py-8 border-gray-300 border-solid border-1 md:col-span-10 md:col-start-2 lg:col-start-4 lg:col-span-3">
            <div className="flex items-center mb-2 text-teal-500">
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
            </div>
            <p className="flex-grow text-sm text-gray-500">
              &#8220;Elizabeth performed blepharoplasty and a brow lift on me 7
              weeks ago at the Cadogan Clinic and I am absolutely thrilled with
              the results. She has done an exceptional job and I cannot
              recommend her more highly. She clearly explained the procedure
              always answering any questions and put my mind at ease pre and
              post the operation.&#8221;
            </p>
            <p className="mt-4 text-sm font-bold">24 September 2020</p>
          </div>

          <div className="flex flex-col h-full col-span-12 px-6 py-8 border-gray-300 border-solid border-1 md:col-span-10 md:col-start-2 lg:col-start-4 lg:col-span-3">
            <div className="flex items-center mb-2 text-teal-500">
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
            </div>
            <p className="flex-grow text-sm text-gray-500">
              &#8220;Miss Elizabeth Hawkes is at the top of the craft and you
              couldn&apos;t ask for a more knowledgeable, sociable and honest
              doctor. I went for information on eye bag removal and instead got
              the most valuable info that has helped me resolve an eye issue
              I&apos;ve been suffering with for almost 30 years. I am ecstatic
              and delighted that she was able to diagnose my condition, she is
              extremely knowledgeable in both plastic surgery and ophthalmology
              and I have complete trust in her.&#8221;
            </p>
            <p className="mt-4 text-sm font-bold">27 February 2020</p>
          </div>

          <div className="flex flex-col h-full col-span-12 px-6 py-8 border-gray-300 border-solid border-1 md:col-span-10 md:col-start-2 lg:col-start-4 lg:col-span-3">
            <div className="flex items-center mb-2 text-teal-500">
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
            </div>
            <p className="flex-grow text-sm text-gray-500">
              &#8220;Elizabeth was professional and knowledgeable, and listened
              patiently to my concerns regarding botox and fillers before fully
              explaining the treatment process. I had full confidence in
              Elizabeth&apos;s abilities and was absolutely thrilled with the
              results. I won&apos;t hesitate to book in with Elizabeth
              again.&#8221;
            </p>
            <p className="mt-4 text-sm font-bold">8 January 2020</p>
          </div>

          <div className="flex flex-col h-full col-span-12 px-6 py-8 border-gray-300 border-solid border-1 md:col-span-10 md:col-start-2 lg:col-start-4 lg:col-span-3">
            <div className="flex items-center mb-2 text-teal-500">
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
            </div>
            <p className="flex-grow text-sm text-gray-500">
              &#8220;I saw Dr Hawkes for filler treatments to the lower face for
              the first time last week. I have been having injectable treatments
              for years. It was a fantastic visit! She has a very gentle, warm
              and caring approach. I felt very safe in her hands and she
              explains things really well and guided me on the options to
              enhance and contour my features. Treatment was very comfortable,
              hardly any swelling and no bruising. Results are beautifully
              natural, I am thrilled! Thank you so much!&#8221;
            </p>
            <p className="mt-4 text-sm font-bold">9 December 2019</p>
          </div>

          <div className="flex flex-col h-full col-span-12 px-6 py-8 border-gray-300 border-solid border-1 md:col-span-10 md:col-start-2 lg:col-start-4 lg:col-span-3">
            <div className="flex items-center mb-2 text-teal-500">
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
            </div>
            <p className="flex-grow text-sm text-gray-500">
              &#8220;I had an eyelid lesion removed by Miss Elizabeth Hawkes.
              The treatment I received was first class! The surgery was painless
              and have praised by family and friends about the natural
              appearance. No scarring and minimal bruising, can&apos;t even see
              where the lump was removed. All the staff were very friendly and
              helpful, in the operating theatre and on the ward.&#8221;
            </p>
            <p className="mt-4 text-sm font-bold">02 September 2019</p>
          </div>

          <div className="flex flex-col h-full col-span-12 px-6 py-8 border-gray-300 border-solid border-1 md:col-span-10 md:col-start-2 lg:col-start-4 lg:col-span-3">
            <div className="flex items-center mb-2 text-teal-500">
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
              <Star size="16" className="fill-current" />
            </div>
            <p className="flex-grow text-sm text-gray-500">
              &#8220;Elizabeth was so welcoming and kind and reassuring and took
              so much time to go through everything and test my eyes, and my
              Dad&apos;s eyes. I was with my Dad and he was really nervous but
              relaxed very quickly once he met Elizabeth. She was also very
              gentle and patient and her manner is fantastic, as is her
              knowledge, clearly. She also took time to explain using diagrams
              the situation for my Dad, and it was so interesting to actually
              understand the function of the parts of the eye..&#8221;
            </p>
            <p className="mt-4 text-sm font-bold">11 July 2019</p>
          </div>
        </Carousel>
      </div>
    </div>
  )
}
