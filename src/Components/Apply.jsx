

import tv from "../assets/tv.png"
import pointer from "../assets/point-bottom.png"
import micro from "../assets/micro.png"
import profile from "../assets/profile.png"
import Card from "./Card"

function Apply() {
  return (
    <div className=" mt-25 max-w-7xl mx-auto px-6 lg:px-4  ">
      <h1 className='text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 '>More reasons to join</h1>

      <div className="flex flex-wrap  gap-6 ">
        <Card
        heading="Enjoy on your TV"
        text="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        image={tv}
        />

         <Card
        heading="Download your shows to watch offline"
        text="Save your favourites easily and always have something to watch."
        image={pointer}
        />

        <Card
        heading="Watch everywhere"
        text="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
        image={micro}
        />

          <Card
        heading="Create profiles for kids"
        text="Send kids on adventures with their favourite characters in a space made just for them — free with your membership."
        image={profile}
        />
      </div>
    </div>
  )
}

export default Apply
