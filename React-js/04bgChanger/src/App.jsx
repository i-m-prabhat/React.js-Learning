import { useState } from "react"


function App()
{
  const colorNames = [
    {
      name: 'red',
      value: 'red'
    },
    {
      name: 'green',
      value: 'green'
    },
    {
      name: 'blue',
      value: 'blue'
    },
    {
      name: 'yellow',
      value: 'yellow'
    },
    {
      name: 'purple',
      value: 'purple'
    },
    {
      name: 'orange',
      value: 'orange'
    },
    {
      name: 'pink',
      value: 'pink'
    },
    {
      name: 'cyan',
      value: 'cyan'
    },
    {
      name: 'brown',
      value: 'brown'
    },
    {
      name: 'gray',
      value: 'gray'
    },
    {
      name: 'dark',
      value: '#212121'
    },
    {
      name: 'maroon',
      value: 'maroon'
    },
    {
      name: 'teal',
      value: 'teal'
    },
    {
      name: 'navy',
      value: 'navy'
    },
    {
      name: 'lime',
      value: 'lime'
    },
    {
      name: 'indigo',
      value: 'indigo'
    },
    {
      name: 'violet',
      value: 'violet'
    },
    {
      name: 'magenta',
      value: 'magenta'
    },
    {
      name: 'olive',
      value: 'olive'
    },
    {
      name: 'black',
      value: 'black'
    },
    {
      name: 'white',
      value: 'white'
    },
    {
      name: 'gold',
      value: 'gold'
    },
    {
      name: 'silver',
      value: 'silver'
    },
    {
      name: 'turquoise',
      value: 'turquoise'
    },
    {
      name: 'lavender',
      value: 'lavender'
    },
    {
      name: 'aquamarine',
      value: 'aquamarine'
    },
    {
      name: 'beige',
      value: 'beige'
    },
    {
      name: 'coral',
      value: 'coral'
    },
    {
      name: 'crimson',
      value: 'crimson'
    },
    {
      name: 'darkgreen',
      value: 'darkgreen'
    },
    {
      name: 'firebrick',
      value: 'firebrick'
    },
    {
      name: 'fuchsia',
      value: 'fuchsia'
    },
    {
      name: 'indianred',
      value: 'indianred'
    },
    {
      name: 'khaki',
      value: 'khaki'
    },
    {
      name: 'lightblue',
      value: 'lightblue'
    },
    {
      name: 'lightcoral',
      value: 'lightcoral'
    },
    {
      name: 'lightgray',
      value: 'lightgray'
    },
    {
      name: 'mediumblue',
      value: 'mediumblue'
    },
    {
      name: 'olivedrab',
      value: 'olivedrab'
    },
    {
      name: 'orchid',
      value: 'orchid'
    },
    {
      name: 'plum',
      value: 'plum'
    },
    {
      name: 'salmon',
      value: 'salmon'
    },
    {
      name: 'seagreen',
      value: 'seagreen'
    },
    {
      name: 'sienna',
      value: 'sienna'
    },
    {
      name: 'skyblue',
      value: 'skyblue'
    },
    {
      name: 'tan',
      value: 'tan'
    },
    {
      name: 'tomato',
      value: 'tomato'
    },
    {
      name: 'wheat',
      value: 'wheat'
    },
    {
      name: 'yellowgreen',
      value: 'yellowgreen'
    }
  ];

  console.log(colorNames);

  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <h1 className="text-[35px]  text-teal-700">Click on colors to change bg</h1>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          {
            colorNames && colorNames.map((color, key) => (
              <button key={key}
                onClick={() => setColor(color.value)}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: color.value }}
              >{color.name}</button>
            ))
          }
          {/* <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >Green</button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >Blue</button>
          <button
            onClick={() => setColor("#C0C0C0")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#C0C0C0" }}
          >Silver</button>
          <button
            onClick={() => setColor("#212121")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#212121" }}
          >Dark</button> */}
        </div>
      </div>
    </div>
  )
}

export default App