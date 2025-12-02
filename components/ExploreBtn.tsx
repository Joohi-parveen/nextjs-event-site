'use client'; 

export default function ExploreBtn() {
  return (
    
    <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={() => console.log('click')} >
        <a href="#event">Explore Events</a>
        <img src="/icons/arrow-down.svg"  width={22} height={22} alt="" />
    </button>
    
  )
}
