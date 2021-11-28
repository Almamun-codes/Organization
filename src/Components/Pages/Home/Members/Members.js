import React from "react";
import Member from "../../Member/Member";

const Members = () => {
  const members = [
    {
      name: "Abdullah Al Mamun",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPz3oCoh_qoWO-W12IIPgEQVeIZWXLzEt0Q&usqp=CAU",
      Profession: "Student of Economics",
      age: 21,
      address: "Islampur, Idgaon, Cox'sbazar",
      description:
        "Abdullah is a student of Economics in cox's bazar Govt. college. He is planning to be a website Developer.Abdullah is a student of Economics in cox's bazar Govt. college. He is planning to be a website Developer.",
    },
    {
      name: "Abdullah Al Mamun",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPz3oCoh_qoWO-W12IIPgEQVeIZWXLzEt0Q&usqp=CAU",
      Profession: "Student of Economics",
      age: 21,
      address: "Islampur, Idgaon, Cox'sbazar",
      description:
        "Abdullah is a student of Economics in cox's bazar Govt. college. He is planning to be a website Developer.Abdullah is a student of Economics in cox's bazar Govt. college. He is planning to be a website Developer.",
    },
    {
      name: "Abdullah Al Mamun",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPz3oCoh_qoWO-W12IIPgEQVeIZWXLzEt0Q&usqp=CAU",
      Profession: "Student of Economics",
      age: 21,
      address: "Islampur, Idgaon, Cox'sbazar",
      description:
        "Abdullah is a student of Economics in cox's bazar Govt. college. He is planning to be a website Developer.Abdullah is a student of Economics in cox's bazar Govt. college. He is planning to be a website Developer.",
    },
    {
      name: "Abdullah Al Mamun",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPz3oCoh_qoWO-W12IIPgEQVeIZWXLzEt0Q&usqp=CAU",
      Profession: "Student of Economics",
      age: 21,
      address: "Islampur, Idgaon, Cox'sbazar",
      description:
        "Abdullah is a student of Economics in cox's bazar Govt. college. He is planning to be a website Developer.Abdullah is a student of Economics in cox's bazar Govt. college. He is planning to be a website Developer.",
    },
    {
      name: "Abdullah Al Mamun",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPz3oCoh_qoWO-W12IIPgEQVeIZWXLzEt0Q&usqp=CAU",
      Profession: "Student of Economics",
      age: 21,
      address: "Islampur, Idgaon, Cox'sbazar",
      description:
        "Abdullah is a student of Economics in cox's bazar Govt. college. He is planning to be a website Developer.Abdullah is a student of Economics in cox's bazar Govt. college. He is planning to be a website Developer.",
    },
    {
      name: "Abdullah Al Mamun",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPz3oCoh_qoWO-W12IIPgEQVeIZWXLzEt0Q&usqp=CAU",
      Profession: "Student of Economics",
      age: 21,
      address: "Islampur, Idgaon, Cox'sbazar",
      description:
        "Abdullah is a student of Economics in cox's bazar Govt. college. He is planning to be a website Developer.Abdullah is a student of Economics in cox's bazar Govt. college. He is planning to be a website Developer.",
    },
  ];

  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <h2 className="heading mt-4">Members</h2>
          <div className="row  justify-content-center">
            {members.map((member) => (
              <Member key={member.name} member={member}></Member>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
