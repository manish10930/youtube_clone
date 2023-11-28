import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constrants";

function Head() {
  const [suggest, setSuggest] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showsuggestion,setShowsuggestion]=useState(false)
  // const  navigate=useNavigate()
  const dispatch = useDispatch();
  // const handleclick=()=>{
  //   navigate("/")
  // }
  const handletoogle = () => {
    dispatch(toogleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => getApi(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getApi = async () => {
    console.log("searchQuery----->", searchQuery);
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      if (data.ok) {
        const json = await data.json();
        setSuggest(json[1]);
      } else {
        console.log("Error fetching data information");
      }
    } catch (error) {
      console.error("Error fetching video information", error);
    }
  };

  return (
    <>
      <div className="grid grid-flow-col p-5  shadow-lg fixed w-full bg-white ">
        <div className="flex lg:col-span-1 md:col-span-1  justify-around">
          <img
            className="h-8 cursor-pointer "
            onClick={() => handletoogle()}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb5+fmFhYXHx8eSkpJnZ2ezs7Oqqqp3d3cWFhbk5OT19fU/Pz9aWlra2tqkpKTu7u4PDw+9vb1gYGB9fX0zMzMkJCQaGhqbm5s4ODjLy8tQUFACQSuFAAACZ0lEQVR4nO3d7VLCMBCF4VipfKMiAorI/d+lVmHQP7spyczObt/nCs4Za7RhSVICAAAAAAAAAAAAAAAAgAEYT6b3fkwn4371Nvs7f/ab/IIT67A3mmT2a4/WSW92bLMKLq1zFljmVHyzTlnkTS/4YJ2x0INWcGWdsNhKaTi1DlhsKhd8tM5XwaPYcGYdr4KZ2HBhHa+ChdjwyTpeBU9iw1freBW8ig2t01UhNny3TlfBu9jw2TpeBc9iw5F1vApGYsPGOl4FjdgwwGIqL6Upza0DFpsrDdPBOmGhg1Ywra0jFlqrDZ0/p+oz2nmxTlngJadgSmPrnDfL3hZufb5ELbL2Es82H942TY8fPba8z1aNH9r2EwAAAAAAAAAA8Kz9nI/8mH/2+dypsz1Zf5bU22nbo1/jc1zhoEzSXPkdZlfH2H/trHMW2OUU9PkJ94U8IPzD+6S3POX9rbVOWEz7s+F3lbnQVhvrfBXIBf0OC13JY0P+H1LtMb23jlfBSWzo+duVF0uxoXW6Kgb+M4z/exh/LY3/9zDCUiMXDPCYav+Xxn+3iP9+OIB3/AHs03hebTL32lJqfH5ZNn+/NMXf8+5E/9wCAAAAAAAAAAB4EvucqOhnfYU/r83v2FDmmXvhz00Mf/Zl/PNLfX6p60o9g9b3M9rRntPwZ0HHP8/b611Wf8lnssc/V9/nuNd/8t0I1umqEBv6X0q1xTT+PTM+X5v+k8eEvU95d+RJ7/h3dsW/d20Ad+c5HmP/lTHMHv4OywHcQxr/Ltnk9x0q9z7gNIA7nTvB7+UGAAAAAAAAAAAAAAAAAJ++ACLpVB+zWmM6AAAAAElFTkSuQmCC"
            alt="menu icon"
          />
          <img
            className="h-8 cursor-pointer "
            src="data:image/png;base64,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"
            alt="logo"
            // onClick={handleclick()}
          />
        </div>

        <div className="lg:col-span-10 md:col-span-8  text-center">
          <div>
            <input
              className="w-1/3 border border-gray-400 p-1 rounded-l-full px-4"
              type="text"
              placeholder="Search your here...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={()=>setShowsuggestion(true)}
              onBlur={()=>setShowsuggestion(false)}
            />
            <button className="border border-gray-400 p-1 px-2 bg-gray-100 rounded-r-full ">
              Search
            </button>
          </div>
         {
          showsuggestion && (
            <div className=" fixed top-15 left-[40%] py-2 px-2 sm:w-[18rem] flex justify-start rounded-md bg-white mx-auto">
            <ul className="w-full text-left">
              {
                suggest.map((item, index) => <li key={index} className="hover:bg-gray-300 m- p-1 py-2 w-full">{item}</li>)
                
                }
            </ul>
          </div>
          )
         }
        </div>

        <div className="hidden lg:flex col-span-1  ">
          <img
            className="h-8 "
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAACGhob8/Pxra2tYWFgcHBy6urr29vZwcHDz8/Pv7+/j4+N6enqZmZnm5uakpKTW1tbd3d0oKCjDw8MYGBhdXV3IyMhGRkZTU1PPz8+WlpaPj49lZWWoqKgJCQk2NjYsLCyysrJFRUWKiop/f3+np6chISE9PT12dnZNTU0SEhIzMzMctZvQAAAKLUlEQVR4nO2da1viPBCGrQVBEFBAVwRUUNcD/v/f9y67L9s8k6RNm5kk3av3R+gh06aZQyaZs7NQjJfTyf3ikB0W95PpchzsvoGYTZ8z5GP6Lwn54yszsXqI3TAmbl6M8h35msduHAP5pVW+I5PY7fPm5qlUwCy7aPlr3FfId2QQu5E+nDsImGXr2M1szpuTgFm2id3QpmwcBcyy69hNbcbAWcAs+xG7sU2Y1RAwy0axm9uAD5MgH9vJ1vhHP3Zz63OtCbGYnlTffL3Q/m2dzhhSCW5RhMGBHhCpoY15Je3XrTNqzbVsPB2R5u8Nx/xs9Uucunxke5eDUuXWqQOiSXAftIWezKHpdk2AnnGbnP6pY8vRKjB9rKmyUhv+VnJgTz3wMlj7/IFXM/v1w3g+eFxPtnf9I3fbyfpxMD++WujOu9jNdudKbff78tUciMqy1esShqQ8dsOd+WGRqIr2BDQeG0rYHh9qWi2Mkfbo/KYStsU0nX02FPCXvmjDl3jTbyzfkbvUZZz7yXdkexVbiBLGW2/5jnwmG7RpOsDopBkjvrlgEzDLFjexxdGZuDX9SYvPWDiPLRDhoWKK6f7tenAzHg3z/Cwfjkazh8HjxD6t+JtdUiNO2QzM99tgZjltNnj7LjkzHQNgeG9tZH9vk+7EeL+ynn0XpPnVzG0N/Bq4uUPDvc29ukiip9omYM6r3p7KjMZXTySQzKBH748crut6s/m1ebCK7m8Yn/1Fs5iS+WFFHm+MWnDa9Gq50SpqfDkOTJkkPbtVORyNZ/PSqOjQ9Mhe2dvtjMERvDUPDbPl9PLl/c8hu9I+fPOuXzTaPL9Bz38aDru6viNHrUova/i0I3VUw8Cw1A6abQzvxPggCgyhuijhcF0Pvmhf4MA4o/2LctdhpJ8WQS/qlgx9MeaR8Q9lkf4j+oBTx35gQZvFpnqrTD6HmTTt7IOUJDY0Y5t8KRXJNNVTFNoFtkKSWNDGOxxjZnZvw7m5S3pOUOPmgd4d4/HVARuXsVG7ScBAY176BkvcxRMLp9vQt+h2Fgs0aAhvRHv0BhwHRpqdWjUCs0GfLVgcDjmzX84jP+3ugSJwtI/C5HRZSulu1TvfTB/r+O09cgVmUSwQcxRUm3VS5nI/bzTDS5ZpBBlPr0jbh8p/5rz8p03zUXBMrhUi4E8cBVVPGLvoSjfH60A++nKbnYUbvKMaml4b5Nt6KzHS8eWjb6jsbpV/DKPoPYeSxgiVeKot0XaKU2MImz6y3JK4i9KWDU42KFmjurPxwZWnhipD2AInX6EyjmqTo3wrmkiyqqyniAOpop20j5BTc2G8RHQxGOYSKsMMVVvMoWocbIbVJzQGU14Vg5tG05jDKphk9ZP34gDc6L34nUbH/JS8AXiJF9xXL0D7QnmFOxSQ33rEL1HOxUCzs/idDDMClhX6M2J+It5GCbVjFsa7/QrNwcCQxB2O4NdWqCUSFhMxOnAUl0rThDCtMveAPpxQtg/M9kupRBCkUHho50hFbrGjyNwDTevCY8fxR6oD4SAgY37DiF3Yv2hyf4nc+ggYFTLRDLhFoQyx+8jNEYFKksm0AUkKzwgE/xC582/A9H2SuANEoJ7//ozfh2RuCCSISQQzoDcWVgUqSck1IRDnkniUr+YbwM+irhs8Yon8DFC5hUEDE9LsPoUKmDUSASnojX9/xc9QduGSeicBwwKCJYXWAzOgPIvEG4iC8Tv6MJQWAw18HMIJ6GAX8w+m4P0WgVCIc4t+hsSo4jct9mZRwCgVzgiB/sKfQwSTlYXhC2tkhFdIghPDb5nCrGFhs6k5XdIpL6Au+LP5oDsWs3jqry/sN0VgOOc3LiBqX3RH9VdhZYF+Wo/98qoL8WSWUDprKZe9mTqkKB+celPp+dlcXVHE7yGqEipBZ1VC8WxlNWrJb5haJFTnoMVzQKNIqBhzz+z3pESRUDGl5HNc40h4mvlaBEjijSThWb6/3K6DbIcQS8JwdBL60UkYgk5CPzoJQ9BJ6EcnYQg6Cf3oJAxBJ6EfnYQh6CT0o5MwBJ2EfnQShqCT0I9OwhB0EvqhprUFXPoPvItKqKZcfbNf3Y2d0gb+OgNq3ZRn9qu78S36lDPR5+eGmunJn7yjShh4q5i/QIor98UhWyfYDhwEWBDMnWIGeaSx9k+DjGvuOWdYpR5rK0NI9eRehAiZj7H2o4TFstzJrJB8GWtTUVj5wL0aGJIvY+0MCwmm3IOB6EDtCiwM4k5OXKQgISjlZ95LQ2qn3Aq8KtTnzLy4CxKQ41UtgnVyvAWwYC1CvG1vYbzjVYhQ5y7e9sywJIJ3PcJE7uHVAdQFby477J0Ur8AGqAteH0698m314WJAiS/OC8Oyrpj7+cMSHU7TKuQKtVLAu+Ac8WAJ7vIsjwVqLc4yJmT3wkRgXBpPK8OmAt860qbV/qTh81Nt5TViw+ci6lW00+CZS0BtM7Zk4LKuHLYGjgSXRqTbzaUDUyRD39UyHXgC3xVb5EeFZzEST1FDGVgCKil3Up5uivtOXvZig1uLcYymYHWLbrHjCERUGBx93G8ugTJoZLNmfzcYZiWDl0IxAmUwvWdr0WKLVloKQEfA14XCjeSDF+wxgvtgegZV8BXGm7BAcF94P4WBdZeE9xByBnf79fp0sD+IbC7bCAibevlQWGU7ndquuHGyh+lGakvwtdAXUgim8URKjluhp1QsG7dOb5wrSZwKyc3e60LcgYZqn/iFUcuBapA6SY2sSVoxh7uNnpDWNZjypm5h9Lq8BBIeq/8p5ju8gvROZfUhdS7r2ls5nYtJokA2QOva1Ev8HtKi7mk4FQida6jzFkk1mWD1zmpCJxsunF0fvQxuen30iF5/yW04nOulalMbR0/okdx+9Wsc97Szfn2F52myMbR1UqEZU50prEPp1n/pzsHUoWSxRLrTaPWwZ7w9VZ/cCqxr6wzV71qKTbtpVZRbiy1k5lLJtx3Y3MW059HqYA1HmLR9G7FP76ebVlKPkgDq1b+gLw6lfkK+3sVuoCffU9m978GzdI98QOWKeInyLmAw2jUAhtMjwvUHfIH4jmvsA7wgwZJRLGDlaseT4Jy0Is868watxaciXbPZm3dorsvUHuZYpzNJaQNfiMvKfXS7U++kml1UvfwKc66Y19yJQIzbKu1GHBr+whz8UD+6PNZKZ7jSjMwSqIdS1mj6OOItT62D5qHY01y1qEK8hX+10AK1tgVKb/TAdLI9KtjRll+YXuPyQA+LtXdRfQxBuw8aHBoYVou1Ypj5w6Pe+uxpsjzpuvHg03BAshNARowSHPvh3aRPZ19PcC4nDEDfIoadWFszNea+WiYg1u5aHrxUS6WQXq6HA3Wir20wRw2sqyX7n/RdJguuq2uDlFKSYeSyZqqXUtJjfR5s2u/EcwqLVPzYv5fIt+AvCRuD5coiXz+V5H9/xte6jXP32BJn0JV8Pth8fi0O2WHx9bkZhIuK/gdmNn59yiVIfQAAAABJRU5ErkJggg=="
            alt=""
          />
          <img
            className="h-8 px-3"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Head;
