import { useState } from "react";
import "./App.css";

const App = () => {

  const [InputList, setInputList] = useState();


  let newWords = "";
  let randWords = "";


  // LEVEL: HARD

  // let sWords = ["acrid", "aged", "airless", "airport", "alkaline", "aromatic", "bacon", "baking", "banana", "barbeque", "barnyard", "beachy", "beery", "bitter", "bright", "bloody", "books", "bouquet", "briney", "burnt", "camphoric", "catbox", "cedar", "cigar", "cinnamon", "citrusy", "cheesy", "chicken", "chlorine", "clean", "clove", "cloying", "coffee", "creamy", "curry", "damp", "doggy", "earthy", "eye", "exhaust", "fermented", "fishy", "floury", "floral", "foul", "fumes", "funky", "fragrant", "fresh", "fruity", "garlicky", "garbage", "gasoline", "ginger", "grassy", "green", "hairspray", "herbal", "homey", "home", "horse", "jasmine", "ink", "incense", "leafy", "lemony", "lavender", "laundry", "lawn", "leathery", "locker", "meaty", "medicinal", "metallic", "mildewed", "minty", "moldy", "mothball", "musky", "mushroomy", "new car", "newspaper", "notes", "odor", "oily", "oniony", "orangey", "paint", "peppery", "perfumey", "piney", "pinion", "pickled", "plasticky", "popcorn", "zoo"];


  //LEVEL: EASY

  let sWords = ["time", "year", "people", "way", "day", "man", "thing", "woman", "life", "child", "world", "school", "state", "family", "student", "group", "country", "problem", "hand", "part", "place", "case", "week", "company", "system", "program", "question", "work", "government", "number", "night", "point", "home", "water", "room", "mother", "area", "money", "story", "fact", "month", "lot", "right", "study", "book", "eye", "job", "word", "business", "issue", "side", "kind", "head", "house", "service", "friend", "father", "power", "hour", "game", "line", "end", "member", "law", "car", "city", "community", "president", "team", "minute", "idea", "kid", "body", "information", "back", "parent", "face", "others", "level", "office", "door", "health", "person", "art", "war", "history", "party", "result", "change", "morning", "reason", "research", "girl", "guy", "moment", "air", "teacher", "force"];

  var KuchBhi = "";

  const CreateNewWords = () => {
    let ranNum = Math.floor(Math.random() * sWords.length);
    let newTempSwords = sWords[ranNum];
    //console.log(newTempSwords.split(""));
    return newTempSwords;
  };

  const ScrambleWords = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let temp = arr[i];
      let j = Math.floor(Math.random() * (i + 1));
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  newWords = CreateNewWords();
  randWords = ScrambleWords(newWords.split("")).join("");
  //console.log(randWords.join(""));

  // useEffect(() => {

  // }, []);

  const ItemEvent = (event) => {
    //event.preventDefault();
    //setInputList(event.target.value);
    KuchBhi = event.target.value.toString();
  };

  // console.log(InputList);



  const ListOfItems = (event) => {

    // event.preventDefault();
    if (KuchBhi === newWords) {
      //alert("Correct");
      //console.log("correct");
      document.getElementById("result").innerHTML = "";

      document.getElementById("correct").innerHTML = "Bravo! It's Correct!";
      // window.location.reload();
      setTimeout(function () {
        window.location.reload(1);
      }, 1500);
    }
    else {
      //alert("Incorrect");
      //console.log("Incorrect");
      document.getElementById("result").innerHTML = "";
      document.getElementById("incorrect").innerHTML = "Sorry, It's Incorrect!";
      // window.location.reload();
      setTimeout(function () {
        window.location.reload(1);
      }, 1500);
    };

    setInputList("");
  };




  return (
    <div className="project ">
      <div className="title center-align black">
        <h1 className="heading white-text ">GUESS THE WORD</h1>
        <h6 className="credit grey-text">Made with ❤ by Kushagra</h6>
      </div>
      <div className="row">
        <div className="col s12 m6 l6 offset-l3">
          <div className="box grey darken-4 z-depth-5">
            <div className="myWord">
              <h4 className="word center-align white-text" id="result">Your word: <span className="blue-text text-darken-3">{randWords}</span> </h4>
              <h4 id="correct" className="center-align green-text"></h4>
              <h4 id="incorrect" className="center-align red-text"></h4>
            </div>
            <div className="myInput input-field" >
              <input
                className="white-text grey darken-3 center-align"
                placeholder="Enter the correct word here..."
                type="text"
                autoComplete="off"
                onChange={ItemEvent}
              // value={InputList} 
              //value={KuchBhi} 
              />
              <br />
              <br />
            </div>
            <div className="myButton center-align">
              <button className="btn grey lighten-4 black-text waves-effect waves-ripple" type="submit" onClick={ListOfItems}>GUESS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;