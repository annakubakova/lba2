import { useState } from "react";
import "./styles.css";

// Задание 1
// function App() {
//   const [value1, setValue1] = useState("");
//   const [value2, setValue2] = useState("");
//   return (
//     <div>
//       <input
//         value={value1}
//         onChange={(event) => setValue1(event.target.value)}
//       />
//       <p>text1: {value1}</p>
//       <input
//         value={value2}
//         onChange={(event) => setValue2(event.target.value)}
//       />
//       <p>text2: {value2}</p>
//     </div>
//   );
// }

// Задание 2
// function App() {
//   const [value, setValue] = useState("");
//   function handleChange(event) {
//     setValue(event.target.value);
//   }
//   return (
//     <div>
//       <input value={value} onChange={handleChange} />{" "}
//       <p>количество символов: {value.length}</p>
//     </div>
//   );
// }

// Задание 3
// function App() {
//   const [value1, setValue1] = useState(0);
//   const [value2, setValue2] = useState(0);
//   const [value3, setValue3] = useState(0);
//   const [value4, setValue4] = useState(0);
//   const [value5, setValue5] = useState(0);

//   function handleChange1(event) {
//     setValue1(+event.target.value);
//   }
//   function handleChange2(event) {
//     setValue2(+event.target.value);
//   }
//   function handleChange3(event) {
//     setValue3(+event.target.value);
//   }
//   function handleChange4(event) {
//     setValue4(+event.target.value);
//   }
//   function handleChange5(event) {
//     setValue5(+event.target.value);
//   }

//   const average = (value1 + value2 + value3 + value4 + value5) / 5;

//   return (
//     <div>
//       <input value={value1} onChange={handleChange1} />
//       <input value={value2} onChange={handleChange2} />
//       <input value={value3} onChange={handleChange3} />
//       <input value={value4} onChange={handleChange4} />
//       <input value={value5} onChange={handleChange5} />
//       <p>среднее арифметическое: {average}</p>
//     </div>
//   );
// }

// Задание 4
// function App() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           checked={checked}
//           onChange={() => setChecked(!checked)}
//         />
//         вам есть 18 лет?
//       </label>
//       {checked ? (
//         <div>
//           <h2>Ура, вам уже есть 18</h2>
//           <p> здесь расположен контент только для взрослых </p>
//         </div>
//       ) : (
//         <div>
//           <h2> увы, вам еще нет 18 лет:( </h2>
//         </div>
//       )}
//     </div>
//   );
// }

// Задание 5
// function App() {
//   const [value, setValue] = useState("");
//   function handleChange(event) {
//     setValue(event.target.value);
//   }
//   return (
//     <div>
//       <select value={value} onChange={handleChange}>
//         <option>--город--</option> <option>Вологда</option>
//         <option>Ярославль</option>
//         <option>Сокол</option> <option>Череповец</option>
//       </select>
//       <p> ваш выбор: {value} </p>
//     </div>
//   );
// }

// Задание 6
// function App() {
//   const [value, setValue] = useState("");
//   return (
//     <div>
//       <select value={value} onChange={(event) => setValue(event.target.value)}>
//         <option value="1">от 0 до 12</option>
//         <option value="2">от 13 до 17</option>
//         <option value="3">от 18 до 25</option>
//         <option value="4">старше 25</option>
//       </select>
//       <p>
//         {value === "1" && "ваш возраст от 0 до 12 лет"}
//         {value === "2" && "ваш возраст от 13 до 17 лет"}
//         {value === "3" && "ваш возраст от 18 до 25 лет"}
//         {value === "4" && "ваш возраст старше 25 лет"}
//       </p>
//     </div>
//   );
// }

// Задание 7
// function App() {
//   const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   function changeHandler(index, event) {
//     const newValue = +event.target.value;
//     const newNotes = [...notes];
//     newNotes[index] = newValue;
//     setNotes(newNotes);
//   }
//   const average = notes.reduce((sum, value) => sum + value, 0) / notes.lenght;
//   return (
//     <div>
//       {notes.map((note, index) => (
//         <input
//           key={index}
//           type="number"
//           value={note}
//           onChange={(event) => changeHandler(index, event)}
//         />
//       ))}
//       <p>среднее арифметическое: {average}</p>
//     </div>
//   );
// }

// Задание 8
//const initObj = { prop1: "value1", prop2: "value2", prop3: "value3" };
const initDate = { year: 2025, month: 12, day: 31 };
function App() {
  const [date, setDate] = useState(initDate);

  const dateString = `${date.year}-${date.month}-${date.day}`;
  const parsedDate = new Date(dateString);
  const daysOfWeek = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ];
  const dayOfWeek = daysOfWeek[parsedDate.getDay()];
  return (
    <div>
      <p>дата: {formattedDate}</p>
      <p>день недели: {daysOfWeek[dayOfWeek]}</p>
    </div>
  );
}
// function App() {
//   const [obj, setObj] = useState(initDate);
//   function handleChange(prop, event) {
//     setObj({ ...obj, ...{ [prop]: event.target.value } });
//   }
//   return (
//     <div>
//       <input
//         value={obj.year}
//         onChange={(event) => handleChange("year", event)}
//       />
//       <input
//         value={obj.month}
//         onChange={(event) => handleChange("month", event)}
//       />
//       <input value={obj.day} onChange={(event) => handleChange("day", event)} />{" "}
//       <br />
//       {obj.year}-{obj.month}-{obj.day}
//     </div>
//   );
// }
export default App;
