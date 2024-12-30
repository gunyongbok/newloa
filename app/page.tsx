"use client";

import { useState } from "react";

export default function Home() {
  const [characterName, setCharacterName] = useState<string>("");

  // 입력값 변경 핸들러
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(event.target.value);
  };

  return (
    <div className="grid justify-center content-center bg-header h-[770px] p-2">
      <div className="grid justify-center bg-separator w-[1240px] h-[700px]">
        <input
          type="search"
          value={characterName}
          onChange={handleInputChange}
          className="bg-purple-white shadow rounded border-0 p-3 h-12 w-[800px] outline-none"
          placeholder="검색할 캐릭터명을 입력해주세요."
        />
        <p className="text-white mt-4">
          입력한 캐릭터명: {characterName || "아직 입력된 내용이 없습니다."}
        </p>
      </div>
    </div>
  );
}
