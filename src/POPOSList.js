import POPOSSpace from "./POPOSSpace"; 

function POPOSList() {
    return (
      <div className="POPOSList">
        <POPOSSpace
          name="50 California Street"
          address="50 California St."
          image="50-california-st.jpg"
        />
        <POPOSSpace 
         name="sansome-roof-garden"
         address="343-sansome-roof-garden."
         image="343-sansome-roof-garden.jpg"
       />
        <POPOSSpace
         name="market-street-plaza"
         address="525-market-street-plaza."
         image="525-market-street-plaza.jpg"
        />
        <POPOSSpace 
         name="embarcadero-center"
         address="embarcadero-center."
         image="embarcadero-center.jpg"
       />
        <POPOSSpace 
         name="101-california"
         address="101-california."
         image="101-california.jpg"
       />
        <POPOSSpace
         name="100-pine"
         address="100-pine."
         image="100-pine.jpg"
        />
      </div>
    )
  }

export default POPOSList;