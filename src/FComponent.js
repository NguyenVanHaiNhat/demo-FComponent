import {useEffect, useState} from "react";

export default function FComponent(){
    // hook : dùng được state và life cycle trong Function component
    let [list, setList] = useState([
        {
            name : "Nhật",
            age : 20
        },
        {
            name : "Đạt",
            age: 24
        }
    ]);
    let [name, setName] = useState('');
    let [age, setAge] = useState('');
    useEffect(() => {
        console.log(1) // chạy liên tục sau re-render
        return () => {
            console.log(5) // chạy 1 lần trước unmount
        }
    }, []); // chạy 1 lần sau khi render lần đầu, trong ngoặc vuông là tham số
    return (
        <>
            {list.map((item, index) => (
                <h2 key={index}>{item.name}, {item.age}</h2>
            ))}
            <input type="text" value={name} onChange={(e) => {
                setName(e.target.value)
            }}/>
            <input type="text" value={age} onChange={(e) => {
                setAge(e.target.value)
            }}/>
            <button onClick={() => {
                setList([...list,{
                    name : name,
                    age : age
                }])
                setName('')
                setAge('')
            }}>Add</button>
        </>
    )
}