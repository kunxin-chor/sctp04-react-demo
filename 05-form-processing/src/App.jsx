import { useState } from "react"

export default function App() {

    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [ageGroup, setAgeGroup] = useState("1-to-20");

    // We use an array as the default value for checkboxes
    // becuase it's possible for >1 checkbox to be selected
    const [hearAbout, setHearAbout] = useState([]);

    // a function that is called beause of an event is known as an event handler
    // for all event handlers, they will recieve one parameter
    // and that is the information of the event
    const handleUpdateFullName = (event) => {


        // event.target.value will contains latest value of the textbox
        console.log(event.target.value);
        setFullname(event.target.value);


    }

    const handleUpdateEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleUpdateAgeGroup = (event) => {
        setAgeGroup(event.target.value)
    }

    const handleUpdateHearAbout = (event) => {
        console.log(event.target.value);
        // the following won't work because of HOW react detects that a state has changed
        // because of how JavaScript stores array in variables
        // hearAbout.push(event.target.value);
        // setHearAbout(hearAbout);


        // event.target.checked is the true after the event
        if (event.target.checked) {
            // If a state is a variable, to update it, we must create a clone
            // of the array, update the clone, and put the clone into the same state variable
            // 1. clone the original array
            // const clone = hearAbout.slice();
            // // 2. modify the clone
            // clone.push(event.target.value);
            // // 3. replace the state with the clone
            // setHearAbout(clone);

            // When you see ... next to an array, it is the spread operator
            // const a = [4,5,6];
            // const b = [...a] => const b = [4,5,6]
            const clone = [...hearAbout, event.target.value];
            setHearAbout(clone);

        } else {

            // 1. find the index of the element to be removed
            // const index = hearAbout.findIndex(function(elm){
            //     if (elm === event.target.value) {
            //         return true;
            //     } else {
            //         return false;
            //     }
            // })

            const index = hearAbout.findIndex( elm => elm === event.target.value)

            console.log("index to remove =", index);

            // // 2. clone the original array
            // const clone = hearAbout.slice();

            // // 3. modify the clone
            // clone.splice(index, 1);

            // slice out the left hand side of the array (does not include the index to delete)
            // immutable array mutations
            const lhs = hearAbout.slice(0, index);
            const rhs = hearAbout.slice(index+1); // from index +1 to all the way to the end
            const clone = [ ...lhs, ...rhs]

            // 4. replace the clone into the state
            setHearAbout(clone);
        }


    }

    return (
        <>
            <h1>Survey Form</h1>
            <div>
                <label>Name:</label>
                <input type="text" value={fullName}
                    onChange={handleUpdateFullName} />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email}
                    onChange={handleUpdateEmail} />
            </div>
            <div>
                <label>Age Group:</label>
                <input type="radio"
                    onChange={handleUpdateAgeGroup}
                    value="1-to-20"
                    name="age-group"
                    checked={ageGroup == "1-to-20"}
                />

                <label>1 to 20 years old</label>
                <input type="radio"
                    onChange={handleUpdateAgeGroup}
                    value="21-to-60"
                    name="age-group"
                    checked={ageGroup == "21-to-60"}
                />


                <label>21 to 60 years old</label>
                <input type="radio"
                    onChange={handleUpdateAgeGroup}
                    value="61-and-above"
                    name="age-group"
                    checked={ageGroup == "61-and-above"}

                />
                <label>61 and above</label>
            </div>
            <div>
                <label>How did you find out about us</label>
                <br />

                <input type="checkbox"
                    value="social-media"
                    onChange={handleUpdateHearAbout}
                />
                <label>Social Media</label><br />

                <input type="checkbox"
                    value="advertising"
                    onChange={handleUpdateHearAbout}
                />
                <label>Advertising</label><br />

                <input type="checkbox"
                    value="word-of-mouth"
                    onChange={handleUpdateHearAbout}
                />
                <label>Word of Mouth</label><br />

                <input type="checkbox"
                    value="others"
                    onChange={handleUpdateHearAbout}
                />
                <label>Others</label>

            </div>
        </>
    )
}