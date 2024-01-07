import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "../Redux/UserSlice";

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.users.value);

  return (
    <div className="main">
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            dispatch(addUser({ id: lists.length + 1, name, email }));
            setName("");
            setEmail("");
          }}
        >
          Add
        </button>
      </div>
      <div>
        {lists.length > 0
          ? lists.map((e) => (
              <div key={e.id} className="item">
                <h3>{e.name}</h3>
                <p>{e.email}</p>
                <button
                  onClick={() => {
                    setIsUpdate(true);
                    setId(e.id)
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    dispatch(deleteUser({ id: e.id }));
                  }}
                >
                  Delete
                </button>
                <br/>
                {isUpdate && id == e.id &&(
                    <>
                    <input type="text" placeholder="Name" onChange={(e)=> setUpdatedName(e.target.value)}/>
                    <input type="text" placeholder="UserName" onChange={(e)=> setUpdatedEmail(e.target.value)}/>
                    <button onClick={()=> {
                        dispatch(updateUser({ id: e.id,name: updatedName ,email: updatedEmail }))
                        setIsUpdate(false);
                    }}>Update</button>
                    </>
                )}
              </div>
            ))
          : "There is no users"}
      </div>
    </div>
  );
};

export default Add;
