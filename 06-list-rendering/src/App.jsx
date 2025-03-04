export default function App() {

  // Data Source (the shopData will be gotten from a database via a RESTFul Mongo API)
  const shopData = ["MacDonalds",
    "Coffee Beans",
    "Don Don Donki",
    "Giants Supermarket",
    "Uliqo"
  ];

  const eventData = [
    "10% off Coffee Beans",
    "Unknown MediaCorpse Actors Meet and Greet",
    "Free parking vouchers during weekdays"
  ];

  const promotions = [
    {
      "imageUrl": "https://picsum.photos/300/200",
      "name": "Buy 3 Chargers and get 1 Free at Best Denki",
      "description": "Discount for every 3 chargers purchased"
    },
    {
      "imageUrl": "https://picsum.photos/300/200",
      "name": "Watson closing down sales",
      "description": "All products at 50% off"
    }
  ]

  const renderShops = () => {
    // Convert the Data Source to an array of JSX elements
    const shops = [];
    for (let s of shopData) {
      shops.push(<li>{s}</li>)
    }
    return shops;
  }

  // JSX are actually JavaScript Objects
  // JavaScript Objects can be stored in variables
  // Therefore, JSX can be stored in variables
  // const temp = <li>MacDonalds</li>;

  return (
    <div className="container">
      <h1>Somewhere Street Shopping Mall</h1>
      <h2>Shops</h2>
      <ul>
        {/* 3: display the array of JSX elements. When we render an array of JSX
        each element in the array will be rendered invidiually on their own */}
        {renderShops()}
      </ul>
      <h2>Events</h2>
      <ul>
        {
          eventData.map((elm) => {
            return <li>{elm}</li>
          })
        }
      </ul>
      <h2>Promotions</h2>
      <div style={{display:"flex"}}>
      {
        promotions.map( (e)=>{
          return (
            <div class="card" style={{width:"18rem"}}>
            <img src={e.imageUrl} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{e.name}</h5>
                <p class="card-text">{e.description}</p>
              </div>
          </div> 
          )
        })
      }
      </div>


     
    </div>
  )
}