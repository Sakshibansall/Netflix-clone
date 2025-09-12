

import tv from "../assets/tv.png"
import pointer from "../assets/point-bottom.png"
import micro from "../assets/micro.png"
import profile from "../assets/profile.png"
import Card from "./Card"

function Apply() {
  return (
    <div className=" mt-10 max-w-7xl mx-auto px-6 lg:px-15  ">
      <h1 className='text-white text-lg lg:text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 '>More reasons to join</h1>

      <div className="flex flex-wrap  gap-3 ">

        {/* card 1 */}
        <Card
        heading="Enjoy on your TV"
        text="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        image={tv}
        />

        {/* card 2 */}
         <Card
        heading="Download your shows to watch offline"
        text="Save your favourites easily and always have something to watch."
        image={pointer}
        />

        {/* card 3 */}
        <Card
        heading="Watch everywhere"
        text="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
        image={micro}
        />

        {/* card 4 */}
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
