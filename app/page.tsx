import Image from "next/image";

export default function Home() {
  const platformList = [
    { id: 1, name: "Github" },
    { id: 2, name: "Frontend Mentor" },
    { id: 3, name: "LinkedIn" },
    { id: 4, name: "Twitter" },
    { id: 5, name: "Instagram" },
  ];

  return (
    <main className="bg-black text-white h-screen w-screen flex justify-center items-center">
      <div className="max-w-80 h-fit p-6 bg-[#1f1f1f] rounded-lg flex flex-col gap-4">
        <div className="flex items-center justify-center mt-2">
          <Image src={"/resources/avatar-jessica.jpeg"} alt="profile-picture" loading="eager" width={500} height={500} className="rounded-full max-h-16 max-w-16"/>
        </div>
        <div className="flex flex-col text-center gap-1">
          <h1 className="text-xl">Jessica Randall</h1>
          <h2 className="text-[0.6rem] text-lint">London , United Kingdom</h2>
        </div>

        <div className="text-center text-[0.6rem] flex px-5">"Front-end developer and avid reader."</div>
        <div className="flex flex-col gap-2 ">
          {platformList.map((map, idx) => (
            <div className="active-card bg-[#333333] text-xs p-2 rounded-lg text-center font-bold" key={String(map.id)}>
              {map.name}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
