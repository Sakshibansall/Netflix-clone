import React, { useState } from 'react'

function FAQ () {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: 'What is Netflix?',
      a: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`
    },
    {
      q: 'How much does Netflix cost?',
      a: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.'
    },
    {
      q: 'Where can I watch?',
      a: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`
    },
    {
      q: 'How do I cancel?',
      a: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`
    },
    {
      q: 'What can I watch on Netflix?',
      a: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`
    },
    {
      q: 'Is Netflix good for kids?',
      a: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`
    }
  ]

  const toggle = i => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-white mt-10 lg:mt-20'>
      <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 lg:mb-8'>
        Frequently Asked Questions
      </h1>

      {faqs.map((faq, i) => (
        <div
          key={i}
          onClick={() => toggle(i)}
          className='p-3 sm:p-4 md:p-5 lg:p-6 mb-3 rounded-md cursor-pointer bg-[rgb(45,45,45)] hover:bg-[rgb(65,65,65)] transition duration-300'
        >
          <div className='flex justify-between items-center'>
            <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl font-medium'>
              {faq.q}
            </h2>
            <span className='text-3xl sm:text-4xl md:text-5xl'>
              {openIndex === i ? '×' : '+'}
            </span>
          </div>

          {openIndex === i && (
            <p className='mt-2 text-gray-300 whitespace-pre-line text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed'>
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default FAQ
